import React, { useState, useEffect } from 'react';
import { Box } from './styles';

export default function RateBox({ rateInfo }) {
  return (
    <Box>
      <div className="img-box">
        <img
          src=" https://api.adorable.io/avatars/50/abott@adorable.png"
          alt=""
        />
      </div>
      <div className="follow-box-info">
        <strong>{rateInfo.name}</strong>
        <h5>{rateInfo.username}</h5>
        <span>{rateInfo.comment}</span>
      </div>
      <div className="button-box">
        <h3>{rateInfo.rate}</h3>
      </div>
    </Box>
  );
}
