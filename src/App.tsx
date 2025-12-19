
import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Fleet from './pages/Fleet';
import Employees from './pages/Employees';
import Finance from './pages/Finance';
import Icon from '@/components/ui/icon';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'fleet':
        return <Fleet />;
      case 'employees':
        return <Employees />;
      case 'finance':
        return <Finance />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white shadow-xl z-10">
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-sky-500 flex items-center justify-center">
              <Icon name="Truck" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold">LogisticPro</h1>
              <p className="text-xs text-slate-400">Fleet Management</p>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-2">
          <button
            onClick={() => setCurrentPage('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              currentPage === 'dashboard'
                ? 'bg-sky-500 text-white shadow-lg'
                : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Icon name="LayoutDashboard" size={20} />
            <span className="font-medium">Дашборд</span>
          </button>

          <button
            onClick={() => setCurrentPage('fleet')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              currentPage === 'fleet'
                ? 'bg-sky-500 text-white shadow-lg'
                : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Icon name="Truck" size={20} />
            <span className="font-medium">Автопарк</span>
          </button>

          <button
            onClick={() => setCurrentPage('employees')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              currentPage === 'employees'
                ? 'bg-sky-500 text-white shadow-lg'
                : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Icon name="Users" size={20} />
            <span className="font-medium">Сотрудники</span>
          </button>

          <button
            onClick={() => setCurrentPage('finance')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              currentPage === 'finance'
                ? 'bg-sky-500 text-white shadow-lg'
                : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Icon name="DollarSign" size={20} />
            <span className="font-medium">Финансы</span>
          </button>
        </nav>
      </aside>

      <main className="ml-64 min-h-screen">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;