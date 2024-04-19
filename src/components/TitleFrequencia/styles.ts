import styled, {css} from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 15px;
`;

export const Texto = styled.Text`
    ${({ theme }) => css`
        font-size: ${ theme.FONT_SIZE.MD}px;
        font-family: ${ theme.FONT_FAMILY.REGULAR};
        color: ${ theme.COLORS.GREEN_500};
    `}
`;