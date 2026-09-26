import { FitLogProvider } from "@/context/FitLogContext";
import Navbar from "@/component/Navbar";
import "./globals.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/component/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FitLogProvider>
          <Navbar />

          {children}
          <Footer />
          <ToastContainer position="top-right" autoClose={2000} theme="dark" />
        </FitLogProvider>
      </body>
    </html>
  );
}
