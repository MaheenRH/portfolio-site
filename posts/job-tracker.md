---
title: "AI Job Application Tracker – Python, Gmail API, Google Sheets API, GPT LLM Automation"
excerpt: "A fully automated system that reads recruiter emails from Gmail, extracts structured job data using GPT, and logs everything into Google Sheets."
---

# AI Job Application Tracker  
This project is a complete end-to-end automation system designed to streamline the entire job application process. It connects directly to Gmail, extracts recruiter emails, uses a GPT-based LLM to parse and classify job information, and logs everything neatly into a Google Sheet with timestamps and status tracking.

What started as a simple tracker transformed into a robust personal AI assistant for job management.

---

# ⭐ Why I Built This

Applying to jobs manually quickly becomes chaotic — dozens of roles, dozens of companies, recruiter emails, status changes, reminders, and follow-ups.  
I found myself spending more time **organizing** job applications than **finding new opportunities**.

To solve this, I built an AI-powered system that:

- Automatically reads **recruiter emails from Gmail**
- Extracts structured job information using a **GPT LLM**
- Logs everything into a centralized **Google Sheet**
- Tracks statuses like:
  - Applied
  - Recruiter Screening
  - Interview Scheduled
  - Follow-Up Needed
  - Rejected
- Adds timestamps for every update
- Reduces manual entry and human error

This turned job tracking from a stressful task → into a fully automated workflow.

---

# ⭐ High-Level Architecture


---

# ⭐ Detailed Architecture Breakdown

### **1. Gmail API Layer**
This layer fetches emails from my inbox and isolates job-related messages.

- Connects using OAuth2 credentials  
- Reads unread or labeled job-related emails  
- Extracts:
  - Subject  
  - Sender  
  - Body content  
  - Attachments (optional)  

Emails often look messy — broken formatting, templates, signatures — so this data is passed to the LLM.

---

### **2. GPT LLM Processing Layer**
This is the intelligence engine of the system.

The GPT model processes recruiter emails to extract:

- Company Name  
- Role / Position  
- Job Link  
- Salary (if any)  
- Recruiter Name + Contact  
- Interview instructions  
- Application Status  

It also **classifies the email** into categories:

- New Opportunity  
- Follow-Up Required  
- Interview Scheduled  
- Rejection  
- Recruiter Response  
- Spam / Not Relevant  

The LLM also summarizes the email into a clean short note for the spreadsheet.

---

### **3. Validation & Deduplication Engine**
Before writing anything to the Sheet:

- Removes duplicates based on company + role + link  
- Validates URLs  
- Ensures all mandatory fields exist  
- Auto-fills missing but inferable fields (e.g., recruiter name)  

---

### **4. Google Sheets Automation Layer**
Uses the Google Sheets API + `gspread` to:

- Insert new rows  
- Update existing entries  
- Add timestamps:
  - `Date Applied`
  - `Last Updated`
  - `Status Last Changed`  

The sheet remains organized and structured.  
Even if edited manually, column indices remain stable because the script references them by name.

---

# ⭐ Example Data Logged into Sheet

| Company | Role | Job Link | Status | Date Applied | Recruiter | Notes |
|--------|------|----------|--------|--------------|-----------|-------|
| Google | ML Engineer | careers.google.com/... | Interview Scheduled | 02/18/2025 | John Doe | Recruiter email parsed via GPT |

The system handles the rest.

---

# ⭐ Key Features

### ✔ 1. **Gmail → Sheets Full Automation**
No more manually reading or logging emails.

### ✔ 2. **LLM-Powered Email Parsing**
GPT extracts clean structured data from messy email text.

### ✔ 3. **Status Classification**
AI classifies emails into meaningful categories for job search management.

### ✔ 4. **Timestamp Automation**
Every action is recorded with dates.

### ✔ 5. **Data Consistency**
Prevents duplicates and schema issues.

### ✔ 6. **Manual Entry Mode**
You can still manually add jobs with the same script.

---

# ⭐ Technology Stack

- **Python**  
- **Gmail API**  
- **Google Sheets API**  
- **OpenAI GPT (LLM)**  
- `gspread`  
- `oauth2client`  
- Pandas  
- Logging  
- Error Handling Framework  

---

# ⭐ Challenges & How I Solved Them

### 🔸 **Recruiter emails have inconsistent formats**  
Some are short, others are long threads.  
✔ Using GPT cleaned everything and unified structure.

---

### 🔸 **OAuth tokens expiring unexpectedly**  
Google often invalidates tokens.  
✔ Implemented token.json caching + auto-refresh.

---

### 🔸 **Duplicate job entries**  
Some roles appeared multiple times via recruiters.  
✔ Built a deterministic hashing rule (company + role + link).

---

### 🔸 **Sheet schema breaks when manually edited**  
Column order sometimes changed.  
✔ Scripts now reference header names, not column positions.

---

# ⭐ What I Learned

- Working with Gmail API authentication + message parsing  
- Leveraging LLMs for real-world data extraction  
- Designing scalable automation pipelines  
- Clean architecture and error handling  
- Productivity systems for job management  
- How AI can simplify everyday workflows  

---

# ⭐ GitHub Repository  
🔗 https://github.com/MaheenRH/job-application-tracker-ai

---

# ⭐ Future Improvements

- Build a Next.js frontend UI for adding jobs  
- Add email notifications for follow-ups  
- Train a small custom model to classify recruiter tone  
- Add analytics dashboards  
- Integrate with LinkedIn job search APIs  

---

If you're actively applying for roles, this system absolutely transforms the workflow — it's like having a mini AI assistant dedicated to managing your job search.

---
