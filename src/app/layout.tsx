import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { lato } from "./fonts";
import Silktide from "@/components/Tracking/Silktide";
import GoogleConsent from "@/components/Tracking/GoogleConsent";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    template: "%s | Early Cardiovascular Health Outreach (ECHO)",
    default: "Early Cardiovascular Health Outreach (ECHO)",
  },
  description:
    "Welcome to ECHOVILLE — the land inside your body! ECHO helps kids learn heart-healthy habits through mindfulness, movement, nutrition, and rest.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased ${lato.variable}`}>
        <GoogleConsent />
        <Silktide />
        {/* App content */}
        {children}

        {/* Google Analytics (always loaded, consent-controlled) */}
        <GoogleAnalytics gaId="G-S3G9CP9H0H" />

       <Script
  id="klaviyo-library"
  src="https://static.klaviyo.com/onsite/js/TiMahB/klaviyo.js?company_id=TiMahB"
  strategy="afterInteractive"
/>

{/* Initialize Klaviyo */}
<Script
  id="klaviyo-init"
  strategy="afterInteractive"
>
  {`
    !function(){
      if(!window.klaviyo){
        window._klOnsite=window._klOnsite||[];
        try{
          window.klaviyo=new Proxy({},{
            get:function(n,i){
              return "push"===i
                ? function(){
                    var n;
                    (n=window._klOnsite).push.apply(n,arguments)
                  }
                : function(){
                    for(var n=arguments.length,o=new Array(n),w=0;w<n;w++)o[w]=arguments[w];
                    var t="function"==typeof o[o.length-1]?o.pop():void 0;
                    var e=new Promise(function(resolve){
                      window._klOnsite.push([i].concat(o,[function(i){
                        t&&t(i);
                        resolve(i);
                      }]));
                    });
                    return e;
                  };
            }
          });
        }catch(n){
          window.klaviyo=window.klaviyo||[];
          window.klaviyo.push=function(){
            var n;
            (n=window._klOnsite).push.apply(n,arguments);
          };
        }
      }
    }();
  `}
</Script>
      </body>
    </html>
  );
}
