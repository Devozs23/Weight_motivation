// Frases motivacionales en español
const quotes = [
    "El único entrenamiento malo es el que no se hizo.",
    "Tu cuerpo puede soportar casi cualquier cosa. Es tu mente la que tienes que convencer.",
    "No lo desees, trabaja para conseguirlo.",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "La diferencia entre intentar y triunfar es un poco de esfuerzo.",
    "Cree en ti mismo y en todo lo que eres.",
    "Progreso, no perfección.",
    "No tienes que ser extremo, solo consistente.",
    "El dolor que sientes hoy será la fuerza que sientas mañana.",
    "Enamórate de cuidar de ti mismo.",
    "Tu salud es una inversión, no un gasto.",
    "El cuerpo logra lo que la mente cree.",
    "Cuida tu cuerpo. Es el único lugar que tienes para vivir.",
    "Eres más fuerte de lo que crees.",
    "Cada logro comienza con la decisión de intentar.",
    "La disciplina es hacer lo que necesitas hacer, incluso cuando no quieres hacerlo.",
    "Tu única competencia eres tú mismo.",
    "Los pequeños cambios eventualmente se suman a grandes resultados.",
    "No se trata de tener tiempo, se trata de hacer tiempo.",
    "La motivación te pone en marcha, el hábito te mantiene en movimiento."
];

// Variable global para el día seleccionado
let selectedMealPlanDay = '';

// Cargar recetas dinámicamente
function loadRecipes() {
    const recipeGrid = document.getElementById('recipeGrid');
    if (!recipeGrid) return;

    recipeGrid.innerHTML = recipes.map(recipe => `
        <div class="recipe-card" onclick="showRecipeModal(${recipe.id})">
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.title}</h3>
                <div class="recipe-meta">
                    <span>⏱️ ${recipe.time}</span>
                    <span>🔥 ${recipe.calories} cal</span>
                    <span>⭐ ${recipe.difficulty}</span>
                </div>
                <div class="nutrition-facts">
                    <div class="nutrition-item">
                        <div class="nutrition-value">${recipe.nutrition.protein}</div>
                        <div class="nutrition-label">Proteína</div>
                    </div>
                    <div class="nutrition-item">
                        <div class="nutrition-value">${recipe.nutrition.carbs}</div>
                        <div class="nutrition-label">Carbohidratos</div>
                    </div>
                    <div class="nutrition-item">
                        <div class="nutrition-value">${recipe.nutrition.fat}</div>
                        <div class="nutrition-label">Grasas</div>
                    </div>
                    <div class="nutrition-item">
                        <div class="nutrition-value">${recipe.nutrition.fiber}</div>
                        <div class="nutrition-label">Fibra</div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Mostrar modal de receta
function showRecipeModal(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;

    const modal = document.getElementById('recipeModal');
    const modalImage = document.getElementById('modalImage');
    const modalBody = document.getElementById('modalBody');

    modalImage.src = recipe.image;

    modalBody.innerHTML = `
        <h2>${recipe.title}</h2>
        <div class="recipe-meta" style="margin-bottom: 20px;">
            <span>⏱️ ${recipe.time}</span>
            <span>🔥 ${recipe.calories} calorías</span>
            <span>⭐ ${recipe.difficulty}</span>
        </div>

        <div class="nutrition-facts">
            <div class="nutrition-item">
                <div class="nutrition-value">${recipe.nutrition.protein}</div>
                <div class="nutrition-label">Proteína</div>
            </div>
            <div class="nutrition-item">
                <div class="nutrition-value">${recipe.nutrition.carbs}</div>
                <div class="nutrition-label">Carbohidratos</div>
            </div>
            <div class="nutrition-item">
                <div class="nutrition-value">${recipe.nutrition.fat}</div>
                <div class="nutrition-label">Grasas</div>
            </div>
            <div class="nutrition-item">
                <div class="nutrition-value">${recipe.nutrition.fiber}</div>
                <div class="nutrition-label">Fibra</div>
            </div>
        </div>

        <div class="recipe-ingredients">
            <h4>Ingredientes:</h4>
            <ul>
                ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
        </div>

        <div class="recipe-instructions">
            <h3>Instrucciones:</h3>
            ${recipe.instructions.map((step, index) => `
                <div class="instruction-step">
                    <div class="step-number">Paso ${index + 1}</div>
                    <p>${step}</p>
                </div>
            `).join('')}
        </div>

        ${recipe.mealPrepTips ? `
            <div class="meal-prep-tips">
                <h4>💡 Tips para Meal Prep:</h4>
                <ul style="margin-top: 10px; line-height: 1.8;">
                    ${recipe.mealPrepTips.map(tip => `<li style="margin-bottom: 8px;">${tip}</li>`).join('')}
                </ul>
            </div>
        ` : ''}
    `;

    modal.style.display = 'block';
}

// Cerrar modal
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('recipeModal');
    const closeBtn = document.querySelector('.close');

    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = 'none';
        }
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }

    // Cargar recetas al inicio
    loadRecipes();
});

// Mostrar frase motivacional aleatoria
function showRandomQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    const quoteElement = document.getElementById('motivationQuote');
    if (quoteElement) {
        quoteElement.textContent = `"${quote}"`;
    }
}

// Calculadora de IMC
function calculateBMI() {
    const height = parseFloat(document.getElementById('bmi-height').value) / 100;
    const weight = parseFloat(document.getElementById('bmi-weight').value);

    if (!height || !weight || height <= 0 || weight <= 0) {
        alert('Por favor ingresa altura y peso válidos!');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);
    let category = '';
    let color = '';

    if (bmi < 18.5) {
        category = 'Bajo peso';
        color = '#ff9800';
    } else if (bmi < 25) {
        category = 'Peso normal';
        color = '#4caf50';
    } else if (bmi < 30) {
        category = 'Sobrepeso';
        color = '#ff9800';
    } else {
        category = 'Obesidad';
        color = '#f44336';
    }

    document.getElementById('bmi-value').textContent = bmi;
    document.getElementById('bmi-category').textContent = category;
    document.getElementById('bmi-category').style.color = color;
    document.getElementById('bmi-result').classList.add('show');
}

// Calculadora de calorías
function calculateCalories() {
    const age = parseFloat(document.getElementById('cal-age').value);
    const gender = document.getElementById('cal-gender').value;
    const weight = parseFloat(document.getElementById('cal-weight').value);
    const height = parseFloat(document.getElementById('cal-height').value);
    const activity = parseFloat(document.getElementById('cal-activity').value);

    if (!age || !weight || !height || age <= 0 || weight <= 0 || height <= 0) {
        alert('Por favor completa todos los campos con valores válidos!');
        return;
    }

    // Fórmula de Mifflin-St Jeor
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const tdee = Math.round(bmr * activity);
    const lose = Math.round(tdee - 500);
    const gain = Math.round(tdee + 300);

    document.getElementById('cal-value').textContent = tdee.toLocaleString();
    document.getElementById('cal-lose').textContent = lose.toLocaleString();
    document.getElementById('cal-gain').textContent = gain.toLocaleString();
    document.getElementById('cal-result').classList.add('show');
}

// Calculadora de macros
function calculateMacros() {
    const calories = parseFloat(document.getElementById('macro-calories').value);
    const goal = document.getElementById('macro-goal').value;

    if (!calories || calories <= 0) {
        alert('Por favor ingresa tus calorías diarias!');
        return;
    }

    let proteinRatio, carbRatio, fatRatio;

    if (goal === 'lose') {
        proteinRatio = 0.40;
        carbRatio = 0.30;
        fatRatio = 0.30;
    } else if (goal === 'maintain') {
        proteinRatio = 0.33;
        carbRatio = 0.33;
        fatRatio = 0.33;
    } else {
        proteinRatio = 0.30;
        carbRatio = 0.40;
        fatRatio = 0.30;
    }

    const protein = Math.round((calories * proteinRatio) / 4);
    const carbs = Math.round((calories * carbRatio) / 4);
    const fats = Math.round((calories * fatRatio) / 9);

    document.getElementById('macro-protein').textContent = protein;
    document.getElementById('macro-carbs').textContent = carbs;
    document.getElementById('macro-fats').textContent = fats;
    document.getElementById('macro-result').classList.add('show');
}

// Calculadora de agua
function calculateWater() {
    const weight = parseFloat(document.getElementById('water-weight').value);
    const exercise = parseFloat(document.getElementById('water-exercise').value) || 0;

    if (!weight || weight <= 0) {
        alert('Por favor ingresa tu peso!');
        return;
    }

    const baseWater = weight * 0.033;
    const exerciseWater = (exercise / 30) * 0.35;
    const totalWater = (baseWater + exerciseWater).toFixed(1);
    const glasses = Math.round(totalWater * 4);

    document.getElementById('water-value').textContent = totalWater + ' L';
    document.getElementById('water-glasses').textContent = glasses;
    document.getElementById('water-result').classList.add('show');
}

// Calculadora de peso ideal
function calculateIdealWeight() {
    const height = parseFloat(document.getElementById('ideal-height').value);
    const gender = document.getElementById('ideal-gender').value;

    if (!height || height <= 0) {
        alert('Por favor ingresa tu altura!');
        return;
    }

    // Fórmula de Devine
    let idealWeight;
    if (gender === 'male') {
        idealWeight = 50 + 0.91 * (height - 152.4);
    } else {
        idealWeight = 45.5 + 0.91 * (height - 152.4);
    }

    const minWeight = (idealWeight * 0.9).toFixed(1);
    const maxWeight = (idealWeight * 1.1).toFixed(1);

    document.getElementById('ideal-value').textContent = idealWeight.toFixed(1) + ' kg';
    document.getElementById('ideal-range').textContent = `${minWeight} - ${maxWeight}`;
    document.getElementById('ideal-result').classList.add('show');
}

// Calculadora de grasa corporal
function calculateBodyFat() {
    const age = parseFloat(document.getElementById('bf-age').value);
    const gender = document.getElementById('bf-gender').value;
    const weight = parseFloat(document.getElementById('bf-weight').value);
    const height = parseFloat(document.getElementById('bf-height').value);
    const waist = parseFloat(document.getElementById('bf-waist').value);
    const neck = parseFloat(document.getElementById('bf-neck').value);
    const hip = parseFloat(document.getElementById('bf-hip').value);

    if (!weight || !height || !waist || !neck) {
        alert('Por favor completa todos los campos requeridos!');
        return;
    }

    if (gender === 'female' && !hip) {
        alert('Por favor ingresa la medida de cadera para mujeres!');
        return;
    }

    // Fórmula de la Marina de EE.UU.
    let bodyFat;
    if (gender === 'male') {
        bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
    } else {
        bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
    }

    bodyFat = Math.max(0, Math.min(50, bodyFat));

    let category = '';
    let color = '';

    if (gender === 'male') {
        if (bodyFat < 6) {
            category = 'Esencial';
            color = '#ff9800';
        } else if (bodyFat < 14) {
            category = 'Atleta';
            color = '#4caf50';
        } else if (bodyFat < 18) {
            category = 'Fitness';
            color = '#4caf50';
        } else if (bodyFat < 25) {
            category = 'Promedio';
            color = '#2196f3';
        } else {
            category = 'Obesidad';
            color = '#f44336';
        }
    } else {
        if (bodyFat < 14) {
            category = 'Esencial';
            color = '#ff9800';
        } else if (bodyFat < 21) {
            category = 'Atleta';
            color = '#4caf50';
        } else if (bodyFat < 25) {
            category = 'Fitness';
            color = '#4caf50';
        } else if (bodyFat < 32) {
            category = 'Promedio';
            color = '#2196f3';
        } else {
            category = 'Obesidad';
            color = '#f44336';
        }
    }

    document.getElementById('bf-value').textContent = bodyFat.toFixed(1) + '%';
    document.getElementById('bf-category').textContent = category;
    document.getElementById('bf-category').style.color = color;
    document.getElementById('bf-result').classList.add('show');
}

// Ocultar/mostrar campo de cadera según género
document.addEventListener('DOMContentLoaded', function() {
    const bfGender = document.getElementById('bf-gender');
    const hipGroup = document.getElementById('bf-hip-group');

    if (bfGender && hipGroup) {
        bfGender.addEventListener('change', function() {
            if (this.value === 'male') {
                hipGroup.style.display = 'none';
            } else {
                hipGroup.style.display = 'block';
            }
        });
    }
});

// Funciones de seguimiento de peso
function loadData() {
    return {
        startWeight: localStorage.getItem('startWeight'),
        goalWeight: localStorage.getItem('goalWeight'),
        history: JSON.parse(localStorage.getItem('weightHistory') || '[]')
    };
}

function saveData(key, value) {
    localStorage.setItem(key, value);
}

function updateDisplay() {
    const data = loadData();

    if (data.startWeight && data.goalWeight) {
        const current = data.history.length > 0
            ? data.history[data.history.length - 1].weight
            : data.startWeight;
        const lost = data.startWeight - current;
        const toGo = current - data.goalWeight;
        const totalToLose = data.startWeight - data.goalWeight;
        const progress = Math.min(Math.max((lost / totalToLose) * 100, 0), 100);

        document.getElementById('currentWeight').textContent = parseFloat(current).toFixed(1);
        document.getElementById('goalWeight').textContent = parseFloat(data.goalWeight).toFixed(1);
        document.getElementById('weightLost').textContent = lost.toFixed(1);
        document.getElementById('weightToGo').textContent = Math.max(toGo, 0).toFixed(1);
        document.getElementById('progressBar').style.width = progress + '%';
        document.getElementById('progressText').textContent = progress.toFixed(1) + '%';
    }

    updateHistory();
}

function setGoals() {
    const startWeight = document.getElementById('startWeight').value;
    const targetWeight = document.getElementById('targetWeight').value;

    if (!startWeight || !targetWeight) {
        alert('Por favor ingresa tanto el peso inicial como el peso meta!');
        return;
    }

    if (parseFloat(startWeight) <= parseFloat(targetWeight)) {
        alert('¡El peso inicial debe ser mayor que el peso meta!');
        return;
    }

    saveData('startWeight', startWeight);
    saveData('goalWeight', targetWeight);

    const data = loadData();
    if (data.history.length === 0) {
        const history = [{
            date: new Date().toISOString(),
            weight: parseFloat(startWeight)
        }];
        saveData('weightHistory', JSON.stringify(history));
    }

    updateDisplay();
    showRandomQuote();
    alert('¡Metas establecidas exitosamente! 🎯');
}

function logWeight() {
    const weight = document.getElementById('currentWeightInput').value;

    if (!weight) {
        alert('Por favor ingresa tu peso actual!');
        return;
    }

    const data = loadData();
    if (!data.startWeight || !data.goalWeight) {
        alert('¡Por favor establece tus metas primero!');
        return;
    }

    const history = data.history;
    history.push({
        date: new Date().toISOString(),
        weight: parseFloat(weight)
    });

    saveData('weightHistory', JSON.stringify(history));
    document.getElementById('currentWeightInput').value = '';
    updateDisplay();
    showRandomQuote();

    const lost = data.startWeight - weight;
    if (lost >= 5 && lost % 5 === 0) {
        alert(`🎉 ¡Felicitaciones! ¡Has perdido ${lost} kg! ¡Sigue así!`);
    }
}

function updateHistory() {
    const data = loadData();
    const historyList = document.getElementById('historyList');

    if (!historyList) return;

    if (data.history.length === 0) {
        historyList.innerHTML = '<p style="text-align: center; color: #888;">No hay entradas aún. ¡Comienza a registrar tu peso!</p>';
        return;
    }

    historyList.innerHTML = data.history
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((entry, index) => `
            <div class="history-item">
                <div>
                    <div class="history-weight">${parseFloat(entry.weight).toFixed(1)} kg</div>
                    <div class="history-date">${new Date(entry.date).toLocaleDateString('es-ES')}</div>
                </div>
                <button class="delete-btn" onclick="deleteEntry(${data.history.length - 1 - index})">Eliminar</button>
            </div>
        `).join('');
}

function deleteEntry(index) {
    if (!confirm('¿Estás seguro de que quieres eliminar esta entrada?')) {
        return;
    }

    const data = loadData();
    data.history.splice(index, 1);
    saveData('weightHistory', JSON.stringify(data.history));
    updateDisplay();
}

// Planificador de comidas
function selectDay(day) {
    selectedMealPlanDay = day;

    // Remover selección de todos los días
    document.querySelectorAll('.day-card').forEach(card => {
        card.classList.remove('selected');
    });

    // Seleccionar el día actual
    event.currentTarget.classList.add('selected');

    // Mostrar detalles
    document.getElementById('mealPlanDetails').style.display = 'block';
    document.getElementById('selectedDay').textContent = day;

    // Cargar plan guardado si existe
    const mealPlan = JSON.parse(localStorage.getItem('mealPlan') || '{}');
    if (mealPlan[day]) {
        document.getElementById('breakfast').value = mealPlan[day].breakfast || '';
        document.getElementById('lunch').value = mealPlan[day].lunch || '';
        document.getElementById('dinner').value = mealPlan[day].dinner || '';
        document.getElementById('snacks').value = mealPlan[day].snacks || '';
    } else {
        document.getElementById('breakfast').value = '';
        document.getElementById('lunch').value = '';
        document.getElementById('dinner').value = '';
        document.getElementById('snacks').value = '';
    }
}

function saveMealPlan() {
    if (!selectedMealPlanDay) {
        alert('Por favor selecciona un día primero!');
        return;
    }

    const mealPlan = JSON.parse(localStorage.getItem('mealPlan') || '{}');

    mealPlan[selectedMealPlanDay] = {
        breakfast: document.getElementById('breakfast').value,
        lunch: document.getElementById('lunch').value,
        dinner: document.getElementById('dinner').value,
        snacks: document.getElementById('snacks').value
    };

    localStorage.setItem('mealPlan', JSON.stringify(mealPlan));
    alert(`¡Plan de comidas guardado para ${selectedMealPlanDay}! 🍽️`);
}

// Inicialización
window.onload = function() {
    updateDisplay();
    showRandomQuote();
    setInterval(showRandomQuote, 15000); // Cambiar frase cada 15 segundos
    loadRecipes();
};
