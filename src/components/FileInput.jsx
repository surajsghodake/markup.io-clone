import { useDispatch } from "react-redux";
import { postActions } from "../store/postSlice";
import { useEffect, useRef } from "react";

const FileInput = () => {
  const dispatch = useDispatch();

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const id = Date.now();
      const img = URL.createObjectURL(file);
      const name = file.name;
      dispatch(
        postActions.addInitialPosts({
          id,
          name: name,
          img: img,
        })
      );
    }
    // e.target.files = null;
  };
  return (
    <div className="d-flex border-bottom">
      <form className="d-flex align-items-center py-4" role="search">
        <input
          ref={inputRef}
          className="form-control"
          type="search"
          placeholder="Enter a URL here"
          aria-label="Search"
          style={{ width: "500px" }}
          // onFocus={true}
        />
        <button className="btn btn-outline-primary mx-3 px-4" type="submit">
          Go
        </button>
        <p className="mt-">or</p>
        <input type="file" className="ms-3 py-2" onChange={handleChange} />
      </form>
    </div>
  );
};

export default FileInput;
