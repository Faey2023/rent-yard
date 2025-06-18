"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { useState } from "react";

const stateOptions: Record<string, { code: string; states: string[] }> = {
  bd: {
    code: "+880",
    states: ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet"],
  },
  us: {
    code: "+1",
    states: ["California", "Texas", "New York", "Florida", "Illinois"],
  },
  ca: {
    code: "+1",
    states: ["Ontario", "Quebec", "British Columbia", "Alberta", "Manitoba"],
  },
  uk: {
    code: "+44",
    states: ["England", "Scotland", "Wales", "Northern Ireland", "London"],
  },
  au: {
    code: "+61",
    states: ["New South Wales", "Victoria", "Queensland", "Tasmania", "WA"],
  },
};

const PropertyInfo = () => {
  const [country, setCountry] = useState<string>("bd");
  const [state, setState] = useState<string>("");
  console.log(state);

  const selectedCode = stateOptions[country]?.code || "";

  console.log(selectedCode);

  return (
    <div className="h-fit py-4 px-3 rounded-[20px] border border-[#E0E0E0]">
      <div className="flex justify-between">
        <h4 className="text-black font-semibold text-lg">
          Property address<span className="text-[#FF6A62]">(Required)</span>{" "}
        </h4>

        <Dialog>
          <form>
            <DialogTrigger asChild>
              <Button
                variant="link"
                className="flex decoration-[#316EED] text-[#316EED] gap-1"
              >
                <Plus />
                Add
              </Button>
            </DialogTrigger>
            <DialogContent className="p-0 max-w-200">
              <DialogHeader>
                <DialogTitle className="rounded-t-[14px] rounded-[14px] font-medium bg-[#F4F4F4] text-[#6F6C6A] px-4 py-3.5">
                  Edit profile
                </DialogTitle>
              </DialogHeader>
              <div className="px-4 py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <Label>
                    Property name as identifier
                    <span className="text-[#FF6A62]">*</span>
                  </Label>
                  <Input
                    type="text"
                    placeholder="Dallas apartments complex"
                    className="h-12 w-60 border-[#E0E0E0] rounded-lg"
                    required
                  />
                </div>

                <div>
                  <Label>
                    Total apartment unit
                    <span className="text-[#FF6A62]">*</span>
                  </Label>
                  <Input
                    type="number"
                    placeholder="50"
                    className="h-12 max-w-60 border-[#e0e0e0] rounded-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
                    required
                  />
                </div>

                <div>
                  <Label>
                    Property website
                    <span className="text-[#6F6C6A]">(optional)</span>
                  </Label>
                  <Input
                    type="text"
                    placeholder="Manager"
                    className="h-12 w-60 border-[#E0E0E0] rounded-lg"
                    required
                  />
                </div>

                <div>
                  <Label>Country/Region*</Label>
                  <Select
                    onValueChange={(val) => {
                      setCountry(val);
                      setState("");
                    }}
                  >
                    <SelectTrigger className="w-60">
                      <SelectValue placeholder="Choose country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bd">Bangladesh</SelectItem>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Street address*</Label>
                  <Input
                    type="text"
                    placeholder="111 Austin Ave"
                    className="h-12 w-60 border-[#E0E0E0] rounded-lg"
                    required
                  />
                </div>

                <div>
                  <Label>
                    Apt, suite, unit
                    <span className="text-[#6F6C6A]">(if applicable)</span>
                  </Label>
                  <Input
                    type="number"
                    placeholder="123"
                    className="h-12 max-w-60 border-[#e0e0e0] rounded-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
                    required
                  />
                </div>

                <div>
                  <Label>City/Town*</Label>
                  <Input
                    type="text"
                    placeholder="Dallas"
                    className="h-12 w-60 border-[#E0E0E0] rounded-lg"
                    required
                  />
                </div>

                <div>
                  <Label>State/Territory*</Label>
                  <Select
                    onValueChange={(val) => setState(val)}
                    disabled={!country}
                  >
                    <SelectTrigger className="w-60 h-12">
                      <SelectValue
                        placeholder={
                          country ? "Select state" : "Select country first"
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {country &&
                        stateOptions[country]?.states.map((state) => (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Zip Code*</Label>
                  <Input
                    type="number"
                    placeholder="75061"
                    className="h-12 w-60 border-[#e0e0e0] rounded-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
                    required
                  />
                </div>
              </div>
              <DialogFooter className="px-4 py-3.5 flex justify-end">
                <Button type="submit">Add</Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>
    </div>
  );
};

export default PropertyInfo;
