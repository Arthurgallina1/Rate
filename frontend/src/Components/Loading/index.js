import React from 'react'
import ReactLoading from 'react-loading';

export const LoadingBars = (type, color, width, height) => (
    <ReactLoading type={type} color={color} height={height} width={width} />
)
