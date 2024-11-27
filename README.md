## Descripción

[Nest] Plantilla para crear nuevos proyectos enfocado a micro servicios.

## Clonar el repositorio y agregarle un nombre nuevo del nuevo proyecto

```bash
git clone https://github.com/MUTUAL-DE-SERVICIOS-AL-POLICIA/template-microservice.git nombre-microservice
```

## Inicializar proyecto

```bash
# Entrar al repositorio clonado con el nuevo nombre del proyecto
cd nombre-microservice

# Elimina el origen remoto actual,
git remote remove origin

# Crear el archivo .env en base al .env.example
cp .env.example .env

# Instalar las dependencias
yarn install

# Correr proyecto en modo desarrollo
yarn run start:dev

# Crear nuevo Modulo
nest g res nombreModulo

# Crear un seeder
yarn seed:create --name src/database/seeds/nombre_seed.ts
# Correr seeder
yarn seed:run --name src/database/seeds/{code}-nombre_seed.ts

# Crear migración
yarn typeorm migration:create src/database/migrations/NombreDeLaMigración
# Correr migración
yarn migration:run
# Revertir migración
yarn migration:revert
# Ver estado de migraciones
yarn migration:show

# Para enlazar a un nuevo repositorio
git remote add origin https://github.com/tu-usuario/{nombre_nuevo-microservice}.git
git add .
git commit -m "Inicialización del nuevo proyecto"
git branch -M main
git push -u origin main
```