import PropTypes from 'prop-types';

const CustomButton = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default CustomButton;
