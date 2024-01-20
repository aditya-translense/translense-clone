import { useState } from 'react';

const useFormHandleChange = () => {
  const [formData, setFormData] = useState({
    name: 'Aditya',
    email: 'aditya.translense@gmail.com',
    subject: 'Testing Testing Testing Testing',
    message: 'Testing Testing Testing Testing',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return { formData, handleChange, setFormData, errorMessage, setErrorMessage };
};
export default useFormHandleChange;
