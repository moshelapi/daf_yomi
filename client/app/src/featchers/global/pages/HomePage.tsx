import {  useNavigate } from "react-router-dom";
import { CenteredDiv, StyledButton } from "../styles/styled-component/styled-global";
import { Container, HomePageTop } from "./styled.homePage";

export default function  HomePage (){

    const Navigate = useNavigate();


    return(
        <Container>
            <HomePageTop>
                <CenteredDiv style={{marginBottom:'50px'}} width="80vw" height="100px">
                    <StyledButton onClick={()=> Navigate('/userPage')}>
                        מצא חברותא
                    </StyledButton >
                    <StyledButton>
                        מצא שיעור
                    </StyledButton>
                    
                </CenteredDiv>
            </HomePageTop>


        </Container>
    )
}