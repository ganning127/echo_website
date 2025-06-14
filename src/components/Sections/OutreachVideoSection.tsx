import { FadeInWhenVisible } from "../Animation/FadeInWhenVisible";
import Image from "next/image";

export const OutreachVideoSection = () => {
  return (
    <>
      <section className="w-full sm:mt-[25%] md:mt-[10%] lg:mt-[1%]">
        <FadeInWhenVisible>
          <div className="pt-10 w-5/6 justify-self-center grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-30">
            <div className="col-span-3 md:col-span-5 lg:col-span-2 lg:order-1 order-2 pb-5 mb-5 text-[4vw] sm:text-[1.5vw]">
              <br />
              <h3 className="text-[30px] text-[#013161]">
                8 Minute Call Project
              </h3>
              <p>
                Did you know loneliness can increase the risk for premature
                death as much as smoking up to 15 cigarettes a day?
              </p>
              <br></br>
              <p>
                Just being alone can increase the risk of heart diseases and
                stroke. So when you are feeling alone, make sure you make some
                time for connection.
              </p>
              <br></br>
              <p>
                Inspired by Simon Sinek, we started
                <strong> The 8 Minute Call Project</strong> to alleviate the
                feelings of loneliness among young people. The concept is
                simple: you call a friend to talk for 8 minutes. When the 8
                minutes are up, you simply schedule the next one.
              </p>
            </div>
            <div className="col-span-3 md:col-span-5 lg:col-span-3 z-0 justify-self-center lg:order-1 order-1">
              <div className="bg-[#D7BDE7] border-[#7B5AA1] border-20 border-double w-full lg:w-[50vw]">
                <iframe
                  className="w-full lg:h-[30vw] md:h-[250px] h-[150px]"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/qpmOABYdZbU?si=gXVG_Ob1gu0EqIit"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                ></iframe>
              </div>
              <Image
                className="relative w-[50vw] m-auto"
                src="/EntertainmentCenter.png"
                alt="entertainment center"
                width="800"
                height="100"
              />
            </div>
          </div>
          <div>
            <Image
              className="relative object-contain w-full mt-[-30px]"
              src="/CouchOutreach.png"
              alt="door"
              width="800"
              height="100"
            />
          </div>
        </FadeInWhenVisible>
      </section>
    </>
  );
};
