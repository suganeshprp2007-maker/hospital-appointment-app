# Experiment 3: Deployment Lab Record

**Aim:** To create a production build and deploy the Hospital Appointment Application using GitHub Pages, Netlify, and Vercel.

**Algorithm:**
1. Install project dependencies.
2. Generate a production build using `npm run build`.
3. Deploy the `dist` folder to the selected static hosting platform.
4. Configure the platform to serve the app entry point for routes.
5. Open the deployed URL and test doctor search, doctor details, booking, and cancellation.
6. Compare setup steps and build configuration across the three platforms.

**Commands:**
```bash
npm install
npm run build
npm run preview
```

**Expected output:** Vite generates production assets in `dist/` and the preview server serves the application. After deployment, the host provides a public URL.

**Verification:** Follow the checklist in `README.md`. Record the actual deployed URL and test outcome for each platform after completing deployment.

**Result:** Deployment configuration is provided for GitHub Pages, Netlify, and Vercel. A live deployment is complete only after the user publishes the repository/site and verifies the generated URL.
