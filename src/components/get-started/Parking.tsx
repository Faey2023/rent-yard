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
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const Parking = () => {
  return (
    <div className="h-16.5 py-4">
      <div className="flex justify-between">
        <h4 className="text-black font-semibold text-lg">
          Parking
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
                <DialogTitle className="rounded-t-[14px] rounded-[14px] font-medium bg-[#F4F4F4] text-[#6F6C6A] px-4 py-3.5">
                  Parking
                </DialogTitle>
              </DialogHeader>
              <div className="px-4">
                <div className="flex p-4 justify-between items-center h-12 w-1/2 border border-[#eoeoeo] rounded-lg">
                  <h3 className="font-semibold">Guest vehicle parking time</h3>

                  <Select>
                    <SelectTrigger size="sm" className="w-fit">
                      <SelectValue placeholder="2H" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1H">1H</SelectItem>
                      <SelectItem value="2H">2H</SelectItem>
                      <SelectItem value="3H">3H</SelectItem>
                      <SelectItem value="4H">4H</SelectItem>
                      <SelectItem value="5H">5H</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Textarea
                  className="h-41 mt-10"
                  placeholder="Write parking overview"
                />
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

export default Parking;
