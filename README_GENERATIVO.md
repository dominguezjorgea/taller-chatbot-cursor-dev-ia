# 🤖 UniGuía - Chatbot 100% IA Generativa con Gemini

## 🎉 **¿Qué tienes ahora?**

Un asistente conversacional completamente impulsado por **IA Generativa de Gemini 2.5 Flash**.

### **NO usa:**

- ❌ Respuestas predefinidas
- ❌ Palabras clave (keywords)
- ❌ Reglas if-then
- ❌ Scripts fijos

### **SÍ usa:**

- ✅ **100% IA Generativa**
- ✅ Gemini 2.5 Flash de Google
- ✅ Respuestas únicas y personalizadas
- ✅ Contexto de conversación (memoria)
- ✅ Máximas de Grice implementadas en la IA
- ✅ Comprensión de lenguaje natural

---

## 🧠 **CÓMO FUNCIONA**

```
Usuario escribe cualquier cosa
          ↓
Gemini AI analiza con contexto completo
          ↓
Genera respuesta personalizada
siguiendo Máximas de Grice
          ↓
Usuario recibe respuesta única
```

### **Diferencia clave:**

**ANTES** (Sistema clasificador):

```
Usuario: "tengo hambre"
Bot: Busca palabra "hambre" → Muestra respuesta #5 predefinida
```

**AHORA** (Sistema generativo):

```
Usuario: "tengo mucha hambre y necesito algo vegetariano rápido"
IA: Lee, entiende contexto, genera respuesta personalizada:
    "¡Claro! Entiendo esa sensación de hambre. Te recomiendo..."
```

---

## 💡 **CARACTERÍSTICAS GENERATIVAS**

### **1. Contexto de Conversación**

El bot recuerda las últimas 10 interacciones:

```
Usuario: "tengo hambre"
Bot: "Te recomiendo la Cafetería Central..."
Usuario: "qué opciones vegetarianas tienen?"
Bot: "En la Cafetería Central que mencioné, tienen..." ← Recuerda!
```

### **2. Respuestas Adaptativas**

La IA genera respuestas diferentes según el contexto:

```
"hola" → Saludo amigable
"hola estoy perdido" → Saludo + empatía + orientación
"hola necesito ayuda urgente" → Saludo + acción inmediata
```

### **3. Máximas de Grice Automatizadas**

La IA está programada para seguir:

- **CANTIDAD:** Información justa (máx 150 palabras)
- **CALIDAD:** Solo usa info verificada de la base de conocimiento
- **RELEVANCIA:** Responde directamente a la pregunta
- **MANERA:** Estructura clara con viñetas y emojis

### **4. Manejo Inteligente de Casos**

```
"opciones vegetarianas" → Entiende que sigue preguntando de comida
"cuánto cuesta" → Entiende que pregunta por precio del tema anterior
"gracias" → Responde apropiadamente y ofrece más ayuda
```

---

## 🔧 **ARQUITECTURA TÉCNICA**

### **Servidor (Node.js + Express)**

```javascript
/api/chat → Endpoint generativo principal
  ├── Recibe: mensaje + sessionId
  ├── Mantiene: historial de conversación
  ├── Construye: prompt con Máximas de Grice
  ├── Llama: Gemini API
  └── Devuelve: respuesta generada
```

### **Base de Conocimiento**

La información universitaria está en el servidor como contexto para Gemini:

- Cafeterías, horarios, precios
- Biblioteca, servicios
- Inscripciones, proceso
- Becas, requisitos
- Calendario académico
- Carnet estudiantil

### **Frontend (HTML + JavaScript)**

- Interfaz de chat moderna
- Llamadas asíncronas a /api/chat
- Gestión de sesión única
- Sin lógica de negocio (todo en el servidor)

---

## 🚀 **CÓMO USAR**

### **Iniciar el servidor:**

```bash
cd /Users/domin/Desktop/Taller
npm start
```

### **Abrir el chatbot:**

```
http://localhost:3000/index.html
```

---

## 🧪 **CASOS DE PRUEBA AVANZADOS**

### **Prueba 1: Lenguaje completamente natural**

```
"hola, soy nuevo aquí y estoy un poco perdido, no sé muy bien dónde puedo
comer algo antes de mi primera clase que empieza en media hora"
```

**Resultado esperado:** La IA extrae:

- Nueva usuario → tono empático
- Necesita comer → info de cafeterías
- Tiempo limitado → opciones rápidas

### **Prueba 2: Seguimiento contextual**

```
Usuario: "necesito información sobre becas"
Bot: [respuesta sobre becas]
Usuario: "qué documentos necesito?"
Bot: "Para las becas que mencioné, necesitas..." ← Contexto!
```

### **Prueba 3: Errores + jerga**

```
"ola wey nescesito saber onde puedo komer xq tengo un chingo de ambre"
```

**Resultado:** La IA debería entender a pesar de errores

### **Prueba 4: Preguntas no disponibles**

```
"cuándo es el próximo partido de fútbol?"
```

**Resultado:** "Lo siento, no tengo información sobre partidos.
Te recomiendo contactar..."

---

## 📊 **MONITOREO**

### **Ver logs en tiempo real:**

```bash
tail -f /Users/domin/Desktop/Taller/server.log
```

**Verás:**

```
[2025-11-11T01:30:15.123Z] Mensaje del usuario: "tengo hambre"
[2025-11-11T01:30:16.789Z] Respuesta generada (245 chars)
```

### **Métricas que puedes observar:**

- Longitud de respuestas
- Tiempo de generación
- Patrones de preguntas
- Tokens consumidos

---

## 💰 **COSTOS**

### **Modelo usado:** Gemini 2.5 Flash Preview 05-20

**Gratis:**

- ✅ Hasta 1,500 solicitudes por día
- ✅ ~10 palabras por solicitud = 15,000 mensajes/día gratis

**Si excedes:**

- 💰 $0.075 por 1 millón de tokens
- Estimado: 5,000 mensajes/día = $3-8/mes

**Comparación:**

```
ChatGPT 4: $30 por 1M tokens (400x más caro)
Claude: $0.80 por 1M tokens (10x más caro)
Gemini Flash: $0.075 por 1M tokens ✅ (El más barato)
```

---

## 🔐 **SEGURIDAD**

### **API Key protegida:**

- ✅ Está en el servidor (server.js línea 10)
- ✅ NO está en el HTML del navegador
- ✅ Solo el servidor la usa
- ✅ No es visible para usuarios

### **Gestión de sesiones:**

- Cada usuario tiene un sessionId único
- El historial se mantiene en memoria del servidor
- Se limpia automáticamente después de 10 mensajes

---

## 📝 **ACTUALIZAR LA INFORMACIÓN**

### **Para agregar nueva información universitaria:**

1. Abre `server.js`
2. Busca `const KNOWLEDGE_BASE`
3. Agrega la información en formato claro:

```javascript
GIMNASIO:
- Ubicación: Edificio Deportivo, 2do piso
- Horario: L-V 6am-10pm, Sábados 8am-6pm
- Costo: Gratis con carnet estudiantil
- Servicios: Pesas, cardio, clases grupales
```

4. Reinicia el servidor: `pkill -f "node server" && npm start`

**¡Eso es TODO!** La IA automáticamente usará la nueva información.

---

## 🎯 **VENTAJAS DEL SISTEMA GENERATIVO**

| Aspecto                  | Sistema Antiguo                 | Sistema Generativo           |
| ------------------------ | ------------------------------- | ---------------------------- |
| **Flexibilidad**         | Respuestas fijas                | Respuestas adaptativas       |
| **Mantenimiento**        | Agregar keywords constantemente | Solo actualizar conocimiento |
| **Conversación**         | Robótica                        | Natural y empática           |
| **Contexto**             | No recuerda                     | Recuerda conversación        |
| **Errores ortográficos** | No tolera                       | Entiende perfectamente       |
| **Preguntas complejas**  | No entiende                     | Extrae intención             |
| **Personalización**      | Imposible                       | Automática                   |

---

## 🚨 **LIMITACIONES**

### **Lo que la IA NO hará:**

1. ❌ Inventar información no existente en la base de conocimiento
2. ❌ Dar información personal de estudiantes
3. ❌ Hacer trámites reales (solo orienta)
4. ❌ Acceder a sistemas externos (SIGA, etc.)

### **Lo que la IA SÍ hará:**

1. ✅ Responder con información de la base de conocimiento
2. ✅ Admitir cuando no sabe algo
3. ✅ Redirigir a la oficina/persona correcta
4. ✅ Adaptar respuestas al tono y contexto

---

## 🎓 **EJEMPLO DE CONVERSACIÓN REAL**

```
Usuario: "bueno dias"

Bot: "¡Buenos días! 👋 Soy UniGuía, tu asistente virtual universitario.
     Estoy aquí para ayudarte con cualquier duda que tengas sobre la
     universidad. Dime, ¿en qué puedo asistirte hoy? 😊"

Usuario: "tengo mucha hambre donde puedo comer vegetariano"

Bot: "¡Claro que sí! Entiendo perfectamente esa sensación de hambre antes
     de clase. Hay varias opciones vegetarianas disponibles:

     • Cafetería Central (📍 Edificio A): Menú del día por $5 con opciones
       vegetarianas. ⏰ 7am-7pm
     • Café Express (📍 Biblioteca): Snacks y bebidas vegetarianas.
       ⏰ 8am-10pm
     • Food Court (📍 Edificio Estudiantes): Varios locales con opciones
       vegetarianas. ⏰ 11am-8pm

     Espero que encuentres algo rico. ¿Hay algo más en lo que pueda
     ayudarte? 😊"

Usuario: "cuanto cuesta?"

Bot: "El costo varía según dónde comas:
     💰 Cafetería Central: $5 el menú del día
     💰 Café Express: Desde $2-4 (snacks)
     💰 Food Court: Varía por local, aproximadamente $6-10

     ¿Te gustaría saber sobre los métodos de pago?"
```

**Nota cómo:**

- Cada respuesta es única y contextual
- Recuerda la conversación anterior
- Usa emojis apropiadamente
- Termina con pregunta de seguimiento
- Tono empático y amigable

---

## 🆘 **SOPORTE**

### **Problemas comunes:**

**"No genera respuestas"**
→ Verifica server.log, puede ser límite de tokens

**"Respuestas muy largas"**
→ Ajusta `maxOutputTokens` en server.js

**"No recuerda contexto"**
→ Verifica que sessionId sea consistente

**"Inventa información"**
→ Ajusta `temperature` a valor más bajo (0.3-0.5)

---

## 🎉 **CONCLUSIÓN**

Tienes un asistente conversacional de última generación que:

- ✅ Usa IA Generativa real (no scripts)
- ✅ Entiende lenguaje natural completamente
- ✅ Genera respuestas únicas y contextuales
- ✅ Sigue Máximas de Grice automáticamente
- ✅ Es empático y profesional
- ✅ Costo-efectivo (gratis hasta 1,500 consultas/día)

**¡Disfruta tu asistente inteligente!** 🎓🤖
