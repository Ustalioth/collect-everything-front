import styled from 'styled-components';
import colors from 'styles/colors';

export const Navbar = styled.nav`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: ${colors.lightText};
    background-color: ${colors.darkBackground};

    a {
        color: ${colors.lightText};
    }
`;