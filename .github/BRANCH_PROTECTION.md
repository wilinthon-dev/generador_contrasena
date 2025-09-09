# Protección de Ramas - GitFlow

Este archivo documenta las reglas de protección de ramas configuradas para el flujo GitFlow.

## Configuración de Protección de Ramas

### Rama `main` (Producción)
- **Require pull request reviews before merging**: ✅ (mínimo 1 revisor)
- **Dismiss stale PR reviews**: ✅
- **Require review from code owners**: ✅
- **Restrict pushes that create files**: ✅
- **Require status checks to pass**: ✅
- **Require branches to be up to date**: ✅
- **Require conversation resolution**: ✅
- **Include administrators**: ✅

#### Ramas permitidas para merge hacia `main`:
- `develop` (para releases)
- `hotfix/*` (para correcciones críticas)
- `release/*` (para preparar versiones)

### Rama `develop` (Desarrollo)
- **Require pull request reviews before merging**: ✅ (mínimo 1 revisor)
- **Require status checks to pass**: ✅
- **Require branches to be up to date**: ✅
- **Include administrators**: ✅

#### Ramas permitidas para merge hacia `develop`:
- `feature/*` (para nuevas funcionalidades)
- `hotfix/*` (para correcciones que también van a main)
- `release/*` (para ajustes finales antes del release)

## Convenciones de Nombres de Ramas

### Feature Branches
```
feature/nombre-funcionalidad
feature/auth-login
feature/password-validation
```

### Hotfix Branches
```
hotfix/descripcion-bug
hotfix/fix-password-generation
hotfix/security-vulnerability
```

### Release Branches
```
release/version
release/v1.0.0
release/v1.2.3
```

## Flujo de Trabajo

1. **Desarrollo de funcionalidades**: `feature/*` → `develop`
2. **Preparación de versiones**: `release/*` → `develop` → `main`
3. **Correcciones críticas**: `hotfix/*` → `main` + `develop`

## Status Checks Requeridos

- ✅ GitFlow Workflow / validate-gitflow
- ✅ GitFlow Workflow / test
- ✅ GitFlow Workflow / validate-main-pr (para PRs hacia main)
- ✅ GitFlow Workflow / validate-develop-pr (para PRs hacia develop)
