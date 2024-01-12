
import ReactDOM from "react-dom/client";
import "./CSS/style.css";


const root = ReactDOM.createRoot(document.getElementById("root"));

//another styling method forlarge vol styling
const mainHeaderStyle = {
  color: "white",
  backgroundColor: "purple",
  fontWeight: "bold",
  textAlign: "center"
}

function MainHeader(){
  return (
    <h1 style={mainHeaderStyle}>REACT COURSE</h1>
  )
}

function SubHeader(){
  return (
    <p className="heading1" >This is an exciting course</p>
  )
}

function Header() {
  return(
    <div>
      <MainHeader></MainHeader> 
      <SubHeader></SubHeader>
    </div>
  )
}

function MainBody() {
  const courseTopic = "React Js"
  const totalLecture = 3
  return (
    <div>
      <p>In this course, we will learn {courseTopic} by building Taskopedia</p>
      <p>Total Lecture - {totalLecture}</p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class Components</li>
      </ul>
      <div>
        Enter Task : <input maxLength={10} readOnly={false} placeholder="Read"></input>
      </div>
    </div>
  );
}

function Students(){
  const fullName = "John Damilola";
  const CodingExp = 2;

  return (
    <div className="container p4">
      <div className="row" >Students Enrolled</div>
      <div className="ro border">
        <div className="col-2">
          <img src={`https://ui-avatars.com/api/?name=${fullName}`} className="w-100"></img>
        </div>
        <div className="col-10">
          {fullName} <br/>
          Coding Experience: {CodingExp} years
        </div>
      </div>
    </div>
  )
}

function Footer(){
  return(
    <p style={{color:"white", backgroundColor:"blue",textAlign:"center"}}>Happy Coding</p>
  );
};

root.render(
  <div>
    <Header />
    <MainBody />
    <Footer/>
  </div>
); 