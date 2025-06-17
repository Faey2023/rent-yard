import AboutProperty from "@/components/get-started/AboutProperty";
import AddLandmark from "@/components/get-started/AddLandmark";
import ApplicationAgreement from "@/components/get-started/ApplicationAgreement";
import Charges from "@/components/get-started/Charges";
import CommunityFeature from "@/components/get-started/CommunityFeature";
import LeasingInfo from "@/components/get-started/LeasingInfo";
import NearestEduInstitute from "@/components/get-started/NearestEduInstitute";
import NearestStation from "@/components/get-started/NearestStation";
import Parking from "@/components/get-started/Parking";
import PetFees from "@/components/get-started/PetFees";
import PropertyInfo from "@/components/get-started/PropertyInfo";
import RentPayment from "@/components/get-started/RentPayment";
import Utilities from "@/components/get-started/Utilities";
import { Button } from "@/components/ui/button";

const GetStartedPage = () => {
  return (
    <div className="px-5 w-full md:px-10 mt-5 bg-white flex flex-col justify-between">
      <h1 className="text-2xl font-bold">Condominiums information</h1>
      <div className="my-5 grid gap-5 grid-cols-1 md:grid-cols-2 ">
        <div className="flex flex-col gap-5">
          <PropertyInfo />
          <LeasingInfo />
          <Charges />
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
      <div className="flex pt-10 pb-5 justify-between">
        <Button variant={"link"}>Exit</Button>

        <Button className="w-32 h-12 rounded-[12px]">Next</Button>
      </div>
    </div>
  );
};

export default GetStartedPage;
