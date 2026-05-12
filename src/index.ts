interface Todo {
  id: number;
  text: string;
  done: boolean;
}

class TodoList {
  private todos: Todo[] = [];
  private nextId = 1;

  add(text: string): void {
    this.todos.push({ id: this.nextId++, text, done: false });
  }

  list(): void {
    this.todos.forEach((t) =>
      console.log(`${t.id}. ${t.done ? "✓" : "○"} ${t.text}`),
    );
  }
}

const app = new TodoList();
app.add("Einkaufen");
app.add("Arbeiten");
app.add("Schlafen");
app.list();
