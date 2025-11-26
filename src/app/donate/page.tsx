import { NavBar } from "@/components/NavBar";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import ZeffyDonationForm from "@/components/Donate/ZeffyDonationForm";

export const metadata: Metadata = {
  title: "Donate to ECHO",
  description: "Donate to support ECHO",
  keywords: [
    "ECHO mission",
    "early cardiovascular outreach",
    "health education values",
    "donations for nonprofits",
  ],
};
export default function Donate() {
  return (
    <div className="bg-[#f0f0ff] min-h-screen">
      <NavBar />

      <Suspense fallback={<div>Loading...</div>}>
        <h1 className="mt-5 text-5xl text-center mx-auto mb-5">Donate</h1>
        <div className="grid-cols-2 grid mx-auto">
          <div className="max-w-lg mx-auto col-span-2 sm:col-span-1 py-[32px] px-[16px]">
            <div className="bg-[#dfdffb] rounded-2xl p-5">
              <p className="mb-5 text-3xl font-heading">
                Thank you for choosing to support Early Cardiovascular Health
                Outreach.
              </p>
              <p className=" pb-5 text-lg">
                Your generosity strengthens our youth-centered programs and
                activities shaping heart healthy habits that will last a
                lifetime.
              </p>
              <p className="text-lg">
                {" "}
                IMPORTANT: You do NOT have to donate extra to Zeffy. After
                choosing your donation amount, the form adds a 17% tip to
                support Zeffy by default. To remove it, simply select the
                dropdown, choose “Other,” and enter $0.
              </p>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <ZeffyDonationForm />
          </div>
        </div>
        <div className="max-w-6xl px-5 sm:px-0 pb-10 text-center mx-auto">
          <p>If you would like to mail your donation, please send it to: </p>
          <p>Early Cardiovascular Health Outreach</p> <p>PO Box 970944</p>{" "}
          <p className="mb-1">Waipahu, HI 96797</p>
          <br></br>
          <p>
            {" "}
            Your gift is deductible for federal income tax purposes subject to
            IRS regulations.
          </p>
          <p> ECHO’s Federal Tax ID number is 99-3101733.</p>
        </div>
      </Suspense>

      <Footer />
    </div>
  );
}
