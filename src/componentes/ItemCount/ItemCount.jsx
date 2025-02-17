import './itemCount.scss';
import CustomButton from '../CustomButton/CustomButton';
import PropTypes from 'prop-types';

const ItemCount = ({ stock, value, setValue }) => {
  const incrementar = () => {
    if (value < stock) {
      setValue(value + 1);
    }
  };

  const descrementar = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  return (
    <div className='producto-contador'>
      <CustomButton onClick={descrementar}> - </CustomButton>
      <span>{value}</span>
      <CustomButton onClick={incrementar}> + </CustomButton>
    </div>
  );
};

ItemCount.propTypes = {
  stock: PropTypes.number.isRequired,
};

export default ItemCount;
