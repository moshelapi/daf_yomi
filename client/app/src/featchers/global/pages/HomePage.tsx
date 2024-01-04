import { CenteredDiv, StyledButton } from "../styled-component/styled-global";
import { Container, HomePageTop } from "./styled.homePage";

export default function  HomePage (){




    return(
        <Container>
            <HomePageTop>
                <CenteredDiv style={{marginBottom:'50px'}} width="80vw" height="100px">
                    <StyledButton>
                        מצא חברותא
                    </StyledButton>
                    <StyledButton>
                        מצא שיעור
                    </StyledButton>
                    
                </CenteredDiv>
            </HomePageTop>


        </Container>
    )
}