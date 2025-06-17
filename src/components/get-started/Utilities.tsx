import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const Utilities = () => {
  return (
    <div className="h-fit py-4 px-3 rounded-lg border border-[#E0E0E0]">
      <div className="flex justify-between">
        <h4 className="text-black font-semibold text-lg">
          Utilities provider
          <span className="text-[#6F6C6A]">(Optional but recommended)</span>
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
                  Add landmark
                </DialogTitle>
              </DialogHeader>

              <div className="px-4 py-3.5 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>
                    utility type
                    <span className="text-[#FF6A62]">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Electricity">Electricity</SelectItem>
                      <SelectItem value="Water">Water</SelectItem>
                      <SelectItem value="Gas">Gas</SelectItem>
                      <SelectItem value="Internet">Internet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>
                    Provider company name
                    <span className="text-[#FF6A62]">*</span>
                  </Label>
                  <Input
                    type="text"
                    placeholder="Enter Name"
                    className="h-12 border-[#E0E0E0] rounded-lg"
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

export default Utilities;
