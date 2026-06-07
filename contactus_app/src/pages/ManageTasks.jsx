import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export default function ManageTasks() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  
  // Edit Form State
  const [editTitle, setEditTitle] = useState('');
  const [editDate, setEditDate] = useState('');
  const [editPriority, setEditPriority] = useState('');
  const [editDetails, setEditDetails] = useState('');

  // Load tasks from localStorage
  const loadTasks = () => {
    try {
      const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      setTasks(storedTasks);
    } catch (error) {
      console.error('Failed to load tasks:', error);
      setTasks([]);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  // Delete Task
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      const updatedTasks = tasks.filter(task => task.id !== id);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      setTasks(updatedTasks);
      toast.success('Task deleted successfully!');
    }
  };

  // Open Edit Modal
  const openEditModal = (task) => {
    setEditingTask(task);
    setEditTitle(task.title);
    setEditDate(task.date);
    setEditPriority(task.priority);
    setEditDetails(task.details || '');
  };

  // Close Edit Modal
  const closeEditModal = () => {
    setEditingTask(null);
  };

  // Save Edited Task
  const handleSaveEdit = (e) => {
    e.preventDefault();

    if (!editTitle.trim()) {
      toast.error('Task title is required!');
      return;
    }
    if (!editDate) {
      toast.error('Task date is required!');
      return;
    }
    if (!editPriority) {
      toast.error('Please select priority!');
      return;
    }

    const updatedTasks = tasks.map(task => {
      if (task.id === editingTask.id) {
        return {
          ...task,
          title: editTitle.trim(),
          date: editDate,
          priority: editPriority,
          details: editDetails.trim()
        };
      }
      return task;
    });

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
    toast.success('Task updated successfully!');
    closeEditModal();
  };

  // Helper classes for priority badge coloring
  const priorityBadge = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700 border border-red-200';
      case 'medium':
        return 'bg-amber-100 text-amber-700 border border-amber-200';
      case 'low':
        return 'bg-green-100 text-green-700 border border-green-200';
      default:
        return 'bg-slate-100 text-slate-700 border border-slate-200';
    }
  };

  return (
    <main className="max-w-6xl mx-auto p-4 sm:p-6 mt-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">Manage Tasks</h2>

      <div className="space-y-4 w-150 max-w-2xl mx-auto px-2">
        {/* Table Header - Visible on tablet/desktop, hidden on mobile */}
        {tasks.length > 0 && (
          <div className="hidden sm:grid grid-cols-12 bg-indigo-600 text-white p-3.5 rounded-lg text-center font-semibold text-lg shadow-sm">
            <div className="col-span-5 text-left ps-4">Your Tasks</div>
            <div className="col-span-3">Date</div>
            <div className="col-span-2">Priority</div>
            <div className="col-span-2">Actions</div>
          </div>
        )}

        {/* Task Rows */}
        {tasks.length > 0 ? (
          tasks.map(task => (
            <div 
              key={task.id} 
              className="bg-white p-4 rounded-xl shadow-sm hover:shadow transition duration-200 border border-slate-100 flex flex-col sm:grid sm:grid-cols-12 items-center gap-3 text-center sm:text-left"
            >
              {/* Task Title & Details */}
              <div className="col-span-5 w-full flex flex-col items-center sm:items-start text-left ps-2 sm:ps-4">
                <span className="font-semibold text-slate-800 text-lg block">{task.title}</span>
                {task.details && (
                  <span className="text-xs text-slate-400 mt-0.5 line-clamp-1">{task.details}</span>
                )}
              </div>

              {/* Task Date */}
              <div className="col-span-3 text-slate-500 font-medium text-sm">
                {task.date}
              </div>

              {/* Priority Badge */}
              <div className="col-span-2">
                <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${priorityBadge(task.priority)}`}>
                  {task.priority}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="col-span-2 flex gap-3 justify-center">
                {/* Edit Button */}
                <button 
                  onClick={() => openEditModal(task)}
                  className="text-blue-500 hover:text-blue-700 transition cursor-pointer p-1"
                  title="Edit Task"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 h-5 fill-current">
                    <path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
                  </svg>
                </button>
                {/* Delete Button */}
                <button 
                  onClick={() => handleDelete(task.id)}
                  className="text-red-500 hover:text-red-700 transition cursor-pointer p-1"
                  title="Delete Task"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-current">
                    <path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" />
                  </svg>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-xl border border-slate-100 p-8 text-center text-slate-500 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto text-slate-300 mb-3 animate-bounce">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.377 2.24a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.467 5.504A3 3 0 0 0 6.5 12h-2m-1.5 0a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3m15 0a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h2.25" />
            </svg>
            <p className="font-semibold text-lg text-slate-700">No Tasks Found</p>
            <p className="text-sm mt-1 text-slate-400">Add some tasks from the home page to get started!</p>
          </div>
        )}
      </div>

      {/* Edit Task Modal */}
      {editingTask && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 border border-slate-100 transform scale-100 transition-all">
            <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-3">
              <h3 className="text-xl font-bold text-slate-800">Edit Task</h3>
              <button 
                onClick={closeEditModal}
                className="text-slate-400 hover:text-slate-600 transition bg-transparent border-0 cursor-pointer text-xl"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="flex flex-col gap-4">
              {/* Title */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Title</label>
                <input 
                  type="text" 
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50"
                  required
                />
              </div>

              {/* Date */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Due Date</label>
                <input 
                  type="date" 
                  value={editDate}
                  onChange={(e) => setEditDate(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 text-slate-700"
                  required
                />
              </div>

              {/* Priority */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Priority</label>
                <select 
                  value={editPriority}
                  onChange={(e) => setEditPriority(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 text-slate-700"
                  required
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              {/* Details */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Details</label>
                <textarea 
                  value={editDetails}
                  onChange={(e) => setEditDetails(e.target.value)}
                  rows="3"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 justify-end mt-4 border-t border-slate-100 pt-4">
                <button 
                  type="button"
                  onClick={closeEditModal}
                  className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition cursor-pointer"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
