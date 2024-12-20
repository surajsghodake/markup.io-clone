import AnnotationSidebar from "./AnnotationSidebar";
import PostDisplay from "./PostDisplay";
import Header from "./Header";

const AnnotationLayout = () => {
  return (
    <>
      <Header />
      <div className="app-container">
        <AnnotationSidebar />
        <PostDisplay />
      </div>
    </>
  );
};

export default AnnotationLayout;
