import styled from "styled-components";

export const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

export const ChatHeader = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;
    height: 50px;
    background: #fff;
`;

export const ChatHeaderTitle = styled.h1`
    font-size: 20px;
    font-weight: 700;
    color: #b000bb;
`;

export const ChatHeaderSubtitle = styled.h2`
    font-size: 14px;
    font-weight: 400;
    color: #bbb;
`;

export const ChatBody = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 20px;
    overflow-y: scroll;
    min-height: 300px;
    max-height: 400px;
    border: 1px solid green;
`;

export const ChatMenssage = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const ChatMenssageAuthor = styled.span`
    font-size: 14px;
    font-weight: 700;
    color: #000;
`;

export const ChatMessageText = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: #000;
`;

export const ChatFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 60px;
    background: #fff;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
`;

export const ChatFooterInput = styled.input`
    flex: 1;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #000;
    border-radius: 5px;
`;

export const ChatFooterButton = styled.button`
    margin-left: 10px;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #000;
    border-radius: 5px;
    background: #000;
    color: #fff;
    cursor: pointer;
`;

