import "./globals.css";

export const metadata = {
  title: "Aashu Port",
  description: "oiqwhd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
