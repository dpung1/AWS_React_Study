import React, { useState } from 'react';

function CustomerInputTest(props) {
    const [ user, setUser ] = useState({
        username: "",
        rank: "",
        age: ""
    })

    const handleUserInfoChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        <div>
            <h1>고객명 : {user.username}</h1>
            <h1>등급 : {user.rank}</h1>
            <h1>나이 : {user.age}</h1>
            <input type="text" name='username' onChange={handleUserInfoChange}/>
            <input type="text" name='rank' onChange={handleUserInfoChange}/>
            <input type="text" name='age' onChange={handleUserInfoChange}/>
        </div>
    );
}

export default CustomerInputTest;