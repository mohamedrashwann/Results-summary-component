// بيانات JSON
const resultData = [
  {
    "category": "Reaction",
    "score": 80,
    "icon": "./assets/images/icon-reaction.svg"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "./assets/images/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "./assets/images/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "./assets/images/icon-visual.svg"
  }
];

// دالة لحساب المتوسط
function calculateAverageScore(data) {
  const totalScore = data.reduce((sum, item) => sum + item.score, 0);
  return Math.round(totalScore / data.length);
}

// دالة لتحديد النص بناءً على النتيجة
function getResultText(score) {
  if (score >= 90) return "Excellent";
  if (score >= 80) return "Great";
  if (score >= 70) return "Good";
  if (score >= 60) return "Fair";
  return "Poor";
}

// دالة لتحديد الوصف بناءً على النتيجة
function getResultDescription(score) {
  const descriptions = {
    90: "You scored higher than 95% of the people who have taken these tests.",
    80: "You scored higher than 75% of the people who have taken these tests.",
    70: "You scored higher than 65% of the people who have taken these tests.",
    60: "You scored higher than 45% of the people who have taken these tests.",
    50: "You scored higher than 25% of the people who have taken these tests."
  };
  
  const roundedScore = Math.floor(score / 10) * 10;
  return descriptions[roundedScore] || "Keep practicing to improve your score.";
}

// دالة لإنشاء عناصر النتائج
function renderResults() {
  const averageScore = calculateAverageScore(resultData);
  
  // تحديث نتيجة المتوسط
  const scoreElement = document.querySelector('.score');
  const resultTextElement = document.querySelector('.result h3');
  const resultDescriptionElement = document.querySelector('.description');
  
  if (scoreElement) {
    scoreElement.textContent = averageScore;
  }
  
  if (resultTextElement) {
    resultTextElement.textContent = getResultText(averageScore);
  }
  
  if (resultDescriptionElement) {
    resultDescriptionElement.textContent = getResultDescription(averageScore);
  }
  
  // تحديث قائمة النتائج التفصيلية
  const summaryList = document.querySelector('.summary ul');
  if (summaryList) {
    summaryList.innerHTML = '';
    
    resultData.forEach(item => {
      const li = document.createElement('li');
      li.className = `${item.category.toLowerCase()} item`;
      
      li.innerHTML = `
        <div class="item-left">
          <img src="${item.icon}" alt="${item.category} icon">
          <span>${item.category}</span>
        </div>
        <p><strong>${item.score}</strong> / 100</p>
      `;
      
      summaryList.appendChild(li);
    });
  }
}

// دالة لمعالجة زر Continue
function setupContinueButton() {
  const continueBtn = document.querySelector('.continue-btn');
  if (continueBtn) {
    continueBtn.addEventListener('click', function() {
      alert('Results submitted! Your average score is ' + calculateAverageScore(resultData));
      
      // يمكنك إضافة المزيد من الوظائف هنا
      // مثل إرسال البيانات إلى الخادم أو إعادة تعيين الصفحة
    });
  }
}

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
  renderResults();
  setupContinueButton();
  
  // إضافة مؤثرات إضافية
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(5px)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateX(0)';
    });
  });
});