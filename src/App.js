import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/body/Body'

class  App extends  React.Component{
  render() {
    return (
        <div className="">
          <Header/>
          <Body/>
          <Footer/>
        </div>
    );
  }
}

export default App;
//React = JXS java + xml style
