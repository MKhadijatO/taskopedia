import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./header";

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
      <div>
        Enter Task :{" "}
        <input maxLength={10} readOnly={false} placeholder="Read"></input>
      </div>
    </div>
  );
}

function Students() {
  const fullName = "John Damilola";
  const codingExp = 3;

  return (
    <div className="container p4">
      <div className="row">Students Enrolled</div>
      <div className="row border">
        <div className="col-2">
          <img
            src={`https://ui-avatars.com/api/?name=${fullName}`}
            alt="display-avatar"
            className="w-100"
          ></img>
        </div>
        <div className="col-10">
          {fullName}
          <br />
          Coding Experience: {codingExp} years
        </div>
      </div>
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
  <div>
    <Header />
    <MainBody />
    <Students />
    <Students />
    <Students />
    <Footer />
  </div>
);
