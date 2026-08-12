import Accordion from "@/components/ui/Accordion";

export default function FAQSection() {
  const faq = [
    {
      question: "1. Fold A Wish ",
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Fold an origami heart bookmark using the <a className="underline hover:no-underline" href="/activities/save-your-spot-with-a-heart-instructions">instructions on our website</a>
          </li>
          <li>
            As you fold your heart, make a heart-healthy wish or intention. When you're finished, bring your heart bookmark to a participating
            location, and place it in the bag for the Pillar you chose.
          </li>
          <li>
            A Pillar sticker will be added to your heart bookmark, then it will
            be placed into The ECHO Wishing Well.
          </li>
        </ul>
      ),
    },
    {
      question: "2. Carry A Pledge",
      answer: (
          <p>
            During your library visit, you can pledge to live a heart-healthy
            life, then take heart bookmark from The ECHO Wishing Well.
          </p>
      ),
    },
    {
      question: "3. Let Your Impact ECHO",
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Share your pledge experience and how you are putting the Pillar
            represented on your bookmark into practice.
          </li>
          <li>
            By sharing your story, you help support that wish and carry it
            forward.
          </li>
          <li>
            Be sure to visit our website at edecho.org, email us at{" "}
            <a
              href="mailto:info@edecho.org"
              className="underline hover:no-underline"
            >
              info@edecho.org
            </a>
            , or follow us on Instagram <a className="underline hover:no-underline" href="https://www.instagram.com/edechoorg/" target="_blank" rel="noopener noreferrer">
              @edechoorg
            </a>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <section className="pb-10 px-5 sm:px-0">
      <div className="max-w-7xl w-5/6 mx-auto">
        <div className="max-w-7xl mx-auto">
          <Accordion items={faq} />
        </div>
      </div>
    </section>
  );
}