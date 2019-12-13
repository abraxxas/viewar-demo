import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Tabs } from './Tabs';
import { Tab } from './Tab';
import { PropertyList } from './PropertyList';

export const BottomBar = styled.div`
    width: 100%;
    position: absolute;
    left: 0;
    bottom:0;
    display:flex;
`;

export const PropertySelector = ({ properties, setPropertyValue }) => {
  const [ selectedProperty, setSelectedProperty ] = useState(Object.values(properties)[0]);


  return (
    <BottomBar>
      <Tabs>
        {Object.values(properties).map((property) => {
          return <Tab handleClick={setSelectedProperty} property={property} isActive={property.name === selectedProperty.name} key={property.name} />;
        })}
      </Tabs>
      <PropertyList handleClick={setPropertyValue} property={selectedProperty} />
    </BottomBar>

  );
};

PropertySelector.propTypes = {
  properties:       PropTypes.object.isRequired,
  setPropertyValue: PropTypes.func.isRequired,
};
