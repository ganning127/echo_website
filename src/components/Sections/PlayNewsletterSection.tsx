import { Button } from "../ui/button";
import { useState, useId } from "react";
import { FadeInWhenVisible } from "../Animation/FadeInWhenVisible";

export const PlayNewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const emailId = useId();
  const errorId = useId();

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
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

  return (
    <FadeInWhenVisible>
      <section aria-labelledby="play-newsletter-heading">
        {/* Fix 1: h1 → h2, only one h1 per page */}
        <h2
          id="play-newsletter-heading"
          className="text-center text-[6vw] sm:text-[2.5vw] text-[#013161] pb-3"
        >
          Keep up with all things Echo!
        </h2>

        <div className="text-center mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-black">
            <p className="text-[4.5vw] sm:text-[1.5vw] leading-relaxed">
              Sign up for our newsletter: The Echoville Pulse
            </p>
          </div>
        </div>

        <div className="mt-6">
          {/* Fix 2: silent live region announces success/error to screen readers */}
          <div aria-live="polite" aria-atomic="true" className="sr-only">
            {success && "Thank you for subscribing!"}
            {errorMsg && `Error: ${errorMsg}`}
          </div>

          {!success && (
            /* Fix 3: wrap in a form so Enter key works and submit is semantic */
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Newsletter sign up"
            >
              <label
                htmlFor={emailId}
                className="text-lg whitespace-nowrap font-bold"
              >
                Email Address:{" "}
                {/* Fix 4: visible required indicator, hidden from AT since aria-required conveys it */}
                <span aria-hidden="true" className="text-red-700">
                  *
                </span>
              </label>

              {/* Fix 5: label's htmlFor was "email" but input had no id at all */}
              <input
                id={emailId}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                aria-required="true"
                aria-invalid={!!errorMsg}
                aria-describedby={errorMsg ? errorId : undefined}
                autoComplete="email"
                placeholder="username@example.com"
                className="w-full px-4 py-3 rounded-md text-black bg-white placeholder-gray-400 ring-2 ring-yellow-400 focus:outline-none focus:ring-2 focus:ring-[#013161]"
              />

              {/* Fix 6: inline error message instead of alert() */}
              {errorMsg && (
                <p
                  id={errorId}
                  role="alert"
                  className="text-red-700 text-sm mt-1"
                >
                  {errorMsg}
                </p>
              )}

              <div className="text-center">
                <Button
                  type="submit"
                  disabled={!email || loading}
                  aria-busy={loading}
                  aria-label={
                    loading
                      ? "Submitting your email, please wait"
                      : "Join the Echoville Pulse newsletter"
                  }
                  className="mt-4 hover:bg-[#ad7e0c] bg-[#FFD87A] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#013161] disabled:opacity-50 disabled:cursor-not-allowed"
                  size="lg"
                >
                  {/* Fix 7: never nest headings inside interactive elements */}
                  <span className="text-[24px] text-black" aria-live="polite">
                    {loading ? "Submitting..." : "Join!"}
                  </span>
                </Button>
              </div>
            </form>
          )}

          {success && (
            <div className="text-center mt-4" role="status">
              {/* Fix 8: success state doesn't warrant a heading; use a <p> */}
              <p className="text-[24px] text-green-800 font-semibold">
                Thank you for subscribing!
              </p>
            </div>
          )}
        </div>
      </section>
    </FadeInWhenVisible>
  );
};
