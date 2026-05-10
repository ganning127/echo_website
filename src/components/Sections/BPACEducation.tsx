import Image from "next/image";

export function EducationSection() {
  return (
    <div className="w-full">
      {/* Super Heart Starts Young */}
      <section className="w-full py-12 lg:py-16 px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="font-['Bangers',sans-serif] text-white text-[36px] lg:text-[48px] mb-4">
            A Super Heart Starts Young
          </h2>
          <p className="font-['Lato',sans-serif] text-white text-[20px] lg:text-[24px]">
            Blood pressure is the amount of force your blood pushes against the walls of your arteries.
          </p>
        </div>
      </section>

      {/* Blood Pressure Readings */}
      <section className="w-full py-12 lg:py-16 px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Blood Pressure Monitor Image */}
         <div className="w-full lg:w-[529px] bg-[#cde2ff] rounded-[10px] relative overflow-hidden min-h-[300px] lg:min-h-[400px]">
  {/* Action lines fill the entire container */}
  <Image
    src="/Superhero Action Lines.png"
    alt="BPAC"
    fill
    className="object-cover"
  />
  {/* Blood pressure monitor centered */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="relative w-[180px] lg:w-[420px] h-[220px] lg:h-[280px]">
      <Image
        src="/BP monitor.png"
        alt="Blood pressure monitor"
        fill
        className="object-contain"
      />
    </div>
  </div>
</div>

            {/* Text Content */}
            <div className="flex-1 text-white">
              <h3 className="font-['Bangers',sans-serif] text-[28px] lg:text-[36px] mb-5">
                Blood pressure readings are made up of two values:
              </h3>
              <div className="font-['Lato',sans-serif] text-[20px] lg:text-[24px] space-y-4">
                <p>
                  <span className="font-['Bangers',sans-serif]">Systolic blood pressure:</span> the pressure on the blood vessels when the heart beats
                </p>
                <p>
                  <span className="font-['Bangers',sans-serif]">Diastolic blood pressure:</span> the pressure on the blood vessels when the heart muscle relaxes
                </p>
                <p>
                  Most blood pressure monitors also measure pulse, the number of times your heart beats per minute. Pulse isn't a blood pressure reading, but can be a heart health indicator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hypertension Info */}
      <section className="w-full py-12 lg:py-16 px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto text-white">
          <p className="font-['Lato',sans-serif] text-[20px] lg:text-[24px] mb-12">
            Normal blood pressure is below 120/80. If blood pressure increases then remains at 130/90 for multiple readings, that is called hypertension. Hypertension is a chronic condition, which can lead to heart disease.
          </p>

          <h3 className="font-['Bangers',sans-serif] text-[28px] lg:text-[36px] mb-6">
            There are several things that can increase the risk of high blood pressure:
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 font-['Lato',sans-serif] text-[20px] lg:text-[24px]">
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span>•</span>
                <span>Genetics (family history)</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Unhealthy diet</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span>•</span>
                <span>Too much stress</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Not enough movement (sedentary lifestyles)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Heart Healthy Choices */}
      <section className="w-full py-12 lg:py-16 px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto text-white">
          <h2 className="font-['Bangers',sans-serif] text-[36px] lg:text-[48px] mb-5">
            Why is it important?
          </h2>
          <p className="font-['Lato',sans-serif] text-[20px] lg:text-[24px] mb-8">
            Even though some of it may sound scary, Echo Heroes have no need to fear! To help keep blood pressure at healthy levels, you can make heart-healthy choices. Some examples of these include:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 font-['Lato',sans-serif] text-[20px] lg:text-[24px] mb-12">
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span>•</span>
                <span>Exercising regularly</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Practicing mindfulness and relaxation activities</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span>•</span>
                <span>Getting good quality sleep</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Eating healthy foods and limiting extra sodium and added sugar</span>
              </li>
            </ul>
          </div>

          <h3 className="font-['Bangers',sans-serif] text-[#ffcd29] text-[32px] lg:text-[40px] text-center">
            Protect Your Heart!
          </h3>
        </div>
      </section>
    </div>
  );
}
