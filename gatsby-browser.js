import "./src/styles/global.css";
import React from 'react'
import {Provider} from './src/firebase-helper'

export const wrapRootElement = ({element}) => {
  return (
    <Provider>
      {element}
    </Provider>
  );
}
