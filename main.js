// ========================================
// FitLife Pro - Main JavaScript
// ========================================

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Animated Counter for Hero Stats
    const animateCounter = (element, target, duration = 2000) => {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = formatNumber(target);
                clearInterval(timer);
            } else {
                element.textContent = formatNumber(Math.floor(current));
            }
        }, 16);
    };

    const formatNumber = (num) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(0) + 'K';
        } else {
            return num.toFixed(1);
        }
    };

    // Observe hero stats and animate when visible
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all stat numbers
    document.querySelectorAll('.stat-number').forEach(stat => {
        observer.observe(stat);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Fade in elements on scroll
    const fadeElements = document.querySelectorAll('.feature-card, .step, .testimonial');
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeObserver.observe(el);
    });
});

// ========================================
// Calculator Functions
// ========================================

// BMI Calculator with Personalized Analysis
function calculateBMI() {
    const height = parseFloat(document.getElementById('bmi-height').value);
    const weight = parseFloat(document.getElementById('bmi-weight').value);

    if (!height || !weight || height <= 0 || weight <= 0) {
        showAlert('Por favor ingresa valores válidos', 'error');
        return;
    }

    const heightM = height / 100;
    const bmi = weight / (heightM * heightM);

    const result = {
        bmi: bmi.toFixed(1),
        category: getBMICategory(bmi),
        color: getBMIColor(bmi),
        analysis: getBMIAnalysis(bmi, weight, height)
    };

    displayBMIResult(result);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return 'Bajo peso';
    if (bmi < 25) return 'Peso normal';
    if (bmi < 30) return 'Sobrepeso';
    return 'Obesidad';
}

function getBMIColor(bmi) {
    if (bmi < 18.5) return '#ff9800';
    if (bmi < 25) return '#4caf50';
    if (bmi < 30) return '#ff9800';
    return '#f44336';
}

function getBMIAnalysis(bmi, weight, height) {
    const heightM = height / 100;
    const normalBMIMin = 18.5;
    const normalBMIMax = 24.9;

    let analysis = {
        status: '',
        recommendation: '',
        targetWeight: '',
        message: ''
    };

    if (bmi < 18.5) {
        const targetWeight = normalBMIMin * (heightM * heightM);
        const diff = targetWeight - weight;
        analysis.status = 'Estás por debajo del peso saludable';
        analysis.recommendation = `Te sugerimos ganar aproximadamente ${diff.toFixed(1)} kg para alcanzar un IMC saludable.`;
        analysis.targetWeight = `Peso objetivo: ${targetWeight.toFixed(1)} kg`;
        analysis.message = 'Consulta con un nutricionista para un plan de ganancia de peso saludable.';
    } else if (bmi < 25) {
        analysis.status = '¡Excelente! Estás en tu peso ideal';
        analysis.recommendation = 'Mantén tu estilo de vida actual con ejercicio regular y alimentación balanceada.';
        analysis.targetWeight = `Rango saludable: ${(normalBMIMin * heightM * heightM).toFixed(1)} - ${(normalBMIMax * heightM * heightM).toFixed(1)} kg`;
        analysis.message = '¡Sigue así! Estás haciendo un gran trabajo.';
    } else if (bmi < 30) {
        const targetWeight = normalBMIMax * (heightM * heightM);
        const diff = weight - targetWeight;
        analysis.status = 'Tienes sobrepeso';
        analysis.recommendation = `Te faltan ${diff.toFixed(1)} kg para salir del sobrepeso y entrar en rango normal.`;
        analysis.targetWeight = `Peso objetivo: ${targetWeight.toFixed(1)} kg`;
        analysis.message = 'Con un déficit calórico moderado de 500 cal/día, podrías alcanzar tu objetivo en ' + Math.ceil(diff / 0.5) + ' semanas.';
    } else {
        const targetWeight = normalBMIMax * (heightM * heightM);
        const diff = weight - targetWeight;
        analysis.status = 'Obesidad - Es importante tomar acción';
        analysis.recommendation = `Necesitas perder aproximadamente ${diff.toFixed(1)} kg para alcanzar un peso saludable.`;
        analysis.targetWeight = `Peso objetivo: ${targetWeight.toFixed(1)} kg`;
        analysis.message = 'Te recomendamos consultar con un profesional de la salud. Con un plan adecuado, podrías alcanzar tu objetivo en ' + Math.ceil(diff / 0.5) + ' semanas.';
    }

    return analysis;
}

function displayBMIResult(result) {
    const resultDiv = document.getElementById('bmi-result');
    resultDiv.innerHTML = `
        <div class="result-card">
            <div class="result-header">
                <h3>Tu IMC: <span style="color: ${result.color}">${result.bmi}</span></h3>
                <span class="category-badge" style="background: ${result.color}">${result.category}</span>
            </div>
            <div class="analysis-section">
                <div class="analysis-item">
                    <i class="fas fa-info-circle"></i>
                    <div>
                        <h4>Estado Actual</h4>
                        <p>${result.analysis.status}</p>
                    </div>
                </div>
                <div class="analysis-item">
                    <i class="fas fa-bullseye"></i>
                    <div>
                        <h4>Recomendación</h4>
                        <p>${result.analysis.recommendation}</p>
                    </div>
                </div>
                <div class="analysis-item">
                    <i class="fas fa-weight"></i>
                    <div>
                        <h4>Objetivo</h4>
                        <p>${result.analysis.targetWeight}</p>
                    </div>
                </div>
                <div class="analysis-item success">
                    <i class="fas fa-lightbulb"></i>
                    <div>
                        <h4>Plan de Acción</h4>
                        <p>${result.analysis.message}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    resultDiv.classList.add('show');
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Calorie Calculator
function calculateCalories() {
    const age = parseFloat(document.getElementById('cal-age').value);
    const gender = document.getElementById('cal-gender').value;
    const weight = parseFloat(document.getElementById('cal-weight').value);
    const height = parseFloat(document.getElementById('cal-height').value);
    const activity = parseFloat(document.getElementById('cal-activity').value);
    const goal = document.getElementById('cal-goal').value;

    if (!age || !weight || !height) {
        showAlert('Por favor completa todos los campos', 'error');
        return;
    }

    // Mifflin-St Jeor Equation
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const tdee = Math.round(bmr * activity);
    let targetCalories, weeklyWeightChange, timeToGoal;

    if (goal === 'lose') {
        targetCalories = Math.round(tdee - 500);
        weeklyWeightChange = -0.5;
    } else if (goal === 'gain') {
        targetCalories = Math.round(tdee + 300);
        weeklyWeightChange = 0.25;
    } else {
        targetCalories = tdee;
        weeklyWeightChange = 0;
    }

    displayCalorieResult({
        tdee,
        targetCalories,
        bmr: Math.round(bmr),
        weeklyWeightChange,
        goal
    });
}

function displayCalorieResult(result) {
    const resultDiv = document.getElementById('cal-result');
    const goalText = {
        'lose': 'Perder Peso',
        'maintain': 'Mantener Peso',
        'gain': 'Ganar Peso'
    };

    resultDiv.innerHTML = `
        <div class="result-card">
            <div class="result-header">
                <h3>Tu Plan Calórico: <span class="text-primary">${result.targetCalories}</span> cal/día</h3>
                <span class="category-badge">${goalText[result.goal]}</span>
            </div>
            <div class="calorie-breakdown">
                <div class="calorie-item">
                    <span class="label">Metabolismo Basal (BMR)</span>
                    <span class="value">${result.bmr} cal</span>
                </div>
                <div class="calorie-item">
                    <span class="label">Gasto Total Diario (TDEE)</span>
                    <span class="value">${result.tdee} cal</span>
                </div>
                <div class="calorie-item highlight">
                    <span class="label">Calorías Objetivo</span>
                    <span class="value">${result.targetCalories} cal</span>
                </div>
                <div class="calorie-item">
                    <span class="label">Cambio Semanal Esperado</span>
                    <span class="value">${result.weeklyWeightChange > 0 ? '+' : ''}${result.weeklyWeightChange} kg</span>
                </div>
            </div>
            <div class="analysis-tip">
                <i class="fas fa-info-circle"></i>
                <p><strong>Consejo:</strong> ${getCalorieTip(result.goal)}</p>
            </div>
        </div>
    `;
    resultDiv.classList.add('show');
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function getCalorieTip(goal) {
    const tips = {
        'lose': 'Para perder peso de forma saludable, mantén un déficit de 500 calorías diarias. Combina con ejercicio para mejores resultados.',
        'maintain': 'Mantén tu ingesta calórica estable y continúa con ejercicio regular para preservar tu peso actual.',
        'gain': 'Aumenta tu ingesta con alimentos nutritivos y combina con entrenamiento de fuerza para ganar masa muscular.'
    };
    return tips[goal];
}

// Alert System
function showAlert(message, type = 'info') {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.innerHTML = `
        <i class="fas fa-${type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(alert);

    setTimeout(() => {
        alert.classList.add('show');
    }, 100);

    setTimeout(() => {
        alert.classList.remove('show');
        setTimeout(() => alert.remove(), 300);
    }, 3000);
}

// Utility: Save to LocalStorage
function saveToStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (e) {
        console.error('Error saving to localStorage:', e);
        return false;
    }
}

// Utility: Load from LocalStorage
function loadFromStorage(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (e) {
        console.error('Error loading from localStorage:', e);
        return null;
    }
}

console.log('🏋️ FitLife Pro Loaded Successfully!');
