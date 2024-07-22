import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Script from "next/script";
import { useState } from "react";
import { Box } from "@mui/material";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [scriptLoaded, setScriptLoaded] = useState<boolean>(false);

  return (
    <Box className={GeistSans.className}>
      <Script
        id="churnkey"
        strategy="afterInteractive"
        onReady={() => {
          setScriptLoaded(true);
        }}
      >
        {`(function(){
    if (!window.churnkey || !window.churnkey.created){
    window.churnkey = { created: true }
    const a = document.createElement('script')
    a.src = "https://assets.churnkey.co/js/app.js?appId=vupg9mh6t"
    a.async = true
    const b = document.getElementsByTagName('script')[0]
    b.parentNode.insertBefore(a, b)
    }
  })()`}
      </Script>
      <Component {...pageProps} scriptLoaded={scriptLoaded} />
    </Box>
  );
};

export default api.withTRPC(MyApp);
