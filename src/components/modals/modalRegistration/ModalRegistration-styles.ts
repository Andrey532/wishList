import styled from "styled-components";

export const ErrorContainer = styled.div`
    background-color: #ffcccc;
    color: #ff0000;
    padding: 5px;
    border-radius: 5px;
    margin-top: 10px;
`

export const ModalRegistrationContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 650px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    border-radius: 50px;
    border: solid black;
`

export const ModalRegistrationHeader = styled.div`
    border: solid green;
    height: 105px;
    margin-left: 100px;
    display: flex;
    justify-content: center;
`

export const ModalRegistrationContent = styled.div`
    position: relative;
    margin-left: 100px;
    border: solid red;
`

export const ModalRegistrationFields = styled.input`
    width: 400px;
    height: 50px;
    border: solid 3px;
    border-radius: 15px;
    opacity: 60%;
    margin-top: 30px;
    
`

export const ModalRegistrationButton = styled.button`
    width: 287px;
    height: 50px;
    margin-top: 50px;
    border-radius: 15px;
    background-color: #FFE600;
    cursor: pointer;
`

export const ToggleButtonStyle = styled.img`
    position: absolute;
    width: 40px;
    height: 40px;
    cursor: pointer;
    background: none;
    border: none;
    transform: translateY(-112%);
    margin-left: 340px;
`