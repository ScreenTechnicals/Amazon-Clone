import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Header />
      <div className="flex w-full overflow-hidden">
          <Sidebar />
          <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
