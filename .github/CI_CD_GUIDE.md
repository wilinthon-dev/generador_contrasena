# Guía de CI/CD Pipeline

## 📋 Descripción General

Este pipeline de CI/CD está diseñado para automatizar el proceso de integración continua y despliegue continuo siguiendo el flujo de trabajo GitFlow.

## 🚀 Flujos de Trabajo

### 1. **Integración Continua (CI)**
Se ejecuta en **todas las ramas** cuando:
- Se hace `push` a las ramas: `main`, `develop`, `feature/**`
- Se crea un `pull_request` hacia: `main`, `develop`

#### Pasos del CI:
1. **Instalación de dependencias**: `npm install`
2. **Verificación de estilo**: `npm run lint`
3. **Ejecución de pruebas**: `npm test`
4. **Construcción del proyecto**: `npm run build`

#### Matriz de testing:
- Node.js 18.x
- Node.js 20.x

### 2. **Despliegue a Staging (develop)**
Se ejecuta automáticamente cuando:
- Se hace `push` a la rama `develop`
- Las pruebas de CI han pasado exitosamente

#### Resultado:
- Construye la aplicación para el ambiente de desarrollo
- Prepara el despliegue a staging (puede configurarse con un servidor de staging)

### 3. **Despliegue a Producción (main)**
Se ejecuta automáticamente cuando:
- Se hace `push` a la rama `main`
- Las pruebas de CI han pasado exitosamente

#### Resultado:
- Construye la aplicación para producción
- **Despliega automáticamente a GitHub Pages**
- La aplicación estará disponible en: `https://[username].github.io/[repository-name]`

## 🔒 Validaciones GitFlow

### Pull Requests hacia `main`:
✅ **Permitidos desde:**
- `develop`
- `hotfix/*`
- `release/*`

❌ **Bloqueados desde:**
- `feature/*`
- Cualquier otra rama

### Pull Requests hacia `develop`:
✅ **Permitidos desde:**
- `feature/*`
- `hotfix/*`
- `release/*`

❌ **Bloqueados desde:**
- `main`
- Cualquier otra rama

## ⚙️ Configuración Requerida

### 1. Scripts en package.json
Asegúrate de tener estos scripts configurados:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "test": "echo \"No tests specified\" && exit 0",
    "preview": "vite preview"
  }
}
```

### 2. GitHub Pages
Para habilitar el despliegue automático a GitHub Pages:

1. Ve a **Settings** → **Pages** en tu repositorio
2. En **Source**, selecciona **GitHub Actions**
3. El pipeline se encargará del resto automáticamente

### 3. Permisos del Workflow
El token `GITHUB_TOKEN` ya tiene los permisos necesarios por defecto.

## 📊 Estados del Pipeline

### ✅ CI Exitoso
- Todas las verificaciones han pasado
- El código está listo para merger o desplegar

### ❌ CI Fallido
- Revisa los logs del workflow
- Posibles causas:
  - Errores de linting
  - Pruebas fallidas
  - Errores de construcción
  - Violaciones de GitFlow

### 🚀 Despliegue Exitoso
- La aplicación se ha desplegado correctamente
- Para `main`: disponible en GitHub Pages
- Para `develop`: preparado para staging

## 🔄 Flujo de Trabajo Recomendado

1. **Crear feature branch**: `git checkout -b feature/nueva-funcionalidad`
2. **Desarrollar y hacer commits**
3. **Push de la rama**: `git push origin feature/nueva-funcionalidad`
4. **Crear PR hacia develop**: El CI se ejecutará automáticamente
5. **Merge a develop**: Se desplegará a staging automáticamente
6. **Crear PR desde develop hacia main**: Para releases
7. **Merge a main**: Se desplegará a producción (GitHub Pages)

## 🛠️ Comandos Útiles

```bash
# Verificar estado del pipeline localmente
npm install
npm run lint
npm test
npm run build

# Ver logs del deployment
git log --oneline

# Verificar la aplicación desplegada
# https://[tu-usuario].github.io/Generador_Contraseña
```

## 📝 Notas Importantes

- **Los deployments automáticos solo ocurren en `main` y `develop`**
- **Las ramas feature solo ejecutan CI, no deploys**
- **Siempre revisa los logs si hay fallos**
- **El pipeline respeta estrictamente las reglas de GitFlow**
