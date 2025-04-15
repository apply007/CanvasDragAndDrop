import React from 'react';

const shapeOptions = ['rectangle', 'square', 'circle', 'ellipse', 'diamond', 'image'];

function PropertiesPanel({ selectedIcon, updateIcon }) {
  if (!selectedIcon) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateIcon({ ...selectedIcon, [name]: name === 'width' || name === 'height' ? parseInt(value) : value });
  };

  return (
    <div className="p-3 border rounded bg-gray-100 max-w-xs">
      <h2 className="font-bold mb-2">Edit Properties</h2>
      <label className="block mb-1">Label</label>
      <input name="label" value={selectedIcon.label} onChange={handleChange} className="w-full mb-2 px-2 py-1 border rounded" />
      
      <label className="block mb-1">Color</label>
      <input type="color" name="color" value={selectedIcon.color} onChange={handleChange} className="w-full mb-2 h-8" />
      
      <label className="block mb-1">Width</label>
      <input name="width" type="number" value={selectedIcon.width} onChange={handleChange} className="w-full mb-2 px-2 py-1 border rounded" />
      
      <label className="block mb-1">Height</label>
      <input name="height" type="number" value={selectedIcon.height} onChange={handleChange} className="w-full mb-2 px-2 py-1 border rounded" />
      
      <label className="block mb-1">Shape</label>
      <select name="shape" value={selectedIcon.shape} onChange={handleChange} className="w-full mb-2 px-2 py-1 border rounded">
        {shapeOptions.map(shape => (
          <option key={shape} value={shape}>{shape}</option>
        ))}
      </select>
      
      {selectedIcon.shape === 'image' && (
        <>
          <label className="block mb-1">Image URL</label>
          <input name="image" value={selectedIcon.image || ''} onChange={handleChange} className="w-full mb-2 px-2 py-1 border rounded" />
        </>
      )}
    </div>
  );
}

export default PropertiesPanel;
