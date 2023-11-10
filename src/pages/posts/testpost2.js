import React from "react";

import PostLayout2 from '../../components/PostLayout2';
import PostHeader from '../../components/PostHeader';
import PostContent from '../../components/PostContent';

//import { Post1} from 'post-1';

const post_1 = [
  {
    header: "header test",
    subline: "Be one with the Universe",
    body: `Lorem ipsum dolorsit amet consectetur adipiscing
            elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Etiam
            tristique libero eu nibh porttitor amet fermentum. Nullam venenatis
            erat id vehicula ultrices sed ultricies condimentum. Magna sed etiam
            consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et
            dolor libero, feugiat magna tempus, sed et lorem adipiscing.`,
  },
];

const TestPost2 = () => (

  <PostLayout2>

    <div className="post-wrapper">

        <div className="post-header">
            <p>I'm a header!</p>
            <PostHeader content={post_1} />
        </div>

        <div className="post-body">

          <div className="post-body-col-left">
              <p>post-body-col-left</p>
          </div>

          <div className="post-body-col-mid">        
              <div className="content">
                <PostContent content={post_1} />
              </div>
          </div>

          <div className="post-body-col-right">
              <p>post-body-col-right</p>
          </div>
          
        </div>

    </div>

  </PostLayout2>

);

export default TestPost2;
