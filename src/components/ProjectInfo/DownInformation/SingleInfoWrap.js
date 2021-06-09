import React from 'react';
import { Wrap } from '../../../styles/Wrap';
import { Image } from '../../../styles/Image';
import { Paragraph } from '../../../styles/Paragraph';

export const SingleInfoWrap = ({ bgColor, img, fontColor, title, subtitle }) => {
    return (
        <Wrap z='0' background={({ theme }) => theme.white} margin='0 0 0 50px' direction='column' justify='flex-start' align='center' radius='25px' shadow='2px 2px 10px rgba(0, 0, 0, .2)' width='15vw' padding='25px 0'>
            <Wrap width='40px' height='40px' radius='50%' justify='center' align='center' background={({ theme }) => theme[bgColor]}>
                <Image placeIcon src={img}/>
            </Wrap>
            <Paragraph margin='20px 0 10px 0' fontSize='14px'>{title}</Paragraph>
            <Paragraph margin='0' color={({ theme }) => theme[fontColor]} fontSize='13px'>{subtitle}</Paragraph>
        </Wrap>
    )
}