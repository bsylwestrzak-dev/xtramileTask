import styled from 'styled-components';

export const Paragraph = styled.p`
    margin: ${({ margin }) => margin};
    color: ${({ color }) => color};
    font-size: ${({ fontSize }) => fontSize};
    background: ${({ background }) => background};
    padding: ${({ padding }) => padding};
    border-radius: ${({ radius }) => radius}
`