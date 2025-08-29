'use client';
import { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';

interface Toast {
  message: string;
  type: 'success' | 'error';
}

const ToastContext = createContext<(message: string, type?: 'success' | 'error') => void>(() => {});

export function useToast() {
  return useContext(ToastContext);
}

export default function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<Toast | null>(null);
  const timeout = useRef<NodeJS.Timeout>();
  const toastRef = useRef<HTMLDivElement>(null);

  const show = useCallback((message: string, type: 'success' | 'error' = 'success') => {
    clearTimeout(timeout.current);
    setToast({ message, type });
    timeout.current = setTimeout(() => setToast(null), 3000);
  }, []);

  useEffect(() => {
    if (toast) {
      toastRef.current?.focus();
    }
  }, [toast]);

  return (
    <ToastContext.Provider value={show}>
      {children}
      {toast && (
        <div
          ref={toastRef}
          role={toast.type === 'error' ? 'alert' : 'status'}
          aria-live={toast.type === 'error' ? 'assertive' : 'polite'}
          tabIndex={-1}
          className={`fixed bottom-4 left-1/2 -translate-x-1/2 rounded px-4 py-2 text-white shadow-lg focus:outline-none ${toast.type === 'error' ? 'bg-red-600' : 'bg-green-600'}`}
        >
          {toast.message}
        </div>
      )}
    </ToastContext.Provider>
  );
}

