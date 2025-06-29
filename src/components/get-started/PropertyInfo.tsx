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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ListingData } from "@/types";
import { Plus, SquarePen } from "lucide-react";

type Props = {
  updateData: React.Dispatch<React.SetStateAction<ListingData>>;
  listingData: ListingData;
};

const stateOptions: Record<string, { code: string; states: string[] }> = {
  bd: {
    code: "+880",
    states: ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet"],
  },
  us: {
    code: "+1",
    states: ["California", "Texas", "New York", "Florida", "Illinois"],
  },
  ca: {
    code: "+1",
    states: ["Ontario", "Quebec", "British Columbia", "Alberta", "Manitoba"],
  },
  uk: {
    code: "+44",
    states: ["England", "Scotland", "Wales", "Northern Ireland", "London"],
  },
  au: {
    code: "+61",
    states: ["New South Wales", "Victoria", "Queensland", "Tasmania", "WA"],
  },
};

const PropertyInfo = ({ updateData, listingData }: Props) => {
  const [open, setOpen] = useState(false);
  const [formError, setFormError] = useState("");

  const [propertyName, setPropertyName] = useState("");
  const [propertyUnit, setPropertyUnit] = useState("");
  const [propertyWebsite, setPropertyWebsite] = useState("");
  const [country, setCountry] = useState("");
  const [propertyStreet, setPropertyStreet] = useState("");
  const [propertyApt, setPropertyApt] = useState("");
  const [propertyCity, setPropertyCity] = useState("");
  const [state, setState] = useState("");
  const [propertyZipCode, setPropertyZipCode] = useState("");

  useEffect(() => {
    if (open) {
      setPropertyName(listingData.propertyName || "");
      setPropertyUnit(listingData.propertyUnit?.toString() || "");
      setPropertyWebsite(listingData.propertyWebsite || "");
      setCountry(listingData.propertyCountry || "");
      setPropertyStreet(listingData.propertyStreet || "");
      setPropertyApt(listingData.propertyApt?.toString() || "");
      setPropertyCity(listingData.propertyCity || "");
      setState(listingData.propertyState || "");
      setPropertyZipCode(listingData.propertyZipCode?.toString() || "");
    }
  }, [open, listingData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !propertyName.trim() ||
      !propertyUnit.trim() ||
      !propertyStreet.trim() ||
      !propertyCity.trim() ||
      !state.trim() ||
      !propertyZipCode.trim()
    ) {
      setFormError("Please fill in all required fields.");
      return;
    }

    setFormError("");

    updateData((prev) => ({
      ...prev,
      propertyName,
      propertyUnit: Number(propertyUnit),
      propertyWebsite,
      propertyCountry: country,
      propertyStreet,
      propertyApt: propertyApt ? Number(propertyApt) : undefined,
      propertyCity,
      propertyState: state,
      propertyZipCode: Number(propertyZipCode),
    }));

    setOpen(false);
  };

  const hasData = listingData.propertyName && listingData.propertyCity;

  return (
    <div className="h-fit py-4 px-3 rounded-[20px] border border-[#E0E0E0]">
      <div
        className={`flex justify-between ${
          hasData ? "border-b border-[#E0E0E0] pb-2 mb-3" : ""
        }`}
      >
        <h4 className="text-black font-semibold text-lg">
          Property address<span className="text-[#FF6A62]">(Required)</span>
        </h4>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              variant="link"
              className="flex decoration-[#316EED] text-[#316EED] gap-1"
            >
              {hasData ? <SquarePen /> : <Plus />}
              {hasData ? "Edit" : "Add"}
            </Button>
          </DialogTrigger>

          <DialogContent className="p-0 max-w-200">
            <form onSubmit={handleSubmit}>
              <DialogHeader>
                <DialogTitle className="rounded-b-none rounded-[14px] font-medium bg-[#F4F4F4] text-[#6F6C6A] px-4 py-3.5">
                  Property Address
                </DialogTitle>
              </DialogHeader>

              <div className="px-4 py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <Label>
                    Property name<span className="text-[#FF6A62]">*</span>
                  </Label>
                  <Input
                    value={propertyName}
                    onChange={(e) => setPropertyName(e.target.value)}
                    placeholder="Dallas apartments complex"
                    className="h-12 w-60 border-[#E0E0E0] rounded-lg"
                  />
                </div>

                <div>
                  <Label>
                    Total units<span className="text-[#FF6A62]">*</span>
                  </Label>
                  <Input
                    value={propertyUnit}
                    onChange={(e) => setPropertyUnit(e.target.value)}
                    type="number"
                    placeholder="50"
                    className="h-12 w-60 rounded-lg"
                  />
                </div>

                <div>
                  <Label>
                    Website<span className="text-[#6F6C6A]"> (optional)</span>
                  </Label>
                  <Input
                    value={propertyWebsite}
                    onChange={(e) => setPropertyWebsite(e.target.value)}
                    placeholder="https://"
                    className="h-12 w-60 rounded-lg"
                    type="url"
                  />
                </div>

                <div>
                  <Label>
                    Country<span className="text-[#FF6A62]">*</span>
                  </Label>
                  <Select
                    value={country}
                    onValueChange={(val) => {
                      setCountry(val);
                      setState("");
                    }}
                  >
                    <SelectTrigger className="w-60">
                      <SelectValue placeholder="Choose country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bd">Bangladesh</SelectItem>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>
                    Street address<span className="text-[#FF6A62]">*</span>
                  </Label>
                  <Input
                    value={propertyStreet}
                    onChange={(e) => setPropertyStreet(e.target.value)}
                    placeholder="111 Austin Ave"
                    className="h-12 w-60 rounded-lg"
                  />
                </div>

                <div>
                  <Label>
                    Apt, Suite{" "}
                    <span className="text-[#6F6C6A]">(optional)</span>
                  </Label>
                  <Input
                    value={propertyApt}
                    onChange={(e) => setPropertyApt(e.target.value)}
                    type="number"
                    placeholder="123"
                    className="h-12 w-60 rounded-lg"
                  />
                </div>

                <div>
                  <Label>
                    City/Town<span className="text-[#FF6A62]">*</span>
                  </Label>
                  <Input
                    value={propertyCity}
                    onChange={(e) => setPropertyCity(e.target.value)}
                    placeholder="Dallas"
                    className="h-12 w-60 rounded-lg"
                  />
                </div>

                <div>
                  <Label>
                    State<span className="text-[#FF6A62]">*</span>
                  </Label>
                  <Select
                    value={state}
                    onValueChange={(val) => setState(val)}
                    disabled={!country}
                  >
                    <SelectTrigger className="w-60">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      {country &&
                        stateOptions[country]?.states.map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>
                    Zip Code<span className="text-[#FF6A62]">*</span>
                  </Label>
                  <Input
                    value={propertyZipCode}
                    onChange={(e) => setPropertyZipCode(e.target.value)}
                    type="number"
                    placeholder="75061"
                    className="h-12 w-60 rounded-lg"
                  />
                </div>
              </div>

              <DialogFooter className="px-4 py-3.5 flex justify-end">
                {formError && (
                  <p className="text-red-500 text-sm font-medium mr-auto">
                    {formError}
                  </p>
                )}
                <Button type="submit">{hasData ? "Update" : "Add"}</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {hasData && (
        <div className="gap-x-4 gap-y-1 font-semibold text-gray-700">
          <p>
            {listingData.propertyName}, {listingData.propertyCity},
            {listingData.propertyState}, {listingData.propertyCountry}
          </p>
        </div>
      )}
    </div>
  );
};

export default PropertyInfo;
