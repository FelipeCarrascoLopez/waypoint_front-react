# Vehicle-Map-Front---React

# Requisitos

### Linux
- Tener instalado:
  - Docker
  - Git

### Windows
- Tener instalado:
  - WSL con una distribución de Linux a elección.
  - Git
  - Docker Desktop

---

## 1. Clonar el Proyecto y Entrar al Directorio

Ejecuta los siguientes comandos en tu terminal:

- git clone https://github.com/FelipeCarrascoLopez/waypoint_front-react.git
- cd waypoint_api-rails


---

## 2. Configuración del Entorno

1. Crear un archivo `.env` en el directorio raíz del proyecto con las siguientes variables de entorno:

REACT_APP_GOOGLE_MAPS_API_KEY=INSERT_KEY_GOOGLE_MAPS_API


2. Crear el archivo `.env`:

touch .env


3. Abrir y editar el archivo con el comando:

nano .env

- Guardar y salir: Presiona `Ctrl + X`, luego `Y`, Finalmente `ENTER` .

4. Comprobar que los datos se guardaron correctamente:

cat .env


---

## 3. Levantar Servicios con Docker

1. Crear y levantar los servicios del contenedor utilizando el archivo `docker-compose.yml`:

docker compose up --build



2. Una vez iniciados los servicios, la API estará disponible con Swagger en:  
[http://localhost:3005(http://localhost:3005)

---

## Vista de Ejemplo
![image](https://github.com/user-attachments/assets/d6b10004-7157-4653-8bf7-17dd21e4e8d0)




