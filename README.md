# Shadow Market

Plantilla inicial de marketplace estático para publicar con **GitHub Pages**.

## Archivos

- `index.html`: página principal.
- `css/styles.css`: estilos y diseño adaptable a móviles.
- `js/app.js`: catálogo, filtros y demostración de registro/inicio de sesión.
- `assets/favicon.svg`: icono del sitio.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub, por ejemplo `shadow-market`.
2. Abre el repositorio y selecciona **Add file → Upload files**.
3. Sube el contenido de esta carpeta (el archivo `index.html` debe quedar en la raíz del repositorio).
4. Entra en **Settings → Pages**.
5. En **Build and deployment**, elige **Deploy from a branch**.
6. Selecciona la rama `main` y la carpeta `/ (root)`, y guarda.
7. Espera a que GitHub Pages publique el sitio.

## Limitaciones importantes

Esta versión es una **demostración frontend**. GitHub Pages solo aloja archivos estáticos: no ejecuta código de servidor ni proporciona una base de datos privada.

El registro de demostración usa `localStorage` del navegador. Las cuentas no se comparten entre dispositivos ni usuarios, y las contraseñas quedan almacenadas localmente sin protección. **No uses contraseñas reales ni información personal.** No hay todavía pagos, pedidos reales, mensajería, moderación segura ni panel de administración privado.

Para convertirlo en un marketplace real se necesita conectar un backend y una base de datos con autenticación segura, permisos de administrador y reglas de acceso. Nunca guardes contraseñas de propietario ni secretos en archivos públicos de GitHub.
