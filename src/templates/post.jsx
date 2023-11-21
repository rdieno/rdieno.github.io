import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import ImageSet1 from "../gallery/ImageSet1"
import InternalSectionGalleryLeft from "../sections/InternalSectionGalleryLeft"
import InternalSectionGalleryRight from "../sections/InternalSectionGalleryRight"
import InternalSectionGenericLeft from "../sections/InternalSectionGenericLeft"
import InternalSectionGenericRight from "../sections/InternalSectionGenericRight"
import InternalSubsectionGRWrapper from "../sections/subsections/InternalSectionGenericRight-Wrapper"
import InternalSubsectionGRBlockquote from "../sections/subsections/InternalSectionGenericRight-Blockquote"
import InternalSubsectionGRImage from "../sections/subsections/InternalSectionGenericRight-Image"
import InternalSubsectionGRText from "../sections/subsections/InternalSectionGenericRight-Text"
import InternalSubsectionGLWrapper from "../sections/subsections/InternalSectionGenericLeft-Wrapper"
import InternalSubsectionGLBlockquote from "../sections/subsections/InternalSectionGenericLeft-Blockquote"
import InternalSubsectionGLImage from "../sections/subsections/InternalSectionGenericLeft-Image"
import InternalSubsectionGLText from "../sections/subsections/InternalSectionGenericLeft-Text"

import '../assets/sass/post.scss';

const shortcodes = {
  Link,
  ImageSet1,
  InternalSectionGalleryLeft,
  InternalSectionGalleryRight,
  InternalSectionGenericLeft,
  InternalSectionGenericRight,
  InternalSubsectionGRWrapper,
  InternalSubsectionGRBlockquote,
  InternalSubsectionGRImage,
  InternalSubsectionGRText,
  InternalSubsectionGLWrapper,
  InternalSubsectionGLBlockquote,
  InternalSubsectionGLImage,
  InternalSubsectionGLText,
} // Provide common components here

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