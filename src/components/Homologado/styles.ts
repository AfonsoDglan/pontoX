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
        font-family: ${ theme.FONT_FAMILY.REGULAR};
        color: ${ theme.COLORS.GRAY_300};
    `}
    text-align: center;
    background-color: ${({ theme }) => theme.COLORS.YELLOW_400};
    border-radius: 6px;
    padding: 5px;
`;