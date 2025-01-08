import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>Link</div>
      <Link href="/videos">video</Link>
      <Link href="/videos/ajksdhakjhd">video detail</Link>

      {children}
    </div>
  );
}
