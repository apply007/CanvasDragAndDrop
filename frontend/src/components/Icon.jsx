import React, { useEffect, useRef } from 'react';
import { Rect, Text, Group, Circle, Ellipse, Transformer } from 'react-konva';

function Icon({ icon, updateIcon, shape, isSelected, onSelect }) {
  const shapeRef = useRef();
  const trRef = useRef();

  const handleDragEnd = (e) => {
    updateIcon({ ...icon, x: e.target.x(), y: e.target.y() });
  };

  const handleTransformEnd = () => {
    const node = shapeRef.current;
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();

    const updated = {
      ...icon,
      x: node.x(),
      y: node.y(),
    };

    if (shape === 'rect') {
      updated.width = node.width() * scaleX;
      updated.height = node.height() * scaleY;
    } else if (shape === 'circle') {
      updated.width = node.radius() * scaleX * 2; // since radius is half of width
    } else if (shape === 'ellipse') {
      updated.radiusX = node.radiusX() * scaleX;
      updated.radiusY = node.radiusY() * scaleY;
    }

    node.scaleX(1);
    node.scaleY(1);
    updateIcon(updated);
  };

  useEffect(() => {
    if (isSelected && shapeRef.current && trRef.current) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Group
        x={icon.x}
        y={icon.y}
        draggable
        onClick={onSelect}
        onTap={onSelect}
        onDragEnd={handleDragEnd}
      >
        {shape === 'rect' && (
          <Rect
            ref={shapeRef}
            width={icon.width}
            height={icon.height}
            fill={icon.type === 'Browser' ? 'lightblue' : 'lightgreen'}
            cornerRadius={10}
            onTransformEnd={handleTransformEnd}
          />
        )}
        {shape === 'circle' && (
          <Circle
            ref={shapeRef}
            radius={icon.width / 2}
            fill={icon.type === 'Browser' ? 'lightblue' : 'lightgreen'}
            onTransformEnd={handleTransformEnd}
          />
        )}
        {shape === 'ellipse' && (
          <Ellipse
            ref={shapeRef}
            radiusX={icon.radiusX || 60}
            radiusY={icon.radiusY || 40}
            fill="lightblue"
            stroke="blue"
            onTransformEnd={handleTransformEnd}
          />
        )}
        <Text
          text={icon.label}
          x={5}
          y={(icon.height || icon.radiusY || 40) / 2 - 10}
          fontSize={16}
          fill="black"
        />
      </Group>

      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 20 || newBox.height < 20) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
}

export default Icon;
