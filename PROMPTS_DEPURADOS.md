# 📝 Lista de Prompts Depurados - UniGuía UVA

## 🎯 **USO DE ESTE DOCUMENTO**

Esta es la lista exacta de prompts que debes usar con **Cursor AI** para construir el asistente conversacional universitario completo.

**Importante:**
- Copia cada prompt EXACTAMENTE como está
- Espera a que Cursor termine cada paso antes de pasar al siguiente
- Los prompts están numerados en orden de ejecución
- Algunos prompts requieren que pegues información específica

---

## 🚀 **SECUENCIA COMPLETA DE PROMPTS**

### **✅ PROMPT 1: Creación del chatbot básico**

```
Crear un archivo index.html con un chatbot básico en pantalla.
```

**Resultado esperado:**
- Archivo `index.html` con interfaz de chat
- Respuestas predefinidas básicas
- Sistema de keywords simple

---

### **✅ PROMPT 2: Diseño conversacional**

```
Quiero diseñar un asistente conversacional para orientar a nuevos estudiantes universitarios. Ayúdame a definir su personalidad, tono y estilo de comunicación según las máximas de Grice.
```

**Resultado esperado:**
- Documento con personalidad definida
- Actualización del código con Máximas de Grice
- Respuestas más elaboradas y empáticas

---

### **✅ PROMPT 3: Instrucciones de prueba**

```
¿Cómo puedo probarlo?
```

**Resultado esperado:**
- Instrucciones para abrir en navegador
- Pasos para probar el chatbot

---

### **✅ PROMPT 4: Explicación no técnica**

```
Explícame cómo hiciste que respondiera esa información. ¿De qué fuentes te basas para responderle al usuario? No me des respuestas técnicas porque yo soy un administrador de empresas, no soy un desarrollador.
```

**Resultado esperado:**
- Explicación en lenguaje sencillo
- Analogías no técnicas
- Comprensión del sistema de keywords

---

### **✅ PROMPT 5: Ubicación del código**

```
Muéstrame en el código dónde está ese archivo de conocimiento.
```

**Resultado esperado:**
- Identificación del objeto `knowledgeBase`
- Explicación de estructura de datos

---

### **✅ PROMPT 6: Diagrama visual**

```
No entiendo código. ¿Me das un diagrama en un formato más amigable para mí?
```

**Resultado esperado:**
- Diagrama de flujo visual
- Proceso de pregunta-respuesta ilustrado

---

### **✅ PROMPT 7: Identificación de limitación**

```
Imagínate que no me entendió en este caso.
```

**Resultado esperado:**
- Explicación de por qué falló el sistema de keywords
- Introducción al concepto de limitaciones

---

### **✅ PROMPT 8: Propuesta de mejora con IA**

```
Tengo una idea: ¿por qué en lugar de definir muchas palabras para poder entender la solicitud del usuario, no usamos la IA?
```

**Resultado esperado:**
- Propuestas de integración con IA
- Opciones disponibles (OpenAI, Gemini, etc.)

---

### **✅ PROMPT 9: Consulta sobre Gemini**

```
He escuchado que Gemini tiene una capa gratuita generosa. ¿Es verdad?
```

**Resultado esperado:**
- Información sobre límites gratuitos de Gemini
- Comparación con otras opciones
- Ventajas de usar Gemini

---

### **✅ PROMPT 10: Guía de integración**

```
Yo no sé nada de códigos ni programación. Entonces necesito que me indiques paso a paso cómo integrar Gemini para que la IA responda al usuario.
```

**Resultado esperado:**
- Instrucciones detalladas paso a paso
- Proceso para obtener API Key
- Guía de integración

---

### **✅ PROMPT 11: Confirmación de ubicación**

```
Ya estoy en https://aistudio.google.com/ y tengo esta pantalla.
```

**Resultado esperado:**
- Instrucciones específicas desde esa pantalla
- Pasos para generar API Key

---

### **✅ PROMPT 12: Provisión de API Key**

```
Ya tengo la API key y es esta: [PEGAR_TU_API_KEY_AQUÍ]
```

**⚠️ Importante:** Reemplaza `[PEGAR_TU_API_KEY_AQUÍ]` con tu API Key real.

**Resultado esperado:**
- Código actualizado con tu API Key
- Instrucciones de uso

---

### **✅ PROMPT 13: Reporte de error**

```
No me funcionó, me defraudaste.
```

**Resultado esperado:**
- Análisis del problema
- Propuesta de solución
- Explicación de errores comunes (CORS, etc.)

---

### **✅ PROMPT 14: Solicitud de implementación directa**

```
Directamente implementa la solución.
```

**Resultado esperado:**
- Implementación completa de la solución
- Código listo para usar

---

### **✅ PROMPT 15: Consulta sobre servidor**

```
Si yo agrego la IA de Google, ¿no necesitaría un servidor?
```

**Resultado esperado:**
- Explicación de por qué se necesita un servidor
- Concepto de arquitectura cliente-servidor
- Seguridad de API Keys

---

### **✅ PROMPT 16: Implementación con servidor**

```
No quiero usar variaciones de palabras. Quiero que la IA entienda la entrada del usuario. Si necesitas un servidor, pues impleméntalo. Usa la tecnología que requieras.
```

**Resultado esperado:**
- Creación de `server.js` (Node.js + Express)
- Creación de `package.json`
- Creación de `.gitignore`
- Actualización de `index.html`
- Instrucciones de instalación

---

### **✅ PROMPT 17: Reporte de error (si aplica)**

```
Obtuve este error: [PEGAR_ERROR_COMPLETO]
```

**⚠️ Importante:** Solo usa este prompt si recibes un error. Pega el error completo.

**Resultado esperado:**
- Análisis del error
- Solución específica
- Código corregido

---

### **✅ PROMPT 18: Error persistente (si aplica)**

```
Recargué nuevamente y sigue el problema. Soluciona el error.
```

**Resultado esperado:**
- Diagnóstico más profundo
- Solución alternativa
- Validación adicional

---

### **✅ PROMPT 19: Generación de casos de prueba**

```
Funcionó. Ahora ayúdame a generar unas entradas de usuario para validar que efectivamente ya está usando la IA.
```

**Resultado esperado:**
- Lista de casos de prueba
- Ejemplos variados
- Casos con errores ortográficos

---

### **✅ PROMPT 20: Upgrade a IA 100% generativa**

```
Quiero un bot más inteligente. Nada de definir opciones por keywords. Necesito hacer una aplicación de IA generativa que base su funcionamiento en su totalidad con el modelo de IA que ya le dimos.
```

**Resultado esperado:**
- Eliminación del sistema de keywords
- Implementación de sistema 100% generativo
- Memoria conversacional
- Código completamente refactorizado

---

### **✅ PROMPT 21: Adición de base de conocimiento**

```
[PEGAR TODA LA INFORMACIÓN DE TU UNIVERSIDAD AQUÍ]

Esta es toda la información para crear un contexto fijo para el asistente universitario. Incluyendo el menú vegetariano. Agrégala al contexto para que responda a este tipo de preguntas.
```

**⚠️ Importante:** Antes de este prompt, prepara un documento con:
- Información general de la universidad
- Cafeterías y opciones de comida (incluyendo vegetarianas/veganas)
- Biblioteca
- Inscripción de materias
- Becas
- Calendario académico
- Carnet estudiantil
- Servicios estudiantiles
- Servicios tecnológicos
- Edificios y ubicaciones
- Contactos importantes

**Resultado esperado:**
- Base de conocimiento implementada en `server.js`
- Sistema completo y funcional
- Respuestas contextualizadas a tu universidad

---

### **✅ PROMPT 22: Solicitud de casos de prueba**

```
Dame alternativas para probar.
```

**Resultado esperado:**
- Lista exhaustiva de casos de prueba
- Categorías organizadas
- Casos simples y complejos

---

### **✅ PROMPT 23: Comando de ejecución**

```
Dame el comando para ejecutar la aplicación.
```

**Resultado esperado:**
- Comandos exactos para terminal
- Instrucciones de inicio
- Comandos de troubleshooting

---

## 🎯 **RESUMEN: ORDEN DE EJECUCIÓN**

```
1. Crear chatbot básico
2. Diseñar personalidad conversacional
3. Aprender a probarlo
4. Entender el funcionamiento (no técnico)
5. Ver ubicación en código
6. Obtener diagrama visual
7. Identificar limitaciones
8. Proponer mejora con IA
9. Investigar Gemini
10. Obtener guía de integración
11. Confirmar ubicación en AI Studio
12. Proveer API Key
13-18. Solucionar errores (si aparecen)
19. Generar casos de prueba
20. Upgrade a IA 100%
21. Agregar información real
22. Obtener más casos de prueba
23. Obtener comandos de ejecución
```

---

## 📋 **CHECKLIST DE PROGRESO**

Marca cada prompt conforme lo completes:

```
□ PROMPT 1:  Chatbot básico creado
□ PROMPT 2:  Diseño conversacional aplicado
□ PROMPT 3:  Instrucciones de prueba recibidas
□ PROMPT 4:  Explicación no técnica entendida
□ PROMPT 5:  Ubicación del código identificada
□ PROMPT 6:  Diagrama visual obtenido
□ PROMPT 7:  Limitaciones identificadas
□ PROMPT 8:  Propuesta de IA realizada
□ PROMPT 9:  Información de Gemini obtenida
□ PROMPT 10: Guía de integración recibida
□ PROMPT 11: Ubicación en AI Studio confirmada
□ PROMPT 12: API Key provista
□ PROMPT 13-18: Errores solucionados (si hubo)
□ PROMPT 19: Casos de prueba generados
□ PROMPT 20: Upgrade a IA 100% completado
□ PROMPT 21: Base de conocimiento agregada
□ PROMPT 22: Más casos de prueba obtenidos
□ PROMPT 23: Comandos de ejecución obtenidos
```

---

## ⚠️ **NOTAS IMPORTANTES**

### **1. No saltes pasos**
Cada prompt construye sobre el anterior. Respetar el orden es crucial.

### **2. Espera respuestas completas**
Cursor puede tomar tiempo en generar código completo. No interrumpas.

### **3. Errores son normales**
Los prompts 13-18 están ahí porque los errores son parte del proceso.

### **4. API Key es sensible**
NUNCA compartas tu API Key públicamente. No la subas a GitHub.

### **5. Personalización**
En el PROMPT 21, usa información REAL de tu universidad para mejores resultados.

---

## 🔄 **VARIACIONES PERMITIDAS**

Puedes adaptar estos prompts según:

### **Tu rol:**
- "soy estudiante de..." en lugar de "soy administrador de empresas"
- "es para mi universidad..." en lugar de genérico

### **Tu universidad:**
- Cambia "Universidad del Valle Andino" por el nombre de tu institución
- Adapta la información según tu contexto

### **Tu idioma:**
- Los prompts funcionan en español e inglés
- Mantén consistencia en el idioma elegido

---

## 📚 **EJEMPLOS DE PERSONALIZACIÓN**

### **Ejemplo 1: Para una empresa**

```
Quiero diseñar un asistente conversacional para orientar a nuevos 
empleados en la empresa. Ayúdame a definir su personalidad, tono 
y estilo de comunicación según las máximas de Grice.
```

### **Ejemplo 2: Para un hospital**

```
Quiero diseñar un asistente conversacional para orientar a pacientes 
en el hospital. Ayúdame a definir su personalidad, tono y estilo de 
comunicación según las máximas de Grice.
```

### **Ejemplo 3: Para una biblioteca**

```
Quiero diseñar un asistente conversacional para orientar a usuarios 
de la biblioteca. Ayúdame a definir su personalidad, tono y estilo 
de comunicación según las máximas de Grice.
```

---

## 🎓 **COMANDOS DE TERMINAL NECESARIOS**

Durante el proceso, necesitarás estos comandos:

### **Navegación:**
```bash
cd /ruta/a/tu/proyecto
```

### **Instalación de dependencias:**
```bash
npm install
```

### **Iniciar servidor:**
```bash
npm start
```

### **Detener servidor:**
```bash
Ctrl + C
```

### **Abrir en navegador:**
```bash
open http://localhost:3000/index.html
```

### **Ver logs:**
```bash
tail -f server.log
```

### **Reiniciar servidor:**
```bash
pkill -f "node server.js" && npm start
```

---

## 🏆 **RESULTADO FINAL**

Al completar todos los prompts, tendrás:

✅ Un chatbot conversacional funcional  
✅ Integración con Google Gemini API  
✅ Sistema 100% IA generativa  
✅ Base de conocimiento personalizada  
✅ Memoria conversacional  
✅ Manejo de lenguaje natural  
✅ Aplicación de Máximas de Grice  
✅ Servidor Node.js seguro  
✅ Documentación completa  

---

## 💾 **GUARDAR PROGRESO**

Después de cada prompt importante, guarda tu progreso:

```bash
# Si usas Git:
git add .
git commit -m "Completado hasta PROMPT [número]"
```

---

## 🆘 **SI ALGO SALE MAL**

### **Opción 1: Reportar a Cursor**
```
Obtuve este error: [pegar error completo]
Por favor analízalo y dame una solución.
```

### **Opción 2: Comenzar fase específica de nuevo**
```
Algo salió mal en la fase de [nombre de fase].
¿Puedes revisar e implementar esa parte nuevamente?
```

### **Opción 3: Reinicio completo (último recurso)**
```
Necesito empezar de nuevo. Por favor ayúdame a:
1. Respaldar lo que tengo
2. Limpiar el proyecto
3. Comenzar desde el PROMPT 1
```

---

## 📊 **TIEMPO ESTIMADO POR PROMPT**

```
PROMPT 1:    5-10 min
PROMPT 2:    15-20 min
PROMPT 3:    2-5 min
PROMPT 4:    5-10 min
PROMPT 5:    3-5 min
PROMPT 6:    5-10 min
PROMPT 7:    2-3 min
PROMPT 8:    5-10 min
PROMPT 9:    3-5 min
PROMPT 10:   10-15 min
PROMPT 11:   2-3 min
PROMPT 12:   5-10 min
PROMPT 13-18: Variable (depende de errores)
PROMPT 19:   5-10 min
PROMPT 20:   20-30 min
PROMPT 21:   15-25 min (+ tiempo de preparar info)
PROMPT 22:   5-10 min
PROMPT 23:   2-5 min

TOTAL:       ~2.5-3 horas
```

---

## ✨ **CONSEJOS FINALES**

1. **Lee cada respuesta de Cursor completamente** antes de continuar
2. **Prueba después de cada fase importante** para validar
3. **Documenta errores** que encuentres para aprender
4. **No tengas miedo de preguntar** a Cursor clarificaciones
5. **Experimenta** una vez completados todos los prompts

---

## 📝 **TEMPLATE PARA INFORMACIÓN UNIVERSITARIA (PROMPT 21)**

```markdown
# INFORMACIÓN DE [NOMBRE DE TU UNIVERSIDAD]

## 1. INFORMACIÓN GENERAL
- Nombre: 
- Ubicación: 
- Tipo: 
- Campus: 
- Estudiantes: 

## 2. CAFETERÍAS Y COMIDA

### Cafetería [Nombre]
- Ubicación: 
- Horario: 
- Precios:
- Opciones vegetarianas:
  * Desayuno: 
  * Almuerzo: 
  * Cena: 

## 3. BIBLIOTECA
- Ubicación: 
- Horarios: 
- Servicios: 
- Requisitos: 

## 4. INSCRIPCIÓN DE MATERIAS
- Portal: 
- Fechas: 
- Proceso: 
- Soporte: 

## 5. BECAS
- Tipos: 
- Requisitos: 
- Montos: 
- Contacto: 

## 6. CALENDARIO ACADÉMICO
- Inicio clases: 
- Parciales: 
- Finales: 
- Recesos: 

## 7. CARNET ESTUDIANTIL
- Ubicación: 
- Costo: 
- Documentos: 
- Beneficios: 

## 8. SERVICIOS ESTUDIANTILES
- Salud: 
- Psicología: 
- Deportes: 
- Cultura: 

## 9. SERVICIOS TECNOLÓGICOS
- Correo: 
- WiFi: 
- Laboratorios: 
- Software: 

## 10. EDIFICIOS
[Lista de edificios y su función]

## 11. CONTACTOS IMPORTANTES
- Emergencias: 
- Oficinas: 
- Emails: 

## 12. PREGUNTAS FRECUENTES
[Lista de preguntas frecuentes con respuestas]
```

---

**¡Éxito en tu proyecto!** 🚀

**Versión:** 1.0  
**Compatible con:** Cursor AI + Claude Sonnet 4.5  
**Última actualización:** 2025  

