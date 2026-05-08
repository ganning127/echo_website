import { Button } from "../ui/button";
import { useState, useId } from "react";
import { FadeInWhenVisible } from "../Animation/FadeInWhenVisible";

export const NewsletterStripFooter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const emailId = useId();
  const errorId = useId();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      <section
        aria-labelledby="newsletter-strip-heading"
        className="bg-[#FFD87A] py-10"
      >
        <div className="max-w-7xl px-8 mx-auto block sm:grid grid-cols-4 gap-4">
          {/* Left Section */}
          <div className="flex flex-col text-center sm:text-left items-center md:items-start gap-3 col-span-2">
            {/* Fix 1: h1 → h2, one h1 per page */}
            <h2
              id="newsletter-strip-heading"
              className="text-[30px] font-semibold"
            >
              Join our newsletter!
            </h2>
            <p className="text-[20px]">
              Stay updated with our latest news and events.
            </p>
          </div>

          {/* Right Section */}
          <div className="text-center m-auto w-full sm:text-left col-span-2 block sm:flex justify-end gap-2">
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Newsletter sign up"
              className="text-center m-auto w-full sm:text-left col-span-2 flex flex-col sm:flex-row justify-end gap-2"
            >
              {!success && (
                <>
                  <div className="flex flex-col sm:flex-row items-center gap-2 w-full justify-end">
                    <label
                      htmlFor={emailId}
                      className="text-lg whitespace-nowrap font-bold content-center"
                    >
                      {/* Fix 2: label must match input's id; add required indicator */}
                      Email Address{" "}
                      <span aria-hidden="true" className="text-red-700">
                        *
                      </span>
                    </label>

                    <div className="flex flex-col w-[80%] sm:w-full">
                      <input
                        id={emailId}
                        name="email"
                        type="email"
                        required
                        aria-required="true"
                        // Fix 3: was id="email" but label had htmlFor="emailStrip" — now both use useId()
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="username@example.com"
                        autoComplete="email"
                        aria-describedby={errorMsg ? errorId : undefined}
                        aria-invalid={!!errorMsg}
                        className="m-auto sm:m-0 w-full px-4 py-3 rounded-md text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00488D]"
                      />

                      {/* Fix 4: inline error replaces alert() */}
                      {errorMsg && (
                        <p
                          id={errorId}
                          role="alert"
                          className="text-red-700 text-sm mt-1 text-left"
                        >
                          {errorMsg}
                        </p>
                      )}
                    </div>

                    <div className="text-center m-auto">
                      <Button
                        type="submit"
                        disabled={!email || loading}
                        aria-busy={loading}
                        aria-label={
                          loading
                            ? "Submitting your email, please wait"
                            : "Sign up for newsletter"
                        }
                        // Fix 5: bg-[#1473d2] on yellow fails contrast — confirm your button bg meets 4.5:1 against white text
                        className="hover:bg-[#00488D] mt-5 sm:m-0 py-3 text-slate-50 bg-[#1473d2] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00488D] disabled:opacity-50 disabled:cursor-not-allowed"
                        size="lg"
                      >
                        <span
                          className="text-[24px] text-white"
                          aria-live="polite"
                        >
                          {loading ? "Submitting..." : "Sign Up"}
                        </span>
                      </Button>
                    </div>
                  </div>
                </>
              )}

              {/* Fix 6: live region for success announcement */}
              <div aria-live="polite" aria-atomic="true">
                {success && (
                  <div className="text-center mt-4" role="status">
                    <p className="text-[24px] text-green-800 font-semibold">
                      Thank you for subscribing!
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </FadeInWhenVisible>
  );
};
