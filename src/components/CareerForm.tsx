import { useState } from 'react';
import { Button, CareerFormInput } from './index';

const CareerForm = () => {
  const [formData, setFormData] = useState({
    firstName: 'Aditya',
    lastName: 'Yadav',
    phone: '1234567890',
    email: 'aditya@translense.com',
    message: 'aditya',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleValidation = () => {
    const { firstName, lastName, email, phone, message } = formData;

    if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      phone === '' ||
      message === ''
    ) {
      setErrorMessage('All fields are required');
      return true;
    }

    return false;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleValidation()) {
      return;
    }
    setErrorMessage('');
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: '',
    });
    console.log('form submitted');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='w-full flex flex-col gap-12'>
        {errorMessage && (
          <div className='bg-red-100 p-2 rounded-md'>
            <p className='text-red-500 text-xs'>{errorMessage}</p>
          </div>
        )}
        <div className='flex w-full gap-8'>
          <CareerFormInput
            id='firstName'
            label='First Name'
            type='text'
            name='firstName'
            className=''
            placeholder='First Name'
            onChange={handleChange}
            value={formData.firstName}
          />
          <CareerFormInput
            id='lastName'
            label='Last Name'
            type='text'
            name='lastName'
            className=''
            placeholder='Last Name'
            onChange={handleChange}
            value={formData.lastName}
          />
        </div>
        <div className='flex w-full gap-8'>
          <CareerFormInput
            id='phone'
            label='Phone'
            type='text'
            name='phone'
            className=''
            placeholder='Phone Number'
            onChange={handleChange}
            value={formData.phone}
          />
          <CareerFormInput
            id='email'
            label='Email'
            type='text'
            name='email'
            className=''
            placeholder='Email'
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        {/* <div className=''>
          <p>I'd love to</p>
          <ul className='flex gap-4 mt-2'>
            <li className=''>
              <input
                type='checkbox'
                name='interestedArea'
                id=''
                checked={false}
                onChange={() => {}}
                className='appearance-none'
              />
              <label
                htmlFor=''
                className='cursor-pointer duration-300 transition-all text-sm capitalize hover:border-gray-900 p-4 flex items-center justify-center border border-gray-400 rounded-full'
              >
                options1    
              </label>
            </li>
          </ul>
        </div> */}

        <div>
          <label htmlFor='message' className='capitalize'>
            Message (optional)
          </label>
          <textarea
            className={`resize-none outline-none border-b border-b-gray-400 py-3 placeholder:text-gray-400 block w-full`}
            name='message'
            placeholder='Write your message...'
            id='message'
            rows={1}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <div>
          <Button type='submit'>Send Message</Button>
        </div>
      </form>
    </>
  );
};
export default CareerForm;
