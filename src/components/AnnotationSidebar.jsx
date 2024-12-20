import { useSelector } from "react-redux";
import Annotation from "./Annotation";
import { useParams } from "react-router-dom";

const AnnotationSidebar = () => {
  const all_posts = useSelector((store) => store.post);
  const postId = useParams();

  const post = all_posts.find((e) => String(e.id) === postId.postId);
  return (
    <div className="annotation-sidebar">
      <ul className="nav nav-underline">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Active (2)
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Resolved (3)
          </a>
        </li>
      </ul>
      {post.annotations.map((annotation, index) => {
        return (
          <Annotation
            key={index}
            index={index}
            annotation={annotation}
            post={post}
          />
        );
      })}
    </div>
  );
};

export default AnnotationSidebar;
