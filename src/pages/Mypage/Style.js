import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 50px auto;
    border: 1px solid #dbdbdb;
    padding: 20px;
    width: 500px;
    height: 500px;
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

    border: 1px solid #dbdbdb;
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