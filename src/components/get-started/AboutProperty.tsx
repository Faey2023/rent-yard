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

const AboutProperty = () => {
  return (
    <div className="h-fit py-4 px-3 rounded-[20px] border border-[#E0E0E0]">
      <div className="flex justify-between">
        <h4 className="text-black font-semibold text-lg">
          About the property<span className="text-[#6F6C6A]">(Optional)</span>
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
                  About the property(optional)
                </DialogTitle>
              </DialogHeader>
              <div className="px-4">
                <Textarea
                  className="h-41"
                  placeholder="Type your message here."
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

export default AboutProperty;
