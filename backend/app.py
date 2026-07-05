from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

tasks = []
task_id = 1

@app.route("/")
def home():
    return jsonify({
        "message": "Task API is running!",
        "endpoints": [
            "GET /tasks",
            "POST /tasks",
            "PUT /tasks/<id>",
            "DELETE /tasks/<id>"
        ]
    })

@app.route("/tasks", methods=["GET"])
def get_tasks():
    return jsonify(tasks)


@app.route("/tasks", methods=["POST"])
def add_task():
    global task_id
    data = request.json

    task = {
        "id": task_id,
        "title": data.get("title", ""),
        "completed": False,
        "priority": data.get("priority", "low")  # ⭐ UNIQUE FEATURE
    }

    tasks.append(task)
    task_id += 1

    return jsonify(task)


@app.route("/tasks/<int:task_id>", methods=["PUT"])
def toggle_task(task_id):
    for task in tasks:
        if task["id"] == task_id:
            task["completed"] = not task["completed"]
            return jsonify(task)

    return jsonify({"error": "Task not found"}), 404


@app.route("/tasks/<int:task_id>", methods=["DELETE"])
def delete_task(task_id):
    global tasks
    tasks = [t for t in tasks if t["id"] != task_id]
    return jsonify({"message": "Deleted"})


if __name__ == "__main__":
    app.run(debug=True)