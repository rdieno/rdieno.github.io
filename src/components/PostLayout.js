import React, { Component } from 'react';

import '../assets/sass/post.scss';

class PostLayout extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <>
        <div className="post-layout">
          {children}
        </div>
      </>
    );
  }
};

export default PostLayout;