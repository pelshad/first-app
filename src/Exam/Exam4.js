import Button from './Button';
import './Exam3.css';
import { useState } from 'react';

export default function Exam3(){
    const [val, setVal] = useState(10);
    return (
        <div>
            <Button text="btn1" color="red"/>
            <Button text={val} color="red"/>
        </div>
    );
}