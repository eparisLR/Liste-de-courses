import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";

import "./global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
