# Cómo activar GitHub Pages para este repositorio

Guía paso a paso para publicar `index.html` (y `css/`, `js/`) como sitio web usando GitHub Pages.

## 1. Sube tus cambios a GitHub

Si aún no lo has hecho, sube el commit local al repositorio remoto:

```bash
git push
```

Esto sube los archivos a la rama `main` de `Rubenbootcamp/demo` en GitHub.

## 2. Entra a la configuración del repositorio

1. Ve a `https://github.com/Rubenbootcamp/demo`.
2. Haz clic en la pestaña **Settings** (⚙️), en la barra superior del repositorio.

## 3. Abre la sección Pages

En el menú lateral izquierdo de Settings, busca y haz clic en **Pages** (dentro de la sección "Code and automation").

## 4. Configura la fuente del sitio

En **Build and deployment**:

1. En **Source**, selecciona **Deploy from a branch**.
2. En **Branch**, elige:
   - Rama: `main`
   - Carpeta: `/ (root)` — porque `index.html` está en la raíz del repo.
3. Haz clic en **Save**.

## 5. Espera el despliegue

GitHub tardará uno o dos minutos en construir y publicar el sitio. Puedes ver el progreso en la pestaña **Actions** del repositorio (se genera un workflow llamado *pages build and deployment*).

## 6. Visita tu sitio publicado

Cuando termine, en la misma página de **Settings → Pages** aparecerá un mensaje como:

> Your site is live at `https://rubenbootcamp.github.io/demo/`

Abre esa URL para ver tu portafolio en línea.

## 7. Actualizar el sitio en el futuro

Cada vez que quieras publicar cambios nuevos:

```bash
git add .
git commit -m "Actualizo contenido del sitio"
git push
```

GitHub Pages se reconstruye automáticamente con cada push a `main`.

## Notas

- Si `index.html` estuviera dentro de una subcarpeta (por ejemplo `docs/`), tendrías que elegir esa carpeta en el paso 4 en lugar de `/ (root)`.
- El sitio es público mientras el repositorio sea público. Si el repositorio es privado, GitHub Pages gratuito no estará disponible salvo que tengas un plan que lo permita.
- Puede tardar unos minutos en verse el DNS/caché actualizado la primera vez.
