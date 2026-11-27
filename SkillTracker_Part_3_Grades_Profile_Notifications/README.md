# SkillTracker LMS - Part 3 - Grades / Profile / Notifications

Assigned to: Member 3

Student grades, profile editing and notification interactions.

## Folder structure
- `html/` - page structure
- `css/` - page styling
- `js/` - page behaviour and shared helpers

## Important integration note
This is one part of a single LMS project, not a separate final application. Each part includes copies of shared files (`common.css`, `api.js`, `storage.js`, and `auth.js` where needed) so the pages have their dependencies while the team works separately.

When combining all three parts, copy each `html`, `css`, and `js` folder into the same main project folders. If Windows asks whether to replace shared files, choose **Replace** only for identical shared copies; the shared files in all parts are taken from the same original project version. Do not rename the folders or files because the relative links depend on these names.

## Run the complete project
After combining all three parts:
1. Open the main project folder in VS Code.
2. Open `html/login.html`.
3. Right-click and choose **Open with Live Server**.
4. Demo login: `student@skilltracker.com`
5. Password: `student123`

This is a frontend demonstration. Login and saved changes use browser LocalStorage; it is not connected to a real backend or database.
