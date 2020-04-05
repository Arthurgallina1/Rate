import React, { useState, useEffect } from 'react';
/* eslint-disable */

export function useFetch(url, options) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const baseURL = 'http://192.168.178.135:8000';

  useEffect(() => {
    (async () => {
      const res = await fetch(`${baseURL}${url}`, options);
      const json = await res.json();
      setResponse(json);
      setLoading(false);
    })();
  }, [url, options]);

  return [loading, response];
}
