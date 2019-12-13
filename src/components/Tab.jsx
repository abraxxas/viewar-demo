import React, { useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const StyledTab = styled.div`
    background: ${(props) => props.isActive ? 'red' : 'blue'};
    border: none;
    border-radius: 0;
    color: white;
    padding: 10px 20px;
`;

StyledTab.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export const Tab = ({ isActive, property, handleClick }) => {
  const selectProperty = useCallback(() => handleClick(property), [ handleClick, property ]);

  return (
    <StyledTab isActive={isActive} onClick={selectProperty}>
      {property.name}
    </StyledTab>
  );
};


Tab.propTypes = {
  isActive:    PropTypes.bool.isRequired,
  property:    PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};
