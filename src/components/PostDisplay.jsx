import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { postActions } from "../store/postSlice";
import MarkModal from "./MarkModal";

const PostDisplay = () => {
  const dispatch = useDispatch();
  const all_posts = useSelector((store) => store.post);
  const postId = useParams();

  const post = all_posts.find((e) => String(e.id) === postId.postId);
  // console.log(post);

  const elementRef = useRef();

  const [annotationstatus, setAnnotationStatus] = useState(false);

  useEffect(() => {
    setAnnotationStatus(false);
  }, []);

  const handleSetAnnotationsStatus = () => {
    return setAnnotationStatus(true);
  };

  const [position, setPosition] = useState(post.clicks);
  // console.log(position);

  const handleClick = (event) => {
    if (position.length === post.annotations.length) {
      if (position.length > post.annotations.length) {
        console.log("copy");
        let copy = position.pop();
        setPosition(copy);

        dispatch(
          postActions.changeModalStatus({ id: postId.postId, status: false })
        );
      }
      const rect = elementRef.current.getBoundingClientRect();
      setPosition([
        ...position,
        {
          x: event.clientX - rect.left + 100,
          y: event.clientY - rect.top,
        },
      ]);
    }

    // const x = event.clientX - rect.left; // X relative to the element
    // const y = event.clientY - rect.top; // Y relative to the element
    // console.log(`Clicked within element: X=${x}, Y=${y}`);
    // if (annotationstatus === true) {

    // }
    dispatch(
      postActions.changeModalStatus({ id: postId.postId, status: true })
    );
  };

  const inputRef = useRef();

  //
  const handleAddAnnotation = () => {
    if (inputRef.current.value.trim().length > 0) {
      dispatch(
        postActions.addAnnotation({
          id: postId.postId,
          annotation: inputRef.current.value,
        })
      );
      dispatch(
        postActions.addClickPositions({
          id: postId.postId,
          position: position[position.length - 1],
        })
      );
    }
    // handleSetAnnotationsStatus();

    dispatch(
      postActions.changeModalStatus({ id: postId.postId, status: false })
    );

    inputRef.current.value = "";
  };

  return (
    <div className="" style={{ position: "relative", display: "inline-block" }}>
      <img
        ref={elementRef}
        className="displayImg"
        src={post.img}
        onClick={handleClick}
        alt=""
        style={{ width: "400px", height: "auto" }}
      />
      {position.map((click, index) => (
        <div
          key={index}
          className=""
          style={{
            position: "absolute",
            width: "25px",
            height: "25px",
            backgroundColor: "red",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            left: `${click.x}px`,
            top: `${click.y}px`,
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "solid 2px white",
          }}
        >
          {index + 1}
        </div>
      ))}
      <MarkModal
        // handleSetAnnotationsStatus={handleSetAnnotationsStatus}
        onAddAnnotation={handleAddAnnotation}
        inputRef={inputRef}
        className={``}
      />
    </div>
  );
};

export default PostDisplay;
