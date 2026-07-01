import "./globals.css";

export const metadata = {
  title: "Gator Nation Football Podcast",
  description:
    "A modern home for GNFP episodes, member extras, and Florida football conversation.",
  keywords: [
    "Gator Nation Football Podcast",
    "Florida football podcast",
    "Gator football",
    "Florida Gators",
    "college football podcast",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
