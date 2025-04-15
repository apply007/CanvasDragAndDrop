# 🖼️ Drag-and-Drop Canvas Builder (Frontend Only)

A powerful and customizable **React + Konva + TailwindCSS** canvas application that allows users to:

- 🧱 Add and position icons on a canvas
- 📐 Resize and transform shapes (rectangle, square, circle, ellipse, diamond)
- 🎨 Change icon color
- 🔤 Update labels
- 📸 Generate PDF reports from canvas layout

---

## 📦 Tech Stack

| Technology    | Purpose                          |
|---------------|----------------------------------|
| React         | UI rendering and component logic |
| React-Konva   | Canvas drawing and manipulation  |
| TailwindCSS   | Styling UI quickly and responsively |
| jsPDF         | Generate downloadable PDF reports |

---

## 🖼️ Features

### ✅ Core Functionalities
- **Drag and Drop**: Move icons freely around the canvas
- **Resize & Transform**: Interactive resizing using `Konva.Transformer`
- **Color Picker**: Customize icon color from the sidebar panel
- **Shape Selector**: Choose from rectangle, square, circle, ellipse, and diamond
- **Label Editing**: Add or update text labels
- **PDF Export**: Generate PDF of all current icon details

---

## 🗂️ Folder Structure

client/ ├── public/ │ └── index.html ├── src/ │ ├── components/ │ │ ├── CanvasArea.jsx │ │ ├── Icon.jsx │ │ ├── PropertiesPanel.jsx │ │ ├── Toolbar.jsx │ │ └── ReportButton.jsx │ ├── App.jsx │ ├── main.jsx │ └── index.css ├── tailwind.config.js ├── vite.config.js └── package.json

yaml
Copy
Edit

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/canvas-builder.git
cd canvas-builder/client
2. Install Dependencies
bash
Copy
Edit
npm install
3. Start Development Server
bash
Copy
Edit
npm run dev
The app will run at http://localhost:5173

✨ Usage Guide
🎮 Add an Icon
Click on any icon from the toolbar (e.g., "Browser", "Server") to add it to the canvas.

🖱️ Move & Resize
Click and drag icons to move.

Use resize handles to scale.

Select icon to view its properties in the sidebar.

🎨 Change Color or Shape
Use the PropertiesPanel to change:

Shape type: Rectangle, Square, Circle, Ellipse, Diamond

Fill color

Label text

📄 Export to PDF
Click on the "Generate Report" button to download a PDF showing:

All icon types

Positions

Labels

🛠️ Development Tips
Konva’s <Transformer /> wraps around the selected icon for resizing.

All icons are stored in React state, so use useState/useEffect wisely.

You can extend support to upload images by using Konva.Image with an image source.

🔮 Possible Enhancements
Add backend storage to save canvas states (MongoDB or LocalStorage)

Add connecting lines between icons

Enable delete functionality

Add undo/redo

Add export as PNG/SVG image

🖼️ Screenshots
Add your canvas UI and shape selection screenshots here.

📜 License
MIT License. Free to use and modify!

🙌 Credits
React-Konva

TailwindCSS

jsPDF

yaml
Copy
Edit

---

Let me know if you want a **live preview deployment guide (e.g., on Vercel/Netlify)** or help adding **
