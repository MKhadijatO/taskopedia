import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <div>Hello!</div>
// );

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
root.render(<MainBody/>)