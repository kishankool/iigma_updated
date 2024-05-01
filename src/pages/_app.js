// _app.js

import RootLayout from './layout'; // Import your RootLayout component
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { useEffect } from "react";
import dynamic from "next/dynamic";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default dynamic (() => Promise.resolve(MyApp), {ssr: false})
