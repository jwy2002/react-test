import React, {useState} from 'react';

const Say = () => {
    const [message, setMsssage] = useState('');
    const [color, setColor] = useState('black');

    const onClickEnter = () => setMsssage('안녕하세요.');

    const onClickLeave = () => setMsssage('안녕히 가세요.');

    const object = { a:1, b:2, c:3};
    const nextObject = {...object, b:2};

    const array = [
        {id:1, value:true},
        {id:2, value:true},
        {id:3, value:false}
    ];
    let nextArray = array.concat({id:4});
    nextArray.filter((item,i) => item.id !== 2);
    nextArray.map((item, i) => item.id === 1 ? {...item, value: false} : item);

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color: color}}>{message}</h1>
            <button style={{color: 'red'}} onClick={()=> setColor('red')}>
                빨간색
            </button>
            <button style={{color: 'green'}} onClick={()=> setColor('green')}>
                초록색
            </button>
            <button style={{color: 'blue'}} onClick={()=> setColor('blue')}>
                파란색
            </button>
        </div>
    );
};

export default Say;