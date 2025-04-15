# 🖼️ Drag-and-Drop Canvas Builder (Frontend Only)

This project is a **frontend-only canvas application** built using **React**, **React-Konva**, and **TailwindCSS**, allowing users to:

- Drag and drop icons on a canvas (like Browser, Server, Database, etc.)
- Change icon shape (rectangle, circle, ellipse, square, diamond)
- Resize and transform icons
- Modify colors and labels
- Generate a detailed PDF report of the current canvas

---

## 🌟 Key Features

### 🎨 Shape Customization
- Choose from different shape types: Rectangle, Circle, Square, Ellipse, Diamond
- Each shape is drawn using `React-Konva` with full canvas interactivity

### 🖱️ Drag and Drop
- Drag any icon freely around the canvas
- Position is tracked using Konva’s event system

### 📐 Resize & Transform
- Select any icon and use transform handles to resize
- Handles snapping and transformation using `Konva.Transformer`

### 🎨 Style Editing
- Use the sidebar properties panel to:
  - Change shape type
  - Choose a fill color
  - Edit the label/text of the icon

### 📄 Report Generation
- Generate a PDF report using jsPDF
- Report includes each icon’s:
  - Type
  - Label
  - Position (x, y)
  - Color

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/canvas-builder.git
cd canvas-builder/client
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the App

```bash
npm run dev
```

Visit the app in your browser: [http://localhost:5173](http://localhost:5173)

---

## 🛠️ Tech Stack

- **React** – For building UI components
- **React-Konva** – Canvas rendering and transformations
- **TailwindCSS** – Fast styling using utility classes
- **jsPDF** – PDF generation from canvas data

---

## 🗂️ Folder Structure

```
client/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── CanvasArea.jsx           # Main canvas with icons
│   │   ├── Icon.jsx                 # Icon shape renderer
│   │   ├── PropertiesPanel.jsx      # Right-side panel for shape customization
│   │   ├── Toolbar.jsx              # Icon selection panel
│   │   └── ReportButton.jsx         # Generate report button
│   ├── App.jsx                      # App layout
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Tailwind styles
├── tailwind.config.js              # Tailwind config
├── vite.config.js                  # Vite config for development
└── package.json
```

---

## 🖥️ How to Use

### ➕ Add an Icon
Click on any icon (e.g., "Browser", "Server") in the left toolbar. It will appear on the canvas.

### ✏️ Edit Icon
Click an icon to:
- Resize using the corner handles
- Move around the canvas
- Edit its properties on the right-side panel

### 🖌️ Change Icon Properties
From the right panel:
- Change the shape (rectangle, square, circle, ellipse, diamond)
- Set the fill color using the color picker
- Update the label text

### 🧾 Generate Report
Click on "Generate Report" to download a PDF. It includes:
- Icon types
- Labels
- Coordinates
- Colors

---

## 📷 Screenshots (Add your own)

You can include screenshots like:

- Canvas with shapes
- Properties panel in action
- PDF report preview

Example:

```
[Canvas UI Preview]
+---------------------+------------------------+
| Browser             | Server                 |
| [Rectangle Shape]   | [Circle Shape]         |
+---------------------+------------------------+

Properties Panel:
- Shape: Rectangle
- Color: #00aaff
- Label: Browser
```

---

## 📌 Tips for Development

- Each icon is represented as an object with `id`, `type`, `x`, `y`, `width`, `height`, `shape`, `fill`, and `label`
- Shape types use Konva primitives: `Rect`, `Circle`, etc.
- `Konva.Transformer` is attached only to the currently selected shape
- All changes are managed using React state (`useState`, `useEffect`)
- PDF report is created with `jsPDF().text(...)` and saved with `.save()`

---

## 🚧 Future Enhancements (Ideas)

- Add connectors between icons (lines or arrows)
- Save/load canvas layout from LocalStorage or backend
- Export canvas as PNG or SVG
- Undo/Redo support
- Deletion of shapes
- Snap-to-grid movement
- Multi-select and group shapes

---

## 📄 License

This project is licensed under the MIT License. Free for personal and commercial use.

---

## 🙋‍♂️ Contact & Support

If you run into any issues, feel free to:
- Open an issue on GitHub
- Reach out via email or discussion
- Share your improvements as pull requests

---

## 🧠 Learn More

- [React](https://reactjs.org/)
- [React Konva Docs](https://konvajs.org/docs/react/)
- [TailwindCSS](https://tailwindcss.com/)
- [jsPDF](https://github.com/parallax/jsPDF)
