import Image from "next/image";
import { FadeInWhenVisible } from "../Animation/FadeInWhenVisible";

const TitleValueListItem = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => {
  return (
    <li className="text-[24px]">
      <p className="">
        <span className="font-bold">{title}: </span>
        {value}
      </p>
    </li>
  );
};

const PillarImage = ({ src }: { src: string }) => {
  return (
    <div className="relative w-full aspect-square">
      <Image
        src={src}
        alt={src.split("/").pop()?.split(".")[0] || "Pillar Image"}
        fill
        className="object-contain"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 200px"
      />
    </div>
  );
};

export const MissionSection = () => {
  const imageSize = 120;
  return (
    <section className="bg-white md:px-20 text-[#012C5D] space-y-16">
      <FadeInWhenVisible>
        <div className="flex flex-col items-start gap-6">
          <h2 className="text-2xl font-bold text-[48px]">Our Four Pillars</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
            <PillarImage src="/pillars/mind.png" />
            <PillarImage src="/pillars/eat.png" />
            <PillarImage src="/pillars/sleep.png" />
            <PillarImage src="/pillars/move.png" />
          </div>

          <p className="text-[24px]">
            Here in Echoville, we have four main pillars that reflect our
            values:
          </p>
          <ul className="list-disc pl-8 space-y-3">
            <TitleValueListItem
              title="Mind-Well"
              value="The actions we take and the words we say have a great impact on our quality of life. Being one with our emotions helps us set up a basis of serenity. "
            />
            <TitleValueListItem
              title="Eat-Well"
              value="Eating balanced meals and snacks is a great way to feel energized and strong. Some important food groups are: fruits, vegetables, grains, proteins, and dairy."
            />
            <TitleValueListItem
              title="Sleep-Well"
              value="Our bodies work hard to keep us up and moving. Allowing ourselves time to sleep is essential to replenish the energy we spend during the day."
            />
            <TitleValueListItem
              title="Move-Well"
              value="Movement is an exciting way to keep our bodies healthy and strong. Running, jumping, dancing, walking, any movement is good… The possibilities of movement are endless!"
            />
          </ul>
        </div>
      </FadeInWhenVisible>

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
              <TitleValueListItem
                title="How the heart works"
                value="Explore how your
                heart beats, pumps, and powers your body with fun visuals and
                mini-games."
              />
              <TitleValueListItem
                title="Healthy habits"
                value="Bite-sized lessons on
                nutrition, physical activity, stress, and sleep — and how they
                affect heart health. This information shows how everyday choices
                protect the heart."
              />
              <TitleValueListItem
                title="Beyond the body"
                value="Understand how where
                you live, play, and learn can shape your heart health."
              />
              <TitleValueListItem
                title="Level up your learning"
                value="Extra games,
                tools, and real-world missions to test your heart health
                knowledge."
              />
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
            <ul className="list-disc pl-8 space-y-3">
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
            <ul className="list-disc pl-8 space-y-3">
              <TitleValueListItem
                title="Empowered Choices"
                value="Make informed decisions
                about food, activity, and wellness."
              />

              <TitleValueListItem
                title="Youth Advocacy"
                value="Gain tools to speak out about
                heart health."
              />

              <TitleValueListItem
                title="Community Action"
                value="Lead a heart health
                initiative — from walkathons to awareness posters."
              />
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
