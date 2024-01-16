import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./Header";
import Student from "./Student";
import Footer from "./Footer";
import MainBody from "./MainBody";
const root = ReactDOM.createRoot(document.getElementById("root"));

//another styling method forlarge vol styling

root.render(
  <div style={{backgroundColor: "black", color: "grey"}}>
    <Header />
    <MainBody />
    <div className="container row">Students Enrolled</div>
    <Student
      name="Okafor Nonso"
      experience={2}
      headshot="https://api.lorem.space/image/face?w=150&h=150"
    />
    <Student
      name="Olabisi Fatimah"
      experience={1}
      headshot="https://api.lorem.space/image/face?w=150&h=151"
    />
    <Student
      name="Wale Akanbi"
      experience={5}
      headshot="https://api.lorem.space/image/face?w=150&h=152"
    />
    <Footer />
  </div>
);
