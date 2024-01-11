import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <div>Hello!</div>
// );



function MainHeader(){
  return (
    <h1>REACT COURSE</h1>
  )
}

function SubHeader(){
  return (
    <p>This is an exciting course</p>
  )
}

//opening and closing tag
function Header() {
  return(
    <div>
      <MainHeader></MainHeader> 
      <SubHeader></SubHeader>
    </div>
  )
}

function MainBody() {
  //MainBody is written in pascal case. All react components are written in PASCAL CASE.
  return (
    <div>
      <p>In this course, we will learn react js by building Taskopedia</p>
      <ul>
        <li>Send details</li>
        <li>Contact the seamstress</li>
        <li>Watch the trouser video</li>
      </ul>
    </div>
  );
}

function Footer(){
  return(
    <p>Happy Coding</p>
  );
};

root.render(
  <div>
    <Header />
    <MainBody />
    <Footer/>
  </div>
); // The react '.render' can only accept one main wrapper parent element i.e the div element in this code wraps the mainbody and the p element in order for it to work properly.