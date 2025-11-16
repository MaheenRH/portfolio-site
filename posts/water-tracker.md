---
title: "Water Intake Tracker – FastAPI Backend, REST API, and Hydration Analytics"
excerpt: "A full-stack hydration tracking system built using FastAPI, REST APIs, environment variables, and database logging."
---

# Water Intake Tracker  
The Water Intake Tracker is a lightweight but powerful hydration monitoring system designed to help users track their daily water consumption. It includes a **FastAPI backend**, **REST endpoints**, structured logging, and secure environment variable handling for deployment.

This project represents my focus on building **clean, production-ready backend systems** with API-driven architecture.

---

# ⭐ Why I Built This

People struggle to drink enough water, including me.  
Mobile apps often feel bloated, distracting, and require account sign-ups.

I wanted a simple, backend-driven system that:

- Logs water intake quickly  
- Tracks daily hydration goals  
- Stores intake history  
- Exposes clean API endpoints for future UIs  
- Works with mobile, Streamlit dashboards, or even AI chatbots  

The goal was **health + clean engineering** — a minimal system that *just works*.

---

# ⭐ High-Level Architecture


---

# ⭐ System Design

### **1. FastAPI Backend**
FastAPI was chosen because:

- Very fast  
- Auto documentation with Swagger UI (`/docs`)  
- Easy to validate request bodies  
- Fast development + easy deployment  

It exposes endpoints like:

- `POST /log_water` → Log daily water  
- `GET /total_today` → Total consumption  
- `GET /history` → Fetch past days  
- `DELETE /reset` → Clear data  

Thanks to FastAPI, all endpoints are automatically documented at:

https://water-tracker-backend-oqn6.onrender.com/docs


(Your live backend URL)

---

### **2. Database Layer**
I kept this project flexible with multiple storage options:

- **SQLite** for production  
- **JSON file** for simple local development  

The schema tracks:

- `amount`  
- `timestamp`  
- `date`  
- `source` (optional: bottle, cup, etc.)

---

### **3. Environment Variables (`.env`)**
Security matters even for small backends.

I used `.env` files to store:

- API keys  
- Secret tokens  
- Database paths  

Then loaded them using Python’s `dotenv`.

This keeps secrets out of GitHub.

---

### **4. Deployment**
The backend is deployed using:

- Render / Railway / Cloud Run (flexible)  
- Auto HTTPS  
- Fast boot-up  
- Zero-downtime API  

---

# ⭐ Features

### ✔ 1. Log Water Intake  
Send any value (e.g., 250ml) to the backend and it records it instantly.

---

### ✔ 2. Daily Totals  
Backend returns the total water consumed for the current day.

---

### ✔ 3. Full Hydration History  
A clean API returns previous days with timestamps.

---

### ✔ 4. Automatic Timestamps  
No need for clients to send time — backend handles it.

---

### ✔ 5. Ready for Any Frontend  
You can attach:

- Streamlit Dashboard  
- Mobile App  
- Chatbot  
- Web UI (Next.js)  

Because it's API-first.

---

# ⭐ Example API Workflow

### **Log 300ml:**

```bash
POST /log_water
{
  "amount": 300
}


### 🔸 Designing a schema that works for both JSON and SQLite
Storing hydration data in both lightweight JSON and a fully structured SQLite database required a flexible model.  
✔ **Solution:** Implemented a universal data model using Python classes, ensuring consistent field names and structure across both storage layers.

---

### 🔸 Avoiding repeated timestamps or incorrect date-time zones
Different clients and environments can cause timezone mismatches or duplicated timestamps.  
✔ **Solution:** Enforced standardized ISO timestamps and used Python’s `datetime` utilities for reliable, timezone-aware date handling.

---

### 🔸 Database write locks in shared environments
SQLite can throw write-lock errors when multiple operations occur simultaneously.  
✔ **Solution:** Enabled `check_same_thread=False`, used safe commit patterns, and wrapped all write operations inside context managers.

---

### 🔸 Deployment environment variables not loading
Some cloud platforms don’t automatically load local `.env` files.  
✔ **Solution:** Integrated `python-dotenv` and verified env injection manually during cloud deployment, ensuring secrets remain secure and accessible.

## ⭐ What I Learned

- Designing clean, minimal REST API architectures  
- Best practices for FastAPI routing and response models  
- Deploying and debugging Python backends  
- Secure handling of environment variables in production  
- Logging, monitoring, and error-handling for backend services  
- Building health-focused software that integrates well with dashboards and UIs  

This project strengthened my skills in backend engineering, API design, cloud deployment, and structured workflow development.
