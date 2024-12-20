import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Post = ({ file }) => {
  const [fileUrl, setFileUrl] = useState(null);

  const normalDate = new Date(file.id).toLocaleString("en-GB", {
    timeZone: "Asia/Kolkata",
  });
  // setFileUrl(file)

  // useEffect(() => {
  //   // Create an object URL when the file changes
  //   const url = URL.createObjectURL(file);
  //   setFileUrl(url);

  //   // Clean up the URL when thimge component unmounts or file changes
  //   return () => URL.revokeObjectURL(url);
  // }, [file]);

  if (!file) {
    return <p>No file uploaded</p>; // Handle the case where no file is passed
  }

  return (
    <div className="card post-item-container" style={{ width: "20rem" }}>
      <Link to={`/post/${file.id}`}>
        <img src={file.img} className="card-img-top" alt="..." />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{file.name}</h5>
        <p className="card-text">Updated on {normalDate.split(",")[0]}</p>
      </div>
    </div>
  );
};

export default Post;
