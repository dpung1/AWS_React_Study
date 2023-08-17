import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 50px auto;
    border: 1px solid #D2DAFF;
    border-radius: 25px;
    padding: 20px;
    width: 500px;
    height: 750px;
    background-color: #B1B2FF;
`;

export const SContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 20px 0px;
`;

export const SProfileImgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #D2DAFF;
    border-radius: 50%;
    width: 300px;
    height: 300px;
    overflow: hidden;
    cursor: pointer;
`;

export const SProfileImg = css`
    width: 100%;
`;

export const SFileHidden = css`
    display: none;
`;

export const SUserInfo = css`
    display: flex;
    flex-direction: column;
`;

export const SLabel = css`
    text-align: center;

    margin: 1px;
`;

export const SInput = css`
    margin: 3px;
    padding: 3px;
    border: 1px solid #D2DAFF;
    background-color: #EEF1FF;
`;

export const SButton = css`
    margin: 10px;
    border: 1px solid #D2DAFF;
    border-radius: 5px;
    padding: 5px;
    width: 300px;
    background-color: #AAC4FF;
    cursor: pointer;
`;