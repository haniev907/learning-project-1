import React from 'react';

import './styles.css';

const S = 83;
const W = 87;
const A = 65;
const D = 68;

const speed = 10;

const Car = (props) => {
  return (
    <div
      className="car"
      style={{
        left: props.left,
        top: props.top,
        'transform': `rotate(${props.rotate}deg)`
      }}
    />
  );
};

const Game = () => {
  const [left, setLeft] = React.useState(0);
  const [top, setTop] = React.useState(0);

  const [rotate, setRotate] = React.useState(0);

  React.useEffect(() => {
    console.log('GAME START');

    document.addEventListener('keydown', (event) => {
      const { keyCode } = event;
      
      if (keyCode === S) {
        setTop((currentTop) => currentTop + speed);
      }

      if (keyCode === W) {
        setTop((currentTop) => currentTop + speed);
        setLeft((currentLeft) => currentLeft + speed);
      }

      if (keyCode === A) {
        setRotate((currentRotate) => currentRotate - speed);
      }

      if (keyCode === D) {
        setRotate((currentRotate) => currentRotate + speed);
      }
    });
  }, []);

  return (
    <div className="game">
      <Car left={left} top={top} rotate={rotate} />
    </div>
  );
};

export default Game;
