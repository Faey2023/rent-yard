"use client";

import AboutProperty from "@/components/get-started/AboutProperty";
import AddLandmark from "@/components/get-started/AddLandmark";
import ApplicationAgreement from "@/components/get-started/ApplicationAgreement";
import Charges from "@/components/get-started/Charges";
import CommunityFeature from "@/components/get-started/CommunityFeature";
import Gallery from "@/components/get-started/Gallery";
import LeasingInfo from "@/components/get-started/LeasingInfo";
import NearestEduInstitute from "@/components/get-started/NearestEduInstitute";
import NearestStation from "@/components/get-started/NearestStation";
import Parking from "@/components/get-started/Parking";
import PetFees from "@/components/get-started/PetFees";
import PropertyInfo from "@/components/get-started/PropertyInfo";
import RentPayment from "@/components/get-started/RentPayment";
import Utilities from "@/components/get-started/Utilities";
import { Button } from "@/components/ui/button";
import { ListingData } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

const GetStartedPage = () => {
  // const [listingData, setListingData] = useState<ListingData>({});
  const [listingData, setListingData] = useState<ListingData>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("tempListing");
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });

  useEffect(() => {
    localStorage.setItem("tempListing", JSON.stringify(listingData));
  }, [listingData]);

  const handlePropertyListing = () => {
    localStorage.setItem("propertyListing", JSON.stringify(listingData));
    alert("Saved to localStorage!");
  };

  console.log(listingData);

  return (
    <div className="p-5 w-full md:px-10 mt-5 bg-white flex flex-col">
      <h1 className="text-2xl font-bold">Condominiums information</h1>
      <div className="my-5 grid gap-5 grid-cols-1 md:grid-cols-2 ">
        <div className="flex flex-col gap-5">
          <PropertyInfo updateData={setListingData} listingData={listingData} />
          <LeasingInfo />
          <Charges updateData={setListingData} listingData={listingData} />

          <ApplicationAgreement />
          <AboutProperty />
          <RentPayment />
          <CommunityFeature />
        </div>
        <div className="flex flex-col gap-5">
          <PetFees />
          <Parking />
          <NearestEduInstitute />
          <NearestStation />
          <AddLandmark />
          <Utilities />
        </div>
      </div>
      <Gallery />

      <div className="flex pt-10 pb-5 justify-between">
        <div className="w-full mb-4">
          <div className="rounded-full flex gap-2">
            <div className="h-1 w-1/2 bg-black" />
            <div className="h-1 w-1/2 bg-[#E0E0E0]" />
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="link">Back</Button>
        <Link href="/payment">
          <Button onClick={handlePropertyListing}>Next</Button>
        </Link>
      </div>

      {/*  */}
      {/* <pre className="mt-10 bg-gray-100 p-4 rounded-md text-sm text-left">
        {JSON.stringify(listingData, null, 2)}
      </pre> */}

      {/*  */}
    </div>
  );
};

export default GetStartedPage;
