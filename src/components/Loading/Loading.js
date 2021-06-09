import React from 'react';
import { Wrap } from '../../styles/Wrap';
import Loader from "react-loader-spinner";

export const Loading = () => {
    return (
        <Wrap width='100%' justify='center' align='center'>
            <Loader
                    type="Circles"
                    color="#00BFFF"
                    height={100}
                    width={100}
            />
        </Wrap>
    )
}