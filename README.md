# Cornell Matcha Club Website Maintenance Guide

This guide is split into two sections: one for club members who want to update the site directly on GitHub without touching any code, and one for developers looking to run the project locally.

## 🍵 For Club Members (Non-Coders)
You can update almost everything on the website directly through the GitHub website. No special software is required!

**FIRST,** make sure you are logged into the cornellmatchaclub@gmail.com GitHub account (through Google).

**1. Adding or Removing Photos**
  - All images are stored in the `public/assets/` folder, except for gallery photos, which are in `src/assets/gallery`.
  - Navigate to the `public/assets/` folder in this repository.
  - Open the specific sub-folder (e.g., `team/`, `founders/`, `events/`, or `gallery/`).
  - **To Add:** Click Add file -> Upload files. Drag your photo in.
  - **Important**: Ensure the filename has no spaces (e.g., use izzy-matcha.jpg instead of izzy matcha.jpg), also PLS use .jpg (not .JPG or .png).
  - **To Remove:** Click on the file you want to delete and click the trash can icon.
  - Click Commit changes at the bottom to save.

**2. Updating the Current E-Board (`team.ts`)**
  - To change names, roles, or bios for the leadership team:
  - Go to `src/data/team.ts`.
  - Click the pencil icon (Edit this file).
  - Find the `TEAM_MEMBERS` section. Each person looks like this:
    ```
    {
      id: 1,
      name: "Name",
      role: "Role",
      bio: "Your bio here",
      image: "/assets/team/your-photo.jpg",
      funImage: "/assets/team/your-silly-photo.jpg"
    },
    ```
  - Edit the text between the quotes. Make sure the image path matches the filename you uploaded to the public/assets/team/ folder exactly.
  - Also make sure there is a comma between each section {...}, {...}, {...} (but don't have a comma at the end).
  - Click Commit changes.

**3. Adding New Events (`events.ts`)**
  - Go to `src/data/events.ts`.
  - Click the pencil icon.
  - Add a new block at the top of the `EVENTS` list:
    ```
    {
      id: "7",
      title: "Event Name",
      date: "Month Day, Year",
      description: "A short blurb about what happened!",
      image: "/assets/events/your-event-photo.jpg"
    }
    ```
  - Click Commit changes.

**Note:** Once you save your changes, the website will automatically update and redeploy within 2-3 minutes!

# 💻 For Developers
This project is a modern web application built with React, TypeScript, Vite, and Tailwind CSS. [If you don't know how to code, please refer to instructions above, or create a new branch to test on]

## 🚀 Getting Started
- Clone the repository:
  - `git clone https://github.com/cornellmatchaclub/matcha-club-site.git`
  - `cd matcha-club-site`
- Install dependencies:
  - `npm install`
- Run locally:
  - `npm run dev`
- The site will be available at http://localhost:5173.

## 🏗️ Project Architecture
- `/src/components`: Contains the UI building blocks (Modals, Shelf, Gallery, etc.).
- `/src/data`: Contains the .ts files that drive the content of the site.
- `/public/assets`: The storage for all static images.
- `/src/utils/paths.ts`: Contains a helper function getAssetPath that prepends the base URL to images, ensuring they work on GitHub Pages sub-directories.

## 🚢 Deployment
- Deployment is fully automated via GitHub Actions.
- When a push is made to the main branch, the `.github/workflows/deploy.yml` script triggers.
- It builds the production-ready files and pushes them to the gh-pages branch.
- **Base URL:** If you change the repository name, you must update the base field in vite.config.ts.
