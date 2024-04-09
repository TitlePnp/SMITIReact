import React, { useState } from 'react'
import GetReportApi from '../API/GetReportApi';
export default function SellReport() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [data, setData] = useState([]);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSearch = () => {
    if (startDate === "" && endDate === "") {
      const currentDate = new Date().toISOString();
      const formattedDateTime = currentDate.replace('T', ' ');
      const formattedCurrentDateTime = formattedDateTime.split('.')[0];
      setStartDate(formattedCurrentDateTime);
      setEndDate(formattedCurrentDateTime);
    } else if (startDate === endDate) {
      const formattedStartDateTime = startDate.replace('T', ' ');
      const formattedEndDateTime = endDate.replace('T', ' ');
      console.log(formattedStartDateTime);
      console.log(formattedEndDateTime);
      setStartDate(formattedStartDateTime);
      setEndDate(formattedEndDateTime);
    } else {
      //re for mat to d m y
      const formattedStartDateTime = startDate.replace('T', ' ');
      const formattedEndDateTime = endDate.replace('T', ' ');
      console.log(formattedStartDateTime);
      console.log(formattedEndDateTime);
      console.log(data);
    }
  };

  return (
    <>    <div className='flex flex-col p-10'>
      <div className='flex justify-start'>
        <h1 className='text-2xl font-semibold'>รายงานยอดการขาย</h1>
      </div>
      <div>
        <p>รายงานยอดการสั่งซื้อ</p>
      </div>
      <div className='flex justify-start mt-5'>
        <div className='flex flex-col w-1/2'>
          <div className='flex'>
            <div className='flex flex-col mr-5'>
              <label>เริ่มต้น</label>
              <input type='date' className='border border-gray-300 p-1' value={startDate} onChange={handleStartDateChange} />
            </div>
            <div className='flex flex-col mr-5'>
              <label>สิ้นสุด</label>
              <input type='date' className='border border-gray-300 p-1' value={endDate} onChange={handleEndDateChange} />
            </div>
            <div className='flex justify-center mt-5 hover:shadow-lg hover:text-blue-700'>
              <button className='bg-blue-500 text-white p-2 rounded-md' onClick={handleSearch}>ค้นหา</button>
            </div>
          </div>
        </div>
      </div>
      <div className='my-10 w-full'>
        <GetReportApi setData={setData} startDate={startDate} endDate={endDate} />
        <table className='w-full border'>
          <thead>
            <tr className="bg-gray-400 shadow-lg">
              <th className="border border-gray-300 p-5">รหัสใบเสร็จ</th>
              <th className="border border-gray-300 p-5">เวลา</th>
              <th className="border border-gray-300 p-5">จำนวนสินค้า</th>
              <th className="border border-gray-300 p-5">กำไร</th>
              <th className="border border-gray-300 p-5">ภาษี</th>
              <th className="border border-gray-300 p-5">ต้นทุน</th>
              <th className="border border-gray-300 p-5">ราคารวม</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr className='p-5 hover:bg-gray-200' key={index}>
                <td className='text-center p-5'>{item.RecID}</td>
                <td className='text-center p-5'>{new Date(item.PayTime).toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}</td>
                <td className='text-center p-5'>{parseFloat(item.Qty).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</td>
                <td className='text-center p-5'>{parseFloat(item.Profit).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                <td className='text-center p-5'>{parseFloat(item.Vat).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                <td className='text-center p-5'>{parseFloat(item.Cost).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                <td className='text-center p-5'>{parseFloat(item.TotalPrice).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
              </tr>
            ))}
            <tr>
              <td colSpan={2} className='text-center p-5'>รวม</td>
              <td className='text-center'>{parseFloat(data.reduce((sum, item) => sum + parseFloat(item.Qty), 0)).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</td>
              <td className='text-center'>{parseFloat(data.reduce((sum, item) => sum + parseFloat(item.Profit), 0)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
              <td className='text-center'>{parseFloat(data.reduce((sum, item) => sum + parseFloat(item.Vat), 0)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
              <td className='text-center'>{parseFloat(data.reduce((sum, item) => sum + parseFloat(item.Cost), 0)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
              <td className='text-center'>{parseFloat(data.reduce((sum, item) => sum + parseFloat(item.TotalPrice), 0)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}
