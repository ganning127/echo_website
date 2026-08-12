import Accordion from "@/components/ui/Accordion";
import Image from "next/image";

export default function FAQSection() {
  const faq = [
    {
      question: "1. Fold A Wish ",
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Fold an origami heart bookmark using the <a className="underline hover:no-underline" href="/activities/save-your-spot-with-a-heart-instructions">instructions on our website.</a>
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
          <><ul className="list-disc pl-6 space-y-2 pb-2">
              <li>
                  <a href="/about?tab=mission" className="underline hover:no-underline">
                    Read through the Four Pillars.
                  </a>
              </li>
              <li>
                  Choose your own unique origami heart bookmark. On each
                  bookmark, you will see a Pillar sticker.
              </li>
              <li>
                  Hold the heart bookmark in your hand, then recite the
                  pledge for the Pillar on the heart bookmark you have
                  chosen:
              </li>
          </ul>
          {/* Mind-Well Pillar */}
          <div className="pl-5 flex items-center gap-3 text-[#013161]">
  <div className="shrink-0 pt-1">
    <Image
      src="/programs/the-echo-wishing-well/MindWell.png"
      alt="ECHO Wishing Well"
      width={20}
      height={20}
      className="w-5 h-5"
    />
  </div>

  <div className="flex-1">
    <b>Mind-Well:</b> Put your heart over head and say, “I pledge to practice
    mindfulness and to respect myself and others.”
  </div>
</div>
 {/* Eat-Well Pillar */}
          <div className="pl-5 flex items-center gap-3 text-[#013161]">
  <div className="shrink-0 pt-1">
    <Image
      src="/programs/the-echo-wishing-well/EatWell.png"
      alt="ECHO Wishing Well"
      width={20}
      height={20}
      className="w-5 h-5"
    />
  </div>

  <div className="flex-1">
    <b>Eat-Well:</b> Put your Heart over belly and say, “I pledge to eat
foods that fuel me and fill my body with nutrients.”
  </div>
</div>
{/* Rest-Well Pillar */}
          <div className="pl-5 flex items-center gap-3 text-[#013161]">
  <div className="shrink-0 pt-1">
    <Image
      src="/programs/the-echo-wishing-well/RestWell.png"
      alt="ECHO Wishing Well"
      width={20}
      height={20}
      className="w-5 h-5"
    />
  </div>

  <div className="flex-1">
    <b>Rest-Well:</b> Put your Heart over chest and say, “I pledge to give my
body the rest it needs and prioritize my sleep.”
  </div>
</div>
{/* Move-Well Pillar */}
          <div className="pl-5 flex items-center gap-3 text-[#013161]">
  <div className="shrink-0 pt-1">
    <Image
      src="/programs/the-echo-wishing-well/MoveWell.png"
      alt="ECHO Wishing Well"
      width={20}
      height={20}
      className="w-5 h-5"
    />
  </div>

  <div className="flex-1">
    <b>Move-Well:</b> Put your Heart over heart and say “I pledge to move
my body and find fun ways to stay active.”
  </div>
</div></>
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