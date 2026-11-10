type MemoryGardenRegistrationProps = {
  url: string;
  buttonText?: string;
};

export function MemoryGardenRegistration({
  url = "https://go.hawaii.edu/BER",
  buttonText = "Register Here",
}: MemoryGardenRegistrationProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md text-center">
      <h3 className="text-2xl font-bold text-[#013161] mb-3">
        Ready to Join Us?
      </h3>

      <p className="text-[#013161] mb-6">
        Click below to visit the external registration page.
      </p>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-3 rounded-xl bg-[#013161] text-white font-bold uppercase tracking-wide text-sm transition-colors hover:bg-[#1876d0]"
      >
        {buttonText} →
      </a>
    </div>
  );
}
