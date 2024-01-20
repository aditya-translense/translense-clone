import { FaRegUser, FaRegEnvelope } from 'react-icons/fa';
import { PiPencilSimpleLineDuotone } from 'react-icons/pi';
import { Input, Button } from './index';
import useFormHandleChange from '../hooks/useHandleChange';

const ContactForm = () => {
  const { formData, errorMessage, setFormData, setErrorMessage, handleChange } =
    useFormHandleChange();
  const { name, email, subject, message } = formData;

  const handleValidation = () => {
    const errorMessages = {
      name: 'Name must be between 3 and 20 characters',
      subject: 'Subject must be less than 10 characters',
      message: 'Message must be more than 10 characters',
    };

    if (name.length < 3) {
      setErrorMessage(errorMessages.name);
      return true;
      return;
    }

    if (subject.length < 10) {
      setErrorMessage(errorMessages.subject);
      return true;
      return;
    }

    if (message.length < 10) {
      setErrorMessage(errorMessages.message);
      return true;
      return;
    }

    return false;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleValidation()) {
      return;
    }

    setErrorMessage('');
    setFormData({ name: '', email: '', subject: '', message: '' });
    console.log('form submitted');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
        {errorMessage && (
          <div className='bg-red-100 p-2 rounded-md'>
            <p className='text-red-500 text-xs'>{errorMessage}</p>
          </div>
        )}
        <div className='flex flex-col gap-2'>
          <div className=' flex flex-col lg:flex-row gap-6 '>
            <Input
              type='text'
              name='name'
              placeholder='Your name'
              icon={<FaRegUser />}
              value={name}
              onChange={handleChange}
              required={true}
            />
            <Input
              type='email'
              name='email'
              placeholder='Your Email'
              icon={<FaRegEnvelope />}
              value={email}
              onChange={handleChange}
              required={true}
            />
          </div>
        </div>
        <div className=''>
          <Input
            type='text'
            name='subject'
            placeholder='Your subject here'
            icon={<PiPencilSimpleLineDuotone />}
            value={subject}
            onChange={handleChange}
            required={true}
          />
        </div>
        <div>
          <div className='bg-white flex rounded-xl gap-3 p-3 border-2 border-transparent focus-within:border-blue-300 focus-within:shadow-blue-300 shadow-xs'>
            <PiPencilSimpleLineDuotone />
            <textarea
              name='message'
              cols={30}
              rows={5}
              className='rounded-2xl  resize-none block p-1 w-full placeholder:capitalize placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
              placeholder='Your message here'
              value={message}
              onChange={handleChange}
              required={true}
            />
          </div>

          <div className='mt-4'>
            <Button className='text-gray-700' type='submit'>
              Send Message
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};
export default ContactForm;
