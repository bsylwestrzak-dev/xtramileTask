import React from 'react';
import { Wrap } from '../../../styles/Wrap';
import { IconAndText } from './IconAndText';
import projectImg from '../../../assets/project.png';
import courseImg from '../../../assets/course.png';
import { useSelector } from 'react-redux';

export const Header = () => {
    const { project, course } = useSelector(({ userReducer }) => userReducer)
    return (
        <Wrap direction='column' justify='center' align='center' padding='20px 0 0 0' width='90%'>
            <Wrap direction='row' justify='space-between' align='center' width='100%'>
                <IconAndText color='blue' img={projectImg} header='Project-' subheader={project} />
                <IconAndText color='green' img={courseImg} header='Course-' subheader={course} />
            </Wrap>
            <Wrap margin='13px 0 0 0' width='100%' height='2px' background={({ theme }) => theme.line}></Wrap>
        </Wrap>
    )
}