import React, { Component } from 'react';

class PostHeader extends Component {
  constructor() {
    super();
  }

  renderPostHeader() {
    const { content } = this.props;

    if (!content) return;

    const postheader = content.map((obj, i) => {
      return (
        <>
          <h1>{obj.header}</h1>
          <h2>{obj.subline}</h2>
        </>
      );
    });

    return <div className="post-header-content"> {postheader} </div>;
  }


  render() {
    return (
      <>
        {this.renderPostHeader()}
      </>
    );
  }
}

export default PostHeader;
