import styled from 'styled-components';

export const Image = styled.img`
    width: ${({ width }) => width};
    position: ${({ position }) => position};
    top: ${({ top }) => top};
    left: ${({ left }) => left};
    right: ${({ right }) => right};
    z-index: ${({ z }) => z};
    ${({ avatar }) => avatar && `
        position: absolute;
        width: 100px;
        top: -23px;
        z-index: -100;
    `}
    ${({ wave }) => wave && `
        position: absolute;
        width: 100%;
        height: 30vh;
        bottom: 0;
        right: 0;
    `}
    ${({ placeIcon }) => placeIcon && `
        width: 20px;
    `}
`