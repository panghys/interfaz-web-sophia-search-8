# Proyecto de interfaz Sophia Search
Implementación historias de usuario H3T2 y H3T5

## Tareas realizadas

- Implementar un front-end para visualizar los planes disponibles y poder solicitar uno
- Implementar un front-end para que el usuario suba un comprobante de pago

## Como ejecutar

En la carpeta raíz, ejecutar
- ```npm install```
- ```npm run dev```

## Estructura de archivos

El proyecto sigue la estructura estándar de Next.js 14 con App Router

```
interfaz-web-sophia-search-8/
├── src/
│   ├── app/                    # Páginas y rutas de la aplicación
│   │   ├── layout.js          # Layout raíz con configuración de fuentes
│   │   ├── page.js            # Página principal (/) - Vista de planes
│   │   ├── globals.css        # Estilos globales y personalizados
│   │   └── planpremium/       # Ruta /planpremium
│   │       ├── page.js        # Formulario de subida de comprobante
│   │       └── success/
│   │           └── page.js    # Página de confirmación
│   └── components/            # Componentes reutilizables
│       ├── Navbar.js          # Barra de navegación
│       ├── Footer.js          # Pie de página
│       └── Planes.js          # Tarjetas de planes con modal de términos y condiciones
├── public/                     # Recursos estáticos
│   └── fonts/                 # Fuentes personalizadas
└── [archivos de configuración]
```

## Páginas principales (src/app/)

- page.js - Página de planes

    - Página principal en la ruta ```/```

- planpremium/page.js - Subida de comprobante

    - Ruta /planpremium
    - Formulario para cargar comprobante de pago (PNG, JPG, PDF)

- planpremium/success/page.js - Confirmación

    - Ruta /planpremium/success
    - Página de confirmación tras envío del comprobante

## Componentes reutilizables (src/components/)

- Navbar.js

    - Barra de navegación superior
    - Enlaces a: Catálogo, Planes
    - Planes.js

- Planes.js
    - Dos tarjetas de planes:
      - Plan Gratuito: funcionalidades básicas sin costo
      - Sophia Premium: características avanzadas ($93.999 anual)

    - Modal popup con Términos y Condiciones

- Footer.js
    - Pie de página con logo
    - Enlaces a redes sociales (Instagram, Facebook, LinkedIn, YouTube)
    - Menús de navegación: Principal y Otros
    - Enlaces a T&C, política de privacidad, contacto
