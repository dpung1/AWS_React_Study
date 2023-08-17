/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useRef, useState } from 'react';
import * as S from './Style.js';

function Mypage(props) {
    const defaultProfileImgSrc = "https://lippianfamilydentistry.net/wp-content/uploads/2015/11/user-default.png";

    const profileImgSrc = localStorage.getItem("profileImg");
    
    const [ profileImg, setProfileImg ] = useState(!!profileImgSrc ? profileImgSrc : defaultProfileImgSrc)

    const localStorageUser = JSON.parse(localStorage.getItem("user"));

    let user = {
        username: localStorageUser?.username && localStorageUser.username,
        name: localStorageUser?.name && localStorageUser.name,
        email: localStorageUser?.email && localStorageUser.email
    }

    const profileFileInput = useRef();

    const handleProfileImgChangeClick = () => {
        profileFileInput.current.click();
    }
    
    const handleProfileImgSelect = (e) => {
        const selectedImg = e.target.files[0];

        if(selectedImg) {
            const reader = new FileReader();
    
            reader.onload = (e) => {
                setProfileImg(e.target.result);
            }
    
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        user = {
            ...user,
            [name]: value
        }
    }

    const handleSaveClick = () => {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("profileImg", JSON.stringify(profileImg));
    }

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SProfileImgBox} onClick={handleProfileImgChangeClick}>
                    <img css={S.SProfileImg} src={profileImg} />
                    <input css={S.SFileHidden}type="file" ref={profileFileInput} onChange={handleProfileImgSelect}/>
                </div>
            </div>
            <div css={S.SContainer}>
                <div>
                    <label htmlFor="username">사용자명 </label>
                    <input type="text" id='username' name="username" onChange={handleInputChange} defaultValue={user.username}/>
                </div>
                <div>
                    <label htmlFor="name">이름 </label>
                    <input type="text" id='name' name="name" onChange={handleInputChange} defaultValue={user.name}/>
                </div>
                <div>
                    <label htmlFor="email">이메일 </label>
                    <input type="text" id='email' name="email" onChange={handleInputChange} defaultValue={user.email}/>
                </div>
                <div>
                    <button onClick={handleSaveClick}>저장</button>
                </div>
            </div>
        </div>
    );
}

export default Mypage;