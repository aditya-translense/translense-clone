import { FaRegUser, FaRegEnvelope } from 'react-icons/fa';
import { PiPencilSimpleLineDuotone } from 'react-icons/pi';

export const contactFormValues = [
  {
    id: 1,
    type: 'text',
    name: 'name',
    placeholder: 'Your name',
    required: true,
    icon: <FaRegUser />,
  },
  {
    id: 2,
    type: 'email',
    name: 'email',
    placeholder: 'Your Email',
    icon: <FaRegEnvelope />,
    required: true,
  },
  {
    id: 3,
    type: 'text',
    name: 'subject',
    placeholder: 'Your subject here',
    icon: <PiPencilSimpleLineDuotone />,
    required: true,
  },
];
