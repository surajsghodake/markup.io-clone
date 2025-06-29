import { PiDotsThree } from "react-icons/pi";
import { MdCheckCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { postActions } from "../store/postSlice";

const Annotation = ({ index, annotation, post, activeTab }) => {
  const normalDate = new Date(post.id).toLocaleString("en-GB", {
    timeZone: "Asia/Kolkata",
  });

  const dispatch = useDispatch();

  const postId = useParams();

  const handleClickResolved = () => {
    dispatch(
      postActions.handleResolved({ id: postId.postId, annotation, activeTab })
    );
    console.log("resolved clicked");
  };

  return (
    <div
      className="card border-warning my-3 annotationItem"
      style={{ maxWidth: "18rem" }}
    >
      <div className="annotationHeader">
        <div className="annotationNumber">{index + 1}</div>
        <div className="icons">
          <PiDotsThree />
          <MdCheckCircle className="font" onClick={handleClickResolved} />
        </div>
      </div>

      <div className="card-body">
        <h5 className="card-title">Suraj Ghodake</h5>
        <p className="card-text">
          <small className="text-body-secondary">
            Last updated on {normalDate.split(",")[0]}
          </small>
        </p>
        <p className="card-text">{annotation}</p>
      </div>
    </div>
  );
};

export default Annotation;
