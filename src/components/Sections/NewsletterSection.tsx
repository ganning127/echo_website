import Image from "next/image";
import { Button } from "../ui/button";
import { useState } from "react";

export const NewsletterSection = () => {
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
    <>
      <h1 className="text-center text-[48px] text-[#013161]">
        Join Our Newsletter
      </h1>

      <div className=" mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left content */}
        <div className="flex-1 text-black">
          <p className="text-[24px] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore
          </p>
        </div>

        {/* Right image */}
        <div className="flex-shrink-0">
          <Image
            src="/echo_news.png" // Replace with actual image path
            alt="Newsletter Character"
            width={150}
            height={150}
            className="w-auto h-auto"
          />
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
    </>
  );
};
