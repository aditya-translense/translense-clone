import { useState } from 'react';
import { Button, CareerFormInput, Checkbox } from './index';
import { interestedAreaInfo } from '../constants';

interface IFormValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  interestedArea: string[];
  message: string;
}
const initialValues: IFormValues = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  interestedArea: [],
  message: '',
};

const CareerForm = () => {
  const [formData, setFormData] = useState(initialValues);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name === 'interestedArea') {
      let copy = { ...formData };
      if ((e.target as HTMLInputElement).checked) {
        copy.interestedArea.push(e.target.value);
      } else {
        copy.interestedArea = copy.interestedArea.filter(
          (area: string) => area !== e.target.value
        );
      }
      setFormData(copy);
    } else {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
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
    console.log(formData);

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
      interestedArea: [],
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
        <div className='flex flex-col md:flex-row w-full gap-8'>
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
        <div className='flex flex-col md:flex-row w-full gap-8'>
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

        <div className=''>
          <p>I'd love to</p>
          <ul className='flex flex-wrap gap-4 mt-2'>
            {interestedAreaInfo.map(({ id, label, interest }) => (
              <li key={id}>
                <Checkbox
                  formData={formData}
                  interest={interest}
                  label={label}
                  onChange={handleChange}
                />
              </li>
            ))}
          </ul>
        </div>

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

        <div className='flex justify-end'>
          <Button type='submit'>Send Message</Button>
        </div>
      </form>
    </>
  );
};
export default CareerForm;
