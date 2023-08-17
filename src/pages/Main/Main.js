import React, { useState } from 'react';
import TodoAddInput from '../../components/TodoAddInput/TodoAddInput';
import UsernameInput from '../../components/UsernameInput/UsernameInput';
import PasswordInput from '../../components/PasswordInput/PasswordInput';

function Main(props) {
    let todoInputValue = null;
    const [ todoContent, setTodoContent ] = useState("");
    const [ todoContentArray, setTodoContentArray ] = useState([]);
    const [ user, setUser ] = useState({
        username: "",
        password: ""
    });

    const handleTodoInputChange = (e) => {
        todoInputValue = e.target.value;
    }

    const handleUserInfoChange = (e) => {
        const { name, value } = e.target;
        console.log(`name: ${name}, value: ${value}`)
        const userObj = {
            ...user,
            [name]: value
        }

        setUser(userObj);
    }

    const handleAddClick = () => {
        // 리엑트는 querySelector를 안쓰기 위해서 사용하는 라이브러리
        // const todoInput = document.querySelector(".todo-input");
        // alert(todoInput.value);
        // setTodoContent(todoInputValue);
        // .todoContentArray.push(todoInputValue);
        setTodoContentArray([...todoContentArray, todoInputValue]);
        console.log(todoContentArray);
    }

    return (
        <div>
            <div>
                <h1>사용자이름 : {user.username}</h1>
                <h1>비밀번호 : {user.password}</h1>
                <UsernameInput onChange={handleUserInfoChange}/>
                <PasswordInput onChange={handleUserInfoChange}/>

                <TodoAddInput onChange={handleTodoInputChange}/>
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
