import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mukta = localFont({
  src: [
    {
      path: "../../public/fonts/MuktaVaani-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/MuktaVaani-Bold.ttf",
      weight: "700",
      style: "normal"
    }
  ],
  variable: "--font-mukta"
});

export const metadata = {
  title: "Sophia Search",
  description: "App Sophia Search"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={mukta.variable}>
      <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}