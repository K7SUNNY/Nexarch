# Nexarch 🚀

**Nexarch** is a modern, next-generation architecture diagramming and system visualization platform. Designed for engineers, architects, and product teams, Nexarch provides a streamlined and intuitive workspace to visually map system architectures, service topologies, data flows, and code structures.

---

## ✨ Features

- **Intuitive Visual Modeling**: Create, edit, and organize clean architectural components, services, databases, and network flows effortlessly.
- **Modern UI / UX**: Built with a sleek, distraction-free dark interface featuring responsive navigation, custom SVG icon sets, and micro-interactions.
- **Architectural & Code Views**: Visually represent complex multi-tier infrastructures, microservices, cloud deployments, and modular code relationships.
- **Project & State Management**: Seamlessly save, organize, and export your diagrams in multiple formats for documentation and presentations.
- **Responsive & Flexible Workspace**: Dynamic collapsible sidebar, centralized global search, and adaptive grid canvas layouts.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS (Custom Design System, CSS Grid & Flexbox)
- **Linting & Code Quality**: ESLint 9 + TypeScript ESLint

---

## 📁 Project Structure

```text
Nexarch/
├── public/                 # Static assets & icons
├── src/
│   ├── assets/             # Images and local media
│   ├── components/         # Reusable UI components & layouts
│   │   ├── layouts/
│   │   │   ├── Header.tsx  # Top navigation & global search bar
│   │   │   └── SideBar.tsx # Collapsible navigation & action menu
│   │   └── MainLayout.tsx  # Main view wrapper & content layout
│   ├── styles/             # Modular styling definitions
│   ├── App.css             # Core application styles & layout rules
│   ├── App.tsx             # Root component
│   └── main.tsx            # Application entry point
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) and `npm` installed on your system.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/Nexarch.git
   cd Nexarch
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Type-checks code with TypeScript and compiles production build to `dist/`. |
| `npm run preview` | Locally previews the production build. |
| `npm run lint` | Runs ESLint across all TypeScript and React files. |

---

## 🗺️ Roadmap

- [ ] Interactive drag-and-drop canvas engine
- [ ] Pre-built architectural cloud templates (AWS, GCP, Azure, Kubernetes)
- [ ] Real-time multi-user collaboration
- [ ] Auto-generation of diagrams from codebases and configuration files
- [ ] Export to SVG, PNG, PDF, and JSON architecture specs

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
