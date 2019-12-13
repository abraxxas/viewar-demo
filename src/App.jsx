import React, { useState, useEffect }  from 'react';
import viewarApi from 'viewar-api';

import { PropertySelector } from './components/PropertySelector';


const App = () => {
  const [ instance, setInstance ] = useState();


  useEffect(() => {
    async function loadModel() {
      // load demo 3d model
      const model = await viewarApi.modelManager.fetchModelFromRepository('38388');

      // renders model into 3D layer of viewar-core

      await viewarApi.sceneManager.clearScene();

      const instance = await viewarApi.sceneManager.insertModel(model, {
        pose: {
          position: {
            y: 0,
            x: 0,
            z: 0,
          },
        },
      });

      await viewarApi.cameras.perspectiveCamera.disableSceneInteraction();

      instance.setPropertyValues({ Wood: '4Blackwood' });

      setInstance(instance);

      console.log('properties: ', instance.properties);
      console.log('instance: ', instance);
    }
    loadModel();
  }, []);

  return (
    <React.Fragment>
      <h1 id="app_headline">ViewAR SDK</h1>
      {instance && <PropertySelector setPropertyValue={instance.setPropertyValues} properties={instance.properties} />}
    </React.Fragment>
  );
};

export default App;

