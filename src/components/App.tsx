import React from 'react';
import logo from './logo.svg';

export interface HelloWorldProps {
  userName: string;
  lang: string;
}
export const App = (props: HelloWorldProps) => (
  <h1>
    Hi {props.userName} from React! Welcome to {props.lang}!
  </h1>
);

export default App;