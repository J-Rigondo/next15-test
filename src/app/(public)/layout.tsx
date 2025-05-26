export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-full w-[1240px] mx-auto">{children}</div>;
}
