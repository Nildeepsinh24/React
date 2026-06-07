import Swal from 'sweetalert2';
import { FiTrash2 } from 'react-icons/fi';

export default function DeleteTask({ taskId, taskTitle, onDeleteConfirm }) {
  const handleDelete = (e) => {
    e.stopPropagation(); // Prevent card click trigger
    
    const isDark = document.documentElement.classList.contains('dark');
    
    Swal.fire({
      title: 'Delete Task?',
      html: `Are you sure you want to delete <strong class="text-violet-500">"${taskTitle}"</strong>?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#8b5cf6', // Brand violet color
      cancelButtonColor: '#64748b',  // Slate color
      confirmButtonText: 'Yes, delete!',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
      background: isDark ? '#0f172a' : '#ffffff',
      color: isDark ? '#f8fafc' : '#0f172a',
      customClass: {
        popup: 'rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-2xl',
        confirmButton: 'px-5 py-2.5 rounded-xl font-medium text-sm',
        cancelButton: 'px-5 py-2.5 rounded-xl font-medium text-sm',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        onDeleteConfirm(taskId);
        
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          background: isDark ? '#1e293b' : '#ffffff',
          color: isDark ? '#f8fafc' : '#0f172a',
        });
        
        Toast.fire({
          icon: 'success',
          title: 'Task deleted successfully'
        });
      }
    });
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      className="p-2 text-slate-400 dark:text-slate-500 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-xl transition-all duration-200 active:scale-95"
      title="Delete Task"
    >
      <FiTrash2 className="w-5 h-5" />
    </button>
  );
}
