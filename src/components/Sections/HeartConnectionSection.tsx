"use client";
import { useState } from "react";
import Image from "next/image";
import { FadeInWhenVisible } from "../Animation/FadeInWhenVisible";

export const HeartConnectionSection = () => {
  const [heartbeatImage, setHeartbeatImage] = useState(
    "/60_MPH_Infographic.gif"
  );

  const handleImageSwap = () => {
    setHeartbeatImage((prev) =>
      prev === "/60_MPH_Infographic.gif"
        ? "/120_MPH_Infographic.gif"
        : "/60_MPH_Infographic.gif"
    );
  };

  return (
    <section className="bg-[#ffffff] w-full pb-20">
      <FadeInWhenVisible>
        <div className="pt-10 w-5/6 justify-self-center columns-2 flex flex-col-reverse md:flex-row items-start gap-10">
          <div className="w-[100%] text-[3.5vw] sm:text-[1.5vw]">
            <h4 className="text-[48px]">Music Break</h4>
            As you listen, notice how your body responds.
            <ul className="list-disc ml-10">
              <li>Is your heart beating faster or slower?</li>
              <li>Do you feel more energized or more relaxed?</li>
              <li> Are you breathing differently?</li>
            </ul>
            <br />
            <p>
              Even though emotions begin in the brain, music can influence how
              your body reacts physically. Music can lower the activity of the
              sympathetic nervous system (which controls the &quot;fight or
              flight&quot; response), reduce levels of the stress hormone
              cortisol, and increase dopamine, a chemical linked to pleasure and
              motivation<sup>1</sup>. These changes can help improve both
              emotional well-being and heart health.
            </p>
            <br />
            <p>
              Did you know that different types of music can cause different
              physical reactions? A song can affect your heart!
            </p>
            <br />
            <p>For example:</p>
            <ul className="list-disc ml-10">
              <li>
                Fast, energetic music (like upbeat pop) often raises heart rate
                and breathing<sup>2</sup>.
              </li>
              <li>
                Slow, soothing music (like classical or acoustic pieces) can
                lower heart rate and reduce stress<sup>2</sup>.
              </li>
            </ul>
            <br />
            <p>
              This is called “entrainment,” where your body&apos;s rhythms, like
              your heartbeat and breathing, start to match the tempo of the
              music you&apos;re hearing<sup>3</sup>. It’s similar to how people
              naturally start walking in step with a drumbeat. Just like working
              out increases heart rate and improves circulation, music can
              stimulate the heart in similar ways. While not a replacement for
              physical exercise, music can regulate and support cardiovascular
              and emotional well-being.
            </p>
            <br></br>
          </div>
          <div>
            <Image
              className="rounded-sm"
              src={heartbeatImage}
              width={700}
              height={400}
              alt="heart connection"
            />
            <Image
              className="m-auto relative bottom-[20vw] w-[8vw] md:bottom-[7vw] md:w-[2vw] cursor-pointer"
              src="/Music Icon.png"
              width={40}
              height={40}
              alt="music button"
              onClick={handleImageSwap}
            />
          </div>
        </div>
        {/*citations*/}
        <div className="pt-10 w-5/6 justify-self-center text-[11px] italic">
          <p>
            <sup>1</sup>
            Fleming, R., & Robb, S. L. (2020). Can Music Touch the Heart?
            Commentary on the Benefits of Music Listening for People Living With
            Heart Failure. Journal of cardiac failure, 26(7), 552–554.
            <a href="https://doi.org/10.1016/j.cardfail.2020.06.013">
              https://doi.org/10.1016/j.cardfail.2020.06.013
            </a>
          </p>
          <p>
            <sup>2</sup>
            Darki, C., Riley, J., Dadabhoy, D. P., Darki, A., & Garetto, J.
            (2022). The effect of classical music on heart rate, blood pressure,
            and mood. Cureus, 14(7), e27348.
            <a href="https://doi.org/10.7759/cureus.27348">
              https://doi.org/10.7759/cureus.27348
            </a>
          </p>
          <p>
            <sup>3</sup>
            Juslin, P. N., Harmat, L., Barradas, G. T., Omstedt, G., & Redtzer,
            V. (2024). Rhythmic entrainment of heart rate as a mechanism for
            musical emotion induction: A plausible hypothesis in need of
            evidence. Psychology of Music. Advance online publication.
            <a href="https://doi.org/10.1177/03057356241302809">
              https://doi.org/10.1177/03057356241302809
            </a>
          </p>
        </div>
      </FadeInWhenVisible>
    </section>
  );
};
