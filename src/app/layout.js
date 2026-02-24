import "@/app/globals.css";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Jamie Lee – Portfolio",
  description: "Full stack developer portfolio",
};

function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="bg-background text-foreground font-inter">
        <Providers>
          <div className="min-h-screen flex flex-col">
            <div
              className="
            mx-auto 
            max-w-desktop
            py-16 md:py-20 xl:py-30 px-6 md:px-12
            flex flex-col relative
          "
            >
              <SiteHeader />
              {children}
            </div>
            <footer></footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
