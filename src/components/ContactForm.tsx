import { FaRegUser, FaRegEnvelope } from 'react-icons/fa';
import { PiPencilSimpleLineDuotone } from 'react-icons/pi';
import { Input, Button } from './index';

const ContactForm = () => {
  return (
    <>
      <form className='flex flex-col gap-6'>
        <div className='flex gap-6 '>
          <Input
            type='text'
            name='name'
            placeholder='Your name'
            icon={<FaRegUser />}
          />
          <Input
            type='email'
            name='email'
            placeholder='Your Email'
            icon={<FaRegEnvelope />}
          />
        </div>
        <div className=''>
          <Input
            type='text'
            name='subject'
            placeholder='Your subject here'
            icon={<PiPencilSimpleLineDuotone />}
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
            />
          </div>
          <div className='mt-4'>
            <Button text='Send Message' className='mt-4 text-gray-700' />
          </div>
        </div>
      </form>
    </>
  );
};
export default ContactForm;
