import React, { useEffect, useState } from 'react';

const Table = () => {
  const [seats, setSeats] = useState([]);  

  useEffect(() => {

    fetch('https://viaje.ai/seatinfo_api/')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('API Data:', data); 
        if (data?.data) {  
          setSeats(data.data);  
        } else {
          console.error('No seats data available:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching seat data:', error);
      });
  }, []);



  return (
    <div className="relative w-full ml-[-10px] overflow-x-auto">
 
      <table className="w-full max-w-md mx-auto text-left bg-white shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-blue-200">
          <tr>
            <th className="py-2 px-1">SEAT</th>
            <th className="py-2 px-1">PRICE</th>
            <th className="py-2 ">STATUS</th>
          </tr>
        </thead>
        <tbody>
          {seats.map((seat, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 px-2">{seat.seat_no}</td>  
              <td className="py-2 px-2">{seat.price}</td>   
              <td className="py-2 px-2">{seat.status}</td>  
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
