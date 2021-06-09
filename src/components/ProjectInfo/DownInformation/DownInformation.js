import React from 'react';
import { Wrap } from '../../../styles/Wrap';
import { SingleInfoWrap } from './SingleInfoWrap';
import startDate from '../../../assets/startDate.png';
import endDate from '../../../assets/endDate.png';
import certificate from '../../../assets/certificate.png';
import { Paragraph } from '../../../styles/Paragraph';
import { useSelector } from 'react-redux';

export const DownInformation = () => {
    const { person, courseStartedDate, completedDate, certificateTitle, notOnSchedule} = useSelector(({ userReducer }) => userReducer);
    return (
        <Wrap direction='column' justify='space-around' align='center' width='100%' >
            <Wrap width='100%' justify='space-between'>
                <SingleInfoWrap bgColor='purple' img={startDate} fontColor='darkPurple' title='Course Started Date' subtitle={courseStartedDate ? courseStartedDate : 'Not started'} />
                <SingleInfoWrap bgColor='blue' img={endDate} fontColor='darkBlue' title='Completed Date' subtitle={completedDate ? completedDate : 'Not ended'} />
                <SingleInfoWrap bgColor='red' img={certificate} fontColor='darkRed' title='Certificate Title' subtitle={certificateTitle ?? 'None'} />
            </Wrap>
            <Paragraph color='#aaa' radius='25px' margin='20px 0 0 0' fontSize='2vh'  padding='10px' background='rgba(0, 0, 0, .04)'>
                {notOnSchedule ? `This course is not on ${person}'s schedule` : `${person} has this course on her/his shedule`}
            </Paragraph>
        </Wrap>
    )
}

