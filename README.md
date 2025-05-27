# 📋 App Empleados

Aplicación web full-stack desarrollada con Angular (frontend) y Node.js + Express + MongoDB (backend), que permite gestionar un registro de empleados.

Actualmente, el frontend permite la creación de empleados y el backend expone un CRUD completo mediante una REST API.

## 🛠️ Tecnologías utilizadas

### Backend
- Node.js
- Express
- MongoDB + Mongoose
- CORS
- Morgan

### Frontend
- Angular

---

## 📁 Estructura del proyecto
````
app-empleados/
├── backend/
│ ├── controles/
│ │ └── empleado.controller.js
│ ├── modelos/
│ │ └── empleado.js
│ ├── rutas/
│ │ └── empleado.routes.js
│ ├── database.js
│ └── index.js
└── frontend/
└── ... (código Angular)
````
---
## 🚀 Instalación local

### 🔧 Requisitos

- Node.js y npm
- MongoDB instalado y ejecutándose localmente
- Angular CLI

### 🖥️ Backend
El backend se ejecutará en: http://localhost:3000
```bash
cd backend
npm install
node index.js
```
### 🌐 Frontend
El frontend se ejecutará en: http://localhost:4200
```bash
cd frontend
npm install
ng serve
```
---
## 🌐 API REST - Endpoints disponibles
| Método | Ruta                 | Descripción                   |
| ------ | -------------------- | ----------------------------- |
| GET    | `/api/empleados`     | Obtener todos los empleados   |
| POST   | `/api/empleados`     | Crear un nuevo empleado       |
| GET    | `/api/empleados/:id` | Obtener un empleado por ID    |
| PUT    | `/api/empleados/:id` | Actualizar un empleado por ID |
| DELETE | `/api/empleados/:id` | Eliminar un empleado por ID   |

## 🧪 Pruebas con Postman
Puedes realizar pruebas de los endpoints desde Postman. Aquí algunos ejemplos:

### Crear un empleado (POST)
````URL: http://localhost:3000/api/empleados````
Body (JSON):
````
{
 "cargo":"nuevo",
 "nombre":"pepe",
 "salario":"222",
 "sucursal":"otro"
}
````

### Obtener todos los empleados (GET)
````URL: http://localhost:3000/api/empleados````

### Obtener un empleado por ID (GET)
````URL: http://localhost:3000/api/empleados/<ID>````

### Actualizar un empleado (PUT)
````URL: http://localhost:3000/api/empleados/<ID>````
Body (JSON):
````
{
 "nombre":"pepe",
 "cargo":"Analista",
 "sucursal":"otro",
 "salario":"222"
}
````
### Eliminar un empleado (DELETE)
````URL: http://localhost:3000/api/empleados/<ID>````

---
## ☁️ Despliegue en Heroku (Backend)
1. Crear un proyecto en Heroku.
2. Instalar el Heroku CLI y ejecutar:

````bash
heroku login
heroku create app-empleados-back
git push heroku main
````
3. En Heroku > Settings > Config Vars, agregar la variable:
````bash
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/empleados
````
4. Usar esa variable en database.js (cambia la URI de conexión con process.env.MONGODB_URI).

---
## 📌 Estado actual del desarrollo
 - Backend: CRUD completo funcional.
 - Frontend: Solo funcionalidad de crear empleado.
 - Funcionalidad completa del frontend.
 - Autenticación de usuarios (opcional futuro).
 - Despliegue conjunto en producción.

---
## 📄 Licencia
Este proyecto está bajo la licencia MIT. Puedes usarlo y modificarlo libremente.

## 🤝 Autor
David Fernando Guerrero Vanegas

## ⭐ Repositorio
https://github.com/davidfguerrerov/app-empleados
