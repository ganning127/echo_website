"use client";

import { useRef, useState } from "react";
import { toPng } from "html-to-image"; // npm i html-to-image zod
import PostcardView from "./Postcardview";
import { BLANK_FIELDS, OPEN_MESSAGE_MAX, STAMPS, type BlankKey, type StampId } from "@/lib/postcard";

type Style = "blank" | "template";
type Status = "idle" | "sending" | "sent" | "error";

const emptyFields = Object.fromEntries(Object.keys(BLANK_FIELDS).map((k) => [k, ""])) as Record<BlankKey, string>;

// Short labels read by screen readers; the sentence text around each input is visual.
const LABELS: Record<BlankKey, string> = {
  name: "Your name", interesting: "Something interesting about you", because: "Why you want to write",
  echoville: "First thing you would do in Echoville", mind: "How you practice Mind-Well",
  eat: "How you practice Eat-Well", rest: "How you practice Rest-Well", move: "How you practice Move-Well",
  dream: "Your dream", question: "Your question for us", contact: "Email or mail address (ask a grown-up first)",
  signoff: "Sign your name",
};

function Field({ k, value, onChange, wide }: { k: BlankKey; value: string; onChange: (v: string) => void; wide?: boolean }) {
  return (
    <input
      aria-label={LABELS[k]}
      value={value}
      maxLength={BLANK_FIELDS[k]}
      onChange={(e) => onChange(e.target.value)}
      autoComplete="off"
      className={`mx-1 inline-block rounded border border-[#6b7cff] bg-[#eef1ff] px-2 py-0.5 text-base ${
        wide ? "w-full max-w-md" : "w-44"
      }`}
    />
  );
}

export default function PostcardBuilder() {
  const [style, setStyle] = useState<Style>("template");
  const [stamp, setStamp] = useState<StampId>("stamp-1");
  const [message, setMessage] = useState("");
  const [fields, setFields] = useState(emptyFields);
  const [consent, setConsent] = useState<boolean | null>(null);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [snapshot, setSnapshot] = useState<typeof payloadView | null>(null);
  const startedAt = useRef(Date.now());
  const exportRef = useRef<HTMLDivElement>(null);

  const set = (k: BlankKey) => (v: string) => setFields((f) => ({ ...f, [k]: v }));
  const payloadView = style === "blank" ? ({ style, stamp, message } as const) : ({ style, stamp, fields } as const);

  const hasContent = style === "blank" ? message.trim().length > 0 : Object.values(fields).some((v) => v.trim());

  async function send() {
    if (!hasContent) return setError("Write something on your postcard first!");
    if (consent === null) return setError("Please pick Yes or No about sharing your letter.");
    setError("");
    setStatus("sending");
    try {
      const res = await fetch("/api/postcards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...(style === "blank" ? { style, message } : { style, fields }),
          stamp,
          showcaseConsent: consent,
          website: honeypot,
          elapsedMs: Date.now() - startedAt.current,
        }),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || "Try again");
      setSnapshot(payloadView); // freeze what was sent for the image export
      setStatus("sent");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
      setStatus("error");
    }
  }

  async function download() {
    if (!exportRef.current) return;
    const dataUrl = await toPng(exportRef.current, { pixelRatio: 2, cacheBust: true });
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = "my-echo-postcard.png";
    a.click();
  }

  function reset() {
    setFields(emptyFields); setMessage(""); setConsent(null); setSnapshot(null);
    setStatus("idle"); startedAt.current = Date.now();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 text-center text-[#0d2f6b]">
      <h1 className="text-4xl font-black uppercase">Fill out a card, fill up our hearts!</h1>

      {/* 1. Style */}
      <section aria-labelledby="s1" className="mt-10">
        <h2 id="s1" className="text-2xl font-black uppercase">1. Pick your postcard style</h2>
        <div role="radiogroup" aria-label="Postcard style" className="mt-4 grid gap-4 sm:grid-cols-2">
          {([["blank", "Ready to write?", "Use the Blank Postcard option to fill out a letter with an original message.", "Use blank postcard"],
             ["template", "Need some inspiration?", "Use the Fill In The Blank Postcard template to fill out a letter.", "Use postcard template"]] as const).map(
            ([id, title, desc, cta]) => (
              <button key={id} type="button" role="radio" aria-checked={style === id} onClick={() => setStyle(id)}
                className={`rounded-lg bg-white p-5 ${style === id ? "ring-2 ring-yellow-400" : ""}`}>
                <strong className="block">{title}</strong>
                <span className="block text-sm">{desc}</span>
                <span className="mt-3 inline-block rounded-full bg-yellow-300 px-4 py-1 text-sm font-bold">
                  {style === id ? "✔ " : ""}{cta}
                </span>
              </button>
            )
          )}
        </div>
      </section>

      {/* 2. Stamp */}
      <section aria-labelledby="s2" className="mt-10">
        <h2 id="s2" className="text-2xl font-black uppercase">2. Pick your stamp</h2>
        <div role="radiogroup" aria-label="Stamp" className="mt-4 flex flex-wrap justify-center gap-6">
          {STAMPS.map((s, i) => (
            <button key={s} type="button" role="radio" aria-checked={stamp === s} aria-label={`Stamp ${i + 1}`}
              onClick={() => setStamp(s)}
              className={`rounded bg-white p-2 shadow ${stamp === s ? "ring-4 ring-[#1a6fd1]" : ""}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/postcard/${s}.png`} alt="" width={96} height={96} />
            </button>
          ))}
        </div>
      </section>

      {/* 3. Message */}
      <section aria-labelledby="s3" className="mt-10">
        <h2 id="s3" className="text-2xl font-black uppercase">3. Write your message</h2>
        <div className="relative mx-auto mt-4 border-[14px] border-[#1a6fd1] bg-white p-6 text-left leading-[2.6rem] sm:p-10">
          {/* Honeypot: hidden from people and assistive tech */}
          <input tabIndex={-1} autoComplete="off" aria-hidden="true" value={honeypot} onChange={(e) => setHoneypot(e.target.value)}
            name="website" className="absolute -left-[9999px] h-0 w-0 opacity-0" />

          {style === "blank" ? (
            <>
              <label htmlFor="msg" className="sr-only">Your message</label>
              <textarea id="msg" value={message} maxLength={OPEN_MESSAGE_MAX} rows={12}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Dear Echoville friends..."
                className="w-full rounded border border-[#6b7cff] bg-[#eef1ff] p-3 text-base leading-relaxed" />
              <p className="text-right text-sm leading-none">{message.length}/{OPEN_MESSAGE_MAX}</p>
            </>
          ) : (
            <p>
              My name is <Field k="name" value={fields.name} onChange={set("name")} />
              Something interesting about me is <Field k="interesting" value={fields.interesting} onChange={set("interesting")} />.
              I want to write you a letter because <Field k="because" value={fields.because} onChange={set("because")} />.
              If I could go to Echoville, the first thing I would do is <Field k="echoville" value={fields.echoville} onChange={set("echoville")} />.
              <br /><br />
              In real life, I like to keep the Echoville inside my body heart-healthy too, just like you! Here are my favorite ways to practice the Four Pillars:
              <br />I practice Mind-Well by <Field k="mind" value={fields.mind} onChange={set("mind")} wide />.
              <br />I practice Eat-Well by <Field k="eat" value={fields.eat} onChange={set("eat")} wide />.
              <br />I practice Rest-Well by <Field k="rest" value={fields.rest} onChange={set("rest")} wide />.
              <br />I practice Move-Well by <Field k="move" value={fields.move} onChange={set("move")} wide />.
              <br /><br />
              By living a heart-healthy life, I&rsquo;m going to follow my dream and <Field k="dream" value={fields.dream} onChange={set("dream")} wide />!
              <br />I have a question for you: <Field k="question" value={fields.question} onChange={set("question")} />?
              <br /><br />
              I can&rsquo;t wait to hear from you soon! You can email me at/mail me at: <Field k="contact" value={fields.contact} onChange={set("contact")} wide />.
              <br />Heartfully yours, <Field k="signoff" value={fields.signoff} onChange={set("signoff")} />
            </p>
          )}
        </div>
      </section>

      {/* Consent + send */}
      <fieldset className="mt-12">
        <legend className="mx-auto max-w-xl text-2xl font-black uppercase">
          Can we showcase your letter on the ECHO website and social media platforms? All names and addresses will be excluded.
        </legend>
        <div className="mt-4 flex justify-center gap-8 text-lg font-bold">
          <label><input type="radio" name="consent" checked={consent === true} onChange={() => setConsent(true)} /> Yes</label>
          <label><input type="radio" name="consent" checked={consent === false} onChange={() => setConsent(false)} /> No</label>
        </div>
      </fieldset>

      <p role="alert" className="mt-4 min-h-6 font-bold text-red-700">{error}</p>
      <button type="button" onClick={send} disabled={status === "sending"}
        className="mt-2 rounded-lg bg-[#0d2f6b] px-12 py-4 text-2xl font-black uppercase text-white disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Send letter"}
      </button>

      {/* Success dialog with download prompt */}
      {status === "sent" && snapshot && (
        <div role="dialog" aria-modal="true" aria-labelledby="done" className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4">
          <div className="max-w-md rounded-xl bg-white p-8">
            <h2 id="done" className="text-3xl font-black">Your letter is on its way! 💙</h2>
            <p className="mt-3">Want to keep a copy of your postcard?</p>
            <div className="mt-6 flex flex-col gap-3">
              <button type="button" onClick={download} className="rounded-full bg-yellow-300 px-6 py-3 font-bold">Download my postcard</button>
              <button type="button" onClick={reset} className="rounded-full border-2 border-[#0d2f6b] px-6 py-3 font-bold">Write another</button>
            </div>
          </div>
        </div>
      )}

      {/* Offscreen fixed-size render used only for the PNG export */}
      <div aria-hidden="true" style={{ position: "fixed", left: -10000, top: 0 }}>
        {snapshot && <PostcardView ref={exportRef} {...snapshot} />}
      </div>
    </div>
  );
}