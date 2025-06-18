"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Building2,
  KeyRound,
  User2,
  House,
  Building,
  BriefcaseBusiness,
  Upload,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const propertyData = [
  {
    value: "single-house",
    title: "Single House Property",
    description: "Single unit house for single family",
    icon: <House className="size-7" />,
  },
  {
    value: "apartments",
    title: "Apartments complex",
    description: "Multiple unit house for families",
    icon: <Building className="size-7" />,
  },
  {
    value: "condos",
    title: "Condominiums",
    description: "Multiple unit house for families",
    icon: <Building2 className="size-7" />,
  },
];

const roles = [
  {
    value: "landlord",
    title: "Landlord",
    description: "Owner of the property",
    icon: <KeyRound className="size-7" />,
  },
  {
    value: "realtor",
    title: "Realtor",
    description: "Manage property on behalf of owner",
    icon: <User2 className="size-7" />,
  },
  {
    value: "manager",
    title: "Property management company",
    description: "For management company",
    icon: <BriefcaseBusiness className="size-7" />,
  },
];

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

const Stepper = () => {
  const [propertyType, setPropertyType] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const router = useRouter();
  const [country, setCountry] = useState<string>("bd");
  const [state, setState] = useState<string>("");
  console.log(state);

  const selectedCode = stateOptions[country]?.code || "";

  const handleStart = () => {
    if (propertyType && role) {
      router.push("/get-started");
    }
  };

  return (
    <div className="px-5 md:px-10 bg-white flex flex-col justify-between">
      <div className="mt-5 w-full mx-auto space-y-10">
        <h1 className="text-2xl font-bold">Property type</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {propertyData.map((item) => (
            <Card
              key={item.value}
              onClick={() => setPropertyType(item.value)}
              className={`cursor-pointer rounded-lg border p-4 transition hover:shadow-sm ${
                propertyType === item.value
                  ? "border-[#316EED] bg-[#F9FBFF]"
                  : "border-[#E0E0E0]"
              }`}
            >
              <div className="p-2 size-14 flex justify-center items-center rounded-md bg-[#F9FBFF]">
                {item.icon}
              </div>
              <div>
                <p className="font-semibold text-black">{item.title}</p>
                <p className="text-sm font-medium text-[#777980]">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <h1 className="text-2xl font-bold mt-12">Select your role</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {roles.map((item) => (
            <Card
              key={item.value}
              onClick={() => setRole(item.value)}
              className={`cursor-pointer rounded-lg border p-4 transition hover:shadow-sm ${
                role === item.value
                  ? "border-[#316EED] bg-[#F9FBFF]"
                  : "border-[#E0E0E0]"
              }`}
            >
              <div className="p-2 size-14 flex justify-center items-center rounded-md bg-[#F9FBFF]">
                {item.icon}
              </div>
              <div>
                <p className="font-semibold text-black">{item.title}</p>
                <p className="text-sm font-medium text-[#777980]">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* field if role landlord */}
      {role === "landlord" && (
        <div className="mt-10 border border-[#E0E0E0] rounded-[14px]">
          <h2 className="text-lg rounded-t-[14px] font-medium bg-[#F4F4F4] text-[#6F6C6A] px-4 py-3.5">
            Proof of ownership
          </h2>
          <div className="px-4 py-3.5">
            <Label>Ownership doc*</Label>
            <div className="relative h-12 max-w-100 border border-dashed border-[#E0E0E0] rounded-lg bg-[#F6F6F6] cursor-pointer">
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
          </div>
        </div>
      )}
      {/* field if role landlord */}

      {/* field if role realtor */}
      {role === "realtor" && (
        <div className="mt-10 border border-[#E0E0E0] rounded-[14px]">
          <h2 className="text-lg rounded-t-[14px] font-medium bg-[#F4F4F4] text-[#6F6C6A] px-4 py-3.5">
            Realtor verification
          </h2>

          <div className="grid px-4 py-3.5 grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <Label>Lenience number*</Label>
              <Input
                type="number"
                placeholder="000000000000"
                className="h-12 max-w-100 border-[#e0e0e0] rounded-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
                required
              />
            </div>

            <div>
              <Label>Additional documents for realtor</Label>
              <div className="relative h-12 max-w-100 border border-dashed border-[#E0E0E0] rounded-lg bg-[#F6F6F6] cursor-pointer">
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
            </div>

            <div>
              <Label>Agreement with landlord*</Label>
              <div className="relative h-12 max-w-100 border border-dashed border-[#E0E0E0] rounded-lg bg-[#F6F6F6] cursor-pointer">
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
            </div>
          </div>
        </div>
      )}
      {/* field if role realtor */}

      {/* field if role manager */}
      {role === "manager" && (
        <div className="mt-10 border border-[#E0E0E0] rounded-[14px]">
          <h2 className="text-lg rounded-t-[14px] font-medium bg-[#F4F4F4] text-[#6F6C6A] px-4 py-3.5">
            Realtor verification
          </h2>

          <div className="grid px-4 py-3.5 grid-cols-1 sm:grid-cols-4 gap-4">
            <div>
              <Label>Company Name*</Label>
              <Input
                type="text"
                placeholder="Runyan trade center"
                className="h-12 w-75 border-[#E0E0E0] rounded-lg"
                required
              />
            </div>

            <div>
              <Label>Company Identifier(EIN/TIN)*</Label>
              <Input
                type="text"
                placeholder="Name"
                className="h-12 w-75 border-[#E0E0E0] rounded-lg"
                required
              />
            </div>

            <div>
              <Label>Your job title*</Label>
              <Input
                type="text"
                placeholder="Manager"
                className="h-12 w-75 border-[#E0E0E0] rounded-lg"
                required
              />
            </div>

            <div>
              <Label>Agreement with landlord*</Label>
              <div className="relative h-12 w-75 border border-dashed border-[#E0E0E0] rounded-lg bg-[#F6F6F6] cursor-pointer">
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
            </div>

            <div>
              <Label>Country/Region*</Label>
              <Select
                onValueChange={(val) => {
                  setCountry(val);
                  setState("");
                }}
              >
                <SelectTrigger className="w-75">
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
              <Label>Street address*</Label>
              <Input
                type="text"
                placeholder="111 Austin Ave"
                className="h-12 w-75 border-[#E0E0E0] rounded-lg"
                required
              />
            </div>

            <div>
              <Label>Apt, suit, unit (if applicable)</Label>
              <Input
                type="number"
                placeholder="3050"
                className="h-12 w-75 border-[#e0e0e0] rounded-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
                required
              />
            </div>

            <div>
              <Label>Phone number*</Label>
              <div className="h-12 flex rounded-lg border-[#E0E0E0] border overflow-hidden w-full">
                <Select
                  onValueChange={(val) => setCountry(val)}
                  defaultValue="bd"
                >
                  <SelectTrigger className="w-28 border-l border-input rounded-none border-none focus:ring-0 focus:ring-offset-0">
                    <SelectValue placeholder={selectedCode} />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(stateOptions).map(([key, { code }]) => (
                      <SelectItem key={key} value={key}>
                        {code.toUpperCase()} ({key.toUpperCase()})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  type="number"
                  placeholder="Phone number"
                  className="h-12 w-75 flex-1 [&::-webkit-outer-spin-button]:appearance-none rounded-none border-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
                  required
                />
              </div>
            </div>

            <div>
              <Label>Contact email*</Label>
              <Input
                type="text"
                placeholder="majarul2025@gmail.com"
                className="h-12 w-75 border-[#E0E0E0] rounded-lg"
                required
              />
            </div>

            <div>
              <Label>City/Town*</Label>
              <Input
                type="text"
                placeholder="Dallas"
                className="h-12 w-75 border-[#E0E0E0] rounded-lg"
                required
              />
            </div>

            <div>
              <Label>State/Territory*</Label>
              <Select
                onValueChange={(val) => setState(val)}
                disabled={!country}
              >
                <SelectTrigger className="w-75 h-12">
                  <SelectValue
                    placeholder={
                      country ? "Select state" : "Select country first"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {country &&
                    stateOptions[country]?.states.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Zip Code*</Label>
              <Input
                type="number"
                placeholder="75061"
                className="h-12 w-75 border-[#e0e0e0] rounded-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
                required
              />
            </div>
          </div>
        </div>
      )}
      {/* field if role manager */}

      {role && (
        <div className="flex items-center h-10 mt-5 gap-3 text-center">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="flex items-center h-full mb-0">
            Accept terms and conditions
          </Label>
        </div>
      )}

      <div className="flex pt-10 pb-5 justify-between">
        <Button variant={"link"}>Exit</Button>

        <Button
          onClick={handleStart}
          disabled={!propertyType || !role}
          className="w-32 h-12 rounded-[12px]"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};
export default Stepper;
