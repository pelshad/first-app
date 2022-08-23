import { useState } from 'react'; //리랜더링을 위해서 import, 함수형일때만 사용!
//class를 활용할때는 this.을 이용

function Exam2(){
    const data = useState(0); //counter 0은 숫자의 초기값
    const [counter, setCounter] = data; //데이터 분할
    // const counter = data[0]
    // const setCounter = data[1]과 같음
    
    function countUp(){

        // 리랜더링 안됨
        // counter = counter + 1;
        // console.log(counter);
        // console.log(data);
        
        // 리랜더링 됨 ver.1
        // setCounter(counter + 1);

        // 리랜더링 됨 ver.2 콜백함수 사용(안정성이 높음, 다른 함수랑 충돌안됨)
        setCounter( preVal => preVal + 1);
    }

    return (
        <div>
            <h1>클릭 카운터 수 : "{ counter }"</h1> {/* counter 부분만 리랜더링됨*/}
            <button onClick={ countUp }>Click Me</button>
        </div>
    )
}

export default Exam2;