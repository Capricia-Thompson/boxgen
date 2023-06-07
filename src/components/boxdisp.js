import React from 'react';
import StyledBox from './styledbox';

const BoxDisplay = (props) => {
    console.log(props)
    return (
        <div style={{
            display: 'flex',
            gap: '10px',
            margin: '20px'
        }}>
            {
                props.colorList.map((box) =>
                    <StyledBox bgColor={box.color} size={box.size} />)
            }
        </div >
    )
}

export default BoxDisplay;