import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import MainBody from "./MainBody";
const root = ReactDOM.createRoot(document.getElementById("root"));

//another styling method forlarge vol styling

root.render(
  <div style={{backgroundColor: "black", color: "grey"}}>
    <Header />
    <MainBody />
    <Footer />
  </div>
);
