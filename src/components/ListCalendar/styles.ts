import { CalendarBlank } from "phosphor-react-native";
import styled, {css} from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
    padding-top: 20px;
    padding-right: 10px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const List = styled.View`
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`

export const Texto = styled.Text`
    ${({ theme }) => css`
        font-size: ${ theme.FONT_SIZE.MD}px;
        font-family: ${ theme.FONT_FAMILY.BOLD};
        color: ${ theme.COLORS.GRAY_200};
    `}
    padding-right: 10px;
`;


export const CalendarIcon = styled(CalendarBlank).attrs(({ theme }) => ({
    size: 32,
    color: theme.COLORS.GREEN_500
}))``;