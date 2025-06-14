import { Button } from "../ui/button";

export const WelcomeCard = () => {
  return (
    <>
      <h2 className="text-[48px] font-bold text-black mb-4">
        WELCOME TO ECHOVILLE!
      </h2>
      <p className="text-[24px] text-base leading-relaxed">
        Welcome to Echoville - the land inside a body! It&apos;s a thriving and
        bustling city; we can&apos;t wait to show you around! We&apos;ll start
        out at the <strong>HEART</strong>, the place where all the action of
        life meets rest and care. In Echoville, we have four main values that
        keep all of us here healthy and flourishing:{" "}
        <strong>mindfulness</strong>,<strong> nutrition</strong>,{" "}
        <strong>rest</strong>, and <strong>movement</strong>.
      </p>

      <div className="text-center">
        <a href="/about" target="_blank">
          <Button
            variant="outline"
            className="mt-2 text-[24px] bg-[#00A6C5] text-white font-heading"
          >
            Learn More
          </Button>
        </a>
      </div>
    </>
  );
};
