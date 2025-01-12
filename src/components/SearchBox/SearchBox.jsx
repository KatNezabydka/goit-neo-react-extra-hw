import css from '../SearchBox/SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors.js';
import { changeFilter } from '../../redux/filters/slice.js';

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  const handleChange = el => {
    dispatch(changeFilter(el.target.value));
  };

  return (
    <div className={css.search}>
      <label className={css.label}>
        Find contacts by name:
        <input className={css.input}
               type="text"
               value={filter}
               onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;