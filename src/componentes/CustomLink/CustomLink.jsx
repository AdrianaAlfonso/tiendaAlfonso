import { Link } from 'react-router';
import PropTypes from 'prop-types';

const CustomLink = ({ children, ...props }) => {
  return <Link {...props}>{children}</Link>;
};

CustomLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomLink;
