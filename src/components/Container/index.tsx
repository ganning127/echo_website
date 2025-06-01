export const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <main className={className}>
      <div className="p-8 max-w-7xl w-full mx-auto">{children}</div>
    </main>
  );
};
