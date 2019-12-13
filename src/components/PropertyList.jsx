import React, { useCallback, useState }  from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledOption = styled.div`
    background-image: url('${(props) => props.imageUrl}');
    height: 55px;
    width: 55px;
    margin-right:5px;
    position: relative;
    border-radius: 50%;
    border: 1px solid;
    border-color:${(props) => props.isActive ? 'red' : 'black'}
`;

StyledOption.propTypes = {
  isActive: PropTypes.bool.isRequired,
  imageUrl:    PropTypes.string.isRequired,
};

const Option = ({
  option, handleClick, isActive,
}) => {
  const selectPropertyValue = useCallback(() => handleClick(option), [ handleClick, option ]);

  return (
    <StyledOption onClick={selectPropertyValue} isActive={isActive} imageUrl={option.imageUrl} />
  );
};

Option.propTypes = {
  option:       PropTypes.object.isRequired,
  handleClick:  PropTypes.func.isRequired,
  isActive:     PropTypes.bool.isRequired,
};


export const PropertyList = ({ property, handleClick }) => {
  // eslint-disable-next-line no-unused-vars
  const [ selectedPropertyValue, setSelectedPropertyValue ] = useState(property.value);

  const selectPropertyValue = useCallback((option) => {
    handleClick({ [property.name]: option.name });
    // state is used to force a rerender after click
    setSelectedPropertyValue(option);
  }, [ handleClick, property.name ]);

  return (
    <React.Fragment>
      {property.options.map((option) => { return <Option handleClick={selectPropertyValue} isActive={property.value.name === option.name} key={option.key} option={option} />; })}
    </React.Fragment>


  );
};

PropertyList.propTypes = {
  property:    PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

