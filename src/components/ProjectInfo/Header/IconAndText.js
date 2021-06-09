import React from 'react';
import { Wrap } from '../../../styles/Wrap';
import { Image } from '../../../styles/Image';
import { Span } from '../../../styles/Span';

export const IconAndText = ({color, img, header, subheader}) => {
    return (
        <Wrap direction='row' align='center'>
            <Wrap justify='center' align='center' width='45px' height='45px' background={({ theme }) => theme[color]} radius='50%'>
                <Image width='25px' src={img}/>
            </Wrap>
            <Span padding='0 0 0 10px' fontSize='17px' color={({ theme }) => theme.grey}>{header}</Span>
            <Span padding='0 0 0 10px' fontSize='20px' color={({ theme }) => theme.black}>{subheader}</Span>
        </Wrap>
    )
}