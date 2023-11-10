import { graphql } from "gatsby";
import * as React from "react";
import PostLayout2 from '../components/PostLayout2';

export default function BlogPostTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark;
  return (
    <>
        <PostLayout2>

            <div className="post-wrapper">

                <div className="post-header">
                    <h1>{frontmatter.title}</h1>
                    <h2>{frontmatter.date}</h2>
                </div>

                <div className="post-body">

                <div className="post-body-col-left">
                    <p>post-body-col-left</p>
                </div>

                <div className="post-body-col-mid">        
                    <div className="post-content">
                        <div className="post-md" dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                </div>

                <div className="post-body-col-right">
                    <p>post-body-col-right</p>
                </div>
                
                </div>

            </div>

        </PostLayout2>
    </>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;