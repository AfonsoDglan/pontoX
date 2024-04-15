import styled, {css} from "styled-components/native";
import { CaretRight, Clock } from "phosphor-react-native";

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 8px;
`;

export const Texto = styled.Text`
    ${({ theme }) => css`
        font-size: ${ theme.FONT_SIZE.SM}px;
        font-family: ${ theme.FONT_FAMILY.REGULAR};
        color: ${ theme.COLORS.BLUE_500};
    `}
`;

export const SaldoDetails = styled.View`
    display: flex;
`

export const SaldoContainer = styled.View`
    flex-direction: row;
    align-items: center;
`

export const IconCLock = styled(Clock).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.BLUE_500
}))`
    margin-right: 4px
`;

export const NextIcon = styled(CaretRight).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.BLUE_500
}))``;