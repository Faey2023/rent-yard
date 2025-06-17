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
import { Checkbox } from "../ui/checkbox";

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

const LeasingInfo = () => {
  const [country, setCountry] = useState<string>("bd");

  const selectedCode = stateOptions[country]?.code || "";

  console.log(selectedCode);

  return (
    <div className="h-fit py-4 px-3 rounded-[20px] border border-[#E0E0E0]">
      <div className="flex justify-between">
        <h4 className="text-black font-semibold text-lg">
          Leasing Info<span className="text-[#FF6A62]">(Required)</span>{" "}
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
                <DialogTitle className="rounded-b-none rounded-[14px] font-medium bg-[#F4F4F4] text-[#6F6C6A] px-4 py-3.5">
                  Leasing info
                </DialogTitle>
              </DialogHeader>
              <div className="px-4 py-3.5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label>
                    Leasing manager name*
                    <span className="text-[#FF6A62]">*</span>
                  </Label>
                  <Input
                    type="text"
                    placeholder="Alex johan"
                    className="h-12   border-[#E0E0E0] rounded-lg"
                    required
                  />
                </div>

                <div>
                  <Label>Phone number*</Label>
                  <div className="h-12 flex rounded-lg border-[#E0E0E0] border overflow-hidden w-full">
                    <Select
                      onValueChange={(val) => setCountry(val)}
                      defaultValue="bd"
                    >
                      <SelectTrigger className="w-28 border-l border-input rounded-none border-none focus:ring-0 focus:ring-offset-0">
                        <SelectValue placeholder={selectedCode} />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(stateOptions).map(([key, { code }]) => (
                          <SelectItem key={key} value={key}>
                            {code.toUpperCase()} ({key.toUpperCase()})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Input
                      type="number"
                      placeholder="Phone number"
                      className="h-12 w-75 flex-1 [&::-webkit-outer-spin-button]:appearance-none rounded-none border-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label>
                    Leasing manager email*
                    <span className="text-[#FF6A62]">*</span>
                  </Label>
                  <Input
                    type="text"
                    placeholder="leasing@rentyeard.com"
                    className="h-12 border-[#E0E0E0] rounded-lg"
                    required
                  />
                </div>

                <div className="flex items-center h-12 mt-7 gap-3 text-center">
                  <Checkbox id="terms" />
                  <Label
                    htmlFor="terms"
                    className="flex items-center h-full mb-0"
                  >
                    Address(same as property)
                  </Label>
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

export default LeasingInfo;
