import { Container, IconCLock, NextIcon, SaldoContainer, SaldoDetails, Texto } from "./styles";


export function ListDiasFrequencia() {
    return (
        <Container>
            <Texto>
                Dia 01 - Segunda-feira
            </Texto>
            <SaldoContainer>
                <IconCLock />
                <SaldoDetails>
                    <Texto>Saldo do Dia</Texto>
                    <Texto>00:00</Texto>
                </SaldoDetails>
            </SaldoContainer>
            <NextIcon/>
        </Container>
    )
}