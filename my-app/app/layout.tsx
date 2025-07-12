import Navbar from "@/component/Navbar";
import "./globals.css";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Bestleazt NextJS",
  description: "NextJS 15 Tutorial",
  keywords: "blah blah, webpage",
};
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};
export default layout;
