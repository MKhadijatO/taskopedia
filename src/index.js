import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./Header";
import Student from "./Student";

const root = ReactDOM.createRoot(document.getElementById("root"));

//another styling method forlarge vol styling

function MainBody() {
  const courseTopic = "React Js";
  const totalLecture = 2;
  return (
    <div>
      <p>In this course, we will learn {courseTopic} by building Taskopedia</p>
      <p>Total Lecture - {totalLecture}</p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class Components</li>
      </ul>
      {/* <div>
        Enter Task :{" "}
        <input maxLength={10} readOnly={false} placeholder="Read"></input>
      </div> */}
    </div>
  );
}


function Footer() {
  return (
    <p style={{ color: "white", backgroundColor: "blue", textAlign: "center" }}>
      Happy Coding
    </p>
  );
}

root.render(
  <div className="">
    <Header />
    <MainBody />
    <div className="container row">Students Enrolled</div>
    <Student name="Okafor Nonso" experience={2} headshot="https://api.lorem.space/image/face?w=150&h=150"/>
    <Student name="Olabisi Fatimah" experience={1} headshot="https://api.lorem.space/image/face?w=150&h=151"/>
    <Student name="Wale Akanbi" experience={5} headshot="https://api.lorem.space/image/face?w=150&h=152"/>
    <Footer />
  </div>
);
