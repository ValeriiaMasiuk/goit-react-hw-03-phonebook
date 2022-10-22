import PropTypes from 'prop-types';
import { FilterWrapper, FilterLabel, FilterInput } from './FilterForm.styled'

const FilterForm = ({filter, onChange}) => {
    return (
        <FilterWrapper>
          <FilterLabel>
            Find contacts by Name
            <FilterInput type="text" value={filter} onChange={onChange} />
          </FilterLabel>
        </FilterWrapper>
    )
}

FilterForm.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
}

export default FilterForm