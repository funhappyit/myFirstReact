import React from 'react';

function Hello({color,name}){
    //<div></div> jss
    //console.log(props);
return <div style={{
    color
 }}>안녕하세요 {name}</div>;
}
Hello.defaultProps = {
    name: '이름없음'

};
//Hello라는 컴포넌트를 만들어서 내보내주겠다.
export default Hello;