import React, { Component } from 'react';

class PostContent extends Component {
  constructor() {
    super();
  }

  renderPostContent() {
    const { content } = this.props;

    if (!content) return;

    const postcontent = content.map((obj, i) => {
      return (
        <p>{obj.body}</p>
      );
    });

    return <div className="post-content"> {postcontent} </div>;
  }


  render() {
    return (
      <>
        {this.renderPostContent()}
      </>
    );
  }
}

export default PostContent;
