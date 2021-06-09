import styled from 'styled-components';

export const Wrap = styled.div`
    display: ${({ display }) => display ? display : 'flex'};
    flex-direction: ${({ direction }) => direction};
    justify-content: ${({ justify }) => justify};
    align-items: ${({ align }) => align};
    padding: ${({ padding }) => padding};
    background-color: ${({ background }) => background};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    border-radius: ${({ radius }) => radius};
    box-shadow: ${({ shadow }) => shadow};
    flex: ${({ flex }) => flex};
    position: ${({ position }) => position};
    z-index: ${({ z }) => z};
    margin: ${({ margin }) => margin};
    overflow: ${({ overflow }) => overflow};

    ${({ pagination }) => pagination && `
        width: 100%;
        display:flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0;
        padding: 0 0 20px 0;
    `}
`