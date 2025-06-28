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
import { Plus, CalendarDays } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

const RentPayment = () => {
  const [rentDue, setRentDue] = useState<Date | undefined>();
  const [rentReminder, setRentReminder] = useState<Date | undefined>();

  return (
    <div className="h-fit py-4 px-3 rounded-[20px] border border-[#eoeoeo]">
      <div className="flex justify-between">
        <h4 className="text-black font-semibold text-lg">
          Rent frequency & payment reminder
          <span className="text-[#FF6A62]">(Required)</span>{" "}
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
                  Rent frequency & payment reminder
                </DialogTitle>
              </DialogHeader>
              <div className="px-4 py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <Label>Rent payment frequency*</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Monthly" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="yearly">Yearly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Rent Reminder/Statement date*</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className="flex justify-between items-center w-full max-w-sm h-12 rounded-md border border-input bg-background px-3 text-left"
                      >
                        <span
                          className={
                            rentReminder
                              ? "text-foreground"
                              : "text-muted-foreground"
                          }
                        >
                          {rentReminder
                            ? format(rentReminder, "PPP")
                            : "25th Every month"}
                        </span>
                        <CalendarDays className="ml-2 size-6" />
                      </button>
                    </PopoverTrigger>

                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={rentReminder}
                        onSelect={setRentReminder}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label>Rent due date*</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className="flex justify-between items-center w-full max-w-sm h-12 rounded-md border border-input bg-background px-3   text-left"
                      >
                        <span
                          className={
                            rentDue
                              ? "text-foreground"
                              : "text-muted-foreground"
                          }
                        >
                          {rentDue ? format(rentDue, "PPP") : "5th Every month"}
                        </span>
                        <CalendarDays className="ml-2 size-6" />
                      </button>
                    </PopoverTrigger>

                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={rentDue}
                        onSelect={setRentDue}
                      />
                    </PopoverContent>
                  </Popover>
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

export default RentPayment;
