import "../styles/global.scss";

export const metadata = {
  title: "Wiki Pages",
  description: "A System to generate wikis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
