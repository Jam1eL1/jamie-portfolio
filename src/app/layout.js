import "@/app/globals.css";
import { Providers } from "./providers";
import { Inter } from "next/font/google";

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
          {/* <div className="min-h-screen flex flex-col">
            <main className="flex-1">
              <div
                className="
            mx-auto 
            max-w-desktop
            py-16 md:py-20 xl:py-30
            flex flex-col
          "
              >
                {children}
              </div>
            </main>
            <footer></footer>
          </div> */}
          <div className="flex-1"><div className="flex flex-col max-w-desktop mx-auto md:min-w-tablet">{children}</div></div>
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
