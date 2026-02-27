import Accordion from "../ui/Accordion";

export default function FAQSection() {
  const faq = [
    {
      question: "How long is the program? ",
      answer: "The program consists of 12 sessions, each lasting 1 hour.",
    },
    {
      question: "Who is the program for?",
      answer:
        "This program is designed for children who want to learn how to take care of their bodies, minds, and hearts while becoming leaders in their community.",
    },
    {
      question: "How are the sessions taught? ",
      answer:
        "Sessions are highly interactive and include games, group discussions, hands-on activities, and creative projects to keep children engaged and excited to learn.",
    },
    {
      question: "What is the Health Fair? ",
      answer:
        "At the end of the program, Explorers will organize and host their own Heart Health Fair, giving them the opportunity to showcase what they’ve learned and practice leadership skills.",
    },
  ];

  return (
    <section className="py-20 bg-paper px-5 sm:px-0">
      <div className="max-w-6xl w-5/6 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-center mb-10 text-[#00488D]">
            Frequently Asked Questions
          </h2>
          <Accordion items={faq} />
        </div>
      </div>
    </section>
  );
}
