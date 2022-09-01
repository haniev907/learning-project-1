import React from 'react';

import './styles.css';

const S = 83;
const W = 87;
const A = 65;
const D = 68;

const speed = 10;

const trajectorys = [
  {
    left: -1,
    top: -1,
  },
  {
    left: 1,
    top: -1,
  },
  {
    left: 1,
    top: 1,
  },
  {
    left: -1,
    top: 1,
  }
];

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

const getTrajectoryOfRotate = (value) => {
  console.log({value});
  if (value >= 0 && value <= 90) {
    return 1;
  }

  if (value >= 90 && value <= 180) {
    return 2;
  }

  if (value >= 180 && value <= 270) {
    return 3;
  }

  if (value >= 270 && value <= 360) {
    return 4;
  }
};

const Game = () => {
  const [left, setLeft] = React.useState(200);
  const [top, setTop] = React.useState(200);

  const [rotate, setRotate] = React.useState(0);

  const onRotate = (value) => {
    setRotate((rotate) => {
      const newRotate = rotate + value;

      if (newRotate === 360) {
        return 0;
      }

      if (newRotate === -10) {
        return 350;
      }

      return newRotate;
    });
  };

  console.log({rotate});

  React.useEffect(() => {
    console.log('GAME START');

    const listener = (event) => {
      console.log('keydown');
      const { keyCode } = event;

      if (keyCode === W) {
        const trajectoryBlock = getTrajectoryOfRotate(rotate);
        const trajectoryValues = trajectorys[trajectoryBlock - 1];
        console.log({
          trajectoryBlock,
          trajectoryValues,
        });
        setTop((top) => top + trajectoryValues.top * speed);
        setLeft((left) => left + trajectoryValues.left * speed);
      }

      if (keyCode === A) {
        onRotate(-10);
      }

      if (keyCode === D) {
        onRotate(10);
      }
    };

    document.addEventListener('keydown', listener);

    return () => {
      document.removeEventListener('keydown', listener, false);
    };
  }, [rotate]);

  return (
    <div className="game">
      <Car left={left} top={top} rotate={rotate} />
    </div>
  );
};

export default Game;
