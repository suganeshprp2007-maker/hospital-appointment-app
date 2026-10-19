<<<<<<< HEAD
# Experiment 3: Deploy Hospital Appointment Application

## Aim
Create a production build and deploy the React Hospital Appointment Application using GitHub Pages, Netlify, and Vercel. Verify doctor search and appointment interactions, then compare deployment workflows.

## Project structure
```text
hospital-appointment-deployment-experiment-3/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── favicon.svg
│   ├── pwa-192.svg
│   ├── pwa-512.svg
│   └── _redirects
├── src/
│   ├── api/doctors.js
│   ├── components/DoctorCard.jsx
│   ├── context/AppointmentContext.jsx
│   ├── data/doctors.js
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── DoctorDetailsPage.jsx
│   │   ├── AppointmentsPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── utils/validation.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── netlify.toml
├── package.json
├── vercel.json
├── vite.config.js
└── README.md
```

## A. Create and test the production build
Install Node.js 18+ and npm, extract this folder, then run:
```bash
npm install
npm run build
npm run preview
```
Open the local preview URL shown by Vite. The optimized files are generated in `dist/`.

## B. Deploy using GitHub Pages
1. Create a new GitHub repository (for example `hospital-appointment-app`).
2. Upload/push all files in this folder to the repository's `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment → Source**, select **GitHub Actions**.
5. Push to `main`, or run the workflow from **Actions → Deploy to GitHub Pages**.
6. Wait for the `Deploy to GitHub Pages` workflow to succeed. Open the URL shown by the workflow/environment.
7. The Vite configuration detects the GitHub Actions repository name and sets the correct project-site base path.

The app uses `HashRouter` so refreshing a doctor or appointments route works on static hosting without server-side route rewrites.

## C. Deploy using Netlify
### Git-connected method
1. Push the project to GitHub.
2. Sign in to Netlify and choose **Add new site → Import an existing project**.
3. Select the repository.
4. Set build command to `npm run build` and publish directory to `dist` (also configured in `netlify.toml`).
5. Select **Deploy** and open the generated site URL.

### Manual method
Run `npm install` and `npm run build`, then drag the generated `dist/` folder into Netlify's manual deploy area.

## D. Deploy using Vercel
1. Push the project to GitHub.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the repository.
4. Confirm framework preset Vite (or configure build command `npm run build` and output directory `dist`).
5. Click **Deploy** and open the generated URL. These settings are also in `vercel.json`.

## E. Verify functionality on each deployed URL
Use this checklist:
- [ ] Home/Doctors page opens without a blank screen.
- [ ] Search by doctor name, e.g. `Karthik`, filters the list.
- [ ] Specialty filter changes the displayed doctors.
- [ ] Select **View details** and confirm the doctor details page opens.
- [ ] Select **Book appointment**, enter a name and valid email, choose a doctor and today/future date, then submit.
- [ ] Confirm the appointment appears in Appointment history.
- [ ] Cancel a booking and confirm status becomes Cancelled.
- [ ] Refresh the doctor details and appointments views to check route handling.
- [ ] Check browser DevTools Console and Network for failed app assets.

Note: appointments are held in React memory only. Reloading the page clears them, and there is no backend or cross-device persistence. Doctor data is demo data.

## F. Deployment comparison
| Feature | GitHub Pages | Netlify | Vercel |
|---|---|---|---|
| Typical setup | GitHub repository + Actions workflow | Import repository or upload `dist` | Import repository |
| Build command | Workflow runs `npm run build` | `npm run build` | `npm run build` |
| Output folder | `dist` artifact | `dist` | `dist` |
| Custom domain | Supported | Supported | Supported |
| SPA routing | HashRouter used here | HashRouter; fallback also configured | HashRouter; rewrite also configured |
| Best fit | Simple static projects already on GitHub | Easy static hosting and previews | Git-connected frontend deployments and previews |

## Result
The application can be built for production and deployed to GitHub Pages, Netlify, or Vercel. Doctor search, specialty filtering, details navigation, appointment booking, and cancellation can be verified using the checklist above.

## Limitations and security
This is a frontend demonstration, not a production medical service. Booking records are not persisted. A real system needs a secure backend, server-side validation, authorization, HTTPS, privacy controls, and suitable handling of patient information. Do not put credentials or secret API keys in frontend code.
=======
# hospital-appointment-app
just an example . I'II blow this up later
>>>>>>> be812c4183745efe9f79b3564a75b64b1e710213
