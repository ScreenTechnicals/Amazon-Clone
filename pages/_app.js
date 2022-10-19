import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  useEffect(()=>{
    router.events.on("routeChangeStart", () => setProgress(50));
    router.events.on("routeChangeComplete", () => setProgress(100));
  },[])
  return (
    <div className="w-full h-screen overflow-hidden selection:bg-[#ffc164c1]">
      <LoadingBar
        height={4}
        color="#ff9900"
        waitingTime={300}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Header />
      <div className="flex w-full overflow-hidden">
          <Sidebar />
          <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
