import { forwardRef } from "react";
import type { BlankKey, StampId } from "@/lib/postcard";

type Props =
  | { style: "blank"; stamp: StampId; message: string }
  | { style: "template"; stamp: StampId; fields: Record<BlankKey, string> };

/** Fixed-size, text-only render of the card, used for the PNG export.
 *  Values are React text nodes, so always escaped. */
const Blank = ({ v }: { v: string }) => (
  <span className="inline-block min-w-[120px] border-b-2 border-[#1a6fd1] px-1 font-semibold text-[#0d2f6b]">
    {v || "\u00A0"}
  </span>
);

const PostcardView = forwardRef<HTMLDivElement, Props>(function PostcardView(props, ref) {
  return (
    <div
      ref={ref}
      style={{ width: 1000, minHeight: 700 }}
      className="relative border-[18px] border-[#1a6fd1] bg-white p-14 font-sans text-[22px] leading-[2.1rem] text-[#1b2a41]"
    >
      <div className="mb-6 text-5xl font-black text-[#0f8fb8]">ECHO</div>
      {/* Same-origin stamp asset so the canvas export isn't tainted */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/postcard/${props.stamp}.png`} alt="" width={110} height={110} className="absolute right-12 top-12" />

      {props.style === "blank" ? (
        <p className="whitespace-pre-wrap break-words">{props.message}</p>
      ) : (
        <p className="break-words">
          My name is <Blank v={props.fields.name} />. Something interesting about me is <Blank v={props.fields.interesting} />.
          I want to write you a letter because <Blank v={props.fields.because} />. If I could go to Echoville, the first
          thing I would do is <Blank v={props.fields.echoville} />.
          <br /><br />
          In real life, I like to keep the Echoville inside my body heart-healthy too, just like you! Here are my favorite
          ways to practice the Four Pillars:
          <br />I practice Mind-Well by <Blank v={props.fields.mind} />.
          <br />I practice Eat-Well by <Blank v={props.fields.eat} />.
          <br />I practice Rest-Well by <Blank v={props.fields.rest} />.
          <br />I practice Move-Well by <Blank v={props.fields.move} />.
          <br /><br />
          By living a heart-healthy life, I&rsquo;m going to follow my dream and <Blank v={props.fields.dream} />!
          <br />I have a question for you: <Blank v={props.fields.question} />?
          <br /><br />
          I can&rsquo;t wait to hear from you soon! You can email me at/mail me at: <Blank v={props.fields.contact} />.
          <br />
          Heartfully yours, <Blank v={props.fields.signoff} />
        </p>
      )}
    </div>
  );
});

export default PostcardView;