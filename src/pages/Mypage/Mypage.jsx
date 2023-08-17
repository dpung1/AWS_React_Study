/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useRef, useState } from 'react';
import * as S from './Style.js';

function Mypage(props) {
    // 초기 이미지 상태
    const defaultProfileImgSrc = "https://lippianfamilydentistry.net/wp-content/uploads/2015/11/user-default.png";
    // 로컬 스토리지에서 이미지 정보 가져오기
    const profileImgSrc = localStorage.getItem("profileImg");
    // 프로필 객체 생성 (이미지가 있으면 profileImgSrc, 없으면 defaultProfileImgSrc)
    const [ profileImg, setProfileImg ] = useState(!!profileImgSrc ? profileImgSrc : defaultProfileImgSrc)
    // 로컬 스토리지에서 유저 정보 가져오기
    const localStorageUser = JSON.parse(localStorage.getItem("user"));
    // 사용자 객체 생성
    let user = {
        username: localStorageUser?.username && localStorageUser.username,
        name: localStorageUser?.name && localStorageUser.name,
        email: localStorageUser?.email && localStorageUser.email
    }

    const profileFileInput = useRef();
    // 이미지 변경 클릭 이벤트 
    const handleProfileImgChangeClick = () => {
        profileFileInput.current.click();
    }
    // 이미지 선택 이벤트
    const handleProfileImgSelect = (e) => {
        const selectedImg = e.target.files[0];

        if(selectedImg) {
            const reader = new FileReader();
    
            reader.onload = (e) => {
                setProfileImg(e.target.result);
            }
    
            reader.readAsDataURL(selectedImg);
        }

    }
    // 유저 정보 변경 이벤트 
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        user = {
            ...user,
            [name]: value
        }
    }
    // 로컬 스토리지 저장 클릭 이벤트 
    const handleSaveClick = () => {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("profileImg", profileImg);
    }
     // HTML 관련 코드 
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SProfileImgBox} onClick={handleProfileImgChangeClick}>
                    <img css={S.SProfileImg} src={profileImg} />
                    <input css={S.SFileHidden} type="file" ref={profileFileInput} onChange={handleProfileImgSelect}/>
                </div>
            </div>
            <div css={S.SContainer}>
                <div css={S.SUserInfo}>
                    <label css={S.SLabel} htmlFor="username">사용자명 </label>
                    <input css={S.SInput} type="text" id='username' name="username" onChange={handleInputChange} defaultValue={user.username}/>
                </div>
                <div css={S.SUserInfo}>
                    <label css={S.SLabel} htmlFor="name">이름 </label>
                    <input css={S.SInput} type="text" id='name' name="name" onChange={handleInputChange} defaultValue={user.name}/>
                </div>
                <div css={S.SUserInfo}>
                    <label css={S.SLabel} htmlFor="email">이메일 </label>
                    <input css={S.SInput} type="text" id='email' name="email" onChange={handleInputChange} defaultValue={user.email}/>
                </div>
                <div>
                    <button css={S.SButton}onClick={handleSaveClick}>저장</button>
                </div>
            </div>
        </div>
    );
}

export default Mypage;