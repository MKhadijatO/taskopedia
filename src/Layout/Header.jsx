import logo from "../images/react.png";

const subHeaderStyle = {
  color: "white",
  backgroundColor: "purple",
  textAlign: "center",
};

const MainHeader = () => {
  return (
    <div className="pt-3 py-1 pl-2" style={{backgroundColor: "navy"}}>
      <img src={logo} style={{height: "35px", verticalAlign: "top"}}></img>
      <span className="h2 pt-4 text-white" style={{fontWeight: "bold"}}> REACT COURSE - TaskOpedia</span>
    </div>  
  )
};

const SubHeader = () => {
  return <p className="heading1" style={subHeaderStyle}>This is an exciting course</p>;
};

const Header = ()=> {
  return (
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  );
};

export default Header;