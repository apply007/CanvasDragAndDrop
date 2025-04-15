// File: client/src/components/CanvasArea.jsx
import React, { useState } from 'react';
import { Stage, Layer } from 'react-konva';
import Icon from './Icon';
import ConnectionLine from './ConnectionLine';
import Toolbar from './Toolbar';
import ReportButton from './ReportButton';

function CanvasArea() {
  const [icons, setIcons] = useState([]);
  const [connections, setConnections] = useState([]);

  const addIcon = (type) => {
    const id = Date.now().toString();
    const newIcon = {
      id,
      type,
      x: 50,
      y: 50,
      label: type,
      width: 80,
      height: 80
    };
    setIcons([...icons, newIcon]);
  };

  const updateIcon = (updatedIcon) => {
    setIcons(icons.map(icon => icon.id === updatedIcon.id ? updatedIcon : icon));
  };

  const createConnection = (fromId, toId, label) => {
    const id = Date.now().toString();
    setConnections([...connections, { id, fromId, toId, label }]);
  };

  return (
    <div className="flex flex-col gap-4">
      <Toolbar addIcon={addIcon} icons={icons} connections={connections} />
      <Stage width={1000} height={600} className="border border-gray-400">
        <Layer>
          {connections.map(conn => (
            <ConnectionLine key={conn.id} connection={conn} icons={icons} />
          ))}
          {icons.map(icon => (
            <Icon key={icon.id} icon={icon} updateIcon={updateIcon} />
          ))}
        </Layer>
      </Stage>
      <ReportButton icons={icons} connections={connections} />
    </div>
  );
}

export default CanvasArea;