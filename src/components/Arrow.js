import React from 'react';
import Scroll from './Scroll';

export default function Arrow() {
  return (
      <ul className="actions">
        <li>
          <Scroll type="id" element="first">
            <a href="#first" className="arrow">
              <span className="label">Next</span>
            </a>
          </Scroll>
        </li>
      </ul>
  );
}
