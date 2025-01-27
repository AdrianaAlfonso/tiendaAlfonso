import { useState } from 'react';
import './itemCount.scss';
import CustomButton from '../CustomButton/CustomButton';
import PropTypes from 'prop-types';

const ItemCount = ({ stock }) => {
  const [contador, setcontador] = useState(1);

  const incrementar = () => {
    if (contador < stock) {
      setcontador(contador + 1);
    }
  };

  const descrementar = () => {
    if (contador > 1) {
      setcontador(contador - 1);
    }
  };

  return (
    <div className='producto-contador'>
      <CustomButton onClick={incrementar}> + </CustomButton>
      <span>{contador}</span>
      <CustomButton onClick={descrementar}> - </CustomButton>
    </div>
  );
};

ItemCount.propTypes = {
  stock: PropTypes.number.isRequired,
};

export default ItemCount;
