import React from 'react';
import { Wrap } from '../../styles/Wrap';
import { CircularProgress } from './CircularProgress/CircularProgress';
import { DownInformation } from './DownInformation/DownInformation';
import { Header } from './Header/Header';
import { Lessons } from './Lessons';
import { PaginationWrap } from '../Pagination/PaginationWrap';

export const ProjectSection = () => {
    return (
        <Wrap flex='1' direction='column' justify='flex-start' align='center'>
            <Header />
            <Wrap padding='20px 0 0 0' width='100%' direction='row' justify='space-around' align='center'>
                <Lessons />
                <CircularProgress />
            </Wrap>
            <DownInformation />
            <PaginationWrap />
        </Wrap>
    )
}