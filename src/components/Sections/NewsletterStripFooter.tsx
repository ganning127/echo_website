import { Button } from "../ui/button";
import { useState } from "react";
import { FadeInWhenVisible } from "../Animation/FadeInWhenVisible";

export const NewsletterStripFooter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
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
        alert("Error: " + error);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FadeInWhenVisible>
      <section className=" bg-[#FFD87A] py-10">
        <div className="max-w-7xl px-8 mx-auto block sm:grid grid-cols-4 gap-4">
          {/* Left Section */}
          <div className="flex flex-col text-center sm:text-left items-center md:items-start gap-3 col-span-2">
            <h1 className="text-[30px]">Join our newsletter!</h1>
            <p className="text-[20px]">
              Stay updated with our latest news and events.
            </p>
          </div>

          {/* Right Section - Sign up for newsletter */}

          <div className="text-center m-auto w-full sm:text-left col-span-2 block sm:flex justify-end gap-2">
            {!success && (
              <>
                <label
                  htmlFor="email"
                  className="text-lg whitespace-nowrap font-bold content-center"
                >
                  Email Address:
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Your email here"
                  className="m-auto sm:m-0 w-[80%] h-[60%] sm:w-full px-4 py-3 rounded-md text-black bg-white placeholder-gray-400"
                />

                <div className="text-center m-auto">
                  <Button
                    disabled={!email || loading}
                    className={
                      " hover:bg-[#00488D] mt-5 sm:m-0 py-3 text-slate-50 bg-[#1473d2] transition-colors"
                    }
                    size="lg"
                    onClick={handleSubmit}
                  >
                    <h5 className="text-[24px] text-white">
                      {loading ? "Loading..." : "Sign Up"}
                    </h5>
                  </Button>
                </div>
              </>
            )}

            {success && (
              <div className="text-center mt-4">
                <h2 className="text-[24px] text-green-600">
                  Thank you for subscribing!
                </h2>
              </div>
            )}
          </div>
        </div>
      </section>
    </FadeInWhenVisible>
  );
};
