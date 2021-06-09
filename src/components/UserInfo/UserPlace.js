import React from 'react';
import { Wrap } from '../../styles/Wrap';
import { Image } from '../../styles/Image';
import { Span } from '../../styles/Span';
import { Paragraph } from '../../styles/Paragraph';


export const UserPlace = ({padding, color, img, place, specificPlace}) => {
    return (
        <Wrap direction='row' align='center' justify='space-between' width='100%' padding={padding}>
            <Wrap direction='row' align='center'>
                <Wrap justify='center' align='center' width='40px' height='40px' background={({ theme }) => theme[color]} radius='50%'>
                    <Image placeIcon src={img}/>
                </Wrap>
                <Span padding='0 0 0 20px' fontSize='15px' color={({ theme }) => theme.grey}>{place}</Span>
            </Wrap>
            <Paragraph>{specificPlace}</Paragraph>
        </Wrap>
    )
}