# 🎓 UniGuía UVA - Contexto y Base de Conocimiento

## ✅ **IMPLEMENTACIÓN COMPLETADA**

El chatbot **UniGuía UVA** ha sido configurado con toda la información de la **Universidad del Valle Andino (UVA)** en Bogotá, Colombia.

---

## 📚 **BASE DE CONOCIMIENTO IMPLEMENTADA**

### **1. Información General**

- ✅ Nombre completo: Universidad del Valle Andino (UVA)
- ✅ Ubicación: Bogotá, Colombia
- ✅ Tipo: Universidad privada
- ✅ Campus: Principal + Campus Norte
- ✅ 12,500 estudiantes aproximadamente

### **2. Cafeterías y Comida** ⭐

#### **Cafetería Central (Edificio A, piso 1)**

- Horarios completos (L-V, Sábados)
- Precios en COP (9,000 - 19,000)
- Menú del día: 17,500 COP
- **Opciones vegetarianas/veganas:**
  - Desayuno: Arepa con tofu, Bowl de frutas
  - Almuerzo: Lasaña vegetariana, Bandeja vegana
  - Opciones sin gluten disponibles

#### **Café Express (Edificio C)**

- Horario y ubicación
- Rango de precios (6,000 - 18,000 COP)
- **Opciones vegetarianas:**
  - Wrap vegetariano (12,000 COP)
  - Avena vegana (10,000 COP)

#### **Food Court UVA (Entre edificios D y E)**

- 6 locales diferentes
- **VeggiePoint: Local 100% vegetariano/vegano**
- GreenBowl: Bowls saludables
- Precios detallados por local

### **3. Biblioteca**

- Ubicación: Edificio B, pisos 2-4
- Horarios extendidos en época de exámenes
- Servicios completos:
  - Préstamo de libros (5 libros, 15 días)
  - 32 cubículos individuales
  - 14 salas grupales (reserva en SIGA)
  - 120 computadores
  - Impresión: 300 COP/hoja

### **4. Inscripción de Materias**

- Portal SIGA: https://siga.uva.edu.co
- Próximo período: 15-20 junio 2025
- Proceso paso a paso
- Límite: 18 créditos por semestre
- Soporte técnico: soporteacademico@uva.edu.co

### **5. Becas**

- 4 tipos: Académica, Socioeconómica, Deportiva, Especial
- Montos: 25%, 50%, 75%, 100%
- Beca de manutención: 300,000 COP mensuales
- Convocatoria: 1-20 de mayo
- Contacto: becas@uva.edu.co

### **6. Calendario Académico**

- Inicio: 22 julio 2025
- Fechas de parciales, finales, receso
- 2 semestres por año
- Cursos de verano disponibles

### **7. Carnet Estudiantil**

- Ubicación: Edificio A, Oficina 104
- Costo: 15,000 COP (primera emisión)
- Entrega: 48 horas
- Beneficios completos:
  - UVA Pay
  - Descuentos Cinemark, TransMilenio

### **8. Servicios Estudiantiles**

- Centro de Salud (Edificio C)
- Psicología (gratuito, confidencial)
- Gimnasio y deportes
- Actividades culturales
- Transporte universitario: 3,000 COP

### **9. Servicios Tecnológicos**

- Correo: @uva.edu.co (25 GB)
- WiFi: UVA_WiFi
- Laboratorios: MATLAB, Python, RStudio, AutoCAD

### **10. Edificios**

- A: Administración, Cafetería, Becas
- B: Biblioteca
- C: Aulas, Café Express, Salud
- D: Laboratorios
- E: Deportes
- F: Posgrados

### **11. Contactos**

- Emergencias: 310 555 9988
- Emails oficiales de todas las oficinas
- Números de teléfono directos

### **12. Estudiantes Nuevos**

- Proceso de inducción
- Primeros pasos
- Trámites comunes

---

## 🤖 **CÓMO FUNCIONA LA IA CON ESTE CONTEXTO**

### **Sistema Generativo Puro:**

```
Usuario pregunta sobre opciones vegetarianas
         ↓
Gemini lee TODA la base de conocimiento de la UVA
         ↓
Identifica información relevante:
  - Cafetería Central (opciones vegetarianas)
  - Café Express (opciones vegetarianas)
  - Food Court (VeggiePoint)
         ↓
Genera respuesta personalizada con:
  - Ubicaciones específicas de la UVA
  - Precios en COP
  - Horarios de la UVA
  - Emojis y formato amigable
         ↓
Usuario recibe respuesta única y contextualizada
```

---

## 🎯 **EJEMPLOS DE RESPUESTAS GENERATIVAS**

### **Pregunta: "necesito opciones vegetarianas para desayunar"**

**Respuesta de UniGuía UVA:**

```
¡Hola! Claro que sí, en la UVA tienes varias opciones deliciosas y
vegetarianas para desayunar:

📍 Cafetería Central (Edificio A, piso 1):
  • Arepa con tofu revuelto 🍳 (10,000 COP)
  • Bowl de frutas + yogurt 🍓 (9,000 COP)
  • Empanadas de queso o muffin vegano

📍 Café Express (Edificio C, planta baja):
  • Wrap vegetariano 🌯 (12,000 COP)
  • Avena vegana 🥣 (10,000 COP)

📍 Food Court UVA (Entre edificios D y E):
  • VeggiePoint: 100% vegetariano y vegano
    Desayunos desde 💰 10,000 COP

¿Necesitas ayuda con otra cosa o te gustaría saber sobre opciones
para el almuerzo?
```

**Nota cómo:**

- ✅ Menciona "UVA" (contexto de la universidad)
- ✅ Ubicaciones específicas (Edificio A, C, D, E)
- ✅ Precios en COP (moneda colombiana)
- ✅ Nombres reales (VeggiePoint, Café Express)
- ✅ Pregunta de seguimiento natural

---

## 📝 **CÓMO ACTUALIZAR LA INFORMACIÓN**

### **Opción 1: Actualizar desde el servidor**

1. Abre `server.js`
2. Busca `const KNOWLEDGE_BASE` (línea ~14)
3. Edita la sección que necesites
4. Guarda el archivo
5. Reinicia el servidor:
   ```bash
   pkill -f "node server" && npm start
   ```

### **Ejemplo: Agregar un nuevo local al Food Court**

```javascript
FOOD COURT UVA:
- Locales disponibles:
  ...
  * TacoTime: tacos y burritos (Nuevo!)  ← Agregar aquí
  ...
```

### **Ejemplo: Actualizar precios**

```javascript
CAFETERÍA CENTRAL:
- Precios:
  * Desayuno: 10,000 – 15,000 COP  ← Cambiar aquí
  * Almuerzo: 15,000 – 20,000 COP  ← Cambiar aquí
```

---

## 🧪 **CASOS DE PRUEBA SUGERIDOS**

### **1. Opciones vegetarianas (ya probado)**

```
"necesito opciones vegetarianas para el almuerzo"
"qué tiene VeggiePoint?"
"opciones veganas en la UVA"
```

### **2. Información de becas**

```
"necesito una beca, cómo aplico?"
"requisitos para beca académica"
"cuándo es la convocatoria de becas?"
```

### **3. Inscripción de materias**

```
"cómo me inscribo a materias?"
"cuándo es el período de inscripción?"
"olvidé mi contraseña del SIGA"
```

### **4. Biblioteca**

```
"horario de la biblioteca"
"cómo reservo una sala de estudio?"
"cuántos libros puedo sacar?"
```

### **5. Carnet estudiantil**

```
"dónde saco mi carnet?"
"cuánto cuesta el carnet?"
"qué beneficios tiene el carnet UVA?"
```

### **6. Servicios**

```
"dónde está el gimnasio?"
"hay servicio médico en la universidad?"
"cómo puedo hablar con un psicólogo?"
```

### **7. Orientación general**

```
"soy nuevo, qué debo hacer primero?"
"estoy perdido, ayúdame"
"dónde quedan los edificios?"
```

### **8. Preguntas complejas y naturales**

```
"hola, tengo mucha hambre y soy vegetariano, qué opciones tengo
cerca del edificio C porque tengo clase en 20 minutos"

"necesito sacar el carnet pero no sé dónde queda la oficina ni
qué documentos llevar"
```

---

## 💡 **MÁXIMAS DE GRICE IMPLEMENTADAS**

El chatbot está configurado para seguir automáticamente:

### **1. CANTIDAD**

- Máximo 150 palabras por respuesta
- Da información justa, ni más ni menos
- Ofrece profundizar con preguntas de seguimiento

### **2. CALIDAD**

- Solo usa información verificada de la base de conocimiento
- Admite cuando no sabe algo
- Redirige a oficinas oficiales cuando corresponde

### **3. RELEVANCIA**

- Responde directamente a la pregunta
- No divaga sobre temas no relacionados
- Considera el contexto emocional del estudiante

### **4. MANERA**

- Lenguaje simple y claro
- Estructura con viñetas y números
- Emojis funcionales (📍, ⏰, 💰, 🎓)
- Una idea principal por párrafo

---

## 📊 **ESTADÍSTICAS Y MONITOREO**

### **Ver logs en tiempo real:**

```bash
tail -f /Users/domin/Desktop/Taller/server.log
```

### **Información que verás:**

```
[2025-11-11T02:30:15.123Z] Mensaje del usuario: "opciones vegetarianas"
[2025-11-11T02:30:17.456Z] Respuesta generada (312 chars)
```

---

## 🔄 **MANTENIMIENTO FUTURO**

### **Información que debes actualizar periódicamente:**

**📅 Cada semestre:**

- Fechas de calendario académico
- Períodos de inscripción
- Convocatorias de becas

**💰 Según cambios:**

- Precios de cafeterías
- Costos de servicios
- Montos de becas

**🏢 Según expansión:**

- Nuevos locales en Food Court
- Nuevos servicios
- Nuevos edificios o instalaciones

**📧 Verificar anualmente:**

- Contactos y emails
- Teléfonos de oficinas
- URLs de portales

---

## 🎓 **INTEGRACIÓN CON ChatGPT/Copilot (Comparación)**

### **Lo que hicimos aquí vs ChatGPT Custom GPT:**

| Aspecto             | ChatGPT Custom GPT      | UniGuía UVA (Este proyecto)           |
| ------------------- | ----------------------- | ------------------------------------- |
| **Hosting**         | En servidores de OpenAI | Tu propio servidor                    |
| **Costo**           | $20/mes ChatGPT Plus    | Gratis (hasta 1,500 consultas/día)    |
| **Control**         | Limitado                | Total control del código              |
| **Personalización** | Interface de OpenAI     | Interface completamente tuya          |
| **Datos**           | En servidores externos  | En tu servidor                        |
| **Integración**     | Limitada                | Puedes integrar con cualquier sistema |

### **Estructura similar a ChatGPT:**

**Instructions (Instrucciones):**

- Implementadas en `systemPrompt` (línea ~284 del server.js)
- Define personalidad, tono, y comportamiento

**Knowledge (Conocimiento):**

- Implementado en `KNOWLEDGE_BASE` (línea ~14 del server.js)
- Información verificada de la UVA

**Conversation Starters (Iniciadores):**

- Se generan automáticamente en el mensaje de bienvenida

---

## 🚀 **PRÓXIMOS PASOS SUGERIDOS**

### **1. Expansión del conocimiento:**

- Agregar información de cada facultad específica
- Agregar información de programas académicos
- Agregar procedimientos detallados (paso a paso con imágenes)

### **2. Funcionalidades avanzadas:**

- Integración con calendario académico en tiempo real
- Consulta de horarios personalizados desde SIGA
- Notificaciones de fechas importantes

### **3. Analytics:**

- Registrar preguntas más frecuentes
- Identificar temas que generan más dudas
- Optimizar respuestas según feedback

### **4. Multicanal:**

- Integración con WhatsApp
- Bot para Telegram
- Widget para página web de la UVA

---

## 📞 **SOPORTE Y ACTUALIZACIONES**

Para actualizar o agregar información nueva:

1. Edita `server.js` → `KNOWLEDGE_BASE`
2. Mantén el formato estructurado
3. Reinicia el servidor
4. Prueba con casos reales

**Recuerda:** La IA generará respuestas únicas basadas en la información que le proporciones, así que mantén la base de conocimiento actualizada y precisa.

---

## ✅ **RESUMEN FINAL**

Has creado un asistente conversacional de última generación para la Universidad del Valle Andino que:

- ✅ **100% IA Generativa** con Gemini 2.5 Flash
- ✅ **Información completa y detallada** de la UVA
- ✅ **Menú vegetariano/vegano completo** implementado
- ✅ **Máximas de Grice** aplicadas automáticamente
- ✅ **Contexto de conversación** con memoria
- ✅ **Respuestas únicas** personalizadas para cada estudiante
- ✅ **Gratis** hasta 1,500 consultas diarias
- ✅ **Fácil de mantener** y actualizar

**¡UniGuía UVA está listo para ayudar a tus estudiantes!** 🎓🤖
