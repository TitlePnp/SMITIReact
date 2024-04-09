import React, { useEffect } from 'react';
import axios from 'axios';

const GetReportApi = ({ setData, startDate, endDate }) => {
  useEffect(() => {
    axios.post(`http://localhost:7777/getSellReport`, { StartDate: startDate, EndDate: endDate })
      .then((response) => {
        setData(response.data);
      })
      .catch(error => console.error('There was an error!', error));
  }, [setData, startDate, endDate]);

  return null;
};

export default GetReportApi;