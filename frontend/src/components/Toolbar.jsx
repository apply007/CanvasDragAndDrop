import React, { useState } from 'react';

function Toolbar({ addIcon, icons, connections }) {
  const [fromId, setFromId] = useState('');
  const [toId, setToId] = useState('');
  const [label, setLabel] = useState('');

  const handleConnect = () => {
    if (fromId && toId && fromId !== toId) {
      connections.push({ fromId, toId, label });
      setFromId('');
      setToId('');
      setLabel('');
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      <button onClick={() => addIcon('Browser')} className="bg-blue-500 text-black px-4 py-1 rounded">Add Browser</button>
      <button onClick={() => addIcon('Server')} className="bg-green-500 text-black px-4 py-1 rounded">Add Server</button>
      <select value={fromId} onChange={e => setFromId(e.target.value)}>
        <option value=''>From</option>
        {icons.map(icon => <option key={icon.id} value={icon.id}>{icon.label}</option>)}
      </select>
      <select value={toId} onChange={e => setToId(e.target.value)}>
        <option value=''>To</option>
        {icons.map(icon => <option key={icon.id} value={icon.id}>{icon.label}</option>)}
      </select>
      <input
        type="text"
        placeholder="Connection label"
        value={label}
        onChange={e => setLabel(e.target.value)}
        className="border px-2"
      />
      <button onClick={handleConnect} className="bg-gray-700 text-black px-4 py-1 rounded">Connect</button>
    </div>
  );
}

export default Toolbar;