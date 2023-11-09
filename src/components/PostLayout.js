import React from "react";

import '../assets/sass/post.scss';

const PostLayout = ({ children }) => (
    //<div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }} className="css-test">
    <div className="post-layout">
      {children}
    </div>
);

export { PostLayout };