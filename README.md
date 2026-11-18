# Records-Service

## Descripción

**Records-Service** es el servicio especializado que guarda, organiza y recupera todos los documentos y registros de la plataforma. Funciona como un archivo central seguro donde se almacena toda la información documentaria de forma ordenada y con protección. Forma parte de una arquitectura de microservicios basada en **NestJS** y utiliza **NATS** para la comunicación asincrónica entre servicios.

Maneja datos como:
- Gestión de expedientes y dossiers
- Archivo de registros históricos
- Búsqueda y recuperación de documentos
- Auditoría y trazabilidad de registros
- Clasificación y categorización de documentos
- Control de acceso a información sensible

---

## Estructura del Proyecto

```
src/
├── app.module.ts                 # Módulo raíz que organiza todos los módulos de la aplicación
├── main.ts                       # Punto de entrada principal de la aplicación
├── records/                      # Módulo principal de gestión de registros
│   ├── controllers/              # Controladores que manejan consultas y gestión
│   ├── services/                 # Servicios con la lógica de almacenamiento
│   └── dto/                      # Data Transfer Objects para validación de datos
├── documents/                    # Módulo de gestión de documentos
│   ├── controllers/              # Controladores para subida y descarga
│   ├── services/                 # Servicios de procesamiento de documentos
│   └── dto/                      # Validación de datos de documentos
├── search/                       # Módulo de búsqueda y recuperación
│   ├── controllers/              # Controladores de búsqueda avanzada
│   ├── services/                 # Servicios de indexación y búsqueda
│   └── dto/                      # Filtros y criterios de búsqueda
├── audit/                        # Módulo de auditoría y trazabilidad
│   ├── services/                 # Servicios de registro de accesos
│   └── dto/                      # Validación de datos de auditoría
├── common/                       # Código compartido reutilizable en toda la aplicación
│   ├── filters/                  # Filtros para manejo de excepciones
│   ├── guards/                   # Guards para proteger acceso
│   └── decorators/               # Decoradores personalizados
├── config/                       # Archivos de configuración (BD, variables ENV, etc)
│   └── database.config.ts        # Configuración específica de PostgreSQL
├── database/                     # Gestión de base de datos, migraciones y datos iniciales
│   ├── migrations/               # Migraciones TypeORM para cambios en el esquema BD
│   ├── seeds/                    # Seeders para llenar BD con datos de prueba
│   └── entities/                 # Entidades (modelos) que representan tablas de la BD
```

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