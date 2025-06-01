import Image from "next/image";
import { FadeInWhenVisible } from "../Animation/FadeInWhenVisible";

export const MissionSection = () => {
  const imageSize = 120;
  return (
    <section className="bg-white md:px-20 text-[#012C5D] space-y-16">
      <FadeInWhenVisible>
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2 text-[48px]">APPROACH</h2>
            <p className="text-[24px]">
              At ECHO, we believe youth are powerful agents of change. By
              combining education, technology, and health, we give them the
              skills to lead, advocate, and transform public health outcomes in
              their communities.
            </p>
          </div>
          <Image
            src="/apple.png"
            alt="Apple"
            width={imageSize}
            height={imageSize}
            className="self-center"
          />
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <div className="flex flex-col md:flex-row items-start gap-6 text-[24px]">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-[48px]">CONTENT</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <h5 className="inline">HOW THE HEART WORKS:</h5> Explore how
                your heart beats, pumps, and powers your body with fun visuals
                and mini-games.
              </li>
              <li>
                <h5 className="inline">HEALTHY HABITS:</h5> Bite-sized lessons
                on nutrition, physical activity, stress, and sleep — and how
                they affect heart health. This information shows how everyday
                choices protect the heart.
              </li>
              <li>
                <h5 className="inline">BEYOND THE BODY:</h5> Understand how
                where you live, play, and learn can shape your heart health.
              </li>
              <li>
                <h5 className="inline">LEVEL UP YOUR LEARNING:</h5> Extra games,
                tools, and real-world missions to test your heart health
                knowledge.
              </li>
            </ul>
          </div>
          <Image
            src="/book.png"
            alt="Book"
            width={imageSize}
            height={imageSize}
            className="self-center"
          />
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <div className="flex flex-col md:flex-row items-start gap-6 text-[24px]">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-[48px]">GOALS</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>
                Deliver engaging, science-based content on cardiovascular
                anatomy and function.
              </li>
              <li>
                Increase awareness of social determinants and disparities in
                heart health.
              </li>
              <li>
                Empower students to advocate for heart-friendly environments at
                school and beyond.
              </li>
              <li>
                Encourage healthy lifestyle choices through interactive,
                behavior-based learning.
              </li>
              <li>
                Connect heart health to leadership, action, and technology.
              </li>
            </ul>
          </div>
          <Image
            src="/worm.png"
            alt="Worm"
            width={imageSize}
            height={imageSize}
            className="self-center"
          />
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <div className="flex flex-col md:flex-row items-start gap-6 text-[24px]">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-[#012C5D] text-[48px]">
              OUTCOME
            </h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <strong>Empowered Choices:</strong> Make informed decisions
                about food, activity, and wellness.
              </li>
              <li>
                <strong>Youth Advocacy:</strong> Gain tools to speak out about
                heart health.
              </li>
              <li>
                <strong>Community Action:</strong> Lead a heart health
                initiative — from walkathons to awareness posters.
              </li>
            </ul>
          </div>
          <Image
            src="/trophy.png"
            alt="Trophy"
            width={imageSize}
            height={imageSize}
            className="self-center"
          />
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <p className="text-sm text-gray-700 pt-4 text-[24px]">
          We use what students learn — and do — to shape better heart health
          content, create smarter tools, and design new ways to connect health
          with leadership, advocacy, and action. As science and knowledge grows
          and communities change, so do we. Like the heart, we keep beating!
        </p>
      </FadeInWhenVisible>
    </section>
  );
};
