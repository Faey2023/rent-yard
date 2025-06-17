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
import { Plus, Upload } from "lucide-react";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";

const ApplicationAgreement = () => {
  return (
    <div className="h-fit py-4 px-3 rounded-[20px] border border-[#E0E0E0]">
      <div className="flex justify-between">
        <h4 className="text-black font-semibold text-lg">
          Application agreement
          <span className="text-[#6F6C6A]">(Optional)</span>
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
                  Application agreement (Optional)
                </DialogTitle>
              </DialogHeader>
              <div className="px-4">
                <Label>Upload agreement</Label>
                <div className="relative h-12 w-full border border-dashed border-[#E0E0E0] rounded-lg bg-[#F6F6F6] cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center gap-2 pointer-events-none">
                    <Upload className="size-6" />
                    <span className="text-[#6F6C6A] font-semibold text-sm">
                      (Pdf only)
                    </span>
                  </div>

                  <Input
                    id="file"
                    type="file"
                    accept="application/pdf"
                    className="size-full opacity-0 cursor-pointer absolute top-0 left-0"
                    required
                  />
                </div>

                <div className="flex items-center h-10 mt-5 gap-3 text-center">
                  <Checkbox id="terms" />
                  <Label
                    htmlFor="terms"
                    className="flex items-center h-full mb-0"
                  >
                    Accept immigrant & international student application
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

export default ApplicationAgreement;
