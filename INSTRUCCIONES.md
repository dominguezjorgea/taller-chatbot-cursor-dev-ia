# 🎓 UniGuía - Chatbot Universitario con Gemini AI

## ✅ ¿Qué tienes ahora?

Un chatbot inteligente que usa **Gemini AI de Google** para entender a los estudiantes, sin importar cómo escriban.

**Características:**
- ✅ Entiende errores ortográficos ("bueno dias", "ola")
- ✅ Entiende sinónimos ("tengo hambre" = cafetería)
- ✅ Entiende contexto natural
- ✅ API Key segura en el servidor (no visible)
- ✅ Gratis hasta 1,500 consultas/día

---

## 📋 PASOS PARA USAR EL CHATBOT

### **PASO 1: Instalar Node.js (Si no lo tienes)**

1. Ve a: https://nodejs.org/
2. Descarga la versión LTS (la recomendada)
3. Instala haciendo doble clic
4. Verifica que se instaló:
   - Abre la Terminal
   - Escribe: `node --version`
   - Deberías ver algo como: `v20.x.x`

---

### **PASO 2: Instalar las dependencias del servidor**

1. Abre la Terminal
2. Ve a la carpeta del proyecto:
   ```bash
   cd /Users/domin/Desktop/Taller
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Espera 1-2 minutos mientras se descargan los paquetes

---

### **PASO 3: Iniciar el servidor**

En la misma Terminal, escribe:

```bash
npm start
```

Deberías ver algo como:

```
🎓 ========================================
   UniGuía - Servidor con Gemini AI
========================================
✅ Servidor corriendo en: http://localhost:3000
✅ API disponible en: http://localhost:3000/api/classify
✅ Chatbot disponible en: http://localhost:3000/index.html
========================================
```

---

### **PASO 4: Abrir el chatbot en el navegador**

1. Abre tu navegador (Chrome, Safari, Firefox)
2. Ve a: **http://localhost:3000/index.html**
3. ¡Ya puedes usar el chatbot! 🎉

---

## 🧪 PRUEBA EL CHATBOT

Escribe estos mensajes para probar la IA:

### Prueba 1: Errores ortográficos
```
"bueno dias"
"ola"
"oye"
```
→ Debería saludar correctamente

### Prueba 2: Lenguaje natural
```
"tengo mucha hambre donde puedo comer"
"necesito un lugar tranquilo para estudiar"
"estoy muy confundido no se que hacer"
```
→ Debería entender la intención

### Prueba 3: Sinónimos
```
"necesito apoyo financiero"
"donde almorzar"
"quiero sacar mi credencial"
```
→ Debería identificar correctamente el tema

---

## 🛑 CÓMO DETENER EL SERVIDOR

Cuando termines de probar:

1. Ve a la Terminal donde está corriendo el servidor
2. Presiona: `Ctrl + C`
3. El servidor se detendrá

---

## 🔄 CÓMO VOLVER A INICIAR

Cada vez que quieras usar el chatbot:

```bash
cd /Users/domin/Desktop/Taller
npm start
```

Luego abre: http://localhost:3000/index.html

---

## 📊 VER LOS LOGS (Actividad)

Cuando un estudiante escribe algo, verás en la Terminal:

```
[2025-11-11T10:30:15.123Z] Clasificando: "tengo hambre"
[2025-11-11T10:30:16.456Z] Clasificado como: "cafeteria"
```

Esto te permite ver:
- Qué preguntan los estudiantes
- Cómo la IA lo clasifica
- Si está funcionando correctamente

---

## 💰 COSTOS

- **Node.js:** Gratis
- **Dependencias (Express, etc):** Gratis
- **Gemini API:** Gratis hasta 1,500 consultas/día
- **Total:** $0

**Si excedes 1,500 consultas/día:**
- Costo aproximado: $0.075 por 1 millón de tokens
- Para referencia: 3,000 consultas al día ≈ $2-5/mes

---

## ⚙️ ARCHIVOS DEL PROYECTO

```
Taller/
├── index.html          → Interfaz del chatbot (lo que ve el usuario)
├── server.js           → Servidor Node.js con Gemini AI
├── package.json        → Configuración y dependencias
├── INSTRUCCIONES.md    → Este archivo
└── node_modules/       → Paquetes instalados (se crea con npm install)
```

---

## 🔒 SEGURIDAD

✅ **API Key protegida:**
- Está en el servidor (server.js)
- NO está visible en el navegador
- Los estudiantes NO pueden verla
- Solo el servidor la usa

✅ **CORS habilitado:**
- Permite que el HTML se comunique con el servidor
- Solo en localhost por seguridad

---

## 🆘 PROBLEMAS COMUNES

### "npm: command not found"
→ Node.js no está instalado. Ve al PASO 1.

### "Error: listen EADDRINUSE :::3000"
→ El puerto 3000 ya está en uso. 
   Solución: Cierra otros servidores o cambia el puerto en server.js

### "Cannot connect to server"
→ El servidor no está corriendo. 
   Solución: Ejecuta `npm start` en la Terminal

### "Error de Gemini API"
→ Verifica que tu API Key sea válida en server.js línea 8

---

## 📞 SOPORTE

Si tienes problemas, revisa:
1. Que Node.js esté instalado (`node --version`)
2. Que las dependencias estén instaladas (`npm install`)
3. Que el servidor esté corriendo (`npm start`)
4. Que la URL sea correcta (http://localhost:3000/index.html)

---

## 🎉 ¡LISTO!

Tu chatbot ahora usa **IA real de Gemini** para entender a los estudiantes de forma natural e inteligente.

**Ventajas de esta implementación:**
- ✅ Entiende cualquier forma de preguntar
- ✅ Aprende del contexto
- ✅ API Key segura
- ✅ Gratis hasta 1,500 consultas/día
- ✅ Fácil de mantener y actualizar

