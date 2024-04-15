import { FlatList } from "react-native";
import { CalendarIcon, Container, List, Texto } from "./styles";

export function ListCalendar() {
    return (
        <Container>
            <List>
                <FlatList
                    data={['JAN/2024', 'FER/2024', 'ABR/2024', 'MAR/2024', 'ABR/2024']}
                    keyExtractor={item => item}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <Texto>{item}</Texto>
                    )}
                    horizontal
                />
                <CalendarIcon/>
            </List>
        </Container>
    )
}