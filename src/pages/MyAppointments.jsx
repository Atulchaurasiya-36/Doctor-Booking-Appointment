import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { assets } from '../assets/assets_frontend/assets';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Appointments</p>
      <div>
        {doctors.slice(0, 3).map((item) => (
          <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={item.id || item.name}>
            <div>
              <img className='w-32 bg-indigo-50' src={item.image} alt={`${item.name} - ${item.speciality}`} />
            </div>
            <div className='flex-1 text-sm text-zinc-500'>
              <p className='text-neutral-800 font-semibold '>{item.name}</p>
              <p>{item.speciality}</p>
              <p className='text-zinc-700 mt-1'>Address:</p>
              <p className='text-xs'>{item.address.line1}</p>
              <p className='text-xs'>{item.address.line2}</p>
              <p className='text-xs mt-1'>
                <span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> {item.appointmentDate || '23 Jun, 2024'} | {item.appointmentTime || '10:00 AM'}
              </p>
            </div>
            <div className='flex flex-col gap-2 justify-end'>
              <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>
              <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded  hover:bg-red-600 hover:text-white transition-all duration-300' >Cancel Appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
