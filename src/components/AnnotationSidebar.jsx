import { useSelector } from "react-redux";
import Annotation from "./Annotation";
import { useParams } from "react-router-dom";
import { useState } from "react";

const AnnotationSidebar = () => {
  const all_posts = useSelector((store) => store.post);
  const postId = useParams();

  const post = all_posts.find((e) => String(e.id) === postId.postId);

  const [activeTab, setActiveTab] = useState("active");

  const annotationType =
    activeTab === "active"
      ? post.annotations.active
      : post.annotations.resolved;
  return (
    <div className="annotation-sidebar">
      <ul className="nav nav-underline">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "active" ? "active" : ""}`}
            aria-current="page"
            href="#"
            onClick={() => setActiveTab("active")}
          >
            Active ({post.annotations.active.length})
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "resolved" ? "active" : ""}`}
            href="#"
            onClick={() => setActiveTab("resolved")}
          >
            Resolved ({post.annotations.resolved.length})
          </a>
        </li>
      </ul>
      {annotationType.map((annotation, index) => {
        return (
          <Annotation
            key={index}
            index={index}
            annotation={annotation}
            post={post}
            activeTab={activeTab}
          />
        );
      })}
    </div>
  );
};

export default AnnotationSidebar;
