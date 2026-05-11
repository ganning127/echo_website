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
        <div className="text-center mx-auto mb-5 lg:pt-36 pt-0">
         <h1 className="text-5xl mb-5"> Invest in a Heart Healthy Future
        </h1>
        <p className="text-xl">Our youth will use what they learn with ECHO in their everyday lives to increase heart health in their generation.<br></br> You can help strengthen our programs and activities by making a donation today!
</p>
</div>
        <div className="grid-cols-2 grid mx-auto max-w-6xl">
          <div className="mx-auto col-span-2 sm:col-span-1 py-[32px] px-[16px]">
            <div className="bg-[#dfdffb] rounded-2xl p-5">
              <p className="mb-5 text-3xl font-heading">
                Thank you for choosing to support Early Cardiovascular Health
                Outreach.
              </p>
              <p className=" pb-5 text-xl">
                ECHO is a 501(c)(3) charity. All donations sent to our nonprofit directly contributes to our mission of spreading heart health awareness and education. Your generosity means so much to us and the community we serve, thank you!

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
