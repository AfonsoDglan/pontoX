import { CaretLeft } from "phosphor-react-native";
import { Platform, StatusBar } from 'react-native';
import styled, {css} from "styled-components/native";

const isAndroid = Platform.OS === 'android';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.GREEN_700};
    margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` :  '0'};
    padding: 8px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

`;

export const Texto = styled.Text`
    ${({ theme }) => css`
        font-size: ${ theme.FONT_SIZE.MD}px;
        font-family: ${ theme.FONT_FAMILY.BOLD};
        color: ${ theme.COLORS.WHITE};
    `}
    text-align: center;
    flex: 1;
`;

export const BackButton = styled.TouchableOpacity`
    
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
    size: 32,
    color: theme.COLORS.WHITE
}))``;