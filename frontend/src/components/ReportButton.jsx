import React from 'react';
import jsPDF from 'jspdf';
import toast from 'react-hot-toast';

function ReportButton({ icons, connections }) {
  const generateReport = () => {
    const doc = new jsPDF();
    doc.text('Network Report', 10, 10);
    doc.text('Icons:', 10, 20);
    icons.forEach((icon, i) => {
      doc.text(`${i + 1}. ${icon.type} - ${icon.label}`, 10, 30 + i * 10);
    });
    let y = 30 + icons.length * 10;
    doc.text('Connections:', 10, y);
    connections.forEach((conn, i) => {
      doc.text(`${i + 1}. ${conn.label}`, 10, y + 10 + i * 10);
    });
    doc.save('network_report.pdf');
    toast.success("Report downloaded!");
  };

  return (
    <button onClick={generateReport} className="mt-4 bg-red-500 text-black px-6 py-2 rounded">
      Generate Report
    </button>
  );
}

export default ReportButton;
