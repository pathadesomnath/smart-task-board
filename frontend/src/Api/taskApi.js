const API = "/tasks";

export async function getTasks() {
    const response = await fetch(API);
    return await response.json();
}

export async function addTask(task) {
    const response = await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
    });

    return await response.json();
}

export async function toggleTask(id) {
    const response = await fetch(`${API}/${id}`, {
        method: "PUT",
    });

    return await response.json();
}

export async function deleteTask(id) {
    await fetch(`${API}/${id}`, {
        method: "DELETE",
    });
}