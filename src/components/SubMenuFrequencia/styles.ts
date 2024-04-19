import { List } from "phosphor-react-native";
import styled, {css} from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    padding-left: 10px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Texto = styled.Text`
    ${({ theme }) => css`
        font-size: ${ theme.FONT_SIZE.MD}px;
        font-family: ${ theme.FONT_FAMILY.BOLD};
        color: ${ theme.COLORS.GRAY_700};
    `}
    text-align: center;
`;

export const MenuButton = styled.TouchableOpacity`
    
`;

export const MenuIcon = styled(List).attrs(({ theme }) => ({
    size: 32,
    color: theme.COLORS.GRAY_700
}))``;