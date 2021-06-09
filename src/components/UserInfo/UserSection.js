import React from 'react';
import { Wrap } from '../../styles/Wrap';
import { UserIcon } from './UserIcon';
import { UserPersonalInfo } from './UserPersonalInfo';
import { Image } from '../../styles/Image';
import wave from '../../assets/wave.png'
import { useSelector } from 'react-redux';
import { UserPlace } from './UserPlace';
import departmentImg from '../../assets/department.png';
import locationImg from '../../assets/location.png';


export const UserSection = () => {
    const { department, location } = useSelector(({ userReducer }) => userReducer);
    return (
        <Wrap position='relative' padding='50px'  direction='column' justify='flex-start' align='flex-end' background={({ theme }) => theme.userBackground} >
            <UserIcon />
            <UserPersonalInfo />
            <UserPlace padding='50px 0 20px 0' color='orange' place='Department' specificPlace={department  ? department : 'no info'} img={departmentImg} />
            <UserPlace color='purple' place='Location' specificPlace={location ? location : 'no info'} img={locationImg} />
            <Image wave src={wave} />
        </Wrap>
    )
}