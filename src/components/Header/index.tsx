import { useNavigation } from "@react-navigation/native";
import { BackButton, BackIcon, Container, Texto } from "./styles";
import { Text } from "react-native";


export function Header() {
    return (
        <Container>
            <BackButton >
                <BackIcon/>
            </BackButton>
            <Texto>Frequência</Texto>
        </Container>
    )
}