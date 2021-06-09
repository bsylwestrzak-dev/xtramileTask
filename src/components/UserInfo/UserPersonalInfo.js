import React from 'react';
import { Image } from '../../styles/Image';
import { Paragraph } from '../../styles/Paragraph';
import { Wrap } from '../../styles/Wrap';
import { Span } from '../../styles/Span';
import avatarBlur from '../../assets/avatarBlur.png';
import { useSelector } from 'react-redux';

export const UserPersonalInfo = () => {
    const { person, email} = useSelector(({ userReducer }) => userReducer)
    return (
        <Wrap padding='40px 0 0 0' direction='row' justify='space-between' align='center' width='100%'>
            <Wrap margin='0 40px 0 0' z='100' position='relative' justify='center' align='center' width='50px' height='50px' background={({ theme }) => theme.avatarColor} radius='50%'>
                <Span color={({ theme }) => theme.white}>{person.toUpperCase()[0]}</Span>
                <Image avatar src={avatarBlur} />
            </Wrap>
            <Wrap direction='column'>
                <Paragraph fontSize='18px' margin='0 0 10px 0'>{person}</Paragraph>
                <Span fontSize='15px' color={({ theme }) => theme.grey}>{email}</Span>
            </Wrap>
        </Wrap>
    )
}