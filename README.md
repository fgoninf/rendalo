# Descripcion

El proyecto esta compuesto por 2 carpetas:
- nest-api: RESTful API project 
- react-ui: UI in react

cada uno de los proyectos posee un Dockerfile y un docker-compose.yaml para poder ejecutarlos facilmente utilizando Docker, sin embargo ambos se pueden ejecutar utilizando nodejs.

La Base de Datos es una base de datos mysql, la cual fue creada en https://db4free.net/

## Base de datos

https://db4free.net/

### credenciales

{
    host: "db4free.net",
    port: 3306,
    username: "fgonsalas",
    password: "testdatabase",
    database: "fgonzalezdb"
}

## Nest-API

Default PORT: 8080

Ésta puede ser ejecutada de 2 formas:

### Nodejs

Primero:

```

npm run build

```

y luego:

```

npm run start:prod

```


### Docker 

```

sudo docker-compose -f "docker-compose.yaml" up -d --build

```


## React-UI

Ésta puede ser ejecutada de 2 formas:

### Nodejs

Este comando utilizará por defecto el proxy definido en package.json.
Si se requiere cambiar la URL base para apuntar a la API en una nueva ruta, por favor actualizar el proxy.

```

npm start

```


### Docker 

Este comando utilizará por defecto la URL definida en Dockerfile. Si está necesita ser actualizada, por favor editar el archivo Dockerfile

Default URL: REACT_APP_BASE_URL=http://localhost:8080

```

sudo docker-compose -f "docker-compose.yaml" up -d --build

```