#Routers and Controllers

Click the start button and run the server

Interact with the routes via Postman. You will find the URL on the right side of your screen after you open the Repl.it (top-right).
Verify that all the routes work as intended

Test /users, /users/2

Move the routes in index.js over to the 
routes/users.js folder and import/require() them back into index.js using const users = require('./routers/users.js') & app.use()

Move the (req, res) => {} functions out of the routes and into the controllers/ folder. Then import these back into the routes/ folder as you did before and use as expected: app.get('/users', usersController.list)

If everything was done correctly the app will function exactly as it was in the beginning.

Test with Postman as you do each small step. TEST! TEST!! TEST!!

Once you've move your routes and built your controllers practice building the routes to create a user!!

Remember to reference your docs!!