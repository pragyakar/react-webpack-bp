import React, { FC } from 'react';

export interface ISampleComponentProps {
  handleClick: () => void;
  text: string;
}

const SampleComponent: FC<ISampleComponentProps> = props => {
  return (
    <div className="sample-container">
      <p className="sample-paragraph">{props.text}</p>
      <button className="sample-button" onClick={() => props.handleClick()}>
        Click me!
      </button>
    </div>
  );
};

export default SampleComponent;
