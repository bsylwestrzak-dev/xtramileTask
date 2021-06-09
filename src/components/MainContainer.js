import React, {useEffect} from 'react';
import { Wrap } from '../styles/Wrap';
import { ProjectSection } from './ProjectInfo/ProjectSection';
import { UserSection } from './UserInfo/UserSection';
import { useDispatch, useSelector } from 'react-redux'
import { SET_TOTAL_PAGE_NUMBER, SET_USER_DATA, SET_DATA} from '../redux/action/index';
import { Loading } from '../components/Loading/Loading';


export const MainContainer = () => {
    const appData = useSelector(({ dataReducer }) => dataReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://xtramile.azure-api.net/stats/lukaszcoding?apiSecret=i34nvn324gdfg5 ');
            const data = await response.json();
            dispatch(SET_DATA(data))
            dispatch(SET_TOTAL_PAGE_NUMBER(data.length))
            dispatch(SET_USER_DATA(data[0]))

        }
        fetchData()
    }, [])
    return (
        <Wrap position='relative' height='86vh' width='90vw' background={({ theme }) => theme.white} radius='25px' shadow='3px 3px 33px black' overflow='hidden'>
            {!appData.length ? <Loading /> : 
            <>
            <ProjectSection />
            <UserSection /> 
            </>
            }
        </Wrap>
    )
}