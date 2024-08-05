import React from "react";
import BlogContent from "./BlogContent";
import Comment from "./Comment";

function BlogPost() {
  return (
    <div id="blog-post" >
      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." isPublished={true} />
      <Comment commentText="I agree with this statement. - Angela Merkel" />
      <Comment commentText="A universal truth. - Noam Chomsky" />
      <Comment commentText="Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451" />
      <div style={{backgroundColor: "red", fontSize: "98px", fontStyle: "italic", fontWeight: "bolder" }}>
        <Comment commentText="Did you ever hear the tragedy of Darth Plagueis the wise?"/>
      </div>
    </div>
  );
}

export default BlogPost;
