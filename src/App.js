import React from 'react';
import Header from"./Header/header"
import Main from "./Main/main"

function App() {
  let style={
    backgroundColor:"#CDCDCD"
  }
  return (
    <div className="App"style={style}>
        <Header />
        <Main />
    </div>
  );
}

export default App;
