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

const AddLandmark = () => {
  return (
    <div className="h-fit py-4 px-3 rounded-lg border border-[#eoeoeo]">
      <div className="flex justify-between">
        <h4 className="text-black font-semibold text-lg">
          Nearest landmarks
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
                <DialogTitle className="rounded-t-[14px] rounded-[14px] font-medium bg-[#F4F4F4] text-[#6F6C6A] px-4 py-3.5">
                  Add landmark
                </DialogTitle>
              </DialogHeader>
              <div className="px-4 py-3.5 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>
                      Landmark type
                      <span className="text-[#FF6A62]">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="High School" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="School">School</SelectItem>
                        <SelectItem value="High">High School</SelectItem>
                        <SelectItem value="College">College</SelectItem>
                        <SelectItem value="University">University</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>
                      Distance from property
                      <span className="text-[#FF6A62]">*</span>
                    </Label>
                    <div className="flex w-full max-w-sm overflow-hidden rounded-md border border-[#eoeoeo]">
                      <Input
                        type="number"
                        placeholder="1.5"
                        className="h-12 max-w-100 rounded-r-none border-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
                        required
                      />
                      <Select>
                        <SelectTrigger className="w-[100px] rounded-none border-none focus:ring-0 focus:ring-offset-0">
                          <SelectValue placeholder="Mile" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mile">Mile</SelectItem>
                          <SelectItem value="km">KiloMeter</SelectItem>
                          <SelectItem value="M">Meter</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <div>
                  <Label>
                    Landmark name
                    <span className="text-[#FF6A62]">*</span>
                  </Label>
                  <Input
                    type="text"
                    placeholder="Enter Name"
                    className="h-12 border-[#eoeoeo] rounded-lg"
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

export default AddLandmark;
