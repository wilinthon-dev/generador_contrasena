# GitFlow - Guía de Uso

## Estructura de Ramas

### Ramas Principales
- **`main`**: Rama de producción (siempre estable)
- **`develop`**: Rama de desarrollo (integración continua)

### Ramas de Apoyo
- **`feature/*`**: Nuevas funcionalidades
- **`release/*`**: Preparación de versiones
- **`hotfix/*`**: Correcciones críticas

## Comandos GitFlow

### Inicializar una Feature
```bash
# Crear rama feature desde develop
git checkout develop
git pull origin develop
git checkout -b feature/nueva-funcionalidad

# Trabajar en la funcionalidad...
git add .
git commit -m "feat: implementar nueva funcionalidad"

# Subir feature al repositorio
git push -u origin feature/nueva-funcionalidad
```

### Finalizar una Feature
```bash
# Crear Pull Request desde GitHub
# feature/nueva-funcionalidad → develop

# Después del merge, limpiar
git checkout develop
git pull origin develop
git branch -d feature/nueva-funcionalidad
```

### Crear un Release
```bash
# Crear rama release desde develop
git checkout develop
git pull origin develop
git checkout -b release/v1.0.0

# Hacer ajustes finales, actualizar versión...
git add .
git commit -m "chore: preparar release v1.0.0"

# Subir release
git push -u origin release/v1.0.0
```

### Finalizar un Release
```bash
# 1. PR: release/v1.0.0 → develop
# 2. PR: release/v1.0.0 → main
# 3. Crear tag en main
git checkout main
git pull origin main
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
```

### Crear un Hotfix
```bash
# Crear hotfix desde main
git checkout main
git pull origin main
git checkout -b hotfix/fix-critical-bug

# Corregir el bug...
git add .
git commit -m "fix: corregir bug crítico"

# Subir hotfix
git push -u origin hotfix/fix-critical-bug
```

### Finalizar un Hotfix
```bash
# 1. PR: hotfix/fix-critical-bug → main
# 2. PR: hotfix/fix-critical-bug → develop
# 3. Crear tag si es necesario
git checkout main
git pull origin main
git tag -a v1.0.1 -m "Hotfix v1.0.1"
git push origin v1.0.1
```

## Convenciones de Commits

### Tipos de Commits
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Documentación
- `style`: Cambios de formato
- `refactor`: Refactorización
- `test`: Añadir tests
- `chore`: Tareas de mantenimiento

### Formato
```
tipo(scope): descripción corta

Descripción detallada opcional.

Fixes #123
```

## Pull Request Template

### Para Features
```markdown
## Descripción
Breve descripción de la funcionalidad implementada.

## Cambios
- [ ] Nueva funcionalidad X
- [ ] Tests añadidos
- [ ] Documentación actualizada

## Testing
- [ ] Tests unitarios pasan
- [ ] Tests de integración pasan
- [ ] Pruebas manuales realizadas

## Screenshots (si aplica)
```

### Para Hotfixes
```markdown
## Bug Fix
Descripción del bug corregido.

## Impacto
- Severidad: Alta/Media/Baja
- Usuarios afectados: 
- Ambiente: Producción/Staging

## Solución
Descripción de la solución implementada.

## Testing
- [ ] Fix verificado
- [ ] Regresión verificada
```

## Automatización

El workflow de GitHub Actions valida automáticamente:
- ✅ Estructura correcta de ramas
- ✅ Tests y linting
- ✅ Reglas de merge entre ramas
- ✅ Despliegues automáticos
