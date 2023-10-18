import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";

import "./global.css";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
      <Toaster />
    </NextUIProvider>
  );
}
