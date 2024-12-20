import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { postActions } from "../store/postSlice";

const MarkModal = ({ onAddAnnotation, inputRef }) => {
  const dispatch = useDispatch();
  const all_posts = useSelector((state) => state.post);
  const postId = useParams();

  // const inputRef = useRef(null);

  const post = all_posts.find((e) => String(e.id) === postId.postId);

  const lastClick =
    post.clicks.length > 0 && post.clicks[post.clicks.length - 1];
  // : { x: "50%", y: "50%" };

  const handleClose = () => {
    dispatch(
      postActions.changeModalStatus({ id: postId.postId, status: false })
    );
  };

  // useEffect(() => {
  //   if (inputRef.current) {
  //     inputRef.current.focus();
  //   }
  // }, []);

  // const handleAddAnnotation = () => {
  //   if (inputRef.current.value.trim().length > 0) {
  //     dispatch(
  //       postActions.addAnnotation({
  //         id: postId.postId,
  //         annotation: inputRef.current.value,
  //       })
  //     );
  //   }
  //   // handleSetAnnotationsStatus();

  //   dispatch(
  //     postActions.changeModalStatus({ id: postId.postId, status: false })
  //   );

  //   inputRef.current.value = "";
  // };
  return (
    <div style={{}}>
      <div
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
          onFocus={true}
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
