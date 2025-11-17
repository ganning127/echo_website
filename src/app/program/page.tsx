import { NavBar } from "@/components/NavBar";
import { Container } from "@/components/Container";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
export const metadata: Metadata = {
  title: "Program",
};
export default function Program() {
  return (
    <>
      <NavBar />

      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <main>
            <section className="max-w-7xl m-auto">
              <h1 className="text-[36px]">ECHO Explorers</h1>
              <h2>
                ECHO Explorers is available to students in grades 3 to 6 after
                school.
              </h2>
              For 10-weeks, Explorers will learn heart-healthy habits and they
              will see how to use this knowledge to help themselves and others.
              Each week introduces a new topic through interactive learning,
              games, and creative activities. They will explore mindfulness, the
              importance of taking breaks, staying active, and eating nutritious
              foods through our four pillars: Mind-Well, Rest-Well, Eat-Well,
              and Move-Well. By the end of the program, Explorers will have
              become leaders in their community by organizing their own Heart
              Health Fair!
              <h3>Registration:</h3> Opens December 15, 2025
              <h3>Dates:</h3> 12 weeks (1-day a week)
              <h3>Times:</h3> 3 p.m. - 4 p.m., optional aftercare until …??
              <h3>Cost:</h3> IPA Students: $200 Non- IPA Students:
              <h3>How to Register</h3>
              <p>
                To register for the program, please create an account on the
                CAMPBRAIN platform. Create an account, and if you already have
                an account, simply log in., and Selectselect “Spring Enrichment
                2026.” Once you submit your enrollment, you will receive an
                email confirming your completed enrollment with your order
                number. Please keep a record of your order number so that we may
                best assist you if you need to make changes to your enrollment.
              </p>
              <a
                href="https://ipaauxiliary.campbrainregistration.com/"
                target="_blank"
              >
                <Button
                  variant="outline"
                  className="mt-4 text-[24px] hover:text-white hover:bg-[#00488D] bg-[#00A6C5] text-white font-heading"
                >
                  Register Now
                </Button>
              </a>
            </section>
          </main>
        </Suspense>
      </Container>

      <Footer />
    </>
  );
}
