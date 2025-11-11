# 🎓 UniGuía UVA - Asistente Conversacional Universitario

<div align="center">

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)
![AI](https://img.shields.io/badge/AI-Google%20Gemini-orange.svg)
![Status](https://img.shields.io/badge/status-educational-yellow.svg)

**Chatbot inteligente para orientar a estudiantes universitarios**

Construido con **IA Generativa** (Google Gemini) y desarrollado como proyecto educativo usando **Cursor AI**

[Demo](#-demo) • [Instalación](#-instalación-rápida) • [Documentación](#-documentación) • [Guía Docente](#-guía-para-profesores)

</div>

---

## 📋 **Índice**

- [Características](#-características)
- [Demo](#-demo)
- [Instalación Rápida](#-instalación-rápida)
- [Documentación](#-documentación)
- [Uso Educativo](#-uso-educativo)
- [Tecnologías](#️-tecnologías)
- [Cómo Replicar](#-cómo-replicar-este-proyecto)
- [Contribuciones](#-contribuciones)
- [Licencia](#-licencia)

---

## ✨ **Características**

- 🤖 **IA Generativa 100%** con Google Gemini 2.5 Flash
- 💬 **Lenguaje natural** - Entiende errores ortográficos y contexto
- 🧠 **Memoria conversacional** - Recuerda el contexto de la conversación
- 📚 **Base de conocimiento completa** sobre la universidad
- 🎯 **Máximas de Grice** aplicadas para comunicación efectiva
- 🆓 **Gratuito** - Hasta 1,500 consultas diarias con Gemini
- 🔒 **Seguro** - API keys manejadas con variables de entorno
- 📱 **Responsive** - Funciona en desktop y móvil

---

## 🎬 **Demo**

### Ejemplo de Conversación

```
👤 Usuario: "hola, tengo mucha hambre y soy vegetariano, qué opciones tengo?"

🤖 UniGuía: ¡Hola! Claro que sí, en la UVA tienes varias opciones 
deliciosas y vegetarianas para comer:

📍 Cafetería Central (Edificio A, piso 1):
  • Arepa con tofu revuelto 🍳 (10,000 COP)
  • Bowl de frutas + yogurt 🍓 (9,000 COP)
  • Lasaña vegetariana 🍝 (17,000 COP)

📍 Café Express (Edificio C, planta baja):
  • Wrap vegetariano 🌯 (12,000 COP)
  • Avena vegana 🥣 (10,000 COP)

📍 Food Court UVA (Entre edificios D y E):
  • VeggiePoint: 100% vegetariano y vegano
    Desayunos desde 💰 10,000 COP

¿Te gustaría saber horarios o necesitas ayuda con otra cosa?
```

---

## 🚀 **Instalación Rápida**

### **Requisitos Previos**

- Node.js >= 18.0.0 ([Descargar](https://nodejs.org/))
- Una API Key de Google Gemini ([Obtener gratis](https://aistudio.google.com/))

### **Pasos**

```bash
# 1. Clonar el repositorio
git clone git@github.com:dominguezjorgea/taller-chatbot-cursor-dev-ia.git
cd taller-chatbot-cursor-dev-ia

# 2. Instalar dependencias
npm install

# 3. Configurar API Key
cp .env.example .env
# Edita .env y agrega tu GEMINI_API_KEY

# 4. Iniciar servidor
npm start

# 5. Abrir en navegador
# Visita: http://localhost:3000/index.html
```

### **Obtener tu API Key de Gemini**

1. Ve a [Google AI Studio](https://aistudio.google.com/)
2. Inicia sesión con tu cuenta de Google
3. Click en "Get API Key"
4. Click en "Create API Key"
5. Copia la clave y pégala en tu archivo `.env`

---

## 📚 **Documentación**

| Documento | Descripción | Para |
|-----------|-------------|------|
| **[GUIA_DOCENTE_COMPLETA.md](GUIA_DOCENTE_COMPLETA.md)** | Guía pedagógica completa con 8 fases | Profesores 👨‍🏫 |
| **[PROMPTS_DEPURADOS.md](PROMPTS_DEPURADOS.md)** | 23 prompts depurados para replicar | Estudiantes 👨‍🎓 |
| **[CONTEXTO_UVA.md](CONTEXTO_UVA.md)** | Base de conocimiento implementada | Mantenimiento 🔧 |
| **[INSTRUCCIONES.md](INSTRUCCIONES.md)** | Instrucciones técnicas de uso | Desarrolladores 💻 |
| **[README_GENERATIVO.md](README_GENERATIVO.md)** | Documentación del sistema generativo | Técnica 🤖 |

---

## 🎓 **Uso Educativo**

Este proyecto fue diseñado específicamente para enseñar:

### **Para Estudiantes de Negocio/Administración:**
- ✅ Cómo la IA puede resolver problemas reales
- ✅ Diseño de experiencias conversacionales
- ✅ Aplicación de teorías de comunicación (Grice)
- ✅ Interacción con herramientas de desarrollo asistido por IA

### **Para Estudiantes de Ingeniería:**
- ✅ Arquitectura cliente-servidor
- ✅ Integración de APIs REST
- ✅ Manejo seguro de credenciales
- ✅ Node.js y Express.js

### **Para Estudiantes de Comunicación:**
- ✅ Máximas de Grice en la práctica
- ✅ Diseño de personalidad conversacional
- ✅ UX Writing para chatbots
- ✅ Evaluación de calidad conversacional

### **Duración de la Actividad:**
- **Clase completa:** 2-3 horas
- **Workshop extenso:** 4-6 horas (con personalización)

---

## 🛠️ **Tecnologías**

### **Frontend**
- HTML5
- CSS3 (diseño moderno y responsive)
- JavaScript (ES6+)

### **Backend**
- Node.js (v18+)
- Express.js
- CORS

### **IA**
- Google Gemini 2.5 Flash API
- Generación de lenguaje natural
- Memoria conversacional

### **Desarrollo**
- Cursor AI (desarrollo asistido por IA)
- Git & GitHub
- dotenv (gestión de variables de entorno)

---

## 📖 **Cómo Replicar Este Proyecto**

### **Opción 1: Para Profesores**

Sigue la **[GUIA_DOCENTE_COMPLETA.md](GUIA_DOCENTE_COMPLETA.md)** que incluye:

- ✅ Objetivos de aprendizaje por fase
- ✅ 23 prompts organizados y numerados
- ✅ Notas pedagógicas para discusión
- ✅ Actividades grupales sugeridas
- ✅ Casos de prueba categorizados
- ✅ Troubleshooting común
- ✅ Cronograma de 3 horas
- ✅ Template de evaluación

### **Opción 2: Para Estudiantes Independientes**

Sigue la **[PROMPTS_DEPURADOS.md](PROMPTS_DEPURADOS.md)**:

1. Instala [Cursor AI](https://cursor.sh/)
2. Copia cada prompt en orden
3. Pega en Cursor y espera respuesta
4. Prueba después de cada fase
5. Personaliza con información de tu universidad

### **Opción 3: Adaptación para Otra Institución**

1. Clona este repositorio
2. Edita `server.js` → `KNOWLEDGE_BASE` (línea ~24)
3. Reemplaza información de UVA con tu institución
4. Actualiza `index.html` con nombre de tu universidad
5. Prueba con casos específicos
6. Documenta tus cambios

---

## 🧪 **Casos de Prueba**

El proyecto incluye casos de prueba exhaustivos:

### **Categorías Cubiertas:**
- ✅ Saludos y presentación
- ✅ Opciones vegetarianas/veganas
- ✅ Comida en general
- ✅ Biblioteca y estudio
- ✅ Inscripción de materias
- ✅ Becas y ayuda económica
- ✅ Calendario académico
- ✅ Carnet estudiantil
- ✅ Servicios estudiantiles
- ✅ Edificios y ubicaciones
- ✅ Servicios tecnológicos
- ✅ Orientación para nuevos
- ✅ Contactos importantes
- ✅ **Casos complejos en lenguaje natural**

Ver todos los casos: [CONTEXTO_UVA.md - Sección de Pruebas](CONTEXTO_UVA.md#-casos-de-prueba-sugeridos)

---

## 🏗️ **Arquitectura del Sistema**

```
┌─────────────────────────────────────────────────────────────┐
│                    UNIGUÍA - ARQUITECTURA                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [NAVEGADOR - index.html]                                   │
│     ↓ Usuario escribe mensaje                              │
│     ↓                                                       │
│  [SERVIDOR NODE.JS - server.js]                             │
│     ↓ Recibe mensaje + sessionId                           │
│     ↓ Construye prompt con:                                │
│     │  • Personalidad (Máximas de Grice)                   │
│     │  • Base de conocimiento (KNOWLEDGE_BASE)             │
│     │  • Historial conversacional                          │
│     ↓                                                       │
│  [GEMINI API - Google]                                      │
│     ↓ Procesa con IA generativa                            │
│     ↓ Genera respuesta única y contextualizada             │
│     ↓                                                       │
│  [SERVIDOR]                                                 │
│     ↓ Guarda en historial (conversations Map)              │
│     ↓ Retorna JSON con respuesta                           │
│     ↓                                                       │
│  [NAVEGADOR]                                                │
│     ↓ Muestra respuesta formateada                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 📊 **Estructura del Proyecto**

```
taller-chatbot-cursor-dev-ia/
├── index.html                      # Frontend del chatbot
├── server.js                       # Servidor con Gemini API
├── package.json                    # Dependencias del proyecto
├── .env.example                    # Template de configuración
├── .gitignore                      # Archivos ignorados por Git
│
├── README.md                       # Este archivo
├── GUIA_DOCENTE_COMPLETA.md       # Guía para profesores
├── PROMPTS_DEPURADOS.md           # Prompts para replicar
├── CONTEXTO_UVA.md                # Base de conocimiento
├── INSTRUCCIONES.md               # Instrucciones técnicas
└── README_GENERATIVO.md           # Documentación técnica
```

---

## 🤝 **Contribuciones**

Este es un proyecto educativo **abierto y colaborativo**. ¡Las contribuciones son bienvenidas!

### **Formas de Contribuir:**

1. **Mejoras de documentación**
   - Correcciones ortográficas
   - Traducciones a otros idiomas
   - Ejemplos adicionales

2. **Funcionalidades nuevas**
   - Integración con otros servicios
   - Mejoras en la UI/UX
   - Nuevas capacidades conversacionales

3. **Adaptaciones**
   - Versiones para otras universidades
   - Versiones para otras industrias (hospitales, empresas)
   - Integraciones (WhatsApp, Telegram)

4. **Reportar problemas**
   - Issues en GitHub
   - Errores de documentación
   - Sugerencias de mejora

### **Cómo Contribuir:**

```bash
# 1. Fork del repositorio
# 2. Crea una rama para tu feature
git checkout -b feature/mi-mejora

# 3. Haz tus cambios y commit
git commit -m "Añade: descripción de la mejora"

# 4. Push a tu fork
git push origin feature/mi-mejora

# 5. Abre un Pull Request
```

---

## 🏆 **Casos de Éxito**

Si usaste este proyecto en tu clase o institución, ¡comparte tu experiencia!

Abre un Issue con la etiqueta `caso-de-exito` e incluye:
- 📍 Institución
- 👥 Número de estudiantes
- 📝 Adaptaciones realizadas
- 💡 Aprendizajes clave
- 📸 Screenshots (opcional)

---

## 📧 **Contacto**

- **Autor:** Jorge Domínguez
- **GitHub:** [@dominguezjorgea](https://github.com/dominguezjorgea)
- **Proyecto:** Taller de Desarrollo Asistido por IA
- **Institución:** Universidad del Valle Andino (ejemplo educativo)

---

## 📄 **Licencia**

Este proyecto está bajo la **Licencia MIT** - ver el archivo [LICENSE](LICENSE) para más detalles.

### **¿Qué significa?**

✅ Uso comercial permitido  
✅ Modificación permitida  
✅ Distribución permitida  
✅ Uso privado permitido  
❗ Sin garantía  
❗ El autor no se hace responsable  

---

## 🙏 **Agradecimientos**

- **Google** por la API de Gemini y su generosa capa gratuita
- **Cursor AI** por democratizar el desarrollo asistido por IA
- **Comunidad educativa** por el feedback y mejoras
- **Paul Grice** por las máximas de comunicación efectiva

---

## 🔗 **Enlaces Útiles**

- [Google AI Studio](https://aistudio.google.com/) - Obtén tu API Key
- [Cursor AI](https://cursor.sh/) - Editor con IA
- [Node.js](https://nodejs.org/) - Runtime de JavaScript
- [Express.js](https://expressjs.com/) - Framework web
- [Máximas de Grice](https://es.wikipedia.org/wiki/Máximas_de_Grice) - Teoría de comunicación

---

## 📈 **Roadmap**

### **v1.0 (Actual)**
- ✅ IA generativa 100%
- ✅ Memoria conversacional
- ✅ Base de conocimiento completa
- ✅ Documentación pedagógica

### **v1.1 (Próximamente)**
- [ ] Interface para actualizar base de conocimiento
- [ ] Analytics de preguntas frecuentes
- [ ] Exportar conversaciones

### **v2.0 (Futuro)**
- [ ] Integración con WhatsApp
- [ ] Multi-idioma
- [ ] Panel de administración
- [ ] Base de datos persistente

---

## ⭐ **Si este proyecto te fue útil**

- Dale una ⭐ al repositorio
- Compártelo con otros profesores/estudiantes
- Contribuye con mejoras
- Cuéntanos tu experiencia

---

<div align="center">

**Creado con ❤️ y 🤖 Cursor AI**

[⬆ Volver arriba](#-uniguía-uva---asistente-conversacional-universitario)

</div>

