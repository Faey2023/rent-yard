"use client";

import { useState } from "react";
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
import { Info, Plus, SquarePen } from "lucide-react";

const Charges = () => {
  const [charges, setCharges] = useState<{
    application: number;
    admin: number;
  } | null>(null);
  const [applicationFee, setApplicationFee] = useState("");
  const [adminFee, setAdminFee] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const app = Number(applicationFee);
    const adm = Number(adminFee);
    if (!isNaN(app) && !isNaN(adm)) {
      setCharges({ application: app, admin: adm });
      setApplicationFee("");
      setAdminFee("");
    }

    setApplicationFee(charges?.application.toString() || "");
    setAdminFee(charges?.admin.toString() || "");
  };

  return (
    <div className="h-fit py-4 px-3 rounded-[20px] border border-[#E0E0E0]">
      <div
        className={`flex justify-between ${
          charges ? "border-b border-[#E0E0E0]" : ""
        }`}
      >
        <h4 className="text-black font-semibold text-lg w-full ">
          Charges<span className="text-[#FF6A62]">(Required)</span>
        </h4>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="link"
              className="flex decoration-[#316EED] text-[#316EED] gap-1"
              onClick={() => {
                setApplicationFee(charges?.application.toString() || "");
                setAdminFee(charges?.admin.toString() || "");
              }}
            >
              {charges ? <SquarePen /> : <Plus />}
              {charges ? "Edit" : "Add"}
            </Button>
          </DialogTrigger>

          <DialogContent className="p-0 max-w-200">
            <form onSubmit={handleSubmit}>
              <DialogHeader>
                <DialogTitle className="rounded-b-none rounded-[14px] font-medium bg-[#F4F4F4] text-[#6F6C6A] px-4 py-3.5">
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
                    value={applicationFee}
                    onChange={(e) => setApplicationFee(e.target.value)}
                    placeholder="100 (All 18+ applicant)"
                    className="h-12 max-w-100 border-[#e0e0e0] rounded-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
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
                    value={adminFee}
                    onChange={(e) => setAdminFee(e.target.value)}
                    placeholder="15"
                    className="h-12 max-w-100 border-[#e0e0e0] rounded-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
                    required
                  />
                </div>
              </div>

              <DialogFooter className="px-4 py-3.5 flex justify-between">
                <p className="flex gap-1 font-semibold text-sm text-[#6F6C6A]">
                  <Info className="h-4 w-4 mt-[2px]" />
                  Type 0 if charges not applicable
                </p>
                <DialogTrigger asChild>
                  <Button type="submit" id="dialog-close-btn">
                    {charges ? "Update" : "Add"}
                  </Button>
                </DialogTrigger>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {charges && (
        <div className="mt-4 flex gap-2 font-semibold">
          <div className="flex gap-0.5">
            <p>Application Fee:</p>
            <p>${charges.application}</p>
          </div>
          <div className="flex gap-2">
            <p>Admin Fee:</p>
            <p>${charges.admin}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Charges;
