import BlogCard from "@/comman-component/blog/BlogCard";

const defaultline = {
  line: "No blogs found",
};
const LatestBlog = ({ posts = [], path, content = defaultline }) => {
  const blogData = posts?.blogs;

  return (
    <>
      {blogData?.length > 0 ? (
        <div className=" overflow-hidden scroll-smooth pt-5 grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {blogData?.map((val, i) => (
            <BlogCard key={i} path={path} blogData={val} border={true} />
          ))}
        </div>
      ) : (
        <p className="h-[400px] flex items-center justify-center">
          {content.line}
        </p>
      )}
    </>
  );
};

export default LatestBlog;
