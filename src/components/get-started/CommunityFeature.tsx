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
import {
  BriefcaseMedical,
  Fan,
  Flame,
  Plus,
  Refrigerator,
  Search,
  ThermometerSnowflake,
} from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";

const tagOptions = [
  {
    id: "air-con",
    label: "Air conditioning",
    icon: <ThermometerSnowflake className="size-5" />,
  },
  {
    id: "fan",
    label: "Ceiling fan",
    icon: <Fan className="size-5" />,
  },
  {
    id: "fridge",
    label: "Refrigerator",
    icon: <Refrigerator className="size-5" />,
  },
  {
    id: "fire",
    label: "Fireplace (Home)",
    icon: <Flame className="size-5" />,
  },
  {
    id: "aid-kit",
    label: "First aid kit",
    icon: <BriefcaseMedical className="size-5" />,
  },
];

const CommunityFeature = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleFeature = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="h-fit py-4 px-3 rounded-[20px] border border-[#E0E0E0]">
      <div className="flex justify-between">
        <h4 className="text-black font-semibold text-lg">
          Community’s amenity/features
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
            <DialogContent className="p-0 max-w-157">
              <DialogHeader>
                <DialogTitle className="rounded-b-none rounded-[14px] font-medium bg-[#F4F4F4] text-[#6F6C6A] px-4 py-3.5">
                  Community’s amenity/features
                </DialogTitle>
              </DialogHeader>
              <div className="px-4 py-3.5 flex flex-col gap-4">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 size-5" />
                  <Input
                    type="text"
                    placeholder="Search amenities"
                    className="pl-10 rounded-full h-10 border border-[#E0E0E0]"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {tagOptions.map((tag) => (
                    <button
                      key={tag.id}
                      onClick={() => toggleFeature(tag.id)}
                      className={`flex cursor-pointer items-center gap-1 h-13 rounded-[12px] p-2.5 text-sm border-2 transition 
              ${
                selected.includes(tag.id)
                  ? "bg-[#F5F8FF] font-semibold border-[#316EED] "
                  : "border-[#E0E0E0] text-gray-600 hover:bg-[#F5F8FF] font-medium"
              }`}
                    >
                      <div className="bg-[#F5F8FF] rounded-[8px] flex justify-center items-center size-8">
                        {tag.icon}
                      </div>
                      {tag.label}
                    </button>
                  ))}
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

export default CommunityFeature;
