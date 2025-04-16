import React from 'react';
import { Rect, Text, Group,Circle,Ellipse } from 'react-konva';

function Icon({ icon, updateIcon ,shape}) {
  const handleDragEnd = (e) => {
    updateIcon({ ...icon, x: e.target.x(), y: e.target.y() });
  };
console.log(shape)
  return (
    <Group
      x={icon.x}
      y={icon.y}
      draggable
      onDragEnd={handleDragEnd}
    >
   {shape==='rect' &&    <Rect
        width={icon.width}
        height={icon.height}
        fill={icon.type === 'Browser' ? 'lightblue' : 'lightgreen'}
        cornerRadius={10}
      />}
   {shape==='circle' &&    <Circle
        width={icon.width}
        height={icon.height}
        fill={icon.type === 'Browser' ? 'lightblue' : 'lightgreen'}
        cornerRadius={10}
      />}
   {shape==='ellipse' &&     <Ellipse
          x={200}
          y={200}
          radiusX={60}
          radiusY={40}
          fill="lightblue"
          stroke="blue"
          strokeWidth={2}
          draggable
        />
}
   {/* {shape==='diamond' &&    <Diamond
        width={icon.width}
        height={icon.height}
        fill={icon.type === 'Browser' ? 'lightblue' : 'lightgreen'}
        cornerRadius={10}
      />} */}
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