import React, { useState } from 'react'

export default function DashboardApp({ name, onLogout }) {
  const displayName = name?.trim() || 'YOUR NAME'

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('All Tasks')
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false)
  
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Design Homepage Mockup', deadline: '2026-07-05', importance: 'High', completed: false },
    { id: 2, title: 'Setup Authentication', deadline: '2026-07-06', importance: 'Critical', completed: true },
    { id: 3, title: 'Write API Documentation', deadline: '2026-07-10', importance: 'Medium', completed: false },
  ])

  const menuItems = ['All Tasks', 'Pending', 'Completed', 'Settings']
  const tabs = ['All Tasks', 'Pending', 'Completed']

  const filteredTasks = tasks.filter(task => {
    if (activeTab === 'Pending') return !task.completed
    if (activeTab === 'Completed') return task.completed
    return true // All Tasks
  })

  const getImportanceStyle = (importance) => {
    switch (importance) {
      case 'Critical': return 'bg-red-100 text-red-800 border border-red-200'
      case 'High': return 'bg-orange-100 text-orange-800 border border-orange-200'
      case 'Medium': return 'bg-amber-100 text-amber-800 border border-amber-200'
      case 'Low': return 'bg-blue-100 text-blue-800 border border-blue-200'
      default: return 'bg-slate-100 text-slate-800 border border-slate-200'
    }
  }

  const handleMenuClick = (item, event) => {
    event.preventDefault()
    if (item === 'Logout' && onLogout) {
      onLogout()
    } else if (tabs.includes(item)) {
      setActiveTab(item)
      setIsMenuOpen(false)
    }
  }

  const handleToggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ))
  }

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  const handleCreateTask = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const title = formData.get('taskName')
    const deadline = formData.get('deadline')
    const importance = formData.get('importance')

    if (title && deadline && importance) {
      setTasks([{
        id: Date.now(),
        title,
        deadline,
        importance,
        completed: false
      }, ...tasks])
      setIsTaskModalOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#dfe8ef] text-slate-900">
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col overflow-hidden bg-emerald-800 px-6 py-8 text-white shadow-2xl transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-8 flex items-center justify-between text-sm font-bold uppercase tracking-[0.3em] text-emerald-100/80">
          <span>Task Manager</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl leading-none"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              onClick={(event) => handleMenuClick(item, event)}
              className={`block w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${activeTab === item ? 'bg-white/20 text-white font-bold' : 'text-emerald-50 hover:bg-white/10'}`}
            >
              {item}
            </a>
          ))}
        </nav>

        <button onClick={() => onLogout?.()} className="mt-auto w-full text-left rounded-2xl border border-white/20 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10">
          Logout
        </button>
      </aside>

      {/* Mobile View */}
      <div className="md:hidden">
        <div className="mx-auto flex min-h-screen max-w-[420px] flex-col items-center justify-start px-4 py-8">
          <div className="w-full flex-1 overflow-hidden rounded-[2.2rem] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.18)] ring-1 ring-black/5">
            <div className="bg-emerald-700 px-5 pb-5 pt-4 text-white sm:px-6">
              <div className="mb-5 flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.2em] text-emerald-100/80">
                <span>TASK MANAGER</span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold tracking-[0.25em] text-emerald-100/90">
                    WELCOME
                  </p>
                  <h1 className="mt-2 text-3xl font-black leading-tight">
                    {displayName.toUpperCase()}
                  </h1>
                </div>

                <button
                  onClick={() => setIsMenuOpen(true)}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-xl font-bold transition hover:bg-white/15"
                  aria-label="Open menu"
                >
                  ☰
                </button>
              </div>
            </div>

            <div className="bg-white px-5 pb-6 pt-4 sm:px-6">
              <div className="flex items-center gap-2 rounded-2xl bg-slate-100 p-1">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 rounded-xl px-2 py-2 text-xs font-semibold transition ${
                      activeTab === tab
                        ? 'bg-white text-emerald-700 shadow-sm'
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <button 
                onClick={() => setIsTaskModalOpen(true)} 
                className="mt-4 w-full rounded-2xl bg-amber-400 py-3 text-sm font-bold text-slate-900 shadow-sm transition hover:bg-amber-300"
              >
                + ADD NEW TASK
              </button>

              <div className="mt-6 flex flex-col gap-3">
                {filteredTasks.length === 0 ? (
                  <div className="py-10 text-center text-sm text-slate-500">
                    No tasks found in this view.
                  </div>
                ) : (
                  filteredTasks.map(task => (
                    <div key={task.id} className="flex flex-col gap-3 rounded-[1.25rem] border border-slate-100 bg-slate-50 p-4 shadow-sm">
                      <div className="flex items-start justify-between gap-3">
                        <button 
                          onClick={() => handleToggleTask(task.id)}
                          className={`mt-1 shrink-0 flex h-6 w-6 items-center justify-center rounded-full border-2 transition ${task.completed ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-white border-slate-300 hover:border-emerald-500 text-transparent'}`}
                        >
                          <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        </button>
                        <div className="flex-1">
                          <h3 className={`text-base font-bold leading-tight ${task.completed ? 'text-slate-400 line-through' : 'text-slate-900'}`}>{task.title}</h3>
                          <div className="mt-2 flex flex-wrap items-center gap-2">
                            <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                              {task.deadline}
                            </span>
                            <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md ${getImportanceStyle(task.importance)}`}>
                              {task.importance}
                            </span>
                          </div>
                        </div>
                        <button 
                          onClick={() => handleDeleteTask(task.id)}
                          className="shrink-0 p-1 text-slate-400 hover:text-red-500"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden min-h-screen md:flex">
        {/* Sidebar */}
        <aside className="flex w-80 flex-col bg-emerald-800 px-7 py-8 text-white xl:w-96">
          <div className="mb-10 text-sm font-bold uppercase tracking-[0.3em] text-emerald-100/80">
            Task Manager
          </div>

          <div className="rounded-3xl bg-emerald-700 px-5 py-5">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-100/80">Welcome Back</p>
            <h1 className="mt-2 text-4xl font-black leading-tight">
              {displayName.toUpperCase()}
            </h1>
          </div>

          <nav className="mt-10 flex-1 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                onClick={(event) => handleMenuClick(item, event)}
                className={`block w-full rounded-2xl px-5 py-4 text-left text-sm font-medium transition ${activeTab === item ? 'bg-white/20 text-white font-bold' : 'text-emerald-50 hover:bg-white/10'}`}
              >
                {item}
              </a>
            ))}
          </nav>

          <button onClick={() => onLogout?.()} className="mt-auto w-full rounded-2xl border border-white/20 px-5 py-4 text-left text-sm font-medium text-white transition hover:bg-white/10">
            Logout
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto px-6 py-6 xl:px-12 xl:py-10">
          <div className="mx-auto flex h-full max-w-5xl flex-col gap-8">
            <header className="flex items-center justify-between rounded-[1.75rem] bg-white px-8 py-6 shadow-sm ring-1 ring-black/5">
              <div>
                <h2 className="text-3xl font-black text-slate-900">
                  {activeTab}
                </h2>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  You have {filteredTasks.length} task(s) in this view.
                </p>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => setIsTaskModalOpen(true)} 
                  className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700"
                >
                  + Add New Task
                </button>
              </div>
            </header>

            <section className="flex flex-col gap-4">
              {filteredTasks.length === 0 ? (
                <div className="flex h-64 flex-col items-center justify-center rounded-[1.75rem] bg-white text-slate-400 shadow-sm ring-1 ring-black/5">
                  <svg className="h-16 w-16 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <p className="text-lg font-semibold">No tasks found</p>
                  <p className="text-sm">Add a task to get started.</p>
                </div>
              ) : (
                filteredTasks.map((task) => (
                  <div 
                    key={task.id} 
                    className="flex items-center justify-between rounded-[1.75rem] bg-white px-8 py-6 shadow-sm ring-1 ring-black/5 transition hover:shadow-md"
                  >
                    <div className="flex items-center gap-6">
                      <button 
                        onClick={() => handleToggleTask(task.id)}
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition ${task.completed ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-white border-slate-300 hover:border-emerald-500 text-transparent'}`}
                      >
                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      </button>
                      <div>
                        <h3 className={`text-xl font-bold ${task.completed ? 'text-slate-400 line-through' : 'text-slate-900'}`}>{task.title}</h3>
                        <p className="mt-1 flex items-center gap-1 text-sm font-medium text-slate-500">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          Deadline: {task.deadline}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg ${getImportanceStyle(task.importance)}`}>
                        {task.importance}
                      </span>
                      <button 
                        onClick={() => handleDeleteTask(task.id)}
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500 transition hover:bg-red-100 hover:text-red-700"
                        title="Delete Task"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </section>
          </div>
        </main>
      </div>

      {/* Task Creation Modal (Applies to both Mobile and Desktop) */}
      {isTaskModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-2xl ring-1 ring-black/5">
            <h2 className="text-2xl font-black text-slate-900">Create New Task</h2>
            <p className="mt-2 text-sm text-slate-500">Fill in the details below to add a new task.</p>
            
            <form onSubmit={handleCreateTask} className="mt-6 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Task Name</label>
                <input 
                  name="taskName" 
                  required 
                  type="text" 
                  className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-500" 
                  placeholder="e.g. Design Homepage" 
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Deadline</label>
                <input 
                  name="deadline" 
                  required 
                  type="date" 
                  className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-500" 
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Importance</label>
                <select 
                  name="importance" 
                  required 
                  className="w-full appearance-none rounded-xl border-2 border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-500"
                >
                  <option value="">Select Priority</option>
                  <option value="Low">Low Priority</option>
                  <option value="Medium">Medium Priority</option>
                  <option value="High">High Priority</option>
                  <option value="Critical">Critical Priority</option>
                </select>
              </div>

              <div className="mt-8 flex gap-3 pt-2">
                <button 
                  type="button" 
                  onClick={() => setIsTaskModalOpen(false)} 
                  className="flex-1 rounded-xl bg-slate-100 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-200"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="flex-1 rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
                >
                  Create Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
