import React from 'react';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom';

const AddressCard = ({ data }) => {

    console.log("ADdata", data);
    
  return (
    <>
      {!data || Object.keys(data).length === 0 ? (
        <div className='h3 mt-[2rem] shadow-md p-4 w-[80%] h-[19rem]'>
          Please Add Address
        </div>
      ) : (
        <div className='flex flex-col shadow w-[100%] h-[19rem] p-3 align-items-start'>
          <div className='flex'>
            <div className='h2 m-2'>{data.firstName}</div>
            <div className='h2 m-2'>{data.lastName}</div>
          </div>
          <div>
            <p className='ml-2 m-1'>{data.streetAddress}</p>
            <div className='flex'>
              <p className='m-1'>{data.city}</p>
              <p className='m-1'>{data.state}</p>
              <p className='m-1'>{data.zipCode}</p>
            </div>
          </div>
          <div className='flex flex-col align-items-start'>
            <div className='h5 m-2'>Phone Number</div>
            <p className='m-2'>{data.mobile}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AddressCard;
