import { Container, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./Footer";
import NavBar from "./NavBar";
import QueryClientProvider from "./QueryClientProvider";
import AuthProvider from "./auth/Provider";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AutoGrader",
  description: "A short English essay marking application.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/wirte.png" />
      </head>
      <body className={inter.className}>
        <QueryClientProvider>
          <AuthProvider>
            <Providers>
              <Theme accentColor="sky">
                <NavBar />
                <Container m="6">
                  <main>{children}</main>
                </Container>
                <Footer />
              </Theme>
            </Providers>
          </AuthProvider>
        </QueryClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
