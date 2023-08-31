import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
	state: () => {
		const tasks = [];
		const tasksDesc = [];

		return { tasks, tasksDesc };
	},
	actions: {
		addTaskInStore(texter: string, desc: string, done: boolean, doneDesc: boolean ): void {
			// this.tasks.push({ text: "text",  done: done });
			console.log("checki" + desc);
			this.tasks.push({ text: texter,  done: done });
			this.tasksDesc.push({ text: desc,  done: done });

			
			//this.tasksDesc.push({ desc: desc, done: done });			
		},
		deleteTaskFromStore(taskIndex: number) {
			this.tasks.splice(taskIndex, 1);
		},
		changeTaskStatus(taskIndex: number) {
			this.tasks[taskIndex].done = !this.tasks[taskIndex].done;
		},
		changeTaskText(newText: string, taskIndex: number) {
			if (newText) this.tasks[taskIndex].text = newText.trim();
			else this.tasks[taskIndex].text = "🐢 No empty tasks!";
		},
		getTasksFromLocalStorage() {
			const tasksInStorage = localStorage.getItem("tasks");
			if (process.client) {
				if (tasksInStorage) this.tasks = JSON.parse(tasksInStorage);
				else
					localStorage.setItem(
						"tasks",
						JSON.stringify([
							{ text: "Give a star to the project :>", done: false },
						])
					);
			}
		},
		updateTasksInLocalStorage() {
			if (process.client) {
				localStorage.setItem("tasks", JSON.stringify(this.tasks));
			}
		},
	},
	getters: {
		getTasksTodo() {
			return this.tasks.filter((task) => !task.done) || [];
		},
		// @bug yoooooo funktions falscher inhalt
		getTasksDescTodo() {
			return this.tasksDesc.filter((tasksDesc) => !tasksDesc.done) || [];
		},
		getDoneTasks() {
			return this.tasks.filter((task) => task.done) || [];
		},
		getDoneDescTasks() {
			return this.tasksDesc.filter((tasksDesc) => tasksDesc.done) || [];
		},
	},
});
