import React from 'react';

import * as pi from './math'

function List() {
  return (
    <ol>
      <li>{pi.default}</li>
      <li>{pi.doublepi()}</li>
      <li>{pi.triplepi()}</li>
    </ol>
  );
}

export default List;