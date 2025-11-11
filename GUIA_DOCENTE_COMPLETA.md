# 👨‍🏫 Guía Docente: Construyendo un Asistente de IA con Cursor

## 📋 **RESUMEN EJECUTIVO**

Esta guía documenta una actividad pedagógica donde los estudiantes aprenden a construir un asistente conversacional de IA generativa desde cero usando **Cursor AI** como herramienta de desarrollo.

**Duración estimada:** 2-3 horas  
**Nivel:** Principiante (no requiere conocimientos de programación)  
**Resultado:** Chatbot funcional con IA real (Google Gemini)  
**Tecnologías:** HTML, CSS, JavaScript, Node.js, Express, Google Gemini API

---

## 🎯 **OBJETIVOS DE APRENDIZAJE**

Al finalizar esta actividad, los estudiantes serán capaces de:

1. ✅ Utilizar herramientas de IA (Cursor) para generar código
2. ✅ Comprender los conceptos básicos de un chatbot conversacional
3. ✅ Aplicar principios de comunicación efectiva (Máximas de Grice)
4. ✅ Integrar servicios de IA externos (Google Gemini API)
5. ✅ Entender la arquitectura cliente-servidor básica
6. ✅ Crear y mantener una base de conocimiento
7. ✅ Probar y validar una aplicación de IA

---

## 🛠️ **REQUISITOS PREVIOS**

### Para el Profesor:

- [ ] Cuenta en Google AI Studio (https://aistudio.google.com/)
- [ ] Cursor AI instalado (https://cursor.sh/)
- [ ] Node.js instalado (https://nodejs.org/)
- [ ] Conocimientos básicos de terminal/línea de comandos

### Para los Estudiantes:

- [ ] Cursor AI instalado
- [ ] Disposición para experimentar
- [ ] No se requiere conocimiento de programación

---

## 📚 **ESTRUCTURA DE LA ACTIVIDAD**

La actividad se divide en **7 fases progresivas**:

```
FASE 1: Chatbot Básico
   ↓
FASE 2: Diseño Conversacional
   ↓
FASE 3: Primeras Pruebas
   ↓
FASE 4: Entendimiento del Sistema
   ↓
FASE 5: Integración de IA Real
   ↓
FASE 6: IA Generativa 100%
   ↓
FASE 7: Implementación Completa
```

---

## 🚀 **FASE 1: CHATBOT BÁSICO ESTÁTICO**

### **Objetivo:**

Crear la interfaz visual del chatbot con respuestas predefinidas.

### **Prompt para Cursor:**

```
Crear un archivo index.html con un chatbot básico en pantalla.
```

### **Qué se construye:**

- ✅ Interfaz HTML con área de mensajes
- ✅ Campo de entrada de texto
- ✅ Estilos CSS modernos
- ✅ JavaScript con respuestas predefinidas básicas
- ✅ Sistema de keywords simple

### **Resultado esperado:**

Un chatbot funcional que responde a saludos básicos como "hola", "buenos días", "ayuda".

### **📝 Nota pedagógica:**

En esta fase, los estudiantes aprenden que Cursor puede generar código completo desde una instrucción simple. Enfatice que no necesitan entender todo el código aún.

### **Tiempo estimado:** 5-10 minutos

---

## 🎭 **FASE 2: DISEÑO CONVERSACIONAL CON MÁXIMAS DE GRICE**

### **Objetivo:**

Diseñar la personalidad y estilo del chatbot usando principios de comunicación efectiva.

### **Prompt para Cursor:**

```
Quiero diseñar un asistente conversacional para orientar a nuevos estudiantes
universitarios. Ayúdame a definir su personalidad, tono y estilo de
comunicación según las máximas de Grice.
```

### **Qué se construye:**

- ✅ Documento con la personalidad definida
- ✅ Aplicación de las 4 máximas de Grice:
  - **Cantidad:** información justa, ni más ni menos
  - **Calidad:** información verificada y verdadera
  - **Relevancia:** respuestas directas a la pregunta
  - **Manera:** comunicación clara y ordenada
- ✅ Actualización del código con respuestas más elaboradas
- ✅ Sistema de "quick options" (opciones rápidas)

### **Resultado esperado:**

El chatbot ahora tiene:

- Respuestas más completas y estructuradas
- Tono empático y profesional
- Opciones rápidas para explorar temas
- Base de conocimiento universitaria básica

### **📝 Nota pedagógica:**

Esta es una fase crítica donde se conecta la teoría de comunicación con la práctica. Discuta con los estudiantes cómo cada máxima se refleja en las respuestas del bot.

### **Conceptos clave a discutir:**

- ¿Por qué es importante limitar la longitud de las respuestas?
- ¿Cómo se logra ser relevante sin ser robótico?
- ¿Qué es mejor: respuesta corta con opción de profundizar, o respuesta larga de entrada?

### **Tiempo estimado:** 20-30 minutos

---

## 🧪 **FASE 3: PRIMERAS PRUEBAS**

### **Objetivo:**

Ejecutar y probar el chatbot por primera vez.

### **Prompt para Cursor:**

```
¿Cómo puedo probarlo?
```

### **Qué se construye:**

- ✅ Instrucciones para abrir el archivo HTML en el navegador
- ✅ Primera interacción con el chatbot

### **Resultado esperado:**

El estudiante abre `index.html` en su navegador y puede conversar con el bot.

### **📝 Nota pedagógica:**

Permita que los estudiantes experimenten libremente. Pídales que intenten "romper" el bot con preguntas inesperadas.

### **Actividad sugerida:**

Divida la clase en grupos y pida que cada grupo pruebe:

1. Saludos diferentes
2. Preguntas sobre la universidad
3. Errores ortográficos
4. Preguntas fuera de contexto

### **Tiempo estimado:** 10-15 minutos

---

## 🔍 **FASE 4: ENTENDIMIENTO DEL SISTEMA (CAJA NEGRA → CAJA BLANCA)**

### **Objetivo:**

Comprender cómo funciona el chatbot internamente, sin tecnicismos.

### **Prompts para Cursor:**

#### **4.1. Explicación no técnica**

```
Explícame cómo hiciste que respondiera esa información. ¿De qué fuentes
te basas para responderle al usuario? No me des respuestas técnicas
porque yo soy un administrador de empresas, no soy un desarrollador.
```

#### **4.2. Mostrar el código de la base de conocimiento**

```
Muéstrame en el código dónde está ese archivo de conocimiento.
```

#### **4.3. Diagrama visual**

```
No entiendo código. ¿Me das un diagrama en un formato más amigable para mí?
```

### **Qué se construye:**

- ✅ Explicación en lenguaje natural del funcionamiento
- ✅ Identificación del objeto `knowledgeBase` en JavaScript
- ✅ Diagrama de flujo del proceso de respuesta
- ✅ Comprensión de keywords vs respuestas

### **Resultado esperado:**

Los estudiantes entienden que:

- El bot no "piensa", solo busca coincidencias de palabras
- Hay un "diccionario" interno con preguntas y respuestas predefinidas
- El sistema es limitado y depende de palabras clave exactas

### **📝 Nota pedagógica:**

Este es un momento crucial para desmitificar la "inteligencia" artificial. Use analogías:

- "Es como un libro de preguntas frecuentes (FAQ) automatizado"
- "Si la pregunta no está en el índice, no la encuentra"

### **Actividad sugerida:**

Pida a los estudiantes que intenten hacer preguntas que el bot NO pueda responder. Luego discuta por qué falló.

### **Ejemplo de prueba:**

```
Estudiante escribe: "bueno dias" (con error ortográfico)
Bot responde: "No entiendo tu pregunta"
```

### **Pregunta de reflexión:**

"¿Por qué el bot no entendió 'bueno dias' si es casi igual a 'buenos días'?"

### **Tiempo estimado:** 20-30 minutos

---

## 💡 **FASE 5: INTEGRACIÓN DE IA REAL (GOOGLE GEMINI)**

### **Objetivo:**

Evolucionar de un sistema de keywords a IA generativa real.

### **5.1. Identificación del problema**

#### **Prompt para Cursor:**

```
Imagínate que no me entendió en este caso. Tengo una idea: ¿por qué
en lugar de definir muchas palabras para poder entender la solicitud
del usuario, no usamos la IA?
```

### **Qué se construye:**

- ✅ Propuesta de integración con servicios de IA
- ✅ Explicación de las opciones disponibles (OpenAI, Gemini, etc.)

---

### **5.2. Investigación de Gemini**

#### **Prompt para Cursor:**

```
He escuchado que Gemini tiene una capa gratuita generosa. ¿Es verdad?
```

### **Resultado esperado:**

Cursor explica:

- ✅ Límites gratuitos de Gemini (1,500 consultas/día)
- ✅ Ventajas sobre otras APIs
- ✅ Proceso de obtención de API Key

---

### **5.3. Obtención de API Key**

#### **Prompt para Cursor:**

```
Yo no sé nada de códigos ni programación. Entonces necesito que me
indiques paso a paso cómo integrar Gemini para que la IA responda
al usuario.
```

### **Qué se construye:**

- ✅ Instrucciones detalladas para crear cuenta en Google AI Studio
- ✅ Proceso de generación de API Key
- ✅ Advertencias de seguridad

### **📝 ACTIVIDAD PRÁCTICA: Obtener API Key**

**Guíe a los estudiantes:**

1. Ir a: https://aistudio.google.com/
2. Iniciar sesión con cuenta de Google
3. Click en "Get API Key"
4. Click en "Create API Key"
5. Copiar la clave generada

**Tiempo estimado:** 10 minutos

---

### **5.4. Comunicar la API Key a Cursor**

#### **Prompt para Cursor:**

```
Ya tengo la API key y es esta: [TU_API_KEY_AQUÍ]
```

### **⚠️ IMPORTANTE PARA EL PROFESOR:**

**NO USES TU PROPIA API KEY EN LA DEMOSTRACIÓN.** Cada estudiante debe obtener la suya.

Si necesitas demostrar, usa una API Key de prueba y elimínala después.

---

### **5.5. Primera implementación (fallida por CORS)**

#### **Prompt para Cursor:**

```
No me funcionó, me defraudaste.
```

### **Qué se construye:**

- ✅ Primera versión con llamada directa desde el navegador
- ❌ Falla por política CORS del navegador

### **📝 Nota pedagógica:**

Este error es **intencional y educativo**. Explique:

- "El navegador no permite llamadas directas a APIs externas por seguridad"
- "Es como enviar una carta: necesitas un cartero (servidor) intermediario"

---

### **5.6. Solución definitiva: Servidor Node.js**

#### **Prompts para Cursor:**

```
Directamente implementa la solución.
```

Cuando Cursor sugiera usar keywords mejorados:

```
No quiero usar variaciones de palabras. Quiero que la IA entienda
la entrada del usuario. Si necesitas un servidor, pues impleméntalo.
Usa la tecnología que requieras.
```

### **Qué se construye:**

- ✅ Archivo `server.js` (servidor Node.js con Express)
- ✅ Archivo `package.json` (dependencias)
- ✅ Archivo `.gitignore` (seguridad)
- ✅ Archivo `INSTRUCCIONES.md` (documentación)
- ✅ Actualización de `index.html` para usar el servidor

### **Arquitectura resultante:**

```
┌──────────────┐          ┌──────────────┐          ┌──────────────┐
│   Navegador  │          │   Servidor   │          │   Gemini AI  │
│ (index.html) │ ────────▶│  (server.js) │ ────────▶│   (Google)   │
│              │          │              │          │              │
│              │ ◀──────── │              │ ◀──────── │              │
└──────────────┘          └──────────────┘          └──────────────┘
   Usuario escribe           Servidor proxy          IA genera
   "hola"                    + API Key segura        respuesta
```

### **📝 Nota pedagógica:**

Explique la arquitectura cliente-servidor con analogías:

- **Cliente (navegador):** "La cafetería donde el cliente pide"
- **Servidor:** "El mesero que toma la orden y va a la cocina"
- **Gemini API:** "La cocina que prepara la comida (respuesta)"

---

### **5.7. Instalación de dependencias**

#### **Instrucción para terminal:**

```bash
cd /ruta/a/tu/proyecto
npm install
```

### **Qué hace este comando:**

- Instala `express` (framework para el servidor)
- Instala `cors` (manejo de permisos entre navegador y servidor)
- Instala `nodemon` (reinicio automático del servidor)

---

### **5.8. Solución de errores de API**

Durante las primeras ejecuciones, es probable encontrar errores:

#### **Error 1: "modelo no encontrado"**

```
Error: modelo gemini-1.5-flash no está disponible
```

**Solución:** Cursor ajusta automáticamente al modelo correcto.

#### **Error 2: "Cannot read properties of undefined"**

```
TypeError: Cannot read properties of undefined (reading '0')
```

**Solución:** Ajuste de parámetros:

- Aumentar `maxOutputTokens` de 20 → 500
- Mejorar validación de respuesta de Gemini

#### **Prompts para solucionar:**

```
Recargué nuevamente y sigue el problema. Soluciona el error.
```

### **📝 Nota pedagógica:**

Los errores son parte del aprendizaje. Enfatice:

- "Todos los desarrolladores enfrentan errores, incluso las IA"
- "Debugging es una habilidad crítica"
- "Cursor puede ayudarnos a solucionar errores si los reportamos"

### **Tiempo estimado para Fase 5:** 45-60 minutos

---

## 🧪 **FASE 6: VALIDACIÓN DE IA**

### **Objetivo:**

Confirmar que el chatbot usa IA real y no keywords.

### **Prompt para Cursor:**

```
Funcionó. Ahora ayúdame a generar unas entradas de usuario para
validar que efectivamente ya está usando la IA.
```

### **Qué se construye:**

- ✅ Lista de casos de prueba variados
- ✅ Ejemplos con errores ortográficos
- ✅ Ejemplos con lenguaje natural complejo

### **Casos de prueba sugeridos:**

```
1. "ola como estas" (con errores)
2. "quiero comer algo vegetariano cerca del edificio C"
3. "necesito beca pero no se como aplicar"
4. "estoy perdido y confundido ayudame"
```

### **Resultado esperado:**

La IA responde correctamente a **todas** las variaciones, incluyendo errores ortográficos.

### **📝 Nota pedagógica:**

Compare con el sistema de keywords anterior:

- **Antes:** "bueno dias" → No entendido
- **Ahora:** "bueno dias" → "¡Buenos días! ¿En qué puedo ayudarte?"

### **Tiempo estimado:** 15-20 minutos

---

## 🚀 **FASE 7: IMPLEMENTACIÓN COMPLETA CON BASE DE CONOCIMIENTO**

### **Objetivo:**

Convertir el chatbot en un asistente especializado con información real de la universidad.

### **7.1. Solicitud de mejora total**

#### **Prompt para Cursor:**

```
Quiero un bot más inteligente. Nada de definir opciones por keywords.
Necesito hacer una aplicación de IA generativa que base su funcionamiento
en su totalidad con el modelo de IA que ya le dimos.
```

### **Qué se construye:**

- ✅ Eliminación completa del sistema de keywords
- ✅ Sistema 100% generativo
- ✅ Memoria conversacional (contexto)
- ✅ Base de conocimiento en el servidor

---

### **7.2. Adición de información real**

#### **Prompt para Cursor:**

```
[PEGAR TODA LA INFORMACIÓN DE LA UNIVERSIDAD]

Esta es toda la información para crear un contexto fijo para el
asistente universitario. Agrégala al contexto para que responda
a este tipo de preguntas.
```

### **⚠️ IMPORTANTE: Preparación de la información**

Antes de esta fase, el profesor debe preparar un documento con:

1. **Información general de la universidad**

   - Nombre, ubicación, tipo
   - Número de estudiantes
   - Campus y edificios

2. **Cafeterías y opciones de comida**

   - Ubicaciones y horarios
   - Precios en moneda local
   - **Opciones vegetarianas/veganas** (detalladas)
   - Métodos de pago

3. **Biblioteca**

   - Horarios y ubicación
   - Servicios disponibles
   - Reglas y requisitos

4. **Inscripción de materias**

   - Portal o sistema
   - Fechas importantes
   - Proceso paso a paso

5. **Becas y ayuda económica**

   - Tipos de becas
   - Requisitos
   - Proceso de aplicación
   - Contactos

6. **Calendario académico**

   - Inicio y fin de semestre
   - Fechas de parciales y finales
   - Períodos de inscripción

7. **Carnet estudiantil**

   - Cómo obtenerlo
   - Costos
   - Beneficios

8. **Servicios estudiantiles**

   - Salud, psicología, deportes
   - Cultura y recreación
   - Transporte

9. **Servicios tecnológicos**

   - Correo institucional
   - WiFi y laboratorios
   - Software disponible

10. **Contactos importantes**
    - Teléfonos de emergencia
    - Emails de oficinas
    - Directorio completo

### **Formato recomendado:**

```markdown
# INFORMACIÓN DE LA UNIVERSIDAD [NOMBRE]

## 1. INFORMACIÓN GENERAL

- Nombre: Universidad Ejemplo
- Ubicación: Ciudad, País
- Tipo: Pública/Privada
- Estudiantes: X,XXX
  ...

## 2. CAFETERÍAS Y COMIDA

### Cafetería Central

- Ubicación: Edificio A, piso 1
- Horario: L-V 7:00 a.m. - 8:00 p.m.
- Precios:
  - Desayuno: $X,XXX - $X,XXX
  - Almuerzo: $X,XXX - $X,XXX
- **Opciones vegetarianas:**
  - Desayuno: [lista detallada]
  - Almuerzo: [lista detallada]
  - Cena: [lista detallada]
    ...
```

### **📝 Nota pedagógica:**

Esta fase es donde el chatbot se vuelve **realmente útil**. Enfatice:

- "Ya no es un demo, es una herramienta real para estudiantes"
- "La calidad de las respuestas depende de la calidad de la información"
- "Mientras más detallada sea la información, mejores respuestas"

---

### **7.3. Resultado final**

#### **Sistema completo:**

```
┌─────────────────────────────────────────────────────────────┐
│                    UNIGUÍA - ARQUITECTURA                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [NAVEGADOR]                                                │
│     ↓ Usuario escribe: "opciones vegetarianas"             │
│     ↓                                                       │
│  [SERVIDOR NODE.JS]                                         │
│     ↓ Recibe mensaje + sessionId                           │
│     ↓ Construye prompt con:                                │
│     │  • Personalidad (Máximas de Grice)                   │
│     │  • Base de conocimiento completa                     │
│     │  • Historial de conversación                         │
│     ↓                                                       │
│  [GEMINI API]                                               │
│     ↓ Procesa con IA generativa                            │
│     ↓ Genera respuesta única y contextualizada             │
│     ↓                                                       │
│  [SERVIDOR]                                                 │
│     ↓ Guarda en historial                                  │
│     ↓ Retorna respuesta                                    │
│     ↓                                                       │
│  [NAVEGADOR]                                                │
│     ↓ Muestra respuesta formateada                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### **Características finales:**

✅ **IA Generativa 100%:** Cada respuesta es única y contextual  
✅ **Memoria conversacional:** Recuerda el contexto de la conversación  
✅ **Base de conocimiento completa:** Información real de la universidad  
✅ **Máximas de Grice:** Comunicación efectiva automática  
✅ **Manejo de errores ortográficos:** Entiende lenguaje natural  
✅ **Respuestas personalizadas:** Adapta tono según la situación  
✅ **Multilingüe:** Puede responder en varios idiomas (si se configura)  
✅ **Escalable:** Fácil agregar más información

### **Tiempo estimado para Fase 7:** 30-45 minutos

---

## 📊 **FASE 8: PRUEBAS Y VALIDACIÓN**

### **Objetivo:**

Probar exhaustivamente el chatbot y documentar casos de prueba.

### **Prompts para Cursor:**

```
Dame alternativas para probar.
```

### **Qué se construye:**

- ✅ Lista exhaustiva de casos de prueba
- ✅ Categorías de preguntas
- ✅ Casos complejos en lenguaje natural

### **Actividad en clase:**

#### **Opción 1: Competencia de grupos**

Divida la clase en 4 grupos:

- **Grupo 1: Testers optimistas**

  - Intentan hacer preguntas que el bot PUEDA responder
  - Ganan 1 punto por cada respuesta correcta

- **Grupo 2: Testers escépticos**

  - Intentan "romper" el bot con preguntas raras
  - Ganan 1 punto por cada error que encuentren

- **Grupo 3: Testers ortográficos**

  - Solo hacen preguntas con errores ortográficos
  - Evalúan si el bot sigue entendiendo

- **Grupo 4: Testers conversacionales**
  - Mantienen conversaciones largas (5+ mensajes)
  - Evalúan si el bot mantiene contexto

#### **Opción 2: Matriz de validación**

```
┌──────────────────────┬─────────┬─────────┬─────────┐
│ Categoría            │ Probado │ Exitoso │ Fallido │
├──────────────────────┼─────────┼─────────┼─────────┤
│ Saludos              │   □     │   □     │   □     │
│ Comida vegetariana   │   □     │   □     │   □     │
│ Biblioteca           │   □     │   □     │   □     │
│ Inscripción          │   □     │   □     │   □     │
│ Becas                │   □     │   □     │   □     │
│ Carnet               │   □     │   □     │   □     │
│ Servicios            │   □     │   □     │   □     │
│ Ubicaciones          │   □     │   □     │   □     │
│ Preguntas complejas  │   □     │   □     │   □     │
│ Errores ortográficos │   □     │   □     │   □     │
└──────────────────────┴─────────┴─────────┴─────────┘
```

### **📝 Casos de prueba prioritarios:**

#### **1. Prueba de opciones vegetarianas (caso original):**

```
"tengo mucha hambre y soy vegetariano, quiero algo rico para
desayunar que no sea muy caro, qué me recomiendas cerca del
edificio C porque ahí tengo clase en 15 minutos"
```

**Respuesta esperada debe incluir:**

- ✅ Opciones vegetarianas específicas
- ✅ Precios
- ✅ Ubicaciones cercanas al Edificio C
- ✅ Opciones rápidas
- ✅ Tono empático

#### **2. Prueba de contexto conversacional:**

```
Mensaje 1: "necesito información sobre becas"
Mensaje 2: "qué documentos necesito?"
Mensaje 3: "cuándo es la convocatoria?"
```

**Respuesta esperada:**

- ✅ En mensaje 2 y 3, debe recordar que hablas de becas
- ✅ No debe preguntar de qué tema hablas

#### **3. Prueba de límites:**

```
"cuál es mi promedio académico?"
```

**Respuesta esperada:**

- ✅ Admite que no tiene acceso a esa información
- ✅ Redirige a oficina de registro o portal SIGA
- ✅ Mantiene tono empático

### **Tiempo estimado:** 30-45 minutos

---

## 📚 **LISTADO COMPLETO DE PROMPTS (DEPURADO)**

Aquí está el listado exacto que puedes dar a otros profesores:

### **🔷 FASE 1: Creación básica**

```
Crear un archivo index.html con un chatbot básico en pantalla.
```

---

### **🔷 FASE 2: Diseño conversacional**

```
Quiero diseñar un asistente conversacional para orientar a nuevos
estudiantes universitarios. Ayúdame a definir su personalidad, tono
y estilo de comunicación según las máximas de Grice.
```

---

### **🔷 FASE 3: Primera prueba**

```
¿Cómo puedo probarlo?
```

---

### **🔷 FASE 4: Comprensión del sistema**

```
Explícame cómo hiciste que respondiera esa información. ¿De qué fuentes
te basas para responderle al usuario? No me des respuestas técnicas
porque yo soy un administrador de empresas, no soy un desarrollador.
```

```
Muéstrame en el código dónde está ese archivo de conocimiento.
```

```
No entiendo código. ¿Me das un diagrama en un formato más amigable para mí?
```

```
Imagínate que no me entendió en este caso.
```

---

### **🔷 FASE 5: Integración de IA**

```
Tengo una idea: ¿por qué en lugar de definir muchas palabras para poder
entender la solicitud del usuario, no usamos la IA?
```

```
He escuchado que Gemini tiene una capa gratuita generosa. ¿Es verdad?
```

```
Yo no sé nada de códigos ni programación. Entonces necesito que me indiques
paso a paso cómo integrar Gemini para que la IA responda al usuario.
```

```
Ya estoy en https://aistudio.google.com/ y tengo esta pantalla.
```

```
Ya tengo la API key y es esta: [TU_API_KEY_AQUÍ]
```

```
No me funcionó, me defraudaste.
```

```
Directamente implementa la solución.
```

```
Si yo agrego la IA de Google, ¿no necesitaría un servidor?
```

```
No quiero usar variaciones de palabras. Quiero que la IA entienda la
entrada del usuario. Si necesitas un servidor, pues impleméntalo.
Usa la tecnología que requieras.
```

```
Obtuve este error: [PEGAR ERROR]
```

```
Recargué nuevamente y sigue el problema. Soluciona el error.
```

---

### **🔷 FASE 6: Validación**

```
Funcionó. Ahora ayúdame a generar unas entradas de usuario para validar
que efectivamente ya está usando la IA.
```

---

### **🔷 FASE 7: IA Generativa 100%**

```
Quiero un bot más inteligente. Nada de definir opciones por keywords.
Necesito hacer una aplicación de IA generativa que base su funcionamiento
en su totalidad con el modelo de IA que ya le dimos.
```

```
[PEGAR TODA LA INFORMACIÓN DE LA UNIVERSIDAD]

Esta es toda la información para crear un contexto fijo para el asistente
universitario. Incluyendo el menú vegetariano. Agrégala al contexto para
que responda a este tipo de preguntas.
```

---

### **🔷 FASE 8: Pruebas**

```
Dame alternativas para probar.
```

```
Dame el comando para ejecutar la aplicación.
```

---

## 🎓 **CONCEPTOS PEDAGÓGICOS CLAVE**

### **1. Pensamiento Computacional**

Aunque los estudiantes no escriben código, desarrollan:

- **Descomposición:** Dividir el problema en partes pequeñas
- **Reconocimiento de patrones:** Ver similitudes entre problemas
- **Abstracción:** Enfocarse en lo importante
- **Algoritmos:** Secuencia de pasos para resolver problemas

### **2. Interacción Humano-IA**

Los estudiantes aprenden:

- Cómo comunicarse efectivamente con IA (prompting)
- Limitaciones y capacidades de las IA actuales
- Diferencia entre sistemas basados en reglas vs IA generativa
- Importancia de la validación y pruebas

### **3. Diseño Conversacional**

Aplicación práctica de:

- Máximas de Grice
- Experiencia de usuario (UX)
- Diseño centrado en el usuario
- Empatía y comunicación efectiva

### **4. Arquitectura de Sistemas**

Comprensión básica de:

- Cliente-servidor
- APIs y servicios web
- Seguridad (API keys)
- Flujo de datos

---

## 📋 **CHECKLIST PARA EL PROFESOR**

### **Antes de la clase:**

- [ ] Instalar Cursor en tu computadora
- [ ] Instalar Node.js
- [ ] Crear cuenta en Google AI Studio
- [ ] Obtener API Key de prueba (para demostración)
- [ ] Preparar documento con información de tu universidad
- [ ] Probar toda la secuencia de prompts una vez
- [ ] Preparar proyector/pantalla compartida

### **Durante la clase:**

- [ ] Explicar objetivo y resultado esperado
- [ ] Demostrar primer prompt en vivo
- [ ] Permitir que estudiantes experimenten después de cada fase
- [ ] Resolver dudas y errores en grupo
- [ ] Documentar errores comunes que surjan
- [ ] Tomar notas de preguntas frecuentes

### **Después de la clase:**

- [ ] Recopilar feedback de estudiantes
- [ ] Documentar modificaciones necesarias
- [ ] Compartir recursos adicionales
- [ ] Proporcionar guía de mantenimiento del chatbot

---

## ⚠️ **ERRORES COMUNES Y SOLUCIONES**

### **Error 1: "npm: command not found"**

**Causa:** Node.js no está instalado  
**Solución:**

```bash
# Instalar desde: https://nodejs.org/
# O usar Homebrew (macOS):
brew install node
```

---

### **Error 2: "address already in use :::3000"**

**Causa:** El servidor ya está corriendo  
**Solución:**

```bash
# Detener el proceso anterior:
pkill -f "node server.js"

# O cambiar el puerto en server.js:
const PORT = 3001; // En lugar de 3000
```

---

### **Error 3: "API key invalid"**

**Causa:** API key incorrecta o expirada  
**Solución:**

- Verificar que la API key se copió completa
- Generar nueva API key en Google AI Studio
- Actualizar en `server.js`

---

### **Error 4: "Cannot read properties of undefined"**

**Causa:** Gemini devuelve respuesta inesperada  
**Solución:**

```javascript
// Aumentar maxOutputTokens en server.js:
maxOutputTokens: 500; // En lugar de 20
```

---

### **Error 5: El bot no responde o demora mucho**

**Causa:** Problema de conexión o límite de API alcanzado  
**Solución:**

- Verificar conexión a internet
- Revisar límites en Google AI Studio
- Ver logs del servidor:

```bash
tail -f server.log
```

---

### **Error 6: CORS policy error**

**Causa:** Llamada directa a Gemini desde navegador  
**Solución:** Usar el servidor Node.js (fase 5.6)

---

## 🎯 **MÉTRICAS DE ÉXITO**

Al final de la actividad, evalúe:

### **Técnicas:**

- [ ] ¿El chatbot funciona correctamente?
- [ ] ¿Responde a preguntas variadas?
- [ ] ¿Mantiene contexto conversacional?
- [ ] ¿Maneja errores ortográficos?

### **Pedagógicas:**

- [ ] ¿Los estudiantes entienden cómo funciona?
- [ ] ¿Pueden explicar la diferencia entre keywords e IA?
- [ ] ¿Comprenden las Máximas de Grice?
- [ ] ¿Pueden proponer mejoras?

### **Actitudinales:**

- [ ] ¿Se sintieron capaces de "crear" tecnología?
- [ ] ¿Perdieron el miedo a la programación?
- [ ] ¿Ven aplicaciones prácticas de IA?
- [ ] ¿Quieren seguir experimentando?

---

## 🚀 **EXTENSIONES Y PROYECTOS FUTUROS**

Una vez completada la actividad básica, los estudiantes pueden:

### **Nivel 1: Personalización**

- Cambiar colores y diseño del chatbot
- Agregar más información a la base de conocimiento
- Crear respuestas específicas para su facultad

### **Nivel 2: Funcionalidades**

- Agregar botones de respuesta rápida
- Implementar historial de conversaciones persistente
- Agregar búsqueda de documentos

### **Nivel 3: Integración**

- Conectar con WhatsApp
- Crear bot para Telegram
- Integrar con sistema de inscripción real

### **Nivel 4: Analytics**

- Registrar preguntas más frecuentes
- Generar reportes de uso
- Identificar puntos de mejora

---

## 📚 **RECURSOS ADICIONALES**

### **Documentación:**

- Google Gemini API: https://ai.google.dev/
- Cursor AI: https://cursor.sh/
- Node.js: https://nodejs.org/
- Express.js: https://expressjs.com/

### **Conceptos:**

- Máximas de Grice: [Wikipedia](https://es.wikipedia.org/wiki/Máximas_de_Grice)
- Arquitectura Cliente-Servidor: [MDN Web Docs](https://developer.mozilla.org/es/)
- IA Generativa: [Google AI Learning](https://ai.google/education/)

### **Comunidades:**

- Cursor Community: https://forum.cursor.sh/
- r/artificial: https://reddit.com/r/artificial
- Stack Overflow: https://stackoverflow.com/

---

## 📝 **TEMPLATE DE EVALUACIÓN**

```
EVALUACIÓN: Asistente Conversacional de IA
Estudiante: _________________________
Fecha: _____________________________

PARTE 1: IMPLEMENTACIÓN TÉCNICA (40%)
□ Chatbot funcional                           __/10
□ Integración con Gemini API                  __/10
□ Base de conocimiento completa               __/10
□ Manejo de errores y casos límite            __/10

PARTE 2: DISEÑO CONVERSACIONAL (30%)
□ Aplicación de Máximas de Grice              __/10
□ Tono y personalidad consistentes            __/10
□ Respuestas claras y estructuradas           __/10

PARTE 3: PRUEBAS Y DOCUMENTACIÓN (20%)
□ Casos de prueba exhaustivos                 __/7
□ Documentación del proceso                   __/7
□ Identificación de mejoras                   __/6

PARTE 4: PRESENTACIÓN Y REFLEXIÓN (10%)
□ Explicación del funcionamiento              __/5
□ Reflexión sobre aprendizajes                __/5

TOTAL: __/100

COMENTARIOS:
_________________________________________________
_________________________________________________
_________________________________________________
```

---

## 🎓 **REFLEXIONES FINALES PARA EL PROFESOR**

### **Lo que funciona bien:**

1. **Aprendizaje gradual:** Los estudiantes no se abruman porque cada paso es pequeño
2. **Errores productivos:** Los fallos (CORS, API) son oportunidades de aprendizaje
3. **Gratificación inmediata:** Ven resultados tangibles rápidamente
4. **Aplicabilidad:** Entienden cómo la IA puede resolver problemas reales

### **Desafíos comunes:**

1. **Diversidad técnica:** Algunos estudiantes avanzan más rápido

   - **Solución:** Preparar extensiones para los que terminen primero

2. **Frustración con errores:** Algunos se desaniman con errores técnicos

   - **Solución:** Normalizar el error como parte del proceso

3. **Expectativas vs realidad:** Esperan "magia" de la IA

   - **Solución:** Discutir limitaciones desde el inicio

4. **Tiempo variable:** La instalación puede tomar más en algunos equipos
   - **Solución:** Enviar instrucciones de instalación con anticipación

### **Adaptaciones sugeridas:**

- **Para estudiantes de negocio:** Enfatizar casos de uso empresariales
- **Para estudiantes de comunicación:** Profundizar en diseño conversacional
- **Para estudiantes de ingeniería:** Permitir explorar el código
- **Para estudiantes de diseño:** Enfocarse en UX y personalización visual

---

## 📊 **CRONOGRAMA SUGERIDO (CLASE DE 3 HORAS)**

```
⏰ 0:00 - 0:15  │ Introducción y objetivos
⏰ 0:15 - 0:30  │ FASE 1: Chatbot básico
⏰ 0:30 - 0:50  │ FASE 2: Diseño conversacional
⏰ 0:50 - 1:00  │ FASE 3: Primeras pruebas
⏰ 1:00 - 1:10  │ ☕ BREAK
⏰ 1:10 - 1:30  │ FASE 4: Comprensión del sistema
⏰ 1:30 - 2:20  │ FASE 5: Integración Gemini
⏰ 2:20 - 2:40  │ FASE 6-7: IA 100% + Base de conocimiento
⏰ 2:40 - 3:00  │ FASE 8: Pruebas y cierre
```

---

## ✅ **LISTA DE ARCHIVOS RESULTANTES**

Al finalizar la actividad, los estudiantes tendrán:

```
/Taller
├── index.html                  # Frontend del chatbot
├── server.js                   # Servidor con Gemini API
├── package.json                # Dependencias
├── package-lock.json           # Versiones exactas
├── .gitignore                  # Archivos a ignorar
├── INSTRUCCIONES.md            # Guía de uso
├── README_GENERATIVO.md        # Documentación técnica
├── CONTEXTO_UVA.md             # Base de conocimiento
├── node_modules/               # Dependencias instaladas
└── server.log                  # Logs del servidor
```

---

## 🎯 **RESULTADO FINAL ESPERADO**

Un chatbot completamente funcional que:

✅ Responde preguntas sobre la universidad usando IA generativa  
✅ Entiende lenguaje natural, incluyendo errores ortográficos  
✅ Mantiene contexto conversacional  
✅ Aplica principios de comunicación efectiva (Grice)  
✅ Tiene información real y actualizada  
✅ Es escalable y fácil de mantener  
✅ Puede ser desplegado para uso real de estudiantes

---

## 💡 **MENSAJE FINAL PARA PROFESORES**

Esta actividad demuestra que **no necesitas ser programador para crear tecnología útil**. Tus estudiantes aprenderán que:

1. La IA es una herramienta, no magia
2. El diseño y la comunicación son tan importantes como el código
3. Pueden ser creadores de tecnología, no solo consumidores
4. Los errores son parte del proceso de aprendizaje
5. La colaboración humano-IA es el futuro del trabajo

**¡Buena suerte con tu clase!** 🎓🚀

---

## 📧 **SOPORTE**

Si tienes preguntas o mejoras para esta guía, documéntalas para futuras versiones.

**Versión:** 1.0  
**Última actualización:** 2025  
**Creado con:** Cursor AI + Claude Sonnet 4.5

---

**¡Gracias por usar esta guía!** 🙏
