"use client";

import { useEffect, useState } from "react";
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
import { ListingData } from "@/types";

type Props = {
  updateData: React.Dispatch<React.SetStateAction<ListingData>>;
  listingData: ListingData;
};

type Charges = {
  application: number;
  admin: number;
};

const Charges = ({ updateData, listingData }: Props) => {
  const [open, setOpen] = useState(false);

  const [charges, setCharges] = useState<Charges | null>(null);
  const [formError, setFormError] = useState("");

  const [applicationFee, setApplicationFee] = useState("");
  const [adminFee, setAdminFee] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!applicationFee.trim() || !adminFee.trim()) {
      setFormError("Both fees are required.");
      return;
    }

    const app = Number(applicationFee);
    const adm = Number(adminFee);

    if (isNaN(app) || isNaN(adm)) {
      setFormError("Fees must be valid numbers.");
      return;
    }

    setFormError(""); // Clear error
    setCharges({ application: app, admin: adm });

    updateData((prev) => ({
      ...prev,
      applicationFee: app,
      adminFee: adm,
    }));

    setApplicationFee("");
    setAdminFee("");
    setOpen(false);
  };

  useEffect(() => {
    const app = listingData.applicationFee;
    const adm = listingData.adminFee;

    if (typeof app === "number" && typeof adm === "number") {
      setCharges({ application: app, admin: adm });
    }
  }, [listingData]);

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

        <Dialog open={open} onOpenChange={setOpen}>
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
                <div className="flex flex-col items-start gap-2">
                  <p className="flex gap-1 font-semibold text-sm text-[#6F6C6A]">
                    <Info className="h-4 w-4 mt-[2px]" />
                    Type 0 if charges not applicable
                  </p>
                  {formError && (
                    <p className="text-red-500 text-sm font-medium">
                      {formError}
                    </p>
                  )}
                </div>

                <Button type="submit">{charges ? "Update" : "Add"}</Button>
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
