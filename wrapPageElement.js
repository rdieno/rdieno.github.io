import React from "react";
import { TestLayout } from "./src/components/TestLayout";

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element, props }) => (
  <TestLayout {...props}>{element}</TestLayout>
)

export default wrapPageElement;