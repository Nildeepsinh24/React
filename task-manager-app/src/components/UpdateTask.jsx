import { useState, useEffect } from 'react';
import { FiX, FiEdit3, FiCalendar, FiFlag, FiBookmark, FiActivity } from 'react-icons/fi';

export default function UpdateTask({ isOpen, onClose, task, onUpdateTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('medium');
  const [category, setCategory] = useState('Work');
  const [status, setStatus] = useState('pending');
  const [error, setError] = useState('');

  // Hydrate fields when task is passed
  useEffect(() => {
    if (task) {
      setTitle(task.title || '');
      setDescription(task.description || '');
      setDueDate(task.dueDate || '');
      setPriority(task.priority || 'medium');
      setCategory(task.category || 'Work');
      setStatus(task.status || 'pending');
      setError('');
    }
  }, [task, isOpen]);

  if (!isOpen || !task) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Task Title is required');
      return;
    }
    if (!dueDate) {
      setError('Due Date is required');
      return;
    }

    onUpdateTask(task.id, {
      ...task,
      title,
      description,
      dueDate,
      priority,
      category,
      status,
    });

    onClose();
  };

  const categories = ['Work', 'Personal', 'Urgent', 'Study', 'Finance', 'Life'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl shadow-2xl transition-all transform scale-100 duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center space-x-2">
            <FiEdit3 className="w-6 h-6 text-violet-500" />
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Update Task Details</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          {error && (
            <div className="p-3 text-sm text-red-600 bg-red-50 dark:bg-red-950/20 dark:text-red-400 rounded-xl border border-red-200/50 dark:border-red-900/50">
              {error}
            </div>
          )}

          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
              Task Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 dark:focus:ring-violet-500/20 transition-all text-slate-800 dark:text-slate-100"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
              Description
            </label>
            <textarea
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 dark:focus:ring-violet-500/20 transition-all text-slate-800 dark:text-slate-100"
            />
          </div>

          {/* Status Tracker */}
          <div>
            <label className="flex items-center text-sm font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
              <FiActivity className="mr-1.5 text-slate-400" />
              Task Status
            </label>
            <div className="grid grid-cols-3 gap-2 bg-slate-100 dark:bg-slate-950 p-1 rounded-xl border border-slate-200/50 dark:border-slate-800/50">
              {[
                { value: 'pending', label: 'Pending', color: 'hover:bg-slate-200 dark:hover:bg-slate-800' },
                { value: 'in_progress', label: 'In Progress', color: 'hover:bg-sky-200 dark:hover:bg-sky-950/20' },
                { value: 'completed', label: 'Completed', color: 'hover:bg-emerald-200 dark:hover:bg-emerald-950/20' }
              ].map((s) => (
                <button
                  key={s.value}
                  type="button"
                  onClick={() => setStatus(s.value)}
                  className={`py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 ${
                    status === s.value
                      ? s.value === 'completed'
                        ? 'bg-emerald-500 text-white shadow-sm'
                        : s.value === 'in_progress'
                        ? 'bg-sky-500 text-white shadow-sm'
                        : 'bg-slate-500 text-white shadow-sm'
                      : `text-slate-500 dark:text-slate-400 ${s.color}`
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Due Date & Priority Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Due Date */}
            <div>
              <label className="flex items-center text-sm font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
                <FiCalendar className="mr-1.5 text-slate-400" />
                Due Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 dark:focus:ring-violet-500/20 transition-all text-slate-800 dark:text-slate-100 cursor-pointer"
              />
            </div>

            {/* Priority */}
            <div>
              <label className="flex items-center text-sm font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
                <FiFlag className="mr-1.5 text-slate-400" />
                Priority Level
              </label>
              <div className="flex bg-slate-100 dark:bg-slate-950 p-1 rounded-xl border border-slate-200/50 dark:border-slate-800/50">
                {['low', 'medium', 'high'].map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPriority(p)}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                      priority === p
                        ? p === 'high'
                          ? 'bg-red-500 text-white shadow-sm'
                          : p === 'medium'
                          ? 'bg-amber-500 text-white shadow-sm'
                          : 'bg-emerald-500 text-white shadow-sm'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Category List */}
          <div>
            <label className="flex items-center text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">
              <FiBookmark className="mr-1.5 text-slate-400" />
              Category
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                    category === c
                      ? 'bg-violet-100 text-violet-700 border-violet-500 dark:bg-violet-950/40 dark:text-violet-300 dark:border-violet-600'
                      : 'bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-950 dark:text-slate-400 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end space-x-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-violet-600 text-white font-semibold text-sm hover:bg-violet-500 active:scale-98 transition-all shadow-lg shadow-violet-500/20"
            >
              Update Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
