# SkillTracker LMS

SkillTracker is a frontend-only Learning Management System (LMS) built with HTML, CSS and Vanilla JavaScript. It helps a student track courses, assignments, grades and notifications from one dashboard.

## Demo Login
- Email: student@skilltracker.com
- Password: student123

## Features
- Student login with form validation
- Dashboard with course progress overview
- My Courses page with search/filter and course details
- Assignments page with pending, submitted and graded status
- Grades page showing scores and feedback
- Notifications page with read/unread state
- Profile page
- Responsive design for desktop and mobile

## Tech Stack
- HTML5
- CSS3
- JavaScript (ES6)
- Browser LocalStorage for saving data

## Project Structure
```
SkillTracker/
├── css/      # Stylesheets
├── html/     # All pages (login, dashboard, courses, etc.)
├── js/       # Logic and demo data
├── vercel.json
└── README.md
```

## Team Contributions
The project was divided into 3 parts:

| Part | Team Member | Work Done |
|------|-------------|-----------|
| 1 | Chanchal | Login page, authentication and Dashboard |
| 2 | Dhruv Saxena | Courses, Course Details and Assignments |
| 3 | Gautam | Grades, Notifications and Profile |

Shared files (`common.css`, `api.js`, `storage.js`) were used by all pages.

## Run Locally
1. Download or clone the repository.
2. Open the folder in VS Code.
3. Right-click `html/login.html` and choose **Open with Live Server**.

## Note
This is a frontend demonstration. Login is simulated in the browser using LocalStorage, and all data is stored in JavaScript and LocalStorage. There is no backend or database, so do not use it for real user data.
