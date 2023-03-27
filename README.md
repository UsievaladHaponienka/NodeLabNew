## Nodelab, Lesson 2 - Nest.js

Simple project with for todo management.

#### Project setup and testing
 
 - git clone
 - npm install
 - configure database connection in .env and app.module.ts
 - npm run start
 - Import `Postman_Collection.json` file to Postman

#### Available actions (See Postman_Collection file)

 - Get all Todo's.
 - Get single Todo by id.
 - Create new Todo (you need to provide title and description in request body).
 - Update existent Todo (you need to provide title and/or description in request body).
 - Delete Todo by id.

If requested TODO is not found, corresponding method should be displayed in response.

#### Example of body params array to pass in create/update request:
```json
{
    "title": "Test Title Created",
    "description": "Test Description Created"
}
```
