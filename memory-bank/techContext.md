# Tech Context

- **Build Tool:** Vite
- **Core Library:** React
- **Styling Framework:** `react-bootstrap` and `bootstrap`
- **Custom Styling:** Global CSS variables in `index.css`, with component/page-specific CSS files.
- **Routing:** `react-router-dom`.
- **Asset Formats:**
    - **Icons:** Primarily SVG format for scalability and quality.
    - **Images:** PNG or other appropriate raster formats.
- **Project Structure:**
    - `/src/screens`: Contains page-level components.
    - `/src/components/ui`: Contains small, reusable UI components.
    - `/src/components/layout`: Contains `Header` and `Footer`.
    - `/src/assets/images`: Contains large photos and backgrounds.
    - `/src/assets/icons`: Contains small UI icons.
    - `App.jsx`: Handles routing.
    - `HomePage.jsx`: Composes the homepage from UI components.
- **Testing:**
    - The current testing strategy is manual **Local Testing** by developers and **User Acceptance Testing (UAT)**.
    - No automated testing frameworks are required at this stage.

## Running Locally
- **Command:** `npm run dev`
- **Description:** Run this command from the project's root directory to start the Vite development server. It typically launches on `http://localhost:5173` and provides Hot Module Replacement (HMR) for a fast development experience.