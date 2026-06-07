import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function AddTask() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState('');
  const [details, setDetails] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.error('Task title is required!');
      return;
    }
    if (!date) {
      toast.error('Task date is required!');
      return;
    }
    if (!priority) {
      toast.error('Please select a task priority!');
      return;
    }

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      date,
      priority,
      details: details.trim()
    };

    try {
      const currentTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      currentTasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(currentTasks));
      
      toast.success('Task added successfully!');
      navigate('/tasks');
    } catch (error) {
      console.error('Failed to save task to localStorage:', error);
      toast.error('Failed to save task.');
    }
  };

  return (
    <main className="max-w-6xl mx-auto p-4 sm:p-6 flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl w-full mx-auto mt-6">
        {/* Left Side: Animated/Mockup Image */}
        <section className="flex justify-center">
          <img
            src="https://kit8.net/wp-content/uploads/2020/12/team_work@2x-1.png"
            alt="Todo Illustration"
            className="w-full max-w-md rounded-2xl shadow-lg object-cover transform hover:scale-[1.02] transition-transform duration-300"
          />
        </section>

        {/* Right Side: Form Card */}
        <section className="bg-white rounded-xl shadow-md p-6 border border-slate-100">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">Add New Task</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            
            {/* Title Input */}
            <div className="flex flex-col gap-1">
              <label htmlFor="taskTitle" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Title
              </label>
              <input
                id="taskTitle"
                type="text"
                name="taskTitle"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Task Title"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50"
              />
            </div>

            {/* Date Input */}
            <div className="flex flex-col gap-1">
              <label htmlFor="taskDate" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Due Date
              </label>
              <input
                id="taskDate"
                type="date"
                name="taskDate"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 text-slate-700"
              />
            </div>

            {/* Priority Selection */}
            <div className="flex flex-col gap-1">
              <label htmlFor="taskPriority" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Priority
              </label>
              <select
                id="taskPriority"
                name="taskPriority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 text-slate-700"
              >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            {/* Details Input */}
            <div className="flex flex-col gap-1">
              <label htmlFor="taskDetails" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Details
              </label>
              <textarea
                id="taskDetails"
                name="taskDetails"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Enter task details..."
                rows="3"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-2"
            >
              Add Task
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
