import React from "react";
import { useState, useEffect } from "react";
import FileUpload from "./FileUpload/FileUpload";
import FileList from "./FileList/FileList";
import "./home.css";
import axios from "axios";
export default function Home() {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/").then((res) => {
      console.log(res.data);
      setFiles(res.data);
    });
  }, []);

  const removeFile = (filename) => {
    console.log(filename);
    setFiles(files.filter((file) => file !== filename));
  };
  return (
    <div>
      <div className="title">Upload file</div>
      <FileUpload files={files} setFiles={setFiles} removeFile={removeFile} />
      <FileList files={files} removeFile={removeFile} />
    </div>
  );
}
