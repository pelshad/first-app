import { useEffect, useState } from 'react';
import './Exam3.css';

export default function Exam5(){
    const [counter, setCounter] = useState(0);
    const [keyword, setKeyword] = useState('aaa');

    // console.log(`search for ${keyword}`);
    const onChangeText = (e) =>{
        setKeyword(e.target.value);
    }

    useEffect(() => {
        if(keyword.length>5){
            console.log('AAA');
        }
    },[keyword]);


    return (
        <div>
            <input 
                type="text" 
                placeholder='Search here...'
                value = { keyword }
                onChange={ onChangeText } 
            />
        <h1>{counter}</h1>
        <h1>{keyword}</h1>
        <button onClick={upNum} className='red'>+</button>
        <button onClick={minusNum} className='blue'>-</button>
        </div>
    )
        function upNum(){
            setCounter (params => params + 1)
        }

        function minusNum(){
            if(counter > 0){
                setCounter (params => params - 1);
            }
        }
}