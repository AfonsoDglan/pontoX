import { House, ListBullets, User } from "phosphor-react-native";
import styled, {css} from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 15px;
`;


export const HomeButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const HomeIcon = styled(House).attrs(({ theme }) => ({
    size: 32,
    color: theme.COLORS.GRAY_200,
    weight: 'bold'
}))``;

export const ListBulletsButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const ListBulletsIcon = styled(ListBullets).attrs(({ theme }) => ({
    size: 32,
    color: theme.COLORS.GRAY_200,
    weight: 'bold'
}))``;

export const UserButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const UserIcon = styled(User).attrs(({ theme }) => ({
    size: 32,
    color: theme.COLORS.GRAY_200,
    weight: 'bold'
}))``;