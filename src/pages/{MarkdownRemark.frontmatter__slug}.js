import { graphql } from "gatsby";
import * as React from "react";
import PostLayout from '../components/PostLayout';

export default function PostTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark;
  return (
    <>
        <PostLayout>

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

        </PostLayout>
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