# THE PENT TABLE 🍽️

A responsive food delivery frontend that helps users discover restaurants, explore menus, and build their orders. Designed with a black, cream, and gold palette, elegant typography, and food photography.

## 🌐 Live Demo

**[Visit THE PENT TABLE](https://the-pent-table.vercel.app/)**

## Features

- Scroll-driven burger assembly animation.
- Smooth text reveals and transitions.
- Restaurant and dish search.
- Cuisine filters and saved restaurants.
- Restaurant menus and an interactive shopping bag.
- Demo checkout and order history.
- Dough-making video with playback controls.
- Responsive layouts for desktop and mobile.
- Browser-based persistence using LocalStorage.

## Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure and semantic markup |
| CSS3 | Styling, responsive layouts, and animations |
| Vanilla JavaScript | Interactions, filtering, cart logic, and scroll effects |
| LocalStorage | Browser-based data persistence |
| WebP and MP4 | Optimized images and video |
| Vercel | Website hosting and deployment |

## Project Structure

- `index.html` — Main page structure.
- `style.css` — Core styling and responsive layouts.
- `feature.css` — Additional section styling and animations.
- `app.js` — Application logic and interactions.
- `brand.svg` — Brand icon.
- `assets/` — Food images, fonts, and video.
- `README.md` — Project documentation.

## Getting Started

### 1. Download the project

Download and extract the project ZIP, then open the `THE-PENT-TABLE` folder in your code editor.

### 2. Start a local server

Run the following command inside the project folder:

```bash
python -m http.server 8000
```

On Windows, you can also use:

```bash
py -m http.server 8000
```

### 3. Open the website

Visit **http://localhost:8000** in your browser.

Alternatively, open `index.html` using the **Live Server** extension in VS Code.

No package installation or build step is required.

## Deployment

The project can be deployed as a static website.

For Vercel:

1. Upload the project to a Git repository.
2. Import the repository into Vercel.
3. Select **Other** as the framework preset.
4. Leave the build command empty.
5. Use the directory containing `index.html` as the project root.
6. Deploy.

