import "./Form.css";
import UploadImg from "../../Assets/add-image.png";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Upload } from "../../Assets/icons/upload.svg";
let formDefaultValues = {
  title: "",
  summary: "",
  description: "",
  image: "",
  hackathonName: "",
  startDate: "",
  endDate: "",
  githubLink: "",
  otherLinks: "",
};

const Form = () => {
  //-----------edit form-----------------
  const navigate = useNavigate();
  const location = useLocation();
  const editItem = location.state?.editItem;

  formDefaultValues = editItem
    ? { ...formDefaultValues, ...editItem }
    : formDefaultValues;
  /////////////////////////////////////////////////////////////

  const [formValues, setFormValues] = useState(formDefaultValues);
  //Retrieve existing data from local storage (if any) otherwise it's an empty array.

  const [showImage, setShowImage] = useState();
  const [fileName, setFileName] = useState();

  const existingHackathon =
    JSON.parse(localStorage.getItem("hackathons")) || [];

  // // const [hackathon, setHackathon] = useState(existingHackathon);

  // const removeItem = () => {
  //   const updatedArray = existingHackathon.filter(
  //     (item) => item.id !== 1695988450554
  //   );
  //   localStorage.setItem("hackathons", JSON.stringify(updatedArray));
  // };

  // removeItem();
  const {
    title,
    summary,
    description,
    image,
    hackathonName,
    startDate,
    endDate,
    githubLink,
    otherLinks,
  } = formValues;

  console.log(title);
  //------onChange Handler------------------------------

  const formOnchangeHandle = (e) => {
    e.preventDefault();
    const { name, value, files } = e.target;

    if (name === "image" && files.length > 0) {
      setFileName(value.split("\\").pop());
      const reader = new FileReader();
      const file = files[0];

      reader.onloadend = () => {
        setFormValues({ ...formValues, [name]: reader.result });
        setShowImage(reader.result);
        console.log(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setFormValues({ ...formValues, [name]: value });
    }

    // setFormValues({ ...formValues, [name]: value });
  };

  //------onSubmit Handler------------------------------

  const formOnSubmitHandler = (e) => {
    // Verify that existingHackathon is an array; if not, initialize it as an empty array
    const existingHackathonArray = Array.isArray(existingHackathon)
      ? existingHackathon
      : [];

    //// Create a new entry with the form data
    const newEntry = {
      id: new Date().getTime(),
      ...formValues,
    };

    // Add the new entry to the existing data array
    const updatedData = [...existingHackathonArray, newEntry];

    localStorage.setItem("hackathons", JSON.stringify(updatedData));
    navigate("/");
  };

  ////////////////////////////////////////////////////////////////

  return (
    <div className="form__route">
      <form
        className="form__container"
        onSubmit={formOnSubmitHandler}
        method="POST"
        encType="multipart/form-data"
      >
        <h3 className="form__heading">New Hackathon Submission</h3>

        <label className="form__label">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Title of your submission"
          defaultValue={title}
          onChange={formOnchangeHandle}
          required
        />

        <label className="form__label">Summary</label>
        <input
          type="text"
          name="summary"
          defaultValue={summary}
          onChange={formOnchangeHandle}
          placeholder="A short summary of your submission (this will be visible with your submission)"
          required
        />

        <label className="form__label">Description</label>
        <textarea
          className="input__description"
          name="description"
          defaultValue={description}
          onChange={formOnchangeHandle}
          placeholder="Write a long description of your project. You can describe your idea and approach here."
          required
        ></textarea>

        <p className="input__description--count">0 / 3,000 characters</p>

        <label className="form__label">Cover Image</label>
        <p className="input__img--size">Minimum resolution: 360px X 360px</p>
        {showImage ? (
          <label className="form__img--upload uploaded" htmlFor="imageUpload">
            <img
              src={showImage}
              alt="Upload-i"
              className="form__uploaded--img"
            />
            <p className="file-name">{fileName}</p>
            <p className="re-upload__container">
              Reupload <Upload className="re-upload" />
            </p>
          </label>
        ) : (
          <label className="form__img--upload upload" htmlFor="imageUpload">
            <input
              type="file"
              accept="image/*"
              id="imageUpload"
              name="image"
              defaultValue={image}
              onChange={formOnchangeHandle}
              required
            />
            <img src={UploadImg} alt="Upload-i" className="form__img" />
          </label>
        )}

        <label className="form__label">Hackathon Name</label>
        <input
          type="text"
          name="hackathonName"
          defaultValue={hackathonName}
          onChange={formOnchangeHandle}
          placeholder="Enter the name of the hackathon"
          required
        />

        <div className="dates__container">
          <div className="form__date">
            <label htmlFor="dateInput" className="form__label">
              Hackathon Start Date
            </label>
            <input
              className="input__date"
              type="date"
              id="dateInput"
              name="startDate"
              defaultValue={startDate}
              placeholder="Select a Date"
              onChange={formOnchangeHandle}
              required
            />
          </div>
          <div className="form__date">
            <label htmlFor="dateInput" className="form__label">
              Hackathon End Date
            </label>
            <input
              className="input__date"
              type="date"
              id="dateInput"
              name="endDate"
              defaultValue={endDate}
              placeholder="Select a Date"
              onChange={formOnchangeHandle}
              required
            />
          </div>
        </div>

        <label className="form__label">GitHub Repository</label>
        <input
          type="text"
          name="githubLink"
          defaultValue={githubLink}
          onChange={formOnchangeHandle}
          placeholder="Enter your submission’s public GitHub repository link"
          required
        />

        <label className="form__label">Other Links</label>
        <input
          type="text"
          name="otherLinks"
          defaultValue={otherLinks}
          onChange={formOnchangeHandle}
          placeholder="You can upload a video demo or URL of you demo app here."
          required
        />
        <div className="btn__container">
          <button className="form__button" type="submit">
            Upload Submission
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
