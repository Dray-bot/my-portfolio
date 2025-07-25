import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Ajibola Ayomide | Frontend Developer",
  description: "Frontend Dev. Dreamer. Builder.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
