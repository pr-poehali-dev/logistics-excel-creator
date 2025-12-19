import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';

export default function Dashboard() {
  const stats = [
    { title: 'Всего фургонов', value: '24', icon: 'Truck', color: 'bg-sky-500', change: '+2 за месяц' },
    { title: 'Активные сотрудники', value: '18', icon: 'Users', color: 'bg-emerald-500', change: '+3 за месяц' },
    { title: 'Расходы за месяц', value: '£48,320', icon: 'DollarSign', color: 'bg-orange-500', change: '-5% от плана' },
    { title: 'Техобслуживание', value: '5', icon: 'Wrench', color: 'bg-purple-500', change: 'требуется' },
  ];

  const recentMaintenance = [
    { van: 'Mercedes Sprinter', reg: 'AB12 CDE', type: 'MOT', date: '2024-01-15', status: 'completed' },
    { van: 'Ford Transit', reg: 'XY34 ZAB', type: 'Service', date: '2024-01-18', status: 'scheduled' },
    { van: 'Volkswagen Crafter', reg: 'CD56 EFG', type: 'Repair', date: '2024-01-20', status: 'in-progress' },
  ];

  const upcomingExpiry = [
    { van: 'Mercedes Sprinter', reg: 'AB12 CDE', type: 'Insurance', date: '2024-02-15', days: 28 },
    { van: 'Ford Transit', reg: 'XY34 ZAB', type: 'MOT', date: '2024-02-20', days: 33 },
    { van: 'Volkswagen Crafter', reg: 'CD56 EFG', type: 'Road Tax', date: '2024-03-01', days: 42 },
  ];

  return (
    <div className="p-8 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">Дашборд</h1>
          <p className="text-slate-600 mt-1">Обзор операций логистической компании</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-500">Сегодня</p>
          <p className="text-lg font-semibold text-slate-900">{new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <Card key={idx} className="hover-scale border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg`}>
                  <Icon name={stat.icon} size={24} />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-slate-900">{stat.value}</h3>
              <p className="text-sm text-slate-600 mt-1">{stat.title}</p>
              <p className="text-xs text-slate-500 mt-2">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Maintenance */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Wrench" size={20} className="text-sky-500" />
              Последнее техобслуживание
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMaintenance.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900">{item.van}</p>
                    <p className="text-sm text-slate-600">{item.reg} • {item.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-600">{item.date}</p>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        item.status === 'completed'
                          ? 'bg-emerald-100 text-emerald-700'
                          : item.status === 'in-progress'
                          ? 'bg-orange-100 text-orange-700'
                          : 'bg-sky-100 text-sky-700'
                      }`}
                    >
                      {item.status === 'completed' ? 'Завершено' : item.status === 'in-progress' ? 'В работе' : 'Запланировано'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Expiry */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="AlertTriangle" size={20} className="text-orange-500" />
              Срок действия документов
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingExpiry.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">{item.van}</p>
                      <p className="text-sm text-slate-600">{item.reg} • {item.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-orange-600">{item.days} дней</p>
                      <p className="text-xs text-slate-500">{item.date}</p>
                    </div>
                  </div>
                  <Progress value={(60 - item.days) / 60 * 100} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fleet Status */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Truck" size={20} className="text-sky-500" />
            Статус автопарка
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Активные</span>
                <span className="text-sm font-semibold text-emerald-600">18/24</span>
              </div>
              <Progress value={75} className="h-2 bg-emerald-100" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">На обслуживании</span>
                <span className="text-sm font-semibold text-orange-600">5/24</span>
              </div>
              <Progress value={20.8} className="h-2 bg-orange-100" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Неактивные</span>
                <span className="text-sm font-semibold text-slate-600">1/24</span>
              </div>
              <Progress value={4.2} className="h-2 bg-slate-200" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
