import React, { useState } from 'react';

function Main(props) {
    let todoInputValue = null;
    const [ todoContent, setTodoContent ] = useState("");
    const [ todoContentArray, setTodoContentArray ] = useState([]);

    const handleTodoInputChange = (e) => {
        todoInputValue = e.target.value;
    }

    const handleAddClick = () => {
        // 리엑트는 querySelector를 안쓰기 위해서 사용하는 라이브러리
        // const todoInput = document.querySelector(".todo-input");
        // alert(todoInput.value);
        // setTodoContent(todoInputValue);
        // todoContentArray.push(todoInputValue);
        setTodoContentArray([...todoContentArray, todoInputValue]);
        console.log(todoContentArray);
    }

    return (
        <div>
            <div>
                <input type="text" onChange={handleTodoInputChange}/>
                <button onClick={handleAddClick}>추가</button>
            </div>
            <ul>
                {/* {!!todoContent && (<li>{todoContent}</li>)} */}
                {todoContentArray.map(todoContent => {
                    return (<li>{todoContent}</li>);
                })}
            </ul>
        </div>
    );
}

export default Main;
