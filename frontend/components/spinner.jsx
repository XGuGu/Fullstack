import React from 'react';
import { BeatLoader } from 'react-spinners';

const Spinner = (state) => {
  return (
    <div className="react-spinner-container">
      <BeatLoader
        className="Beat-loader"
        sizeUnit={"px"}
        size={20}
        color={'#008489'}
        loading={state.loading}
      />
    </div>
  )
};

export default Spinner;
