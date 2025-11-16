---
title: "SoulBridge – AI Mental Health Chatbot Using GPT-4o-mini, Emotion Detection & Crisis Safeguards"
excerpt: "An empathetic AI chatbot designed with emotion awareness, FastAPI backend, GPT-4o-mini, and Hugging Face emotion classification."
---

# SoulBridge – AI Mental Health Chatbot  
SoulBridge is an AI-powered mental health companion designed to provide empathetic, emotionally intelligent conversations. It combines **LLM reasoning**, **emotion detection**, **safety filters**, and a clean **FastAPI backend** to create a conversational agent that is supportive, safe, and context-aware.

The primary goal:  
👉 *Build an AI that listens, understands emotions, and responds responsibly.*

---

# ⭐ Why I Built This

Mental health chatbots often lack one of two things:

1. **Empathy**  
2. **Safety**

Most chatbots respond generically, missing emotional cues. Others respond too strongly, without safeguards. I wanted to build a system that:

- Detects the user's emotional tone  
- Responds compassionately  
- Identifies crisis signals  
- Uses a hybrid LLM + emotion-model approach  
- Ensures safe, non-harmful interactions  
- Keeps conversation memory  
- Runs on a secure backend  

SoulBridge is my attempt to merge **AI** with **mental wellness**, responsibly and ethically.

---

# ⭐ High-Level Architecture

Frontend → API Request → FastAPI Backend
→ Emotion Detection Model → GPT-4o-mini (Response Generation)
→ Safety / Crisis Guard → Final AI Response


---

# ⭐ System Components

## **1. FastAPI Backend (Core Brain)**
The backend handles:

- Conversation endpoint  
- Request validation  
- Emotion model inference  
- LLM response generation  
- Safety checks  
- Logging  

Thanks to FastAPI, the entire API is fast, safe, and auto-documented.

---

## **2. Emotion Detection (Hugging Face Model)**  
I used a lightweight Hugging Face transformer to detect emotions like:

- Joy  
- Sadness  
- Anger  
- Fear  
- Neutral  
- Love  
- Optimism  
- Confusion  

This gives the LLM context before generating a response.

**Example:**

> User: “I feel so overwhelmed today.”

Emotion model → `sadness`  
This emotion label is included in the prompt to the LLM.

---

## **3. LLM Layer (GPT-4o-mini)**  
GPT-4o-mini was chosen because it is:

- Lightweight  
- Fast  
- Emotionally aware  
- Good at summarizing  
- Good at empathetic phrasing  
- Works well with prompt engineering  

The LLM receives:

- User message  
- Detected emotion  
- Conversation memory  
- Safety flags  

And produces a **supportive**, **calm**, **ethical** response.

---

## **4. Crisis Detection & Safety Filters**
This was one of the most important parts.

The system identifies:

- Self-harm signals  
- Extreme distress  
- Mentions of suicide  
- Violent ideation  

If triggered, the system switches to **crisis mode**:

- Does NOT give medical advice  
- Responds with gentle grounding  
- Encourages reaching out to real professionals  
- Provides emergency hotlines (country-neutral)  
- Removes unsafe LLM generations  

This makes SoulBridge safe for real users.

---

## **5. Conversation Memory**
The system maintains:

- Last few messages  
- Emotional history  
- Conversation context  

But avoids long-term memory for user safety and privacy.

---

## **6. Frontend UI (HTML/CSS/JS)**
The UI includes:

- Toggle theme (light/dark)  
- Chat-style interface  
- Smooth animations  
- Input box with validation  
- Clean card-based layout  

The interface reflects calm, soothing mental health design patterns.

---

# ⭐ Features

### ✔ Emotion-Aware Responses  
Each reply adapts to detected emotions.

### ✔ GPT-4o-mini Core  
Human-like, empathetic, supportive responses.

### ✔ Crisis Safeguards  
No harmful advice. Encourages professional support.

### ✔ FastAPI Backend  
Reliable, secure, and easy to extend.

### ✔ Conversation Memory  
Makes conversations feel more natural.

### ✔ Clean Modern UI  
Built with HTML, CSS, and JS.

### ✔ Secure Environment Handling  
API keys stored using `.env` and never exposed.

---

# ⭐ Key Technical Highlights

### 🔹 Emotion Classification  
Used Hugging Face pipeline:

- `distilbert-base-uncased` emotion model  
- Fast inference  
- No GPU required  

### 🔹 LLM Prompt Engineering  
Prompt includes:

- Emotion  
- Past messages  
- Ethical guidelines  
- Safety rules  
- Role definition  

### 🔹 Error Handling  
Backend handles:

- Missing fields  
- Long texts  
- API timeouts  
- Invalid request formats  

### 🔹 Logging  
All important events logged with timestamp + emotion state.

---

# ⭐ Challenges & Solutions

### 🔸 Detecting subtle emotional cues  
Emotion detection models struggle with nuanced text.  
✔ **Solution:** Combined LLM interpretation + classifier output.

---

### 🔸 Avoiding hallucinations in crisis situations  
LLMs can produce unwanted suggestions.  
✔ **Solution:** Strict crisis-mode template + filtered outputs.

---

### 🔸 Maintaining context without storing private data  
Needed a balance between memory and safety.  
✔ **Solution:** Store only last few messages, purge after session.

---

### 🔸 Deploying FastAPI securely  
Ensured no API keys leaked.  
✔ **Solution:** `.env` secrets + server-side validation + CORS restrictions.

---

# ⭐ What I Learned

- Emotional AI design  
- LLM prompt engineering  
- Hugging Face inference integration  
- Building safe AI systems  
- FastAPI backend design  
- Hybrid AI systems (LLM + classifier)  
- Ethical considerations in mental health AI  

This was one of my most meaningful AI projects.  

---

# ⭐ GitHub Repository  
🔗 https://github.com/MaheenRH/SoulBridge-Chatbot

---

# ⭐ Future Improvements

- Add voice-to-text for accessibility  
- Add calming conversation mode  
- Add journaling assistant  
- Support multiple languages  
- Add long-term secure memory using encrypted vector DB  

---

# ⭐ Final Thoughts  
SoulBridge is more than a chatbot — it’s an attempt to blend **AI + empathy** responsibly.  
The experience helped me grow as an engineer and as a person.

---
