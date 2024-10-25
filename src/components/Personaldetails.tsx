import React, { useEffect } from "react";
import "./Personaldetails.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContextProvider";

const Personaldetails: React.FC = () => {
  const userContext = React.useContext(UserContext);

  const [name, setName] = React.useState<string>("");
  const [surname, setSurname] = React.useState<string>("");
  const [age, setAge] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [address, setAddress] = React.useState<string>("");
  const [school, setSchool] = React.useState("");
  const [schoolLocation, setSchoolLocation] = React.useState("");
  const [college, setCollege] = React.useState("");
  const [collegeLocation, setCollegeLocation] = React.useState("");
  const [degree, setDegree] = React.useState("");
  const [degreeLocation, setDegreeLocation] = React.useState("");

  const [resetpersonalDetails, setResetpersonalDetails] = React.useState(false);
  useEffect(() => {
    if (resetpersonalDetails) {
      setName("");
      setSurname("");
      setAge("");
      setEmail("");
      setPhone("");
      setAddress("");
      setSchool("");
      setSchoolLocation("");
      setCollege("");
      setCollegeLocation("");
      setDegree("");
      setDegreeLocation("");
      setResetpersonalDetails(false);
    }
  }, [resetpersonalDetails]);

  const setPersonalDetails = userContext?.setPersonalDetails;
  const navigate = useNavigate();

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
      navigate("/DisplayDetails");
    
  };
  const onSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const ageNumber = parseInt(age, 10);

    if (setPersonalDetails) {
      setPersonalDetails((prevDetails) => [
        ...prevDetails,
        {
          name,
          surname,
          age: ageNumber,
          email,
          phone,
          address,
          school,
          schoolLocation,
          college,
          collegeLocation,
          degree,
          degreeLocation,
        },
      ]);
      setResetpersonalDetails(true);
    }

  };


  return (
    <>
      <div className="form-container">
        <h1 className="form-title">Personal Details</h1>
        <form className="form">
          <label className="label">
            Name:
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="label">
            Surname:
            <input
              className="input"
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </label>
          <label className="label">
            Age:
            <input
              className="input"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
          <label className="label">
            Email:
            <input
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="label">
            Phone:
            <input
              className="input"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <label className="label">
            Address:
            <input
              className="input"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <h1>Academic Details</h1>
          <div className="field">
            <label>
              School:
              <input
                type="text"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
              />
            </label>
          </div>
          <div className="field">
            <label>
              School Location:
              <input
                type="text"
                value={schoolLocation}
                onChange={(e) => setSchoolLocation(e.target.value)}
              />
            </label>
          </div>
          <div className="field">
            <label>
              College:
              <input
                type="text"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
              />
            </label>
          </div>
          <div className="field">
            <label>
              College Location:
              <input
                type="text"
                value={collegeLocation}
                onChange={(e) => setCollegeLocation(e.target.value)}
              />
            </label>
          </div>
          <div className="field">
            <label>
              Degree:
              <input
                type="text"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
              />
            </label>
            <label>
              Degree Location:
              <input
                type="text"
                value={degreeLocation}
                onChange={(e) => setDegreeLocation(e.target.value)}
              />
            </label>
          </div>
        </form>
        <Button
          className="-button"
          type="submit"
          variant="outlined"
          size="medium"
          onClick={(e) => onSave(e)}
        >
          Save
        </Button>
        <Button
          className="submit-button"
          type="submit"
          variant="outlined"
          size="medium"
          onClick={(e) => onSubmit(e)}
        >
          Submit
        </Button>
      </div>
      <div className="books_search">
        <h1>Books Store</h1>
      <Button
      className="submit-button"
      type="submit"
      variant="outlined"
      size="medium"
      onClick={() => navigate("/books")}
      >Books</Button>
      </div>
    </>
  );
};

export default Personaldetails;
