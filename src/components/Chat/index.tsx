import { useState } from "react";
import { ChatBody, ChatContainer, ChatFooter, ChatFooterButton, ChatFooterInput, ChatHeader, ChatHeaderSubtitle, ChatHeaderTitle, ChatMenssage, ChatMenssageAuthor } from "./styles";

export function Chat() {

    const [mensage, setMensage] = useState<string>('')
    const [ mensages, setMensages ] = useState<string[]>([])
    const [valorInput, setValorInput] = useState<string>('')
    const [ mensageAuthor, setMensageAuthor ] = useState<string>('')
    
    const handleSendMensage = () => {
        console.log('send this mensage: ', mensage)
        setMensages([...mensages, valorInput])
        setValorInput('')
    }

    return (
        <ChatContainer>
            <ChatHeader>
                <ChatHeaderTitle>Usuário Contato</ChatHeaderTitle>
                <ChatHeaderSubtitle>Status usuário</ChatHeaderSubtitle>
            </ChatHeader>
            <ChatBody>
                {(mensages.map((mensage) => (
                    <ChatMenssage>
                        <ChatMenssageAuthor>Usuário</ChatMenssageAuthor>
                        {mensage}
                    </ChatMenssage>
                )))}
            </ChatBody>
            <ChatFooter>
                <ChatFooterInput type="text" onChange={(text) => {
                    setValorInput(text.target.value);
                }} value={valorInput} placeholder="Escreva sua mensagem aqui"/>
                <ChatFooterButton onClick={handleSendMensage}>Send</ChatFooterButton>
            </ChatFooter>
        </ChatContainer>
    )
}