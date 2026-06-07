import { useState } from 'react';
import { 
  FiCheckSquare, FiPlus, FiList, FiEdit2, FiMoon, FiSun, 
  FiSearch, FiCalendar, FiFlag, FiBookmark, FiMenu, FiX, 
  FiCheckCircle, FiClock, FiGrid, FiAlertCircle 
} from 'react-icons/fi';
import DeleteTask from './DeleteTask';

export default function LayoutTask({ 
  tasks, 
  onAddTaskClick, 
  onEditTaskClick, 
  onDeleteConfirm, 
  onToggleComplete,
  isDarkMode,
  onToggleDarkMode
}) {
  // Navigation Mobile Menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  // Stats calculation
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.status === 'completed').length;
  const inProgressTasks = tasks.filter(t => t.status === 'in_progress').length;
  const pendingTasks = tasks.filter(t => t.status === 'pending').length;
  const highPriorityTasks = tasks.filter(t => t.priority === 'high' && t.status !== 'completed').length;

  // Search, filter, and sort logic
  const filteredTasks = tasks.filter(task => {
    const matchesSearch = 
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.category.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesStatus = statusFilter === 'all' || task.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || task.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(a.dueDate) - new Date(b.dueDate);
    } else if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    } else if (sortBy === 'priority') {
      const weight = { high: 3, medium: 2, low: 1 };
      return weight[b.priority] - weight[a.priority];
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50/70 via-slate-50 to-slate-100/50 dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-slate-900 dark:via-slate-950 dark:to-black text-slate-800 dark:text-slate-100 flex flex-col transition-colors duration-300 relative overflow-hidden">
      
      {/* Premium Glowing Ambient Backdrop Blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-violet-200/35 to-pink-200/20 dark:from-violet-950/10 dark:to-pink-950/5 rounded-full filter blur-[100px] pointer-events-none -z-10 animate-soft" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-sky-100/40 to-indigo-100/25 dark:from-sky-950/10 dark:to-indigo-950/5 rounded-full filter blur-[120px] pointer-events-none -z-10 animate-soft" />

      {/* 1. RESPONSIVE NAVIGATION HEADER */}
      <header className="sticky top-0 z-40 bg-white/60 dark:bg-slate-900/70 backdrop-blur-xl border-b border-slate-200/30 dark:border-slate-800/30 shadow-[0_4px_30px_rgba(0,0,0,0.02)] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Left: Brand Identity */}
            <div className="flex items-center space-x-3 cursor-pointer select-none" onClick={() => { setStatusFilter('all'); setPriorityFilter('all'); }}>
              <div className="p-2.5 bg-gradient-to-tr from-violet-600 to-pink-500 rounded-xl text-white shadow-md shadow-violet-500/20">
                <FiCheckSquare className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent dark:from-violet-400 dark:to-pink-400">
                TaskWave
              </span>
            </div>

            {/* Center: Main Navigation Desktop Links */}
            <nav className="hidden md:flex items-center space-x-1">
              <button
                onClick={() => { setStatusFilter('all'); setPriorityFilter('all'); }}
                className="flex items-center space-x-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/40 transition-all"
              >
                <FiList className="w-4 h-4" />
                <span>Manage Tasks</span>
              </button>
              
              <button
                onClick={onAddTaskClick}
                className="flex items-center space-x-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-500/5 dark:hover:bg-slate-800/40 transition-all duration-200"
              >
                <FiPlus className="w-4 h-4" />
                <span>Add Task</span>
              </button>

              <button
                onClick={() => {
                  // Direct edit helper notification or trigger first task edit
                  if (tasks.length > 0) {
                    onEditTaskClick(tasks[0]);
                  } else {
                    onAddTaskClick();
                  }
                }}
                className="flex items-center space-x-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-500/5 dark:hover:bg-slate-800/40 transition-all duration-200"
              >
                <FiEdit2 className="w-4 h-4" />
                <span>Update Task</span>
              </button>
            </nav>

            {/* Right: Dynamic Task Count Pill & Dark/Light Mode & Hamburger */}
            <div className="flex items-center space-x-4">
              
              {/* Task Count Badge */}
              <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 bg-violet-500/5 dark:bg-slate-800 border border-violet-500/10 dark:border-slate-700/50 rounded-full text-xs font-bold text-slate-500 dark:text-slate-300 shadow-sm">
                <span className="inline-block w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
                <span>Total Tasks:</span>
                <span className="px-1.5 py-0.5 rounded-full bg-violet-600 text-white font-extrabold shadow-sm">
                  {totalTasks}
                </span>
              </div>

              {/* Dark Mode Switcher */}
              <button
                onClick={onToggleDarkMode}
                className="p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:bg-violet-50 dark:hover:bg-slate-800 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 active:scale-95 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                title="Toggle Theme Mode"
              >
                {isDarkMode ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
              </button>

              {/* Mobile Burger Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
              >
                {isMobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Expanded Drawer Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-4 space-y-3 shadow-xl">
            <button
              onClick={() => {
                setStatusFilter('all');
                setPriorityFilter('all');
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center space-x-2 w-full px-4 py-2.5 rounded-xl text-sm font-semibold bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400"
            >
              <FiList className="w-4 h-4" />
              <span>Manage Tasks</span>
            </button>
            
            <button
              onClick={() => {
                onAddTaskClick();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center space-x-2 w-full px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-300 transition-all"
            >
              <FiPlus className="w-4 h-4" />
              <span>Add Task</span>
            </button>

            <button
              onClick={() => {
                if (tasks.length > 0) {
                  onEditTaskClick(tasks[0]);
                } else {
                  onAddTaskClick();
                }
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center space-x-2 w-full px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-300 transition-all"
            >
              <FiEdit2 className="w-4 h-4" />
              <span>Update Task</span>
            </button>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-3 flex items-center justify-between">
              <span className="text-sm text-slate-500 font-medium">Total Tasks in list:</span>
              <span className="px-3 py-1 bg-violet-600 text-white rounded-full text-xs font-black shadow-md">
                {totalTasks} Tasks
              </span>
            </div>
          </div>
        )}
      </header>

      {/* Main Container Layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* 2. Glassmorphic Hero Card with DIRECT Animated GIF */}
        <section className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-700 text-white overflow-hidden shadow-xl shadow-violet-500/10">
          {/* Ambient blurred glow circles */}
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[80%] bg-pink-500/20 rounded-full filter blur-[60px] pointer-events-none" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[80%] bg-sky-400/20 rounded-full filter blur-[60px] pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Column: Welcome Greetings & Action */}
            <div className="md:col-span-7 space-y-4 text-left">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-pink-200">
                🚀 Productivity Center
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white m-0">
                Welcome to Your Dashboard
              </h1>
              <p className="text-violet-100 text-sm max-w-xl leading-relaxed m-0">
                Organize your workflow, set task categories, filter by priorities, and complete items with seamless persistence. Try creating a task now!
              </p>
              <div className="pt-2">
                <button
                  onClick={onAddTaskClick}
                  className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-white text-violet-700 font-bold text-xs uppercase tracking-wider hover:bg-slate-100 active:scale-95 transition-all shadow-lg shadow-black/10"
                >
                  <FiPlus className="w-4.5 h-4.5 text-violet-700" />
                  <span>Create New Task</span>
                </button>
              </div>
            </div>

            {/* Right Column: Direct Animated GIF of Productivity Checklist */}
            <div className="md:col-span-5 flex justify-center md:justify-end relative">
              <div className="absolute w-52 h-52 rounded-full border-4 border-white/10 animate-pulse flex items-center justify-center pointer-events-none">
                <div className="w-44 h-44 rounded-full border-2 border-white/20" />
              </div>
              <img 
                src="https://blog.planview.com/wp-content/uploads/2017/08/Tip_1_Juggling-too-many-task-Gif_Twitter.gif" 
                alt="Productivity Checklist GIF" 
                className="w-full max-w-[360px] h-48 object-cover rounded-2xl shadow-2xl border-4 border-white/15 backdrop-blur-sm relative z-10"
              />
            </div>
          </div>
        </section>

        {/* 2. DASHBOARD DYNAMIC STATISTICS GRID */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Stat 1: Total */}
          <div className="p-5 rounded-2xl bg-white/75 dark:bg-slate-900/60 border border-white/80 dark:border-slate-800/30 shadow-[0_8px_30px_rgba(226,232,240,0.35)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-md flex items-center space-x-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(226,232,240,0.5)]">
            <div className="p-3 bg-violet-500/10 text-violet-600 dark:text-violet-400 rounded-xl">
              <FiList className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Tasks</p>
              <h4 className="text-2xl font-extrabold text-slate-800 dark:text-white mt-0.5 m-0">{totalTasks}</h4>
            </div>
          </div>

          {/* Stat 2: In Progress */}
          <div className="p-5 rounded-2xl bg-white/75 dark:bg-slate-900/60 border border-white/80 dark:border-slate-800/30 shadow-[0_8px_30px_rgba(226,232,240,0.35)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-md flex items-center space-x-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(226,232,240,0.5)]">
            <div className="p-3 bg-sky-500/10 text-sky-600 dark:text-sky-400 rounded-xl">
              <FiClock className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">In Progress</p>
              <h4 className="text-2xl font-extrabold text-slate-800 dark:text-white mt-0.5 m-0">{inProgressTasks}</h4>
            </div>
          </div>

          {/* Stat 3: Completed */}
          <div className="p-5 rounded-2xl bg-white/75 dark:bg-slate-900/60 border border-white/80 dark:border-slate-800/30 shadow-[0_8px_30px_rgba(226,232,240,0.35)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-md flex items-center space-x-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(226,232,240,0.5)]">
            <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl">
              <FiCheckCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Completed</p>
              <h4 className="text-2xl font-extrabold text-slate-800 dark:text-white mt-0.5 m-0">{completedTasks}</h4>
            </div>
          </div>

          {/* Stat 4: High Priority Alert */}
          <div className="p-5 rounded-2xl bg-white/75 dark:bg-slate-900/60 border border-white/80 dark:border-slate-800/30 shadow-[0_8px_30px_rgba(226,232,240,0.35)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-md flex items-center space-x-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(226,232,240,0.5)]">
            <div className="p-3 bg-red-500/10 text-red-600 dark:text-red-400 rounded-xl">
              <FiAlertCircle className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">High Alert</p>
              <h4 className="text-2xl font-extrabold text-slate-800 dark:text-white mt-0.5 m-0">{highPriorityTasks}</h4>
            </div>
          </div>
        </section>

        {/* 3. CONTROL PANEL: SEARCH, FILTERS & SORT */}
        <section className="p-4 bg-white/70 dark:bg-slate-900/60 border border-white/85 dark:border-slate-800/30 shadow-[0_8px_30px_rgba(226,232,240,0.25)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-md rounded-2xl flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search bar */}
          <div className="relative w-full md:max-w-xs">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 w-4.5 h-4.5" />
            <input
              type="text"
              placeholder="Search title or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800 bg-white/40 dark:bg-slate-950 focus:bg-white focus:outline-none focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500 transition-all text-sm text-slate-700 dark:text-slate-100 placeholder:text-slate-400"
            />
          </div>

          {/* Filters cluster */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Status Filter */}
            <div className="flex items-center space-x-2 text-sm flex-1 md:flex-none">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full md:w-auto px-3.5 py-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800 bg-white/40 dark:bg-slate-950 focus:outline-none focus:ring-4 focus:ring-violet-500/10 text-xs font-semibold text-slate-500 dark:text-slate-400 cursor-pointer transition-all"
              >
                <option value="all">Filter Status: All</option>
                <option value="pending">Status: Pending</option>
                <option value="in_progress">Status: In Progress</option>
                <option value="completed">Status: Completed</option>
              </select>
            </div>

            {/* Priority Filter */}
            <div className="flex items-center space-x-2 text-sm flex-1 md:flex-none">
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="w-full md:w-auto px-3.5 py-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800 bg-white/40 dark:bg-slate-950 focus:outline-none focus:ring-4 focus:ring-violet-500/10 text-xs font-semibold text-slate-500 dark:text-slate-400 cursor-pointer transition-all"
              >
                <option value="all">Filter Priority: All</option>
                <option value="high">Priority: High</option>
                <option value="medium">Priority: Medium</option>
                <option value="low">Priority: Low</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center space-x-2 text-sm flex-1 md:flex-none">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full md:w-auto px-3.5 py-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800 bg-white/40 dark:bg-slate-950 focus:outline-none focus:ring-4 focus:ring-violet-500/10 text-xs font-semibold text-slate-500 dark:text-slate-400 cursor-pointer transition-all"
              >
                <option value="date">Sort by: Due Date</option>
                <option value="priority">Sort by: Priority</option>
                <option value="title">Sort by: Alphabetical</option>
              </select>
            </div>
          </div>
        </section>

        {/* 4. TASK ITEMS GRID BOARD */}
        <section className="relative">
          {filteredTasks.length === 0 ? (
            <div className="text-center py-16 px-4 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl shadow-sm">
              <FiGrid className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto animate-pulse" />
              <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200 mt-4">No tasks found</h3>
              <p className="text-sm text-slate-400 mt-1 max-w-sm mx-auto">
                No matching tasks found. Try modifying your search criteria or add a brand new task.
              </p>
              <button
                onClick={onAddTaskClick}
                className="mt-6 inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-violet-600 text-white font-semibold text-xs hover:bg-violet-500 transition-all shadow-md shadow-violet-500/20"
              >
                <FiPlus className="w-4 h-4" />
                <span>Create New Task</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTasks.map((task) => {
                // Priority specific classes
                const priorityStyles = {
                  high: 'bg-red-50 text-red-700 border-red-200 dark:bg-red-950/20 dark:text-red-400 dark:border-red-900/40',
                  medium: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900/40',
                  low: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900/40'
                };

                // Status specific classes
                const statusStyles = {
                  completed: 'bg-emerald-500 text-white shadow-emerald-500/10',
                  in_progress: 'bg-sky-500 text-white shadow-sky-500/10',
                  pending: 'bg-slate-400 dark:bg-slate-700 text-white shadow-slate-400/10'
                };

                // Due date parsing/formatting
                const formattedDate = new Date(task.dueDate).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                });

                return (
                  <article 
                    key={task.id}
                    className={`relative flex flex-col rounded-2xl bg-white/75 dark:bg-slate-900/60 border border-white/80 dark:border-slate-800/30 shadow-[0_8px_30px_rgba(226,232,240,0.35)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_20px_40px_rgba(226,232,240,0.65)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] hover:-translate-y-1.5 overflow-hidden ${
                      task.status === 'completed' ? 'opacity-70 dark:opacity-50' : ''
                    }`}
                  >
                    {/* Card Inner Content Container */}
                    <div className="p-6 flex flex-col flex-1">
                      {/* Top row: Category & Priority badge */}
                      <div className="flex items-center justify-between">
                        <span className="flex items-center text-xs font-semibold text-slate-400">
                          <FiBookmark className="mr-1 text-slate-300" />
                          {task.category}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${priorityStyles[task.priority]}`}>
                          {task.priority}
                        </span>
                      </div>

                      {/* Title & Checkbox */}
                      <div className="mt-4 flex items-start space-x-3">
                        <button
                          type="button"
                          onClick={() => onToggleComplete(task.id)}
                          className={`flex-shrink-0 w-6 h-6 rounded-lg border flex items-center justify-center transition-all duration-200 ${
                            task.status === 'completed'
                              ? 'bg-emerald-500 border-emerald-500 text-white scale-100 hover:bg-emerald-600 shadow-md shadow-emerald-500/10'
                              : 'border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900 hover:border-violet-400 hover:scale-105 shadow-sm'
                          }`}
                        >
                          {task.status === 'completed' && <FiCheckCircle className="w-4.5 h-4.5" />}
                        </button>
                        
                        <h3 className={`text-lg font-bold text-slate-800 dark:text-slate-100 leading-snug cursor-pointer hover:text-violet-600 dark:hover:text-violet-400 transition-colors ${
                          task.status === 'completed' ? 'line-through text-slate-400 dark:text-slate-600' : ''
                        }`}
                        onClick={() => onEditTaskClick(task)}>
                          {task.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className={`mt-2 text-sm text-slate-500 dark:text-slate-400 flex-1 leading-relaxed ${
                        task.status === 'completed' ? 'line-through text-slate-400 dark:text-slate-600' : ''
                      }`}>
                        {task.description || 'No description provided.'}
                      </p>

                      {/* Divider */}
                      <hr className="my-4 border-slate-100/80 dark:border-slate-800/60" />

                      {/* Footer Row: Due Date, Status Pill, Action Buttons */}
                      <div className="flex items-center justify-between">
                        {/* Due Date Info */}
                        <div className="flex items-center text-xs font-semibold text-slate-500 dark:text-slate-400">
                          <FiCalendar className="mr-1.5 text-slate-400" />
                          <span>{formattedDate}</span>
                        </div>

                        {/* Status indicator / Action cluster */}
                        <div className="flex items-center space-x-2">
                          {/* Edit task */}
                          <button
                            type="button"
                            onClick={() => onEditTaskClick(task)}
                            className="p-2 text-slate-400 dark:text-slate-500 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-500/10 dark:hover:bg-violet-950/30 rounded-xl transition-all duration-200 active:scale-95"
                            title="Edit Task"
                          >
                            <FiEdit2 className="w-5 h-5" />
                          </button>

                          {/* Delete task using the SweetAlert component */}
                          <DeleteTask 
                            taskId={task.id} 
                            taskTitle={task.title} 
                            onDeleteConfirm={onDeleteConfirm} 
                          />
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

      </main>

      {/* Footer Branding info */}
      <footer className="mt-auto border-t border-slate-200/50 dark:border-slate-800/50 py-6 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs text-slate-400 dark:text-slate-600">
            TaskWave Dashboard App © {new Date().getFullYear()} • Engineered beautifully with React and Tailwind CSS v4.
          </p>
        </div>
      </footer>

    </div>
  );
}
