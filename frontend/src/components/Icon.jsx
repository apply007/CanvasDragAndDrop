import React from 'react';
import { Rect, Text, Group } from 'react-konva';

function Icon({ icon, updateIcon }) {
  const handleDragEnd = (e) => {
    updateIcon({ ...icon, x: e.target.x(), y: e.target.y() });
  };

  return (
    <Group
      x={icon.x}
      y={icon.y}
      draggable
      onDragEnd={handleDragEnd}
    >
      <Rect
        width={icon.width}
        height={icon.height}
        fill={icon.type === 'Browser' ? 'lightblue' : 'lightgreen'}
        cornerRadius={10}
      />
      <Text
        text={icon.label}
        x={5}
        y={icon.height / 2 - 10}
        fontSize={16}
        fill="black"
      />
    </Group>
  );
}

export default Icon;