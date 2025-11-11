// Servidor Node.js para UniGuía con Gemini AI - 100% GENERATIVO
require('dotenv').config();
const express = require('express');
const cors = require('cors');
// Node.js v18+ tiene fetch nativo, no necesitamos node-fetch

const app = express();
const PORT = process.env.PORT || 3000;

// API Key de Gemini (cargada desde variables de entorno)
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Validar que la API Key existe
if (!GEMINI_API_KEY) {
    console.error('❌ ERROR: GEMINI_API_KEY no está configurada');
    console.error('📝 Por favor crea un archivo .env con tu API Key:');
    console.error('   GEMINI_API_KEY=tu_api_key_aqui');
    process.exit(1);
}

const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${GEMINI_API_KEY}`;

// Base de conocimiento de la universidad - Universidad del Valle Andino (UVA)
const KNOWLEDGE_BASE = `
INFORMACIÓN DE LA UNIVERSIDAD DEL VALLE ANDINO (UVA)

===== INFORMACIÓN GENERAL =====
Nombre: Universidad del Valle Andino (UVA)
Ubicación: Bogotá, Colombia
Tipo: Privada, con enfoque profesional, posgrados y educación continua
Campus: Campus principal + Campus Norte (posgrados y educación ejecutiva)
Estudiantes: Aproximadamente 12,500 estudiantes entre pregrado y posgrado
Mapa del campus: https://uva.edu.co/mapa

===== CAFETERÍAS Y OPCIONES DE COMIDA =====

CAFETERÍA CENTRAL:
- Ubicación: Edificio A, piso 1
- Horario: 
  * Lunes a viernes: 6:30 a.m. a 8:00 p.m.
  * Sábados: 7:00 a.m. a 3:00 p.m.
  * Domingos: cerrado
- Precios:
  * Desayuno: 9,000 – 14,000 COP
  * Almuerzo: 14,000 – 19,000 COP
  * Cena: 15,000 – 18,000 COP
  * Menú del día: 17,500 COP
- Métodos de pago: efectivo, tarjeta débito/crédito, carnet UVA Pay
- OPCIONES VEGETARIANAS/VEGANAS:
  * Desayuno: Arepa con tofu revuelto (10,000 COP), Bowl de frutas + yogurt (9,000 COP)
  * Almuerzo: Lasaña vegetariana (17,000 COP), Bandeja vegana con quinoa, vegetales y fríjol (18,000 COP)
  * Snacks: empanadas de queso, muffin vegano
  * Opciones sin gluten: sí, panes especiales disponibles

CAFÉ EXPRESS:
- Ubicación: Edificio C, planta baja
- Horario: Lunes a viernes 7:00 a.m. – 7:00 p.m.
- Comida: café especial, smoothies, wraps, ensaladas, panadería, snacks
- Rango de precios: 6,000 – 18,000 COP
- OPCIONES VEGETARIANAS/VEGANAS:
  * Desayuno: Wrap vegetariano (12,000 COP), Avena vegana (10,000 COP)
  * Snacks: galletas veganas, barras de cereal
  * Opciones sin gluten: sí, limitadas

FOOD COURT UVA:
- Ubicación: Entre edificios D y E
- Horario: Lunes a viernes 10:00 a.m. – 8:00 p.m.
- Locales disponibles:
  * Sazón Andino: corrientazo, menú del día
  * GreenBowl: ensaladas y bowls saludables (Bowls vegetarianos desde 16,000 COP, veganos desde 18,000 COP)
  * PokeWave: poke bowls
  * Pizza 24: pizzas (Pizza vegetariana 15,000 COP)
  * Burguerlab: hamburguesas
  * VeggiePoint: 100% VEGETARIANO Y VEGANO (Desayunos 10,000 COP, Almuerzos 18,000–25,000 COP)
- Rango general de precios: 12,000 – 30,000 COP
- Comida para llevar: disponible en todos los locales

OTRAS OPCIONES:
- Máquinas expendedoras: pasillos edificios B y E
- Catering para eventos: sí, a través de Cafetería Central
- Comida para llevar: sí, en todos los locales

===== BIBLIOTECA UVA =====
- Ubicación: Edificio B, pisos 2–4
- Horario regular:
  * Lunes a viernes: 7:00 a.m. a 9:00 p.m.
  * Sábados: 8:00 a.m. a 4:00 p.m.
  * Domingos: cerrado
  * Época de exámenes: horario extendido hasta 11:00 p.m.
- Servicios:
  * Préstamo de libros: 15 días, máximo 5 libros
  * Salas de estudio individual: 32 cubículos, sin necesidad de reserva
  * Salas de estudio grupal: 14 salas, reserva en portal SIGA
  * Computadores: 120 equipos, límite 2 horas por persona
  * Impresión/escaneo: 300 COP por hoja
  * WiFi: libre con correo institucional
- Requisitos:
  * Carnet obligatorio para entrar
  * Aforo máximo: 450 personas
  * Prohibido: comidas completas, bebidas sin tapa, hacer ruido
- Contacto: biblioteca@uva.edu.co

===== INSCRIPCIÓN DE MATERIAS =====
Portal SIGA:
- URL: https://siga.uva.edu.co
- Activación de usuario: con documento de identidad y código estudiantil
- Contraseña temporal: enviada al correo institucional
- Reset de contraseña: opción "¿Olvidaste tu contraseña?" en el portal

Proceso de inscripción:
- Próximo período: 15–20 de junio 2025
- Pasos:
  1. Ingresar a SIGA
  2. Ir a "Inscripción de materias"
  3. Seleccionar horario
  4. Confirmar selección
  5. Descargar comprobante
- Prerrequisitos: visibles en cada asignatura dentro del portal
- Límite de créditos: 18 créditos por semestre
- Cambios de materias: permitidos hasta la semana 2 del semestre

Soporte técnico:
- Ubicación: Edificio Administrativo, piso 2
- Horario: Lunes a viernes 8:00 a.m. – 5:00 p.m.
- Correo: soporteacademico@uva.edu.co
- Teléfono: (601) 456 7890

===== BECAS Y AYUDA ECONÓMICA =====
Tipos de becas:
- Beca académica: requisito promedio mínimo 4.3
- Beca socioeconómica: revisión SISBÉN y documentos socioeconómicos
- Beca deportiva: para estudiantes de alto rendimiento deportivo
- Beca especial: talentos artísticos o destacados en STEM

Montos:
- Beca completa: cubre 100% matrícula + subsidio para libros
- Beca parcial: 25%, 50%, o 75% de la matrícula
- Beca de manutención: 300,000 COP mensuales

Proceso de solicitud:
- Convocatoria: del 1 al 20 de mayo
- Documentos necesarios: formulario de solicitud, certificados académicos, carta de motivación
- Entrega: Oficina de Becas o portal en línea
- Tiempo de respuesta: 30-45 días
- Renovación: semestre a semestre, según cumplimiento de requisitos

Contacto Oficina de Becas:
- Ubicación: Edificio A, piso 3
- Teléfono: 601 321 4567
- Email: becas@uva.edu.co

===== CALENDARIO ACADÉMICO =====
Fechas importantes:
- Inicio de clases: 22 de julio 2025
- Período de ajustes (agregar/quitar materias): semanas 1-2
- Primer parcial: semana 6
- Segundo parcial: semana 11
- Receso: Semana Santa
- Exámenes finales: semana 16
- Cierre de semestre: semana 17
- Publicación de notas: 7 días después del cierre
- Semestres por año: 2
- Cursos de verano: sí, disponibles en junio-julio

===== CARNET ESTUDIANTIL =====
Trámite:
- Ubicación: Edificio A, Oficina 104
- Documentos necesarios: cédula de ciudadanía, foto 3x4 fondo blanco
- Costo:
  * Primera emisión: 15,000 COP
  * Reposición: 25,000 COP
- Tiempo de entrega: 48 horas
- Horario de atención: Lunes a viernes 8:00 a.m. – 5:00 p.m.

Beneficios del carnet:
- Ingreso a biblioteca, laboratorios, gimnasio
- Descuentos en cafeterías del campus
- Forma de pago UVA Pay (sistema de pago interno)
- Descuentos externos: Cinemark (cines), TransMilenio (transporte público)
- Acceso a transporte universitario

===== SERVICIOS ESTUDIANTILES =====

Centro de Salud:
- Ubicación: Edificio C, piso 1
- Horario: Lunes a viernes 8:00 a.m. – 5:00 p.m.
- Servicios: primeros auxilios, atención de enfermería
- Costo: gratuito

Servicio de Psicología:
- Atención: citas agendadas por portal SIGA
- Servicio: confidencial y profesional
- Costo: gratuito

Deportes:
- Gimnasio: Edificio E
- Instalaciones: canchas múltiples
- Clubes deportivos: fútbol, baloncesto, taekwondo
- Inscripción: costo semestral 30,000 COP

Actividades Culturales:
- Teatro UVA
- Clubes: música, fotografía, debate
- Consultar programación en página web

Transporte:
- Ruta universitaria: UVA Norte – UVA Principal
- Precio por trayecto: 3,000 COP
- Parqueadero: mensualidad 80,000 COP

===== SERVICIOS TECNOLÓGICOS =====
Correo institucional:
- Formato: @uva.edu.co
- Capacidad: 25 GB
- Activación: automática al matricularse

WiFi:
- Nombre de red: UVA_WiFi
- Acceso: con credenciales del correo institucional
- Sin límite de datos

Laboratorios de cómputo:
- Ubicación: Edificio D, pisos 1 y 2
- Horario: Lunes a viernes 7:00 a.m. – 9:00 p.m.
- Software disponible: MATLAB, Python, RStudio, AutoCAD
- Acceso: gratuito con carnet

===== EDIFICIOS Y UBICACIONES =====
Edificio A: Administración, Cafetería Central, Oficina de Becas, Oficina de Carnet
Edificio B: Biblioteca (pisos 2-4)
Edificio C: Aulas, Café Express, Centro de Salud
Edificio D: Laboratorios de cómputo
Edificio E: Instalaciones deportivas, gimnasio
Edificio F: Posgrados y programas ejecutivos

Edificio Administrativo: Oficinas administrativas y soporte académico

===== CONTACTOS IMPORTANTES =====
Emergencias:
- Seguridad del campus: 310 555 9988
- Emergencias médicas: 123

Oficinas administrativas:
- Rectoría: rectoria@uva.edu.co
- Biblioteca: biblioteca@uva.edu.co
- Becas: becas@uva.edu.co
- Soporte académico: soporteacademico@uva.edu.co, Tel: (601) 456 7890

===== INFORMACIÓN PARA ESTUDIANTES NUEVOS =====
Primeros pasos:
- Asistir a inducción obligatoria
- Activar correo institucional
- Recorrer el campus con los mapas oficiales disponibles en: https://uva.edu.co/mapa
- La Oficina de Bienestar Estudiantil te puede acompañar si estás perdido

Trámites comunes:
- Certificados y constancias: Edificio A, Oficina A-210
- Historial académico: disponible en portal SIGA para descarga

===== POLÍTICA DE USO =====
- Toda la información aquí es oficial de la Universidad del Valle Andino (UVA)
- Los precios están en pesos colombianos (COP)
- Las fechas y horarios pueden estar sujetos a cambios; verificar en el portal oficial
- Para información no disponible aquí, dirigir al estudiante a la oficina correspondiente
`;

// Middleware
app.use(cors()); // Permite peticiones desde el navegador
app.use(express.json()); // Para leer JSON en el body
app.use(express.static('.')); // Sirve archivos estáticos (HTML, CSS, JS)

// Store para conversaciones (en producción usar Redis o base de datos)
const conversations = new Map();

// Endpoint para chat generativo con Gemini
app.post('/api/chat', async (req, res) => {
    try {
        const { message, sessionId } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Mensaje requerido' });
        }

        console.log(`[${new Date().toISOString()}] Mensaje del usuario: "${message}"`);

        // Obtener o crear historial de conversación
        const sid = sessionId || 'default';
        if (!conversations.has(sid)) {
            conversations.set(sid, []);
        }
        const history = conversations.get(sid);

        // Construir el prompt con las Máximas de Grice
        const systemPrompt = `Eres UniGuía, el asistente virtual oficial de la Universidad del Valle Andino (UVA) en Bogotá, Colombia. Eres amigable, empático y profesional, diseñado específicamente para ayudar a estudiantes de la UVA.

TU PERSONALIDAD:
- Cercano pero profesional
- Empático y paciente
- Motivador sin ser condescendiente
- Usas lenguaje simple y claro

MÁXIMAS DE GRICE QUE DEBES SEGUIR:

1. CANTIDAD: Da información justa y necesaria, no más, no menos.
   - Responde exactamente lo que preguntan
   - Si la respuesta es larga, usa viñetas o listas
   - Ofrece información adicional solo si es relevante

2. CALIDAD: Solo información verificada.
   - Usa SOLO la información de la base de conocimiento proporcionada
   - Si no sabes algo, dilo claramente
   - Distingue hechos de recomendaciones

3. RELEVANCIA: Mantén el foco en la necesidad del estudiante.
   - Responde directamente a su pregunta
   - No divagues sobre temas no relacionados
   - Considera el contexto emocional

4. MANERA: Sé claro, breve, ordenado.
   - Usa lenguaje simple
   - Estructura con viñetas, números, emojis funcionales
   - Evita jerga técnica sin explicar
   - Una idea principal por párrafo

FORMATO DE RESPUESTA:
- Usa emojis funcionales (📍 ubicación, ⏰ horario, 💰 dinero, etc.)
- Estructura con viñetas o números
- Máximo 150 palabras por respuesta
- Termina con una pregunta de seguimiento si es apropiado

${KNOWLEDGE_BASE}

IMPORTANTE: 
- Usa SOLO la información de arriba
- Si preguntan algo que no está en la base de conocimiento, di que no tienes esa información y sugiere contactar a la oficina correspondiente
- Sé empático con estudiantes nuevos o confundidos
`;

        // Construir el historial para el contexto
        const conversationHistory = history.map(msg => ({
            role: msg.role,
            parts: [{ text: msg.content }]
        }));

        // Agregar el mensaje actual
        conversationHistory.push({
            role: 'user',
            parts: [{ text: message }]
        });

        // Llamar a Gemini API con historial
        const response = await fetch(GEMINI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: conversationHistory,
                systemInstruction: {
                    parts: [{ text: systemPrompt }]
                },
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 2000,
                    topP: 0.95,
                    topK: 40
                }
            })
        });

        if (!response.ok) {
            const errorData = await response.text();
            console.error('Error de Gemini API:', errorData);
            throw new Error(`Error de Gemini API: ${response.status}`);
        }

        const data = await response.json();
        
        // Validar respuesta
        if (!data.candidates || !data.candidates[0] || !data.candidates[0].content || !data.candidates[0].content.parts) {
            console.error('Formato de respuesta inválido:', data);
            throw new Error('Respuesta de Gemini sin contenido válido');
        }

        const aiResponse = data.candidates[0].content.parts[0].text.trim();
        
        console.log(`[${new Date().toISOString()}] Respuesta generada (${aiResponse.length} chars)`);

        // Guardar en historial
        history.push({ role: 'user', content: message });
        history.push({ role: 'model', content: aiResponse });
        
        // Limitar historial a últimos 10 mensajes
        if (history.length > 10) {
            history.splice(0, history.length - 10);
        }

        res.json({ 
            response: aiResponse,
            success: true,
            sessionId: sid
        });

    } catch (error) {
        console.error('Error al clasificar mensaje:', error);
        res.status(500).json({ 
            error: 'Error al procesar el mensaje',
            category: 'error',
            success: false 
        });
    }
});

// Endpoint de salud (para verificar que el servidor funciona)
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        message: 'Servidor UniGuía funcionando',
        timestamp: new Date().toISOString()
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log('\n🎓 ========================================');
    console.log('   UniGuía - Servidor con Gemini AI');
    console.log('========================================');
    console.log(`✅ Servidor corriendo en: http://localhost:${PORT}`);
    console.log(`✅ API disponible en: http://localhost:${PORT}/api/classify`);
    console.log(`✅ Chatbot disponible en: http://localhost:${PORT}/index.html`);
    console.log('========================================\n');
    console.log('📊 Logs de peticiones:\n');
});

