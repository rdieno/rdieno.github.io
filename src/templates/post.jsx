import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import ImageSet1 from "../gallery/ImageSet1"
import HeaderLeft from "../sections/HeaderLeft"

import '../assets/sass/post.scss';

const shortcodes = { Link, ImageSet1, HeaderLeft } // Provide common components here

export default function PageTemplate({ data, children }) {
  return (
    <>
        <div className="post-layout">

            <div className="post-wrapper">

                <div className="post-header">
                    <h1>{data.mdx.frontmatter.title}</h1>
                    <h2>{data.mdx.frontmatter.type}</h2>
                </div>

                <div className="post-body">

                    <div className="post-body-col-left">
                    </div>

                    <div className="post-body-col-mid">        
                        <div className="post-content">
                            <div className="post-md"> 
                                <MDXProvider components={shortcodes}>
                                    {children}
                                </MDXProvider>
                            </div>
                        </div>
                    </div>

                    <div className="post-body-col-right">
                    </div>

                </div>

            </div>

        </div>
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        type
      }
    }
  }
`