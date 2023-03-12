import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./fileUpload.css";
import axios from "axios";

const FileUpload = ({ files, setFiles, removeFile }) => {
  const uploadHandler = (event) => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("file", file);
    axios
      .post("http://localhost:8080/", formData)
      .then((res) => {
        console.log(files, file);
        axios.get("http://localhost:8080/").then((res) => {
          console.log(res.data);
          setFiles(res.data);
        });
      })
      .catch((err) => {
        // inform the user
        console.error(err);
      });
  };

  return (
    <>
      <div className="file-card">
        <div className="file-inputs">
          <input type="file" onChange={uploadHandler} id="fileInput" />
          <button>
            <i>
              <FontAwesomeIcon icon={faPlus} />
            </i>
            Upload
          </button>
        </div>

        <p className="main">Supported files</p>
        <p className="info">PDF, JPG, PNG</p>
      </div>
    </>
  );
};

export default FileUpload;
