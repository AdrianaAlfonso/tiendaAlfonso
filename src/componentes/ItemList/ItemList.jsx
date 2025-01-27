import Item from '../Item/Item';
import './itemList.scss';
import PropTypes from 'prop-types';

const ItemList = ({ items }) => {
  return (
    <div className='lista-productos'>
      {items?.length &&
        items.map((item) => {
          return <Item item={item} key={item.id} />;
        })}
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ItemList;
