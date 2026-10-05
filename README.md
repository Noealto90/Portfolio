# Noelia Alpízar — Portfolio

Portafolio personal de Noelia María Alpízar Torres, ingeniera en computación y desarrolladora full-stack.

## Stack

- React 18 + Vite
- CSS personalizado responsive, modo claro/oscuro y animaciones
- Lucide React para iconografía
- GitHub Pages mediante GitHub Actions

## Desarrollo local

```bash
npm install
npm run dev
```

## Producción

```bash
npm run build
npm run preview
```

El workflow en `.github/workflows/deploy.yml` publica automáticamente `dist` en GitHub Pages al hacer push a `master` o `main`. En la configuración del repositorio, selecciona **Settings → Pages → GitHub Actions** como fuente.
