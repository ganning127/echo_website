"use client";

export function EmailSignUpRegistration({
  text = "Email Us to Sign Up →",
}: {
  text?: string;
}) {
  return (
    <a
      href="mailto:info@edecho.org"
      className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#013161] text-white font-bold uppercase tracking-wide no-underline text-sm transition-colors hover:bg-[#1876d0]"
    >
      {text}
    </a>
  );
}
