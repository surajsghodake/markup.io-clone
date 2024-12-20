import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
// import WorkSpace from "./components/WorkSpace";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Sidebar />
        <div className="content">
          {/* <WorkSpace /> */}
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
