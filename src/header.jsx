const mainHeaderStyle = {
  color: "white",
  backgroundColor: "purple",
  fontWeight: "bold",
  textAlign: "center",
};

function MainHeader() {
  return <h1 style={mainHeaderStyle}>REACT COURSE</h1>;
}

function SubHeader() {
  return <p className="heading1">This is an exciting course</p>;
}

export default function Header() {
  return (
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  );
}


