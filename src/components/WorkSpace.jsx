import { useState } from "react";
import FileInput from "./FileInput";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { postActions } from "../store/postSlice";

const WorkSpace = () => {
  const files = useSelector((store) => store.post);
  // console.log(files);

  return (
    <>
      <FileInput />
      <div className="post-items-container">
        {files &&
          files.map((file) => {
            return <Post key={file.id} file={file} />;
          })}
      </div>
    </>
  );
};

export default WorkSpace;
