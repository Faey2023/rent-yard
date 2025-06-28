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
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";

const PetFees = () => {
  return (
    <div className="h-fit py-4 px-3 rounded-[20px] border border-[#eoeoeo]">
      <div className="flex justify-between">
        <h4 className="text-black font-semibold text-lg">
          Pet fees
          <span className="text-[#6F6C6A]">
            (Optional, add fees if you allow pet)
          </span>
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
                  Pet fees
                </DialogTitle>
              </DialogHeader>
              <div className="px-4 py-3.5 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Pet type*</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Dog">Dog</SelectItem>
                        <SelectItem value="Cat">Cat</SelectItem>
                        <SelectItem value="Rabbit">Rabbit</SelectItem>
                        <SelectItem value="Fish">Fish</SelectItem>
                        <SelectItem value="Hamster">Hamster</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Max weight(LB)*</Label>
                    <Input
                      type="number"
                      placeholder="100"
                      className="h-12 border-[#e0e0e0] rounded-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <Label>One time pet fee*</Label>
                    <Input
                      type="number"
                      placeholder="$100"
                      className="h-12 border-[#e0e0e0] rounded-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
                      required
                    />
                  </div>
                  <div>
                    <Label>Pet Security Deposit*</Label>
                    <Input
                      type="number"
                      placeholder="$100"
                      className="h-12 border-[#e0e0e0] rounded-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
                      required
                    />
                  </div>
                  <div>
                    <Label>Monthly pet rent*</Label>
                    <Input
                      type="number"
                      placeholder="$100"
                      className="h-12 border-[#e0e0e0] rounded-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
                      required
                    />
                  </div>
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

export default PetFees;
