import PropTypes from 'prop-types';
import { Message } from './Notification.styled'

export const Notification = ({ message }) => {
  return <Message>{message}</Message>;
};

Notification.Prototype = {
  message: PropTypes.string.isRequired,
};
