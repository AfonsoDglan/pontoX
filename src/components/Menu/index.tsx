import { Text } from "react-native";
import { Container, HomeButton, HomeIcon, ListBulletsButton, ListBulletsIcon, UserButton, UserIcon } from "./styles";

export function Menu() {
    return (
        <Container>
            <HomeButton>
                <HomeIcon/>
                <Text style={{color: "#C4C4CC"}}>Inicio</Text>
            </HomeButton>
            <ListBulletsButton>
                <ListBulletsIcon />
                <Text style={{color: "#C4C4CC"}}>Solictações</Text>
            </ListBulletsButton>
            <UserButton>
                <UserIcon />
                <Text style={{color: "#C4C4CC"}}>Perfil</Text>
            </UserButton>
        </Container>
    )
}