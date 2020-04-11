import React, { useState, useEffect } from 'react';
import { Box } from './styles';

export default function RateBox({ rateInfo }) {
  return (
    <Box>
      <img
        src=" https://api.adorable.io/avatars/50/abott@adorable.png"
        alt=""
      />
      <div>
        <p>{rateInfo.name}</p>
        <h5>{rateInfo.username}</h5>
        <span>{rateInfo.comment}</span>
        <h5>{rateInfo.rate}</h5>
      </div>
    </Box>
  );
}
