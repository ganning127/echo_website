import Image from "next/image";
import { Button } from "../ui/button";
import { useState, useRef, useId } from "react";
import { FadeInWhenVisible } from "../Animation/FadeInWhenVisible";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const emailId = useId();
  const errorId = useId();
  const statusRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async () => {
    setErrorMsg("");
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSuccess(true);
        setEmail("");
      } else {
        const { error } = await res.json();
        setErrorMsg(error || "An error occurred. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && email && !loading) {
      handleSubmit();
    }
  };

  return (
    <FadeInWhenVisible>
      <section aria-labelledby="newsletter-heading">
        {/* Fix 1: h1 should only be used once per page — use h2 for sections */}
        <h2
          id="newsletter-heading"
          className="text-center text-[48px] text-[#013161]"
        >
          Join Our Newsletter
        </h2>

        <div className="mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left content */}
          <div className="flex-1 text-black">
            <p className="text-[24px] leading-relaxed">
              Extra! Extra! Read all about it!

              <br />
              Sign up for our newsletter, the Echo Insider,  and keep up with all the latest updates! Everything from programming and events to what our team members are up to, can all be found in the Echo Insider.

            </p>
          </div>

          {/* Right image — Fix 2: purely decorative, so alt="" */}
          <div className="flex-shrink-0" aria-hidden="true">
            <Image
              src="/echo_news.png"
              alt=""
              role="presentation"
              width={150}
              height={150}
              className="w-auto h-auto"
            />
          </div>
        </div>

        <div className="mt-2">
          {/* Fix 3: live region announces success/error to screen readers */}
          <div
            ref={statusRef}
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="sr-only"
          >
            {success && "Thank you for subscribing!"}
            {errorMsg && `Error: ${errorMsg}`}
          </div>

          {!success && (
            <div className="md:w-128 mx-auto">
              <div className="flex items-center gap-4">
                <label
                  htmlFor={emailId}
                  className="text-lg whitespace-nowrap font-bold"
                >
                  {/* Fix 4: label text should indicate required */}
                  Email Address:{" "}
                  <span aria-hidden="true" className="text-red-600">
                    *
                  </span>
                </label>

                <input
                  id={emailId}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={handleKeyDown}
                  type="email"
                  placeholder="username@example.com"
                  // Fix 5: mark as required, link error message via aria-describedby
                  required
                  aria-required="true"
                  aria-describedby={errorMsg ? errorId : undefined}
                  aria-invalid={!!errorMsg}
                  autoComplete="email"
                  className="flex-1 px-4 py-3 rounded-md text-black bg-white placeholder-gray-400 ring-2 ring-yellow-400 focus:outline-none focus:ring-[#013161] focus:ring-2"
                />
              </div>

              {/* Fix 6: inline error message instead of alert() */}
              {errorMsg && (
                <p
                  id={errorId}
                  role="alert"
                  className="text-red-600 text-sm mt-1 ml-auto"
                >
                  {errorMsg}
                </p>
              )}

              <div className="text-center mt-4">
                <Button
                  disabled={!email || loading}
                  className="hover:bg-[#ad7e0c] bg-[#FFD87A] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#013161] disabled:opacity-50 disabled:cursor-not-allowed"
                  size="lg"
                  onClick={handleSubmit}
                  // Fix 7: communicate loading state to screen readers
                  aria-busy={loading}
                  aria-label={
                    loading
                      ? "Submitting your email, please wait"
                      : "Join our newsletter"
                  }
                  type="button"
                >
                  {/* Fix 8: never nest headings inside interactive elements */}
                  <span className="text-[24px] text-black">
                    {loading ? "Loading..." : "Join!"}
                  </span>
                </Button>
              </div>
            </div>
          )}

          {success && (
            // Fix 9: success message uses correct heading hierarchy, not h2
            <div className="text-center mt-4" role="status">
              <p className="text-[24px] text-green-600 font-semibold">
                Thank you for subscribing!
              </p>
            </div>
          )}
        </div>
      </section>
    </FadeInWhenVisible>
  );
};
