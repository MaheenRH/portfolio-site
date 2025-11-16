---
title: "Rainfall Prediction Using Artificial Neural Networks (ANN)"
excerpt: "A deep learning project that predicts rainfall using historical Austin weather data with ANN, Keras, and TensorFlow."
---

# Rainfall Prediction Using Artificial Neural Networks (ANN)

This project uses Artificial Neural Networks (ANN) to predict rainfall based on historical weather records. Weather prediction is a highly nonlinear and complex problem, but with the right preprocessing and model design, ANNs perform exceptionally well.

The goal of this project was to build a **practical ML model** that can learn patterns from climate data and predict whether rainfall is likely to occur.

---

# ⭐ Why I Built This

Rainfall prediction impacts:

- Agriculture  
- Urban planning  
- Flood management  
- Travel  
- Outdoor events  

Traditional methods often rely on manual forecasting or statistical models. I wanted to explore:

- How deep learning models behave with climate data  
- If a simple ANN can capture nonlinear weather patterns  
- How data preprocessing affects meteorological forecasting  
- How ML could support smart city systems

This project helped me gain experience working with time-dependent data and neural networks for environmental science.

---

# ⭐ Dataset Overview

I used a large dataset of **Austin, Texas weather records**, which included:

- Temperature  
- Humidity  
- Wind speed  
- Pressure  
- Visibility  
- Cloud cover  
- Precipitation values  
- Rainfall indicators  

The dataset was cleaned and transformed for supervised learning.

---

# ⭐ Data Preprocessing Pipeline

Proper preprocessing was crucial for model accuracy.

### ✔ Handling Missing Values  
Filled or interpolated missing weather readings.

### ✔ Removing Outliers  
Filtered extreme anomalies using IQR and thresholding.

### ✔ Feature Engineering  
Extracted:

- Daily averages  
- Temperature differences  
- Humidity ratios  
- Rolling window indicators  

### ✔ Label Creation  
Converted rainfall (“yes/no”) into binary classification labels.

### ✔ Normalization  
Scaled all numerical features using MinMaxScaler.

This ensured the ANN trained smoothly without exploding gradients.

---

# ⭐ Model Architecture (ANN)

This project uses a **multi-layer feedforward neural network** built using TensorFlow/Keras.

Input Layer (weather features)
↓
Dense Layer (ReLU)
↓
Dense Layer (ReLU)
↓
Dropout Layer
↓
Output Layer (Sigmoid → predicts rain probability)


### Hyperparameters:

- Optimizer: Adam  
- Loss: Binary Crossentropy  
- Metrics: Accuracy, Precision  
- Epochs: 50–100  
- Batch Size: 32  

The model balanced complexity and generalization.

---

# ⭐ Model Performance

After training multiple ANN variants, these were the key results:

| Model | Train Loss | Train MAE | Train Precision | Val Loss | Val MAE | Val Precision |
|-------|-------------|------------|------------------|----------|-----------|----------------|
| Model 1 | 2.6242 | 1.1814 | 0.9692 | 3.0446 | 1.2962 | 0.9799 |
| Model 2 | 20381.80 | 96.80 | 0.9609 | 20647.95 | 100.10 | 0.9799 |
| Model 3 | … | … | … | … | … | … |

Model 1 clearly performed the best, with high precision and acceptable loss values.

---

# ⭐ Key Features

### ✔ Predicts Rainfall Probability  
Binary classification (0 or 1), predicting whether it will rain.

### ✔ Neural Network-Based  
Captures nonlinear patterns better than statistical models.

### ✔ Works on Real Weather Data  
No artificial or toy datasets — real atmospheric conditions.

### ✔ Flexible Architecture  
Can be extended to RNNs, LSTMs, or Transformers in future.

---

# ⭐ Challenges & Solutions

### 🔸 Highly Noisy Weather Data  
Weather data fluctuates heavily.  
✔ Solution: Smoothing + outlier removal + feature engineering.

---

### 🔸 Class Imbalance (more “no rain” than “rain”)  
This impacts model performance.  
✔ Solution: Balancing via sampling + weighted loss functions.

---

### 🔸 Choosing the Right Features  
Not all weather features impact rainfall equally.  
✔ Solution: Used correlation analysis + domain knowledge.

---

### 🔸 Overfitting  
ANNs can memorize training data.  
✔ Solution: Dropout, regularization, and early stopping.

---

# ⭐ What I Learned

- Handling messy climate datasets  
- Deep learning for environmental forecasting  
- ANN architecture tuning  
- Optimizing metrics like precision vs. recall  
- Feature engineering for meteorological data  
- Evaluating models for real-world conditions  

This project significantly improved my understanding of ML for scientific and environmental applications.

---

# ⭐ GitHub Repository  
🔗 https://github.com/MaheenRH/rainfall-prediction-ANN

---

# ⭐ Future Improvements

- Switch to LSTM/GRU for time-series modeling  
- Use sliding windows for temporal context  
- Integrate real-time data APIs  
- Deploy as a prediction microservice  
- Add visualization dashboard (Streamlit)  

---

# ⭐ Final Thoughts

Weather prediction is challenging, but even simple ANNs can reveal powerful insights. This project gave me hands-on experience with real-world scientific ML and strengthened my skills in deep learning, preprocessing, and environmental data analysis.

---
