import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Script from "next/script";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={GeistSans.className}>
      <Component {...pageProps} />
      <Script id="churnkey">
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
    </div>
  );
};

export default api.withTRPC(MyApp);
