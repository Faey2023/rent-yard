"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { CreditCard, SquareCheckBig } from "lucide-react";
import { Button } from "@/components/ui/button";

const Payment = () => {
  const [selected, setSelected] = useState("platinum");

  const options = [
    {
      id: "regular",
      name: "Regular",
      price: "$99.99",
      range: "1-50 units",
      autoPay: true,
      isBadge: true,
    },
    {
      id: "platinum",
      name: "Platinum",
      price: "$129.99",
      range: "1-50 units",
      isBadge: true,
    },
    {
      id: "standard",
      name: "Standard",
      price: "$199.99",
      range: "1-50 units",
      isBadge: true,
    },
  ];

  return (
    <div className="px-5 w-full md:px-10 mt-5 bg-white flex flex-col justify-between">
      <h1 className="text-xl font-bold">
        Chose a plan for after 30-days free trial
      </h1>
      <Tabs defaultValue="monthly" className="my-5">
        <TabsList>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="annually">Annually (save 57%)</TabsTrigger>
        </TabsList>
      </Tabs>
      {/* options */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-7">
        {options.map((option) => (
          <div
            key={option.id}
            onClick={() => setSelected(option.id)}
            className={`relative border h-50 space-y-5 rounded-xl p-5 cursor-pointer transition-all ${
              selected === option.id
                ? "border-[#316EED] bg-[#F5F8FF]"
                : "border-[#D8D8D8] bg-[#F4F4F4]"
            }`}
          >
            <div className="flex justify-between">
              {option.isBadge && (
                <div
                  className={` flex justify-center items-center border  w-25 h-12 rounded-md text-xl font-bold ${
                    selected === option.id
                      ? "border-[#D8D8D8] bg-[#F4F4F4]"
                      : ""
                  }`}
                >
                  {option.name}
                </div>
              )}

              {option.autoPay && (
                <div className="h-12 w-32.5 flex gap-3 font-bold rounded-[12px] border-[#316EED] bg-[#F5F8FF] border text-[#316EED] justify-center items-center">
                  <SquareCheckBig />
                  Auto Pay
                </div>
              )}
            </div>

            <p className="text-5xl font-bold text-black">
              {option.price}
              <span className="text-xl font-medium text-[#6F6C6A]">/mo</span>
            </p>
            <p className="text-sm text-gray-500">For {option.range}</p>
          </div>
        ))}
      </div>
      {/* card */}
      <div className="px-4 py-3.5 shadow-[0px_4px_30px_0px_#2E2D740D]">
        <div className="flex justify-between">
          <h1>Payment Options</h1>
          <Button
            variant="link"
            className="flex decoration-[#316EED] text-[#316EED] gap-1"
          >
            Add new card
          </Button>
        </div>
        <div className="mt-8 divide-y space-y-3 divide-[#E0E0E0] flex flex-col gap-3">
          <div className="flex justify-between pb-3">
            <div className="flex gap-3">
              <CreditCard />
              <p className="font-semibold">
                Alex jones(Amex card){" "}
                <span className="text-[#6F6C6A] font-medium">*******8565</span>
              </p>
            </div>
            <Button>Select</Button>
          </div>
          <div className="flex justify-between pb-3">
            <div className="flex gap-3">
              <CreditCard />
              <p className="font-semibold">
                Alex jones(Amex card){" "}
                <span className="text-[#6F6C6A] font-medium">*******8565</span>
              </p>
            </div>
            <Button>Select</Button>
          </div>
          <div className="flex justify-between pb-3">
            <div className="flex gap-3">
              <CreditCard />
              <p className="font-semibold">
                Alex jones(Amex card){" "}
                <span className="text-[#6F6C6A] font-medium">*******8565</span>
              </p>
            </div>
            <Button>Select</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
