import styled from "styled-components";

export const Select = styled.select`
    min-width: 226px;
    border: solid 1px ${({ theme }) => theme.color.primary};
    border-radius: 5px;
    padding: 5px;
`;