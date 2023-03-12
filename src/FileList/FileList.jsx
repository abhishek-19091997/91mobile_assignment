import axios from "axios";
import React from "react";
import FileItem from "./../FileItem/FileItem";

const FileList = ({ files, removeFile }) => {
  const deleteFileHandler = (_name) => {
    axios
      .delete(`http://localhost:8080/?name=${_name}`)
      .then((res) => removeFile(_name))
      .catch((err) => console.error(err));
  };
  return (
    <ul className="file-list">
      {files &&
        files.map((f) => (
          <a key={f}>
            <FileItem file={f} deleteFile={deleteFileHandler} />
          </a>
        ))}
    </ul>
  );
};

export default FileList;
