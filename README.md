Este es un proyecto de [Next.js](https://nextjs.org/) creado para mostrar una lista de libros y permitir a los usuarios crear, editar, eliminar, o ver los libros de la lista.

## Getting Started

Clona el proyecto, instala dependecias, crear un archivo .env.local y ejecutalo:

```bash
# Clonar proyecto
git clone "url"
# Instalar dependencias
npm install
# Crea un archivo .env.local con la variable NEXT_PUBLIC_BASE_API_URL
NEXT_PUBLIC_BASE_API_URL=urlApi
# Ejecutar Proyecto
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) En tu navegador para ver el resultado.

## Home

Aquí se mostraran todos lo libros

## Favoritos

Aquí se mostraran todos lo libros marcados como favoritos

## /Libro/:slug

Se mostrara el detalle del libro
