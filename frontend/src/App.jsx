import React from 'react';
import CanvasArea from './components/CanvasArea';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Drag and Drop Canvas</h1>
      <CanvasArea />
      <Toaster />
    </div>
  );
}

export default App;