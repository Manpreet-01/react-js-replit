import React from 'react';

import pi, {doublepi, triplepi} from './math'

function List() {
  return (
    <ol>
      <li>{pi}</li>
      <li>{pi}</li>
      <li>600</li>
      <li>{ doublepi() }</li>
    </ol>
  );
}

export default List;