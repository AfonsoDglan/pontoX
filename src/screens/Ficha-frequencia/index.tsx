import { Text } from "react-native";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { SubMeunuFrequencia } from "../../components/SubMenuFrequencia";
import { ListCalendar } from "../../components/ListCalendar";
import { Homologado } from "../../components/Homologado";
import { TitleFrequencia } from "../../components/TitleFrequencia";
import { ListDiasFrequencia } from "../../components/ListDiasFrequencia";
import { Menu } from "../../components/Menu";

export function FichaDeFrequencia() {
    return (
        <>
        <Header />
        <SubMeunuFrequencia />
        <ListCalendar/>
        <Container>
            <Homologado/>
            <TitleFrequencia/>
            <ListDiasFrequencia/>
            <ListDiasFrequencia/>
            <ListDiasFrequencia/>
        </Container>
        <Menu/>
        </>
    )
}