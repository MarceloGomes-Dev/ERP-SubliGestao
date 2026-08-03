export default function RHLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      {/*
        This layout serves as a wrapper specifically for the RH module,
        allowing for specific context providers or nested navigation if needed in the future,
        maintaining the robust architecture of the ERP.
      */}
      {children}
    </div>
  );
}
