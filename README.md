
//preguntar duda user   <-------------------

**Planificación de endpoints SERVER:** 


    //AUTH

| HTTP METHOD | URI PATH             | DESCRIPTION           |
|-------------|----------------------|-----------------------|
| POST        | `/signup`            | Registro de Usuario   |
| POST        | `/login`             | Inicio de Sesión      |
| GET         | `/verify`            | Verificación de Token | 


| HTTP METHOD   | URI PATH                       | DESCRIPTION                                                           |  
|---------------|--------------------------------|-----------------------------------------------------------------------|
| GET           | `/api/discotecas`              | Obtener la lista de todas las discotecas                              |
| GET           | `/api/users`                   | Obtener la lista de todos los users                                   |
| GET           | `/api/discotecas/:id`          | Obtener detalles de una discoteca específica por ID                   |
| POST          | `/api/discotecas/create`       | Crear una nueva discoteca                                             |
| PUT           | `/api/discotecas/edit/:id`     | Actualizar perfil de discoteca                                        |
| PUT           | `/api/users/edit/:id`          | Actualizar perfil de usuario                                          |
| GET           | `/api/packs-oferta`            | Obtener la lista de todos los packs de oferta                         |
| GET           | `/api/packs-oferta/:id`        | Obtener detalles de un pack de oferta por ID                          |
| POST          | `/api/packs-oferta/create`     | Crear un nuevo pack de oferta (Perfil de Discoteca)                   |
| PUT           | `/api/packs-oferta/edit/:id`   | Actualizar detalles de un pack de oferta por ID (Perfil de Discoteca) |
| DELETE        | `/api/packs-oferta/delete/:id` | Eliminar un pack de oferta por ID (Perfil de Discoteca)               |


**Planificación de endpoints CLIENT:** 


| HTTP METHOD       |  DESCRIPTION                                         |  PROTECTED |   
|-------------------|------------------------------------------------------|------------|
| `/`               | HomePage                                             |            |   
| `/registro`       | Registro de usuarios                                 |            |   
| `/inicio-sesion`  | Inicio sesion de usuario                             |            |   
| `/perfil/:id`     | Actualizar detalles de una discoteca por ID          |     ✅     |   
| `/discoteca/:id`  | Vista detalles y realizar la compra del pack         |            |   




