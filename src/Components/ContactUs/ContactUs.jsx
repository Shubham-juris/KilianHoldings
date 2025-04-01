// import { useEffect, useState } from 'react';
// import {
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Card,
//   CardContent,
//   Fade,
// } from '@mui/material';
// import Grid from '@mui/material/Grid';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import PhoneIcon from '@mui/icons-material/Phone';
// import EmailIcon from '@mui/icons-material/Email';
// import AOS from "aos";
// import "aos/dist/aos.css";

// import contactImage from '../../assets/ContactUs/image.png';

const ContactUs = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 1200, once: false, mirror: true });
  // }, []);

  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert('Form submitted! (EmailJS is commented out)');
  //   setFormData({ name: '', email: '', message: '' });
  // };

  // const contactInfoText =
  //   'At Kilian Holdings, we understand that navigating the paralegal landscape can be daunting.';

  return (
    <>
      <div>
        <h1
          className='text-center text-[2em]'
          style={{ color: '#0C3F40', marginBottom: '2.7em' }}
        >
          <b>ContactUs</b>
        </h1>
      </div>
      <div className='flex gap-20 w-full h-screen justify-center'>
        <div className='  h-screen'>
          <h1 className='text-[22px]' style={{ marginBottom: '15px' }}>
            Drop us a line!
          </h1>
          <form className='max-w-md w-full space-y-6 p-6 bg-white'>
            {/* Name Input */}
            <div className='flex flex-col' style={{ marginBottom: '25px' }}>
              <label
                htmlFor='name'
                className='text-sm font-medium text-gray-700'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='mt-1 p-2 w-full border-b-1 rounded '
              />
            </div>

            {/* Email Input */}
            <div className='flex flex-col' style={{ marginBottom: '25px' }}>
              <label
                htmlFor='email'
                className='text-sm font-medium text-gray-700'
              >
                Email *
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='mt-1 p-2 w-full border-b-1 rounded '
              />
            </div>

            {/* Message Input */}
            <div className='flex flex-col' style={{ marginBottom: '25px' }}>
              <label
                htmlFor='message'
                className='text-sm font-medium text-gray-700'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                className='mt-1 p-2 w-full border-b-1 rounded h-[5.8em]'
              />
            </div>

            {/* File Attachment (UI Only) */}
            <div className='flex justify-between items-center  p-2  cursor-pointer'>
              <span className='text-gray-600'>📎 Attach Files</span>
              <span className='text-gray-400'>Attachments (0)</span>
            </div>

            {/* Submit Button */}
            <button
              type='button'
              className='w-20 text-[13px] bg-black text-white  rounded hover:bg-stone-800 transition relative left-[13em] top-5'
              style={{ padding: '0.9em' }}
            >
              SEND
            </button>
          </form>
          <div style={{ marginTop: '25px' }}>
            <p
              className='text-stone-400 text-[12px]'
              style={{ color: '#0C3F40' }}
            >
              This site is protected by reCAPRCHAN and the Google Private Policy
              and Terms of Service apply
            </p>
          </div>
        </div>

        <div>
          <h2 className='text-[24px]' style={{ marginBottom: '18px' }}>
            Better yet, see us in person!{' '}
          </h2>
          <p style={{ marginBottom: '20px' }}>
            We love our customers, so feel free to visit during normal business
            hours.{' '}
          </p>
          <h2 className='text-[24px]' style={{ marginBottom: '20px' }}>
            Kilian Holdings Ltd{' '}
          </h2>
          <p style={{ marginBottom: '18px' }}>
            4804 42 Ave, Innisfail, Alberta T4G 1N4, Canada{' '}
          </p>
          <p style={{ marginBottom: '18px' }}>
            <span style={{ color: '#0C3F40' }}>#3 5105 51 </span>Ave Drayton
            Valley, Alberta <br />
            T7A 0C3{' '}
          </p>
          <p style={{ marginBottom: '18px' }}>
            Unit <span style={{ color: '#0C3F40' }}> 215, 321</span> Main Street
            Northeast, Slave lake TOG 2A0{' '}
          </p>
          <p style={{ marginBottom: '18px' }}>
            <span style={{ color: '#0C3F40' }}>5009D</span>, 51Street, Barhead,
            T7N 1L1{' '}
          </p>
          <p style={{ marginBottom: '18px' }}>
            Toll free number:
            <span style={{ color: '#0C3F40' }}> 1-833-215-9686 </span>
          </p>
          <span style={{ marginBottom: '18px' }}>Email</span>
          <p style={{ marginBottom: '18px', color: '#0C3F40' }}>
            kilianholdingltd@gmail.com{' '}
          </p>
          <p className='text-[24px]' style={{ marginBottom: '18px' }}>
            Hours{' '}
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
