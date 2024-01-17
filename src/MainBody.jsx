import Student from "./Components/Student/Student";
import StudentReview from "./Components/Student/StudentReview";

export default function MainBody() {
  const courseTopic = "React Js";
  const totalLecture = 2;
  return (
    <div style={{ minHeight: "70vh" }}>
      <p>
        In this course, we will learn {courseTopic} by building Taskopedia
        <br />
        Total Lecture - {totalLecture}
      </p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class Components</li>
      </ul>
      {/* <div>
          Enter Task :{" "}
          <input maxLength={10} readOnly={false} placeholder="Read"></input>
        </div> */}
      <div className="container row">Students Enrolled</div>
      <Student
        name="Okafor Nonso"
        experience={2}
        headshot="https://api.lorem.space/image/face?w=150&h=150"
      >
        <StudentReview />
      </Student>
      <Student
        name="Olabisi Fatimah"
        experience={1}
        headshot="https://api.lorem.space/image/face?w=150&h=151"
      >
        <StudentReview />
      </Student>
      <Student
        name="Wale Akanbi"
        experience={5}
        headshot="https://api.lorem.space/image/face?w=150&h=152"
      />
    </div>
  );
}
