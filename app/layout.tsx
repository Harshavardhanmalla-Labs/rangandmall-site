import AppLauncher from "@/components/AppLauncher";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0A0D14] text-[#E8EBF2]">
        <AppLauncher />
        {children}
      </body>
    </html>
  );
}
