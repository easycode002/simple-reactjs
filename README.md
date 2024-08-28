# How to setup React+TypeScript+TailwindCSS+Vite
### Create project using vite
```bash
yarn create vite
```
```bash
yarn create v1.22.22
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...

success Installed "create-vite@5.5.2" with binaries:
      - create-vite
      - cva
✔ Project name: … **dashboard-app**
✔ Select a framework: › React
✔ Select a variant: › TypeScript
```
Change directory to *dashboard-app*
```bash
# Install dependencies
yarn

# Run test with development mode
yarn dev
```

### Install *TailwindCSS, PostCSS, Autoprefixer* to project:
```bash
yarn add -D tailwindcss postcss autoprefixer
```
After install completed, Next step let init tailwind in project:
```bash
yarn tailwindcss init -p
```

### Configure template paths
```bash
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Add the Tailwind Directives to your CSS
```bash
/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

After config all thes, Let test your style it work or not with create some component for test!