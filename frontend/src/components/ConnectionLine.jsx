import React from 'react';
import { Arrow, Text } from 'react-konva';

function ConnectionLine({ connection, icons }) {
  const from = icons.find(i => i.id === connection.fromId);
  const to = icons.find(i => i.id === connection.toId);

  if (!from || !to) return null;

  return (
    <>
      <Arrow
        points={[from.x + from.width / 2, from.y + from.height / 2, to.x + to.width / 2, to.y + to.height / 2]}
        pointerLength={10}
        pointerWidth={10}
        fill="black"
        stroke="black"
      />
      <Text
        text={connection.label}
        x={(from.x + to.x) / 2}
        y={(from.y + to.y) / 2}
        fontSize={14}
        fill="red"
      />
    </>
  );
}

export default ConnectionLine;
