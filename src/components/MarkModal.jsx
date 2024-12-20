import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { postActions } from "../store/postSlice";

const MarkModal = ({ onAddAnnotation, inputRef, position, setPosition }) => {
  const dispatch = useDispatch();
  const all_posts = useSelector((state) => state.post);
  const postId = useParams();
  const modalRef = useRef();

  console.log(position);

  const post = all_posts.find((e) => String(e.id) === postId.postId);

  useEffect(() => {
    if (post?.modalStatus && inputRef?.current) {
      inputRef.current.focus();
    }
  }, [post?.modalStatus, inputRef]);

  const lastClick =
    position.length > 0
      ? position[position.length - 1]
      : { x: "50%", y: "50%" };

  const handleClose = () => {
    if (position.length > post.annotations.length) {
      setPosition(position.slice(0, -1));
    }
    dispatch(
      postActions.changeModalStatus({ id: postId.postId, status: false })
    );
  };

  const handleClickOutside = (e) => {
    console.log(modalRef.current);

    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    if (post?.modalStatus) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [post?.modalStatus]);

  return (
    <div style={{}}>
      <div
        ref={modalRef}
        style={{
          position: "absolute",
          top:
            typeof lastClick.y === "number" ? `${lastClick.y}px` : lastClick.y,
          left:
            typeof lastClick.x === "number" ? `${lastClick.x}px` : lastClick.x,
          // transform: "translate(50%, 50%)",
          width: 300,
          height: 150,
          backgroundColor: "white",
          borderRadius: "15px",
          padding: "10px 20px",
          border: "1px solid grey",
          display: `${post.modalStatus ? "" : "none"}`,
          zIndex: "10",
        }}
      >
        <label htmlFor="comment">Add Annotation</label>
        <button
          type="button"
          className="btn-close float-end"
          aria-label="Close"
          onClick={handleClose}
        ></button>
        <hr />
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter your annotation here"
          className="w-100"
        />
        <div className="mt-2 d-flex justify-content-end"></div>
        <button
          className="btn btn-primary btn-sm me-2"
          type="button"
          onClick={onAddAnnotation}
        >
          Add{" "}
        </button>
        <button
          className="btn btn-secondary btn-sm"
          type="button"
          onClick={handleClose}
        >
          Close{" "}
        </button>
      </div>
    </div>
  );
};

export default MarkModal;
