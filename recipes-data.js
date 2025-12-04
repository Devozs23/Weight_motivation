// Recetas saludables con fotos reales de Unsplash
const recipes = [
    {
        id: 1,
        title: "Ensalada de Pollo a la Parrilla",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
        time: "20 mins",
        calories: 350,
        difficulty: "Fácil",
        nutrition: {
            protein: "35g",
            carbs: "15g",
            fat: "12g",
            fiber: "8g"
        },
        ingredients: [
            "200g pechuga de pollo a la parrilla",
            "2 tazas de hojas verdes mixtas",
            "1/2 taza de tomates cherry",
            "1/4 pepino, rebanado",
            "2 cucharadas de aceite de oliva",
            "1 cucharada de vinagre balsámico",
            "Sal y pimienta al gusto"
        ],
        instructions: [
            "Calienta una sartén o parrilla a fuego medio-alto. Sazona la pechuga de pollo con sal, pimienta y tus especias favoritas.",
            "Cocina el pollo durante 6-7 minutos por cada lado hasta que esté completamente cocido (temperatura interna de 74°C).",
            "Mientras el pollo se cocina, lava y seca las hojas verdes. Corta los tomates cherry por la mitad y el pepino en rodajas.",
            "Deja reposar el pollo cocido durante 5 minutos, luego córtalo en tiras o cubos.",
            "En un bowl grande, combina las hojas verdes, tomates y pepino.",
            "Mezcla el aceite de oliva con el vinagre balsámico, sal y pimienta para hacer el aderezo.",
            "Coloca el pollo sobre las verduras y rocía con el aderezo. Sirve inmediatamente."
        ],
        mealPrepTips: [
            "Puedes cocinar el pollo con anticipación y guardarlo en el refrigerador hasta por 4 días.",
            "Prepara el aderezo en un frasco y agítalo antes de usar.",
            "Mantén las verduras y el pollo separados hasta el momento de servir para evitar que se ablanden."
        ]
    },
    {
        id: 2,
        title: "Bowl de Quinoa Buddha",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
        time: "25 mins",
        calories: 400,
        difficulty: "Media",
        nutrition: {
            protein: "18g",
            carbs: "55g",
            fat: "10g",
            fiber: "12g"
        },
        ingredients: [
            "1 taza de quinoa cocida",
            "1 taza de garbanzos asados",
            "1 taza de batata asada",
            "1 taza de espinaca",
            "1/4 aguacate",
            "2 cucharadas de aderezo de tahini",
            "Semillas de sésamo para decorar"
        ],
        instructions: [
            "Cocina la quinoa según las instrucciones del paquete (generalmente 15 minutos). Deja enfriar.",
            "Precalienta el horno a 200°C. Pela y corta la batata en cubos de 2cm.",
            "En un bowl, mezcla los garbanzos escurridos con 1 cucharada de aceite de oliva, comino, pimentón y una pizca de sal.",
            "Coloca la batata y los garbanzos en una bandeja de horno. Asa durante 20-25 minutos, volteando a la mitad.",
            "Mientras tanto, prepara el aderezo de tahini mezclando 2 cucharadas de tahini, jugo de limón, ajo picado y agua hasta obtener consistencia cremosa.",
            "Lava y seca las hojas de espinaca.",
            "En un bowl, coloca una base de quinoa. Añade los garbanzos y batata asados, espinaca fresca y aguacate en rodajas.",
            "Rocía con el aderezo de tahini y espolvorea semillas de sésamo. ¡Disfruta!"
        ],
        mealPrepTips: [
            "Prepara grandes cantidades de quinoa y guárdala en el refrigerador hasta por 5 días.",
            "Los garbanzos y batata asados se mantienen bien hasta por 4 días en un contenedor hermético.",
            "Agrega el aguacate y el aderezo justo antes de comer para mantener la frescura."
        ]
    },
    {
        id: 3,
        title: "Parfait de Yogur Griego",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
        time: "5 mins",
        calories: 250,
        difficulty: "Fácil",
        nutrition: {
            protein: "20g",
            carbs: "30g",
            fat: "5g",
            fiber: "6g"
        },
        ingredients: [
            "200g yogur griego 0% grasa",
            "1/2 taza de frutos rojos mixtos",
            "2 cucharadas de granola",
            "1 cucharada de miel",
            "1 cucharada de semillas de chía",
            "Hojas de menta para decorar"
        ],
        instructions: [
            "En un vaso o bowl transparente, coloca la mitad del yogur griego en el fondo.",
            "Añade una capa de frutos rojos (fresas, arándanos, frambuesas).",
            "Espolvorea la mitad de la granola y semillas de chía.",
            "Repite con otra capa de yogur, frutos rojos y granola.",
            "Rocía con miel por encima.",
            "Decora con hojas de menta fresca. Sirve inmediatamente y disfruta."
        ],
        mealPrepTips: [
            "Puedes preparar los parfaits en frascos de vidrio la noche anterior, pero agrega la granola justo antes de comer para mantenerla crujiente.",
            "Usa frutos rojos congelados si no tienes frescos - son igual de nutritivos.",
            "Sustituye la miel con jarabe de arce puro para una opción vegana."
        ]
    },
    {
        id: 4,
        title: "Salmón al Horno con Verduras",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80",
        time: "30 mins",
        calories: 450,
        difficulty: "Media",
        nutrition: {
            protein: "40g",
            carbs: "20g",
            fat: "22g",
            fiber: "7g"
        },
        ingredients: [
            "200g filete de salmón",
            "2 tazas de floretes de brócoli",
            "1 taza de espárragos",
            "1 limón, rebanado",
            "2 cucharadas de aceite de oliva",
            "Ajo, hierbas y especias"
        ],
        instructions: [
            "Precalienta el horno a 200°C. Forra una bandeja de horno con papel pergamino.",
            "Lava y corta las verduras: separa los floretes de brócoli y corta los extremos duros de los espárragos.",
            "Coloca el salmón en el centro de la bandeja. Rodéalo con el brócoli y los espárragos.",
            "Rocía todo con aceite de oliva. Sazona el salmón con sal, pimienta, ajo en polvo y eneldo.",
            "Coloca rodajas de limón sobre el salmón y entre las verduras.",
            "Hornea durante 15-18 minutos hasta que el salmón esté opaco y se desmenuce fácilmente con un tenedor.",
            "Las verduras deben estar tiernas pero aún crujientes. Sirve caliente y disfruta los omega-3."
        ],
        mealPrepTips: [
            "El salmón cocido se mantiene bien en el refrigerador hasta por 3 días.",
            "Puedes usar cualquier combinación de verduras que tengas: zanahorias, pimientos o calabacín.",
            "Para recalentar, usa el horno a baja temperatura para mantener la textura del pescado."
        ]
    },
    {
        id: 5,
        title: "Salteado de Vegetales",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
        time: "15 mins",
        calories: 280,
        difficulty: "Fácil",
        nutrition: {
            protein: "12g",
            carbs: "35g",
            fat: "10g",
            fiber: "9g"
        },
        ingredients: [
            "1 taza de pimientos morrones",
            "1 taza de ejotes",
            "1 taza de champiñones",
            "1/2 taza de zanahorias juliana",
            "2 cucharadas de salsa de soya baja en sodio",
            "1 cucharada de aceite de sésamo",
            "Jengibre y ajo"
        ],
        instructions: [
            "Prepara todos los ingredientes: lava las verduras, corta los pimientos en tiras, los champiñones en láminas y las zanahorias en juliana.",
            "Pica finamente 1 cucharada de jengibre fresco y 2 dientes de ajo.",
            "Calienta un wok o sartén grande a fuego alto. Añade el aceite de sésamo.",
            "Saltea el ajo y jengibre durante 30 segundos hasta que estén fragantes.",
            "Añade primero las zanahorias y cocina por 2 minutos, luego los champiñones y pimientos.",
            "Agrega los ejotes y cocina por 2-3 minutos más, moviendo constantemente.",
            "Vierte la salsa de soya, mezcla bien y cocina por 1 minuto adicional. Las verduras deben estar crujientes.",
            "Sirve inmediatamente sobre arroz integral o fideos de arroz para una comida completa."
        ],
        mealPrepTips: [
            "Corta todas las verduras el día anterior y guárdalas en contenedores separados.",
            "Este salteado se mantiene bien hasta por 4 días. Recalienta en sartén a fuego alto.",
            "Añade tofu, pollo o camarones para aumentar el contenido de proteína."
        ]
    },
    {
        id: 6,
        title: "Bowl de Smoothie de Proteína",
        image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80",
        time: "10 mins",
        calories: 320,
        difficulty: "Fácil",
        nutrition: {
            protein: "25g",
            carbs: "40g",
            fat: "8g",
            fiber: "10g"
        },
        ingredients: [
            "1 scoop de proteína en polvo",
            "1 plátano congelado",
            "1/2 taza de frutos rojos congelados",
            "1 taza de leche de almendras",
            "1 cucharada de mantequilla de almendras",
            "Toppings: granola, frutas, semillas"
        ],
        instructions: [
            "Congela el plátano cortado en rodajas al menos 2 horas antes (o usa uno ya congelado).",
            "En una licuadora, añade la leche de almendras primero para evitar que se pegue.",
            "Agrega el plátano congelado, frutos rojos, proteína en polvo y mantequilla de almendras.",
            "Licúa a velocidad baja inicialmente, luego aumenta a alta velocidad hasta obtener una consistencia espesa y cremosa.",
            "Si está muy espeso, añade más leche de almendras poco a poco. Si está muy líquido, agrega más fruta congelada o hielo.",
            "Vierte en un bowl grande.",
            "Decora con tus toppings favoritos: granola, rodajas de plátano fresco, fresas, arándanos, semillas de chía, coco rallado y mantequilla de almendras.",
            "Sirve inmediatamente con una cuchara y disfruta este desayuno nutritivo y delicioso."
        ],
        mealPrepTips: [
            "Prepara bolsas con porciones de frutas congeladas para smoothies rápidos.",
            "La mantequilla de almendras se puede sustituir por mantequilla de maní o girasol.",
            "Añade espinaca o col rizada para nutrientes extra sin cambiar mucho el sabor."
        ]
    },
    {
        id: 7,
        title: "Tacos de Pescado al Estilo Baja",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
        time: "25 mins",
        calories: 380,
        difficulty: "Media",
        nutrition: {
            protein: "32g",
            carbs: "38g",
            fat: "12g",
            fiber: "8g"
        },
        ingredients: [
            "300g pescado blanco (tilapia o cod)",
            "6 tortillas de maíz pequeñas",
            "1 taza de repollo morado rallado",
            "1/2 taza de cilantro fresco",
            "1 limón",
            "Salsa de yogur: yogur griego, lima, comino",
            "Pico de gallo fresco"
        ],
        instructions: [
            "Prepara la salsa mezclando 1/2 taza de yogur griego, jugo de 1 lima, 1/2 cucharadita de comino y una pizca de sal.",
            "Sazona el pescado con sal, pimienta, pimentón y comino.",
            "Calienta una sartén con aceite de oliva a fuego medio-alto. Cocina el pescado 3-4 minutos por lado hasta que esté opaco.",
            "Mientras el pescado se cocina, calienta las tortillas en una sartén seca o directamente sobre la llama de la estufa.",
            "Ralla finamente el repollo morado y pica el cilantro fresco.",
            "Una vez cocido, desmenúzalo en trozos grandes.",
            "Ensambla los tacos: coloca pescado en cada tortilla, agrega repollo rallado, cilantro, un chorrito de salsa de yogur y pico de gallo.",
            "Exprime limón fresco por encima. ¡Sirve inmediatamente y disfruta!"
        ],
        mealPrepTips: [
            "Prepara todos los componentes por separado y ensambla justo antes de comer.",
            "El repollo rallado se mantiene crujiente hasta por 3 días en el refrigerador.",
            "Puedes usar salmón, camarones o incluso pollo como alternativa al pescado blanco."
        ]
    },
    {
        id: 8,
        title: "Ensalada Mediterránea de Garbanzos",
        image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&q=80",
        time: "15 mins",
        calories: 320,
        difficulty: "Fácil",
        nutrition: {
            protein: "15g",
            carbs: "42g",
            fat: "11g",
            fiber: "12g"
        },
        ingredients: [
            "1 lata de garbanzos escurridos",
            "1 taza de tomates cherry",
            "1/2 pepino en cubos",
            "1/4 cebolla morada rebanada",
            "1/2 taza de queso feta desmoronado",
            "Aceitunas kalamata",
            "Aderezo: aceite oliva, limón, orégano"
        ],
        instructions: [
            "Escurre y enjuaga bien los garbanzos. Sécalos con papel toalla.",
            "Corta los tomates cherry por la mitad, el pepino en cubos pequeños y la cebolla morada en rodajas finas.",
            "En un bowl grande, combina los garbanzos, tomates, pepino, cebolla y aceitunas.",
            "Prepara el aderezo en un frasco: 3 cucharadas de aceite de oliva, jugo de 1 limón, 1 cucharadita de orégano seco, 1 diente de ajo picado, sal y pimienta.",
            "Agita vigorosamente el frasco para emulsionar el aderezo.",
            "Vierte el aderezo sobre la ensalada y mezcla bien para que todos los ingredientes se impregnen.",
            "Añade el queso feta desmoronado por encima.",
            "Deja reposar 10 minutos para que los sabores se integren. Sirve fría o a temperatura ambiente."
        ],
        mealPrepTips: [
            "Esta ensalada mejora con el tiempo - el sabor se intensifica después de unas horas.",
            "Se mantiene perfecta en el refrigerador hasta por 4 días.",
            "Sirve sobre hojas verdes, con pan pita integral o como relleno para wraps."
        ]
    },
    {
        id: 9,
        title: "Pechuga de Pollo a la Plancha con Hierbas",
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&q=80",
        time: "20 mins",
        calories: 280,
        difficulty: "Fácil",
        nutrition: {
            protein: "45g",
            carbs: "5g",
            fat: "9g",
            fiber: "1g"
        },
        ingredients: [
            "200g pechuga de pollo",
            "2 cucharadas de aceite de oliva",
            "Romero fresco",
            "Tomillo fresco",
            "Ajo en polvo",
            "Jugo de limón",
            "Sal y pimienta"
        ],
        instructions: [
            "Golpea suavemente la pechuga de pollo con un mazo para emparejar el grosor (esto asegura cocción uniforme).",
            "En un bowl, mezcla aceite de oliva, jugo de medio limón, 1 cucharadita de romero picado, 1 cucharadita de tomillo, ajo en polvo, sal y pimienta.",
            "Marina el pollo en esta mezcla durante al menos 15 minutos (o hasta 4 horas en el refrigerador).",
            "Calienta una sartén o plancha a fuego medio-alto.",
            "Coloca el pollo en la sartén caliente y cocina sin mover durante 6-7 minutos.",
            "Voltea el pollo y cocina otros 6-7 minutos hasta que la temperatura interna alcance 74°C.",
            "Deja reposar el pollo 5 minutos antes de cortar para que los jugos se redistribuyan.",
            "Sirve con verduras asadas o ensalada fresca. Rocía con jugo de limón adicional."
        ],
        mealPrepTips: [
            "Cocina varias pechugas a la vez para meal prep de la semana.",
            "El pollo cocido se mantiene fresco hasta por 4 días en el refrigerador.",
            "Rebana el pollo cocido para usarlo en ensaladas, wraps o bowls."
        ]
    },
    {
        id: 10,
        title: "Bowl de Arroz Integral con Tofu",
        image: "https://images.unsplash.com/photo-1546069901-eacef0df6022?w=800&q=80",
        time: "30 mins",
        calories: 420,
        difficulty: "Media",
        nutrition: {
            protein: "22g",
            carbs: "58g",
            fat: "14g",
            fiber: "10g"
        },
        ingredients: [
            "1 taza de arroz integral cocido",
            "200g tofu extra firme",
            "1 taza de edamame",
            "1 zanahoria en juliana",
            "1/2 taza de pepino",
            "Salsa teriyaki casera",
            "Semillas de sésamo y alga nori"
        ],
        instructions: [
            "Cocina el arroz integral según instrucciones del paquete (40-45 minutos). Mantén caliente.",
            "Escurre el tofu y presiónalo entre toallas de papel durante 15 minutos para eliminar exceso de agua.",
            "Corta el tofu en cubos de 2cm. Marina con salsa teriyaki durante 10 minutos.",
            "Calienta una sartén con aceite de sésamo. Cocina el tofu 3-4 minutos por lado hasta que esté dorado.",
            "Mientras tanto, hierve el edamame según instrucciones (usualmente 5 minutos) y corta las verduras.",
            "Prepara la salsa teriyaki casera: mezcla salsa de soya, mirin, jengibre rallado y un toque de miel.",
            "En un bowl, coloca una base de arroz integral. Añade el tofu, edamame, zanahoria y pepino en secciones.",
            "Rocía con la salsa teriyaki, espolvorea semillas de sésamo y tiras de alga nori. ¡Disfruta!"
        ],
        mealPrepTips: [
            "El arroz integral se puede cocinar en grandes cantidades y congelar en porciones.",
            "Marinar el tofu la noche anterior intensifica mucho el sabor.",
            "Todos los componentes se mantienen bien separados hasta por 4 días."
        ]
    },
    {
        id: 11,
        title: "Wrap de Pavo y Aguacate",
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80",
        time: "10 mins",
        calories: 360,
        difficulty: "Fácil",
        nutrition: {
            protein: "28g",
            carbs: "32g",
            fat: "14g",
            fiber: "9g"
        },
        ingredients: [
            "1 tortilla integral grande",
            "100g pechuga de pavo rebanada",
            "1/2 aguacate maduro",
            "Hojas de lechuga",
            "Tomate rebanado",
            "Mostaza Dijon",
            "Brotes de alfalfa"
        ],
        instructions: [
            "Calienta ligeramente la tortilla integral en una sartén seca durante 20 segundos por lado.",
            "Coloca la tortilla en una superficie plana. Unta una fina capa de mostaza Dijon en el centro.",
            "Machaca el aguacate con un tenedor y extiéndelo sobre la tortilla, dejando 2cm en los bordes.",
            "Coloca las hojas de lechuga lavadas y secas sobre el aguacate.",
            "Añade las rebanadas de pavo, tomate y brotes de alfalfa.",
            "Para enrollar: dobla los lados izquierdo y derecho hacia el centro, luego enrolla firmemente desde abajo hacia arriba.",
            "Corta el wrap por la mitad en diagonal para una presentación atractiva.",
            "Sirve inmediatamente o envuelve en papel aluminio para llevar."
        ],
        mealPrepTips: [
            "Prepara todos los ingredientes la noche anterior, pero ensambla el wrap por la mañana.",
            "Usa papel pergamino para envolver y mantener la forma del wrap.",
            "Añade hummus o queso bajo en grasa para más sabor y proteína."
        ]
    },
    {
        id: 12,
        title: "Sopa de Lentejas Nutritiva",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
        time: "35 mins",
        calories: 290,
        difficulty: "Fácil",
        nutrition: {
            protein: "18g",
            carbs: "48g",
            fat: "4g",
            fiber: "16g"
        },
        ingredients: [
            "1 taza de lentejas secas",
            "1 cebolla picada",
            "2 zanahorias en cubos",
            "2 tallos de apio picados",
            "3 dientes de ajo picados",
            "4 tazas de caldo de verduras",
            "Comino, cúrcuma, pimentón"
        ],
        instructions: [
            "Enjuaga bien las lentejas bajo agua fría. Elimina cualquier piedrita o residuo.",
            "En una olla grande, calienta aceite de oliva a fuego medio. Añade la cebolla picada y saltea 5 minutos.",
            "Agrega las zanahorias, apio y ajo. Cocina 5 minutos más hasta que estén fragantes.",
            "Añade las especias: 1 cucharadita de comino, 1/2 cucharadita de cúrcuma y pimentón. Mezcla bien.",
            "Incorpora las lentejas y el caldo de verduras. Aumenta el fuego y lleva a ebullición.",
            "Reduce el fuego a bajo, tapa parcialmente y cocina a fuego lento durante 25-30 minutos.",
            "Las lentejas deben estar tiernas pero no deshechas. Añade más caldo si está muy espesa.",
            "Prueba y ajusta sazón. Sirve caliente con cilantro fresco y un chorrito de limón."
        ],
        mealPrepTips: [
            "Esta sopa mejora con el tiempo - sabe mejor al día siguiente.",
            "Se mantiene en el refrigerador hasta 5 días y congela perfectamente.",
            "Sirve con pan integral tostado o sobre arroz integral para una comida completa."
        ]
    },
    {
        id: 13,
        title: "Omelette de Claras con Verduras",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80",
        time: "12 mins",
        calories: 180,
        difficulty: "Fácil",
        nutrition: {
            protein: "24g",
            carbs: "8g",
            fat: "6g",
            fiber: "3g"
        },
        ingredients: [
            "4 claras de huevo",
            "1 huevo entero",
            "1/4 taza de pimientos morrones",
            "1/4 taza de espinacas",
            "1/4 taza de champiñones",
            "1/4 taza de queso bajo en grasa",
            "Sal, pimienta y hierbas"
        ],
        instructions: [
            "Pica finamente todos los vegetales: pimientos, espinacas y champiñones.",
            "En un bowl, bate las 4 claras con 1 huevo entero. Añade sal, pimienta y tus hierbas favoritas.",
            "Calienta una sartén antiadherente a fuego medio. Rocía con spray de cocina.",
            "Saltea los vegetales durante 2-3 minutos hasta que estén tiernos. Retira y reserva.",
            "Vierte la mezcla de huevo en la sartén caliente. Inclina la sartén para distribuir uniformemente.",
            "Cuando los bordes estén cocidos pero el centro aún líquido, añade los vegetales y queso en una mitad.",
            "Con una espátula, dobla la omelette por la mitad cubriendo el relleno.",
            "Cocina 1 minuto más, voltea con cuidado y cocina otro minuto. Sirve inmediatamente."
        ],
        mealPrepTips: [
            "Pica todas las verduras el día anterior para un desayuno super rápido.",
            "Puedes usar cualquier combinación de verduras que tengas a mano.",
            "Las omelettes se pueden guardar en el refrigerador hasta 2 días y recalentar en microondas."
        ]
    },
    {
        id: 14,
        title: "Poke Bowl de Atún",
        image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=800&q=80",
        time: "20 mins",
        calories: 410,
        difficulty: "Media",
        nutrition: {
            protein: "38g",
            carbs: "45g",
            fat: "12g",
            fiber: "8g"
        },
        ingredients: [
            "200g atún fresco grado sushi",
            "1 taza de arroz para sushi cocido",
            "1/2 aguacate rebanado",
            "Edamame, pepino, alga wakame",
            "Salsa de soya, sésamo",
            "Jengibre encurtido",
            "Cebollín picado"
        ],
        instructions: [
            "Cocina el arroz para sushi según instrucciones. Mientras cocina, sazona con vinagre de arroz, sal y azúcar.",
            "Corta el atún fresco en cubos de 2cm. Asegúrate de que sea grado sushi y esté muy fresco.",
            "Marina el atún: mezcla 2 cucharadas de salsa de soya, 1 cucharadita de aceite de sésamo, un poco de jengibre rallado.",
            "Hidrata el alga wakame en agua fría durante 5 minutos. Escurre bien.",
            "Corta el pepino en medias lunas, el aguacate en rebanadas y pica el cebollín finamente.",
            "En un bowl, coloca una base de arroz de sushi. Organiza el atún marinado, aguacate, edamame, pepino y alga en secciones.",
            "Añade jengibre encurtido, espolvorea semillas de sésamo y cebollín.",
            "Sirve con salsa de soya extra y wasabi al lado. ¡Un festín fresco y delicioso!"
        ],
        mealPrepTips: [
            "Compra atún fresco el mismo día que planees prepararlo.",
            "El arroz se puede preparar con anticipación y refrigerar.",
            "Todos los vegetales se pueden picar con un día de anticipación."
        ]
    },
    {
        id: 15,
        title: "Batido Verde Energizante",
        image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=800&q=80",
        time: "5 mins",
        calories: 220,
        difficulty: "Fácil",
        nutrition: {
            protein: "15g",
            carbs: "32g",
            fat: "6g",
            fiber: "8g"
        },
        ingredients: [
            "1 taza de espinaca fresca",
            "1 plátano maduro",
            "1/2 taza de piña congelada",
            "1 scoop de proteína de vainilla",
            "1 taza de leche de coco light",
            "1 cucharada de semillas de linaza",
            "Hielo al gusto"
        ],
        instructions: [
            "Lava bien las hojas de espinaca y sécalas. No te preocupes, ¡no sabrás que están ahí!",
            "Pela el plátano y córtalo en trozos grandes.",
            "En la licuadora, añade primero el líquido (leche de coco) para facilitar el licuado.",
            "Agrega las espinacas, plátano, piña congelada y semillas de linaza.",
            "Añade el scoop de proteína en polvo por último.",
            "Licúa a velocidad baja por 15 segundos, luego a velocidad alta durante 45-60 segundos.",
            "Si está muy espeso, añade más leche. Si prefieres más frío, agrega hielo y licúa de nuevo.",
            "Vierte en un vaso grande y disfruta inmediatamente para máxima frescura y nutrientes."
        ],
        mealPrepTips: [
            "Prepara bolsas de smoothie: coloca todos los ingredientes sólidos en bolsas ziplock y congela.",
            "Por la mañana, solo añade el líquido y licúa.",
            "Puedes sustituir espinaca por col rizada para variar los nutrientes."
        ]
    }
];
