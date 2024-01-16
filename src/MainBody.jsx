export default function MainBody() {
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