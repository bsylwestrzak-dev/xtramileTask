import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { Wrap } from '../../styles/Wrap';
import { useDispatch } from 'react-redux';
import { SET_USER_DATA } from '../../redux/action/index';
import { useSelector } from 'react-redux';

export const PaginationWrap = () => {
    const dispatch = useDispatch();
    const { totalPage } = useSelector(({ pageReducer }) => pageReducer)
    const  data = useSelector(({ dataReducer}) => dataReducer)
    return (
        <Wrap pagination>
            <Pagination onChange={(e, val) => dispatch(SET_USER_DATA(data[val - 1]))} count={totalPage} variant="outlined" color="primary" />
        </Wrap>
    )
}