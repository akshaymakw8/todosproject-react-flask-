import data as data

from api import app, db
from api import models
from unittest  import  main

#set FLASK_ENV=main.py

from ariadne import load_schema_from_path, make_executable_schema, \
    graphql_sync, snake_case_fallback_resolvers, ObjectType
from ariadne.constants import PLAYGROUND_HTML
from flask import request, jsonify
from api.queries import resolve_todos

query = ObjectType("Query")

query.set_field("todos", resolve_todos)

type_defs = load_schema_from_path("schema.graphql")
schema = make_executable_schema(
    type_defs, query, snake_case_fallback_resolvers
)


from api.queries import resolve_todos, resolve_todo

...

query.set_field("todo", resolve_todo)

from api import app, db
from api import models
from ariadne import load_schema_from_path, make_executable_schema, \
    graphql_sync, snake_case_fallback_resolvers, ObjectType
from ariadne.constants import PLAYGROUND_HTML
from flask import request, jsonify
from api.queries import resolve_todos, resolve_todo
from api.mutations import resolve_create_todo

query = ObjectType("Query")

query.set_field("todos", resolve_todos)
query.set_field("todo", resolve_todo)

mutation = ObjectType("Mutation")
mutation.set_field("createTodo", resolve_create_todo)

type_defs = load_schema_from_path("schema.graphql")
schema = make_executable_schema(
    type_defs, query, mutation, snake_case_fallback_resolvers
)

from api.mutations import resolve_create_todo, resolve_mark_done

...

mutation.set_field("markDone", resolve_mark_done)

from api.mutations import resolve_create_todo, resolve_mark_done, \
    resolve_delete_todo, resolve_update_due_date

...

mutation.set_field("updateDueDate", resolve_update_due_date)

@app.route("/graphql", methods=["GET"])
def graphql_playground():
    return PLAYGROUND_HTML, 200


@app.route("/graphql", methods=["POST"])
def graphql_server():
    data = request.get_json()