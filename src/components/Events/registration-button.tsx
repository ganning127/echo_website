export function RegistrationButton({
  text = "Reserve Your Spot →",
}: {
  text?: string;
}) {
  return (
    <a
      href="#registration"
      className="inline-flex md:hidden items-center justify-center px-6 py-3 rounded-xl bg-[#013161] text-white font-bold uppercase tracking-wide no-underline hover:bg-[#1876d0]"
    >
      {text}
    </a>
  );
}
