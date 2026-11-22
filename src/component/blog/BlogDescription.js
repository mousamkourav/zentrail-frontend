import React from "react";
import style from "./../../styles/blogdescription.module.css";
const BlogDescription = ({ blog }) => {
  return (
    <div className={`${style.noTailwind}`}>
      <div className="custom-container  ">
        <div className="border border-[#35C0F0] rounded-[10px] sm:rounded-[20px] md:rounded-[30px] p-5 px-5 mt-3 sm:mt-6">
          <div
            className={`${style.descriptionContent}  dm_sans`}
            dangerouslySetInnerHTML={{ __html: blog?.description }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDescription;
