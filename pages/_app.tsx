import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";

import "./global.css";
import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <NextUIProvider>
        <Component {...pageProps} />
        <Toaster />
      </NextUIProvider>
    </ClerkProvider>
  );
}
