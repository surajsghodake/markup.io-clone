import { PiDotsThree } from "react-icons/pi";
import { MdCheckCircle } from "react-icons/md";

const Annotation = ({ index, annotation, post }) => {
  const normalDate = new Date(post.id).toLocaleString("en-GB", {
    timeZone: "Asia/Kolkata",
  });

  return (
    <div
      className="card border-warning my-3 annotationItem"
      style={{ maxWidth: "18rem" }}
    >
      <div className="annotationHeader">
        <div className="annotationNumber">{index + 1}</div>
        <div className="icons">
          <PiDotsThree />
          <MdCheckCircle className="font" />
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
