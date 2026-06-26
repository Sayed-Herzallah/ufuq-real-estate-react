# Ufuq Real Estate Portal: Premium Commercial Properties Directory

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,100:0284c7&height=160&section=header&text=Ufuq%20Real%20Estate&fontSize=42&fontColor=ffffff&fontFamily=Outfit" width="100%" />
</div>

<div align="center">
  ![React](https://img.shields.io/badge/React-2023-blue?logo=react&style=for-the-badge) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3-blue?logo=tailwindcss&style=for-the-badge) ![Leaflet](https://img.shields.io/badge/Leaflet-Maps-green?logo=leaflet&style=for-the-badge) ![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
</div>

بوابة **أفق العقارية** هي واجهة مستخدم تفاعلية متكاملة في React لاستعراض وتصفية العقارات السكنية والتجارية، مدمجة بخرائط Leaflet التفاعلية وتصميمات شبكية مرنة لتسهيل إيجاد العقارات المناسبة.

This repository holds the React frontend client and property search interface for the **Ufuq Real Estate Platform**. Featuring Leaflet map integrations, search criteria logic, and premium CSS grids.

---

## 🧬 Property Search & Map Flow

The application updates maps coordinates dynamically upon criteria changes:

```mermaid
graph TD
    User[Visitor] -->|Select Property Filters| Filter[Filter Engine Component]
    Filter -->|Query matches| List[Update local React state list]
    List -->|Extract geolocation coordinates| Map[Leaflet Map Component]
    Map -->|Re-center Map View| Render[Draw SVG location pins]
```

---

## 🧬 Key Layout Features

1.  **Dynamic Filtering Engine**: Multi-criteria filters allowing instant property matches.
2.  **Leaflet Geolocation Pins**: Interactive map rendering pins corresponding to listings coordinates.
3.  **Property Specs Grid**: Modern layout cards presenting price metrics, sizing metrics, and pictures.

---

## 🛠️ Technology Stack & Styling Assets

*   **Frontend Library**: **React 18** + **Vite**.
*   **Maps Integration**: **Leaflet** maps + OpenStreetMap API.
*   **Styling Engine**: **TailwindCSS** + CSS variables.

---

## 📂 Repository Module Layout

```text
ufuq-real-estate-react/
├── src/
│   ├── components/      # PropertyCard, MapWidget, FilterBar
│   ├── styles/          # Tailwind stylesheet configs
│   ├── App.jsx          # Main client interface
│   └── main.jsx         # Render entry point
├── package.json         # Node metadata
└── README.md            # System documentation
```

---

## ⚡ Local Setup & Run
```bash
git clone https://github.com/Sayed-Herzallah/ufuq-real-estate-react.git
cd ufuq-real-estate-react
npm install
npm run dev
```

---

## 📄 License
Licensed under the **MIT License**.
