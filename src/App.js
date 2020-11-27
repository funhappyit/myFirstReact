import React from 'react';
import Hello from './Hello'
import './App.css';
function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'

  }
  return (
    <>
      {/*react 주석 방법
        //태그는 꼭 닫아야 ㅎ낟, 
        두개 이상의 태그는 감싸줘야 한다.
        값을 보여줄때는 {}감싸서 보여줘야한다. 
        스타일은 객체 형태로 사용해줘야한다. 
      */}
      <Hello
      //이런식으로 작성하는 주석은 화면에 나타나지 않는다.
      />
      <div 
      //마찬가지러 이런식으로 작성하는 주석은 화면에 나타나지 않는다. 
      style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;
