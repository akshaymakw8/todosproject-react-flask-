# todo-React/flask
A simple To-do Flask webapp that uses keycloak for Authentication to let the user log in and add a to-do with title, description and time. All the API calls must be handled by Graphql only. There will be a option to buy a Pro license that will enable user to upload images in To-Do as well.
Minimum Requirements: 
1.	Each of the To-Do will have 3 field:
a.	Title
b.	Description
c.	Time
d.	Images (Pro license)
2.	There will Following operation that a user can do:
a.	List all To-Do.
b.	Add a To-Do.
c.	Delete a To-Do.
d.	Edit a To-Do.
3.	User must have to login with keycloak first to do any of the above operation.
4.	Every Graphql endpoint must be secured by keycloak.
5.	Option to buy a Pro license with Stripe payment.
