import { FadeInWhenVisible } from "../Animation/FadeInWhenVisible";
import { InstagramEmbed } from "../Social Embed/InstagramEmbed";
import { Mail, Instagram } from "lucide-react";

export const MinuteChallengeSection = () => {
  return (
    <>
      <section className="bg-[#ECB3D2] w-full pb-20 mt-[-5px]">
        <FadeInWhenVisible>
          <div className="pt-10 w-4/6 justify-self-center grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-20">
            <div className="col-span-4 lg:col-span-2">
              <h4 className="text-[4vw] sm:text-[2vw] text-[#013161] pb-5">
                Take The 8 minute Call Challenge
              </h4>
              <ol className="list-decimal ml-10 text-[4vw] sm:text-[1.5vw]">
                <li className="font-heading">
                  Text someone you miss or wish you connected with more often.
                </li>
                <li className="font-heading">Chat with them for 8 minutes.</li>
                <li className="font-heading">Schedule your next call.</li>
              </ol>
              <br />
              <p className="text-[4vw] sm:text-[1.5vw]">
                Join the movement, pick up the phone and share your experience
                with us! Submit a short video of your experience.
              </p>
              <br></br>
              <div className="flex flex-col gap-2 text-[4vw] sm:text-[1.3vw]">
                <div className="flex items-center gap-2 text-md font-bold">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:edecho.org@gmail.com">edecho.org@gmail.com</a>
                </div>
                <div className="flex items-center gap-2 text-md font-bold">
                  <Instagram className="w-4 h-4" />
                  <a
                    href="https://www.instagram.com/the8minutecallproject/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @the8minutecallproject
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-4 lg:col-span-2 m-auto">
              <div className="ml-[-10%] md:ml-0">
                <InstagramEmbed />
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      </section>
    </>
  );
};
