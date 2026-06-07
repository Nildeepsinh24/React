import axios from 'axios';

const API_URL = 'http://127.0.0.1:3000/tasks';

// Initial fallback tasks for a wonderful premium first-time experience
const INITIAL_TASKS = [
  {
    id: 'task-1',
    title: 'Design Premium Dashboard UI Layout',
    description: 'Create a gorgeous, glassmorphic dark/light mode React dashboard using Tailwind CSS v4.',
    dueDate: '2026-05-25',
    priority: 'high',
    status: 'in_progress',
    category: 'Work',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'task-2',
    title: 'Integrate SweetAlert2 for Delete Confirmations',
    description: 'Replace standard browser confirm dialogs with highly animated, sleek SweetAlert2 boxes.',
    dueDate: '2026-05-26',
    priority: 'medium',
    status: 'pending',
    category: 'Urgent',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'task-3',
    title: 'Build Responsive Navigation Header',
    description: 'Ensure header has links for Adding Tasks, Managing Tasks, and updating lists dynamically with active count markers.',
    dueDate: '2026-05-23',
    priority: 'high',
    status: 'completed',
    category: 'Study',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'task-4',
    title: 'Organize Weekly Finances & Budget',
    description: 'Review outstanding project expenses, calculate team milestones, and document next sprint allocations.',
    dueDate: '2026-05-30',
    priority: 'low',
    status: 'pending',
    category: 'Finance',
    createdAt: new Date().toISOString(),
  }
];

// Initialize localStorage if empty
if (!localStorage.getItem('task_manager_tasks')) {
  localStorage.setItem('task_manager_tasks', JSON.stringify(INITIAL_TASKS));
}

// Helper to get local tasks
const getLocalTasks = () => {
  return JSON.parse(localStorage.getItem('task_manager_tasks') || '[]');
};

// Helper to save local tasks
const saveLocalTasks = (tasks) => {
  localStorage.setItem('task_manager_tasks', JSON.stringify(tasks));
};

export const api = {
  /**
   * Fetch all tasks from server or fallback to local storage
   */
  async getTasks() {
    try {
      const response = await axios.get(API_URL, { timeout: 5000 });
      // Keep local storage in sync as a backup
      saveLocalTasks(response.data);
      return response.data;
    } catch (error) {
      console.warn('json-server not running on port 3000. Falling back to LocalStorage.', error.message);
      return getLocalTasks();
    }
  },

  /**
   * Add a new task
   */
  async addTask(task) {
    const newTask = {
      ...task,
      id: task.id || `task-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await axios.post(API_URL, newTask, { timeout: 5000 });
      // Update local storage
      const local = getLocalTasks();
      saveLocalTasks([...local, response.data]);
      return response.data;
    } catch (error) {
      console.warn('Adding task to LocalStorage (json-server offline).');
      const local = getLocalTasks();
      const updated = [...local, newTask];
      saveLocalTasks(updated);
      return newTask;
    }
  },

  /**
   * Update an existing task
   */
  async updateTask(id, updatedTask) {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedTask, { timeout: 5000 });
      // Update local storage
      const local = getLocalTasks();
      const updated = local.map(t => t.id === id ? response.data : t);
      saveLocalTasks(updated);
      return response.data;
    } catch (error) {
      console.warn('Updating task in LocalStorage (json-server offline).');
      const local = getLocalTasks();
      const updated = local.map(t => t.id === id ? { ...t, ...updatedTask } : t);
      saveLocalTasks(updated);
      return { id, ...updatedTask };
    }
  },

  /**
   * Delete a task
   */
  async deleteTask(id) {
    try {
      await axios.delete(`${API_URL}/${id}`, { timeout: 5000 });
      // Update local storage
      const local = getLocalTasks();
      const filtered = local.filter(t => t.id !== id);
      saveLocalTasks(filtered);
      return id;
    } catch (error) {
      console.warn('Deleting task from LocalStorage (json-server offline).');
      const local = getLocalTasks();
      const filtered = local.filter(t => t.id !== id);
      saveLocalTasks(filtered);
      return id;
    }
  }
};
