import Accordion from "../ui/Accordion";
import { Button } from "../ui/button";

export default function FAQSection() {
  const faq = [
    {
      question: "Who can participate? ",
      answer: "The program is open to students in grades 3 to 6.",
    },
    {
      question: "Can only IPA students participate? ",
      answer: "No. Students in grades 3–6 from any school may register.",
    },
    {
      question: "How can I register for ECHO Explorers? ",
      answer: (
        <div className="space-y-4">
          <p>
            <strong>1.</strong> Create an account on the CampBrain platform, or
            log in if you already have one.
          </p>

          <p>
            <strong>2.</strong> Select “Spring Enrichment 2026.”
          </p>

          <p>
            <strong>3.</strong> Select “Echo Explorers.”
          </p>
          <p>
            <strong>4.</strong> Complete and submit your enrollment.
          </p>
          <p>
            <strong>5.</strong> You will receive an email confirming your
            enrollment with an order number—please keep this for your records.
          </p>

          <p>
            Register here:{" "}
            <a
              href="https://ipaauxiliary.campbrainregistration.com/"
              className="text-blue-600 underline font-medium"
              target="_blank"
            >
              https://ipaauxiliary.campbrainregistration.com/
            </a>
          </p>
        </div>
      ),
    },
    {
      question: "When does the program take place?",
      answer:
        "Classes are held on Wednesdays from 3:00–4:00 pm for 12 weeks. There will be no class on March 18 (Spring Break).",
    },
    {
      question: "Is the heart health fair open to the public?",
      answer:
        "Yes! Families, students, and community members will be invited. More details coming soon.",
    },
    {
      question: "What is the pick- up procedure? ",
      answer:
        "Students in IPA’s Extended Day program will be taken to their Extended Day rooms at 4:00 pm. Students who are not in Extended Day must be picked up right after class. IPA offers a 10-minute grace period; after that, students will be checked into Extended Day and a $35 drop-in fee will be applied.",
    },
    {
      question: "How much does the program cost? ",
      answer:
        "The cost is $215 for the 12-week program, payable to IPA through CampBrain. ",
    },
  ];

  return (
    <section className="py-20 bg-[#E8F6FA] px-5 sm:px-0">
      <div className="max-w-6xl w-5/6 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-center mb-10 text-[#00488D]">
            Frequently Asked Questions
          </h2>
          <Accordion items={faq} />
        </div>
        <div className="mx-auto text-center mt-10">
          <a
            className="mx-auto text-center"
            href="https://ipaauxiliary.campbrainregistration.com/"
            target="_blank"
          >
            <Button
              variant="outline"
              className="mt-4 text-[30px] px-10 py-6 hover:text-white hover:bg-[#00488D] bg-[#00A6C5] text-white font-heading"
            >
              Register Now
            </Button>
          </a>

          <p className="pt-5">
            You will be redirected to ipaauxiliary.campbrainregistration.com
          </p>
        </div>
      </div>
    </section>
  );
}
