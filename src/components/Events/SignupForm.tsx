export const SignupForm = ({
  src,
  title = "Sign Up",
}: {
  src: string;
  title?: string;
}) => (
  <div className="my-8">
    <h2 className="text-2xl font-extrabold uppercase tracking-wide text-[#013161] mb-4">
      {title}
    </h2>
    <iframe
      src={src}
      className="w-full rounded-2xl border border-gray-200 shadow-sm"
      style={{ minHeight: "600px" }}
      title={title}
    />
  </div>
);
