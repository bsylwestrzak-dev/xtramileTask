import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import { Wrap } from '../../../styles/Wrap';
import RadialSeparators from "./RadialSeparators";
import "react-circular-progressbar/dist/styles.css";
import { Paragraph } from '../../../styles/Paragraph';
import { Span } from '../../../styles/Span';
import { Image } from '../../../styles/Image';
import greenBlur from '../../../assets/greenBlur.png';
import orangeBlur from '../../../assets/orangeBlur.png';
import redBlur from '../../../assets/redBlur.png';
import blueBlur from '../../../assets/blueBlur.png';
import { useSelector } from 'react-redux';

export const CircularProgress = () => {
    const { quizScore, quizScoreTotal } = useSelector(({ userReducer }) => userReducer);
    return (
        <Wrap z='0' position='relative' width='8vw' direction='column' justicy='center' align='center' padding='0 50px'>
            <Paragraph fontSize='2.5vh' margin='0'>Quiz Score</Paragraph>
            <Paragraph fontSize='2vh' margin='9px 0 20px 0'>{quizScore}<Span fontSize='2vh' color={({ theme }) => theme.grey}> / {quizScoreTotal}</Span></Paragraph>
            <CircularProgressbarWithChildren
                value={quizScoreTotal === 0 ? 0 : (quizScore / quizScoreTotal) *100}
                text={`${Math.round(quizScoreTotal === 0 ? 0 : (quizScore / quizScoreTotal) *100)} %`}
                strokeWidth={10}
                styles={buildStyles({
                strokeLinecap: "butt"
                })}
                >
                <RadialSeparators
                count={12}
                style={{
                    background: "#fff",
                    width: "2px",
                    // This needs to be equal to props.strokeWidth
                    height: `${10}%`
                }}
                />
            </CircularProgressbarWithChildren>
            <Image z='-1' position='absolute' top='-150px' left='-250px' src={greenBlur} />
            <Image z='-1' position='absolute' top='0px' left='-250px' src={orangeBlur} />
            <Image z='-1' position='absolute' top='-150px' right='-100px' src={redBlur} />
            <Image z='-1' position='absolute' top='0px' right='-100px' src={blueBlur} />
        </Wrap>
    )
}