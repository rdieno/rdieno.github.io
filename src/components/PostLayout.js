import React from "react";

const PostLayout = ({ children }) => (
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      {children}
    </div>
);

export { PostLayout };