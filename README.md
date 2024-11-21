## Descripción

[Nest] Plantilla para crear nuevos proyectos enfocado a micro servicios.

## Clonar el repositorio y agregarle un nombre nuevo del nuevo proyecto

```bash
git clone https://github.com/MUTUAL-DE-SERVICIOS-AL-POLICIA/template-microservice.git <nuevo_nombre_del_micro_servicio>
```

## Inicializar proyecto

```bash
# Entrar al repositorio clonado con el nuevo nombre del proyecto
cd nuevo_nombre_del_micro_servicio

# Elimina el origen remoto actual,
git remote remove origin

# Crear el archivo .env en base al .env.example
cp .env.example .env

# Instalar las dependencias
yarn install

# Correr proyecto en modo desarrollo
$ yarn run start:dev

# Para enlazar a un nuevo repositorio
git remote add origin https://github.com/tu-usuario/{nombre_del_repositorio}.git
git add .
git commit -m "Inicialización del nuevo proyecto"
git branch -M main
git push -u origin main
```