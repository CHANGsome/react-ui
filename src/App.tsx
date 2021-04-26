import React from 'react';
import Icon from './components/Icon';

function App() {
  return (
    <div>
      <Icon name='bilibili' className="hhh" onClick={()=>{console.log('onclick')}}/>
      <Icon name='wechat'/>
    </div>
  );
}

export default App;
