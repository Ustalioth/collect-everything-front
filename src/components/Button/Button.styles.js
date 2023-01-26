import styled from 'styled-components';
import colors from 'styles/colors';

export const BaseButton = styled.button`
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    &:hover {
        cursor: pointer;
    }
`;

export const ButtonCreate = styled(BaseButton)`
    color: ${colors.lightText};
    background-color: ${colors.create};
`;

export const ButtonEdit = styled(BaseButton)`
    color: ${colors.lightText};
    background-color: ${colors.edit};
`;

export const ButtonDelete = styled(BaseButton)`
    color: ${colors.lightText};
    background-color: ${colors.delete};
`;
