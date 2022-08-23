import { useState } from 'react';
import Button from './Button';
import './Exam3.css';


export default function Exam3(){
    const [val, setVal] = useState('버튼1');
    const btn1OnClick = () => setVal('Button1');

    return (
        <div>
            <Button text={val} color="red" onClick={btn1OnClick}/>{/* text, color를 객체 방식으로 전송 받을때 구조분할 할당되어 받음 Button의 ver.2*/}
            <Button text="버튼2" color="blue" />
            <Button text="버튼3" color="pink" />
        </div>
    );
}