import React from 'react';
import { Wrap } from '../../styles/Wrap';
import { Image } from '../../styles/Image';
import userIcon from '../../assets/user.png'

export const UserIcon = () => {
    return (
        <Wrap width='100%' direction='row' justify='flex-end'>
            <Image width='25px' src={userIcon}/>
        </Wrap>
    )
}