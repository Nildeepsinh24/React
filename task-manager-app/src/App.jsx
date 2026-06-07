import { useState, useEffect } from 'react';
import { api } from './utils/api';
import LayoutTask from './components/LayoutTask';
import AddTask from './components/AddTask';
import UpdateTask from './components/UpdateTask';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  
  // Theme state: defaults to dark if preferred or saved, otherwise light
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Fetch tasks on mount
  useEffect(() => {
    const fetchTasks = async () => {
      const data = await api.getTasks();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  // Update theme class on HTML document element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Task Actions Handlers
  const handleAddTask = async (taskData) => {
    const added = await api.addTask(taskData);
    setTasks((prev) => [...prev, added]);
  };

  const handleUpdateTask = async (id, updatedData) => {
    const updated = await api.updateTask(id, updatedData);
    setTasks((prev) => prev.map((t) => (t.id === id ? updated : t)));
    setEditingTask(null);
  };

  const handleDeleteTask = async (id) => {
    const deletedId = await api.deleteTask(id);
    setTasks((prev) => prev.filter((t) => t.id !== deletedId));
  };

  const handleToggleComplete = async (id) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    const updatedStatus = task.status === 'completed' ? 'pending' : 'completed';
    const updatedTask = { ...task, status: updatedStatus };
    
    // Optimistic UI update
    setTasks((prev) => prev.map((t) => (t.id === id ? updatedTask : t)));

    // Sync back to db/localStorage
    await api.updateTask(id, updatedTask);
  };

  return (
    <>
      <LayoutTask
        tasks={tasks}
        onAddTaskClick={() => setIsAddModalOpen(true)}
        onEditTaskClick={(task) => setEditingTask(task)}
        onDeleteConfirm={handleDeleteTask}
        onToggleComplete={handleToggleComplete}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />

      {/* Add Task Modal overlay */}
      <AddTask
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddTask={handleAddTask}
      />

      {/* Edit Task Modal overlay */}
      <UpdateTask
        isOpen={!!editingTask}
        onClose={() => setEditingTask(null)}
        task={editingTask}
        onUpdateTask={handleUpdateTask}
      />
    </>
  );
}
