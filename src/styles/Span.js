import styled from 'styled-components';

export const Span = styled.span`
    color: ${({ color }) => color};
    font-size: ${({ fontSize }) => fontSize};
    padding: ${({ padding }) => padding};
`