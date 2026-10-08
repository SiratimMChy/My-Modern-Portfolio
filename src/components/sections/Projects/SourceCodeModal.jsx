import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../../ui/button'

export default function SourceCodeModal({ isOpen, onClose, githubLink }) {
  if (!githubLink || typeof githubLink !== 'object') return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[70] p-4 rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <motion.div
            className="bg-white dark:bg-[#0A0D14] border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-2xl w-full max-w-xs"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Source Code</h3>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
              >
                <i className="bx bx-x text-2xl"></i>
              </button>
            </div>
            
            <div className="flex flex-col gap-3">
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(githubLink.frontend, '_blank');
                  onClose();
                }}
                variant="outline"
                className="w-full justify-start h-12 hover:bg-sky-50 dark:hover:bg-sky-500/10 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-200 dark:hover:border-sky-800 transition-colors"
              >
                <i className="bx bx-window-alt text-xl mr-3"></i>
                Frontend Repo
              </Button>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(githubLink.backend, '_blank');
                  onClose();
                }}
                variant="outline"
                className="w-full justify-start h-12 hover:bg-violet-50 dark:hover:bg-violet-500/10 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-200 dark:hover:border-violet-800 transition-colors"
              >
                <i className="bx bx-server text-xl mr-3"></i>
                Backend Repo
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
