import PropTypes from 'prop-types';
import './commonContainer.scss';
import NavBar from '../NavBar/NavBar';

const CommonContainer = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

CommonContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CommonContainer;
