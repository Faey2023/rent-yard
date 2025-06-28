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
import { Info, Plus } from "lucide-react";

const Charges = () => {
  return (
    <div className="h-fit py-4 px-3 rounded-[20px] border border-[#eoeoeo]">
      <div className="flex justify-between">
        <h4 className="text-black font-semibold text-lg">
          Charges<span className="text-[#FF6A62]">(Required)</span>{" "}
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
                  Charges
                </DialogTitle>
              </DialogHeader>
              <div className="px-4 py-3.5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label>
                    Application fee(one-time)
                    <span className="text-[#FF6A62]">*</span>
                  </Label>
                  <Input
                    type="number"
                    placeholder="100 (All 18+ applicant)"
                    className="h-12 border-[#e0e0e0] rounded-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
                    required
                  />
                </div>
                <div>
                  <Label>
                    Admin fee(one-time)
                    <span className="text-[#FF6A62]">*</span>
                  </Label>
                  <Input
                    type="number"
                    placeholder="15"
                    className="h-12 border-[#e0e0e0] rounded-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
                    required
                  />
                </div>
              </div>
              <DialogFooter className="px-4 py-3.5 flex justify-between">
                <p className="flex gap-1 font-semibold">
                  <Info />
                  Type 0 if charges not applicable
                </p>
                <Button type="submit">Add</Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>
    </div>
  );
};

export default Charges;
