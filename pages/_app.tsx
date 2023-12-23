import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";

import "./global.css";
import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";
import StoreProvider from "../lib/StoreProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <StoreProvider>
        <NextUIProvider>
          <Component {...pageProps} />
          <Toaster />
        </NextUIProvider>
      </StoreProvider>
    </ClerkProvider>
  );
}
