# 🚀 Smart Task Board

A modern Full-Stack Task Management Application built with **React**, **Flask**, and **Tailwind CSS**.

This project was developed as part of the **Fluid AI Python Gen AI Developer Assignment**.

---

## 📌 Features

- ✅ Add new tasks
- ✅ Mark tasks as completed
- ✅ Delete tasks
- ✅ Search tasks instantly
- ✅ Filter tasks (All / Pending / Completed)
- ✅ Progress Bar showing completion percentage
- ✅ Task Statistics (Total, Completed, Pending)
- ✅ Priority Levels (Low, Medium, High) ⭐ Unique Feature
- ✅ Responsive and modern UI

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- JavaScript
- Fetch API

### Backend
- Python
- Flask
- Flask-CORS

### Storage
- In-memory task list (Runtime Persistence)

---

## 📂 Project Structure

```
task-app/
│
├── backend/
│   ├── app.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── api/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## ⚙ Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
pip install flask flask-cors
```

Run the server:

```bash
python app.py
```

The backend runs on:

```
http://127.0.0.1:5000
```

---

## ⚙ Frontend Setup

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend runs on:

```
http://localhost:5173
```

---

## 🔗 REST API

### Get All Tasks

```
GET /tasks
```

### Add Task

```
POST /tasks
```

Example Body:

```json
{
  "title": "Complete Assignment",
  "priority": "high"
}
```

---

### Toggle Task

```
PUT /tasks/{id}
```

---

### Delete Task

```
DELETE /tasks/{id}
```

---

## ⭐ Unique Feature

This project includes **Priority-Based Task Management**.

Users can assign one of three priority levels:

- 🔴 High
- 🟡 Medium
- 🟢 Low

Priority badges make it easy to identify important tasks quickly.

---

## 📸 Application Features

- Add Tasks
- Delete Tasks
- Complete Tasks
- Search Tasks
- Filter Tasks
- Progress Tracking
- Task Statistics
- Responsive UI

---

## 🚀 Future Improvements

- User Authentication
- Database Integration (SQLite/PostgreSQL)
- Due Dates
- Drag & Drop Tasks
- Categories & Labels
- Dark Mode
- AI-based Task Prioritization

---

## 👨‍💻 Author

**Somnath Pathade**

GitHub:
https://github.com/pathadesomnath

---

## 📄 License

This project is created for educational and interview purposes.
