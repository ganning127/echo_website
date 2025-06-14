import { Button } from "../ui/button";
import { useState } from "react";
import { FadeInWhenVisible } from "../Animation/FadeInWhenVisible";

export const PlayNewsletterSection = () => {
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
      <h1 className="text-center text-3xl text-[#013161] pb-3">
        Keep up with all things Echo!
      </h1>

      <div className="text-center  mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left content */}
        <div className="flex-1 text-black">
          <p className="text-lg leading-relaxed">
            Sign up for our newsletter: The Echoville Pulse
          </p>
        </div>
      </div>

      <div className="mt-6">
        {!success && (
          <>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your email here"
              className="w-full px-4 py-3 rounded-md text-black bg-white placeholder-gray-400 ring-2 ring-yellow-400"
            />

            <div className="text-center">
              <Button
                disabled={!email || loading}
                className={
                  "mt-4 hover:bg-[#ad7e0c] bg-[#FFD87A] transition-colors"
                }
                size="lg"
                onClick={handleSubmit}
              >
                <h5 className="text-[24px] text-black">
                  {loading ? "Loading..." : "Join!"}
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
    </FadeInWhenVisible>
  );
};
