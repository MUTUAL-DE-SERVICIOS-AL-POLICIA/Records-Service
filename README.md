# Records-Service

## Descripción

**Records-Service** es el servicio que guarda, organiza y recupera todos los documentos y registros de la plataforma. Funciona como un archivo central seguro donde se almacena toda la información documentaria de forma ordenada y con protección.

Maneja datos como:
- Gestión de expedientes y dossiers
- Archivo de registros históricos
- Búsqueda y recuperación de documentos
- Auditoría de registros

---

## Clonar el repositorio y agregarle un nombre nuevo del nuevo proyecto

```bash
git clone https://github.com/MUTUAL-DE-SERVICIOS-AL-POLICIA/Records-Service.git nombre-records-service
```

## Inicializar proyecto

```bash
# Entrar al repositorio clonado con el nuevo nombre del proyecto
cd nombre-records-service

# Elimina el origen remoto actual
git remote remove origin

# Crear el archivo .env en base al .env.template
cp .env.template .env

# Instalar las dependencias
pnpm install

# Correr proyecto en modo desarrollo
pnpm start:dev

# Crear nuevo Módulo
nest g res nombreModulo

# Crear un seeder
pnpm seed:create --name src/database/seeds/nombre_seed.ts

# Correr seeder
pnpm seed:run --name src/database/seeds/{code}-nombre_seed.ts

# Crear migración
pnpm typeorm migration:create src/database/migrations/NombreDeLaMigración

# Correr migración
pnpm migration:run

# Revertir migración
pnpm migration:revert

# Ver estado de migraciones
pnpm migration:show

# Para enlazar a un nuevo repositorio
git remote add origin https://github.com/tu-usuario/{nombre-records-service}.git
git add .
git commit -m "Inicialización del nuevo proyecto"
git branch -M main
git push -u origin main
```