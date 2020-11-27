import React from 'react';
import './App.css';
import ContexParent from './ContexParent';
import Coordinates from './Coordinates';
import FetchingData from './FetchingData';
import FetchingDataHook from './FetchingDataHook';
import FetchingDataReducer from './FetchingDataReducer';
import Hook from './Hook'
import HookReducer from './HookReducer';
import IntervalCounter from './IntervalCounter';
import MouseUnmount from './MouseUnmount';

function App() {
  return (
    <>
    {/* <Hook/> */}
    <Coordinates/>
    <MouseUnmount/>
    {/* <IntervalCounter/> */}
    {/* <FetchingData/> */}
    {/* <HookReducer/> */}
    {/* <ContexParent/> */}
    {/* <FetchingDataHook/> */}
    {/* <FetchingDataReducer/> */}
    </>
  );
}

export default App;
