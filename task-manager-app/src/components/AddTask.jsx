import { useState } from 'react';
import { FiX, FiCheckSquare, FiCalendar, FiFlag, FiBookmark, FiPlusCircle } from 'react-icons/fi';

export default function AddTask({ isOpen, onClose, onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('medium');
  const [category, setCategory] = useState('Work');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Task Name is required');
      return;
    }
    if (!dueDate) {
      setError('Added Date is required');
      return;
    }

    onAddTask({
      title,
      description,
      dueDate,
      priority,
      category,
      status: 'pending',
    });

    // Reset fields
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('medium');
    setCategory('Work');
    setError('');
    onClose();
  };

  const categories = ['Work', 'Personal', 'Urgent', 'Study', 'Finance', 'Life'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
      {/* 2-Column Responsive Grid Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl shadow-2xl grid grid-cols-1 lg:grid-cols-12 animate-[scaleIn_0.3s_cubic-bezier(0.34,1.56,0.64,1)]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm"
        >
          <FiX className="w-5 h-5" />
        </button>

        {/* COLUMN 1: ANIMATED ILLUSTRATION GRID (Pulsing, floating workspace dashboard) */}
        <div className="hidden lg:flex lg:col-span-5 bg-gradient-to-br from-violet-600/95 to-indigo-700/95 p-8 flex-col justify-between relative overflow-hidden select-none">
          {/* Custom CSS for Vector Animations */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes float-slow {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-12px) rotate(2deg); }
            }
            @keyframes float-medium {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-8px) rotate(-1.5deg); }
            }
            @keyframes rotate-gear {
              100% { transform: rotate(360deg); }
            }
            @keyframes pulse-ring {
              0% { transform: scale(0.95); opacity: 0.2; }
              50% { transform: scale(1.05); opacity: 0.4; }
              100% { transform: scale(0.95); opacity: 0.2; }
            }
            .float-card-1 { animation: float-slow 4.5s infinite ease-in-out; }
            .float-card-2 { animation: float-medium 3.5s infinite ease-in-out; }
            .anim-gear { transform-origin: center; animation: rotate-gear 12s infinite linear; }
            .glowing-ring { animation: pulse-ring 4s infinite ease-in-out; }
          `}} />

          {/* Abstract light bursts background */}
          <div className="absolute top-[-20%] left-[-25%] w-[80%] h-[80%] bg-pink-500/20 rounded-full filter blur-[80px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-sky-400/20 rounded-full filter blur-[60px]" />

          {/* Heading */}
          <div className="relative z-10 space-y-1">
            <h4 className="text-white font-extrabold text-2xl tracking-tight">Task Creation</h4>
            <p className="text-violet-200 text-xs">Add items to manage details smoothly</p>
          </div>

          {/* Animated GIF Illustration */}
          <div className="relative my-6 flex items-center justify-center min-h-[220px]">
            {/* Glowing Backdrop Circle */}
            <div className="absolute w-48 h-48 rounded-full border-4 border-violet-400/20 animate-pulse flex items-center justify-center">
              <div className="w-40 h-40 rounded-full border-2 border-violet-400/30" />
            </div>

            <img
              src="https://blog.planview.com/wp-content/uploads/2017/08/Tip_1_Juggling-too-many-task-Gif_Twitter.gif"
              alt="Task Productivity Animation"
              className="w-full h-40 relative z-10 rounded-2xl shadow-2xl border-4 border-white/10 backdrop-blur-sm object-cover"
            />
          </div>

          {/* Bullet points info */}
          <div className="relative z-10 text-xs text-violet-200/80 space-y-2.5">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-ping" />
              <span>Priority Tags set specific focus levels</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>Auto-sync persistence layer</span>
            </div>
          </div>
        </div>

        {/* COLUMN 2: FORMS GRID (Glowing inputs and custom bounce-in fields) */}
        <div className="lg:col-span-7 p-8 flex flex-col justify-center">
          
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center space-x-2">
              <FiCheckSquare className="text-violet-600 dark:text-violet-400" />
              <span>Create Task</span>
            </h3>
            <p className="text-sm text-slate-400 mt-1">Configure your target task properties below.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-3 text-xs text-red-600 bg-red-50 dark:bg-red-950/20 dark:text-red-400 rounded-xl border border-red-200/50 dark:border-red-900/50 animate-shake">
                {error}
              </div>
            )}

            {/* Task Name (taskname) */}
            <div className="group relative">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 transition-colors group-focus-within:text-violet-500">
                Task Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter a descriptive task name..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:bg-white focus:outline-none focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500 dark:focus:ring-violet-500/10 transition-all text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-400"
                />
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-pink-500 group-focus-within:w-full group-focus-within:left-0 transition-all duration-300" />
              </div>
            </div>

            {/* Priority and Added Date Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Added Date (dueDate) */}
              <div className="group">
                <label className="flex items-center text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 transition-colors group-focus-within:text-violet-500">
                  <FiCalendar className="mr-1.5" />
                  Added Date
                </label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:bg-white focus:outline-none focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500 dark:focus:ring-violet-500/10 transition-all text-sm text-slate-800 dark:text-slate-100 cursor-pointer"
                />
              </div>

              {/* Priority */}
              <div className="group">
                <label className="flex items-center text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  <FiFlag className="mr-1.5" />
                  Priority
                </label>
                <div className="flex bg-slate-100 dark:bg-slate-950 p-1 rounded-xl border border-slate-200/50 dark:border-slate-800/50 h-[46px] items-center">
                  {['low', 'medium', 'high'].map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPriority(p)}
                      className={`flex-1 h-full rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-200 ${
                        priority === p
                          ? p === 'high'
                            ? 'bg-red-500 text-white shadow-md shadow-red-500/10'
                            : p === 'medium'
                            ? 'bg-amber-500 text-white shadow-md shadow-amber-500/10'
                            : 'bg-emerald-500 text-white shadow-md shadow-emerald-500/10'
                          : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Task Details (description) */}
            <div className="group">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 transition-colors group-focus-within:text-violet-500">
                Task Details
              </label>
              <textarea
                placeholder="List descriptive steps or milestones for this task..."
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:bg-white focus:outline-none focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500 dark:focus:ring-violet-500/10 transition-all text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-400"
              />
            </div>

            {/* Category Select Tag */}
            <div>
              <label className="flex items-center text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                <FiBookmark className="mr-1.5" />
                Category
              </label>
              <div className="flex flex-wrap gap-1.5">
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCategory(c)}
                    className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider border transition-all ${
                      category === c
                        ? 'bg-violet-100 text-violet-700 border-violet-500 dark:bg-violet-950/30 dark:text-violet-300 dark:border-violet-600'
                        : 'bg-slate-50 text-slate-500 border-slate-200 dark:bg-slate-950 dark:text-slate-400 dark:border-slate-800 hover:border-slate-300'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions cluster */}
            <div className="flex items-center justify-end space-x-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 font-semibold text-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                Cancel
              </button>
              
              <button
                type="submit"
                className="group/btn flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-pink-500 hover:from-violet-500 hover:to-pink-400 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-violet-500/20"
              >
                <FiPlusCircle className="w-4 h-4 transition-transform group-hover/btn:rotate-90 duration-300" />
                <span>Add Task</span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}
