# Drone Electronics Laboratory (DE Lab)
### National Institute of Electronics & Information Technology (NIELIT) Imphal
**Ministry of Electronics and Information Technology (MeitY), Government of India**

[![Deploy to GitHub Pages](https://github.com/DE-Lab-NIELIT-Imphal/DE-Lab-NIELIT-Imphal.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/DE-Lab-NIELIT-Imphal/DE-Lab-NIELIT-Imphal.github.io/actions/workflows/deploy.yml)
[![Live Portal](https://img.shields.io/badge/Live%20Portal-GitHub%20Pages-blue?style=flat&logo=github)](https://de-lab-nielit-imphal.github.io/)
[![Built With](https://img.shields.io/badge/Stack-React%2019%20%7C%20Vite%20%7C%20Tailwind%20v4%20%7C%20TS-61dafb.svg)](https://react.dev/)

Official web portal and information repository for the **Drone Electronics Laboratory (DE Lab)** at **NIELIT Imphal**, established to spearhead R&D, rapid prototyping, and workforce skilling in Unmanned Aerial Vehicle (UAV) avionics, embedded flight controllers, and autonomous aerial robotics.

---

## 🌟 Key Features

1. **Lab Evolution Showcase**
   - High-fidelity before-and-after carousel illustrating the transformation from early lab workstations to the current advanced UAV avionics facility.
   - Cross-fade transitions with touch swipe support and mobile width containment.

2. **Real-Time Impact Metrics**
   - Animated counter cards tracking key lab deliverables:
     - **5+** Research Publications (IEEE, Elsevier, Springer conferences & journals)
     - **650+** Students Produced (internships and bootcamps)
     - **1+** National Competitions & Achievements
     - **28** State-of-the-Art Workstations
     - **12+** Funded Grants & R&D Projects

3. **Official Circulars & Announcements Archive**
   - Searchable, categorized repository (`Notice`, `Workshop`, `Recruitment`, `Research`, `Tender`).
   - Detailed modal view with document attachments and direct submission links.

4. **Media & Hardware Gallery**
   - Curated repository with category filtering:
     - `Lab Visits`
     - `Snapshots`
     - `Bootcamp`
     - `Testing`
     - `Demo`
   - Interactive Lightbox viewer with keyboard and touch navigation.

5. **Dynamic Google Sheets CMS**
   - Real-time content updates powered by Google Apps Script (`Code.gs`).
   - Add announcements, upload gallery photos, or update impact metrics directly in Google Sheets without modifying frontend source code.

6. **SEO & Social Share Readiness**
   - Open Graph (OG) and Twitter Card tags configured with high-resolution 1200×630 preview assets.
   - Schema.org JSON-LD structured data for `GovernmentOrganization`, `EducationalOrganization`, and `ResearchOrganization`.
   - Search engine indexation via `sitemap.xml` and `robots.txt`.

7. **Production GitHub Pages Reliability**
   - Full SPA routing support with custom `404.html` fallback.
   - Native `.nojekyll` pipeline ensuring strict MIME type compliance for ES module scripts.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler & Dev Server**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Type System**: [TypeScript 6](https://www.typescriptlang.org/) (Strict mode)
- **Routing**: [React Router v7](https://reactrouter.com/) (`HashRouter` for GitHub Pages static hosting)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [GitHub Actions](https://github.com/features/actions) $\rightarrow$ [GitHub Pages](https://pages.github.com/)
- **Backend / CMS**: Google Sheets API via Google Apps Script Web App

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v20.x or higher recommended)
- `npm` (v10.x or higher)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/DE-Lab-NIELIT-Imphal/DE-Lab-NIELIT-Imphal.github.io.git
   cd DE-Lab-NIELIT-Imphal.github.io
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Configuration**:
   Create a `.env` file in the project root:
   ```env
   VITE_GOOGLE_SHEETS_API_URL="https://script.google.com/macros/s/YOUR_APPS_SCRIPT_DEPLOYMENT_ID/exec"
   ```

4. **Run the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

5. **Build for production**:
   ```bash
   npm run build
   ```
   The compiled static bundle will be generated in `./dist`.

6. **Run linter**:
   ```bash
   npm run lint
   ```

---

## 📊 Google Sheets CMS Setup

Content displayed across the portal is managed through Google Sheets:

### Sheet Tabs Required:
1. **`Stats`**:
   - Columns: `id`, `label`, `targetNumber`, `suffix`, `description`, `sectionId`, `iconName`
2. **`Announcements`**:
   - Columns: `id`, `title`, `date`, `category`, `content`, `attachmentUrl`, `isPinned`
3. **`People`**:
   - Columns: `id`, `name`, `role`, `category`, `designation`, `bio`, `imageUrl`, `email`, `linkedinUrl`
4. **`Publications`**:
   - Columns: `id`, `title`, `authors`, `venue`, `year`, `doi`, `url`, `type`
5. **`Achievements`**:
   - Columns: `id`, `title`, `date`, `category`, `description`, `awardAmount`, `imageUrl`
6. **`Gallery`**:
   - Columns: `id`, `title`, `imageUrl`, `category`, `description`, `date`, `isOldLab`

### Google Apps Script Deployment:
1. Open the Google Sheet $\rightarrow$ **Extensions** $\rightarrow$ **Apps Script**.
2. Paste the `Code.gs` script.
3. Click **Deploy** $\rightarrow$ **Manage deployments** $\rightarrow$ **Edit** $\rightarrow$ Select **New version**.
4. Set **Who has access** to **Anyone**.
5. Copy the Web App URL (ending in `/exec`) and set it in your `.env` or GitHub Secrets.

---

## 🚢 Continuous Deployment (GitHub Actions)

When changes are pushed to `main` or `master`, the workflow at `.github/workflows/deploy.yml` triggers automatically:
1. Checks out repository code.
2. Installs dependencies using `npm ci`.
3. Runs `npm run build` and ensures `./dist/.nojekyll` is present.
4. Uploads the `./dist` artifact to GitHub Pages.
5. Deploys the site to `https://de-lab-nielit-imphal.github.io/`.

---

## 🏛️ Institutional Affiliation

- **Laboratory**: Drone Electronics Laboratory (DE Lab)
- **Institution**: National Institute of Electronics & Information Technology (NIELIT) Imphal
- **Address**: Akampat, Post Box No. 104, Imphal - 795001, Manipur, India
- **Ministry**: Ministry of Electronics and Information Technology (MeitY), Government of India
- **Contact**: `droneelectronics9@gmail.com`
- **Main Portal**: [nielit.gov.in/imphal](https://nielit.gov.in/imphal/)
