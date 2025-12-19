import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { exportFinanceToExcel } from '@/utils/exportToExcel';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function Finance() {
  const monthlySalaries = [
    { name: 'John Smith', position: 'Senior Driver', salary: 3200, bonus: 150, total: 3350, status: 'paid' },
    { name: 'Emma Johnson', position: 'Driver', salary: 2800, bonus: 200, total: 3000, status: 'paid' },
    { name: 'Michael Brown', position: 'Driver', salary: 2600, bonus: 100, total: 2700, status: 'pending' },
    { name: 'Sarah Davis', position: 'Logistics Manager', salary: 3500, bonus: 250, total: 3750, status: 'paid' },
  ];

  const expenses = [
    { category: 'Fuel', amount: 12450, percentage: 35, icon: 'Fuel' },
    { category: 'Maintenance', amount: 8320, percentage: 23, icon: 'Wrench' },
    { category: 'Insurance', amount: 6200, percentage: 17, icon: 'Shield' },
    { category: 'Road Tax', amount: 4150, percentage: 12, icon: 'Receipt' },
    { category: 'Congestion Charge', amount: 2890, percentage: 8, icon: 'MapPin' },
    { category: 'Tunnel Charges', amount: 1780, percentage: 5, icon: 'Mountain' },
  ];

  const recentTransactions = [
    { date: '2024-01-18', description: 'Shell Fuel Station', category: 'Fuel', amount: -245.50, van: 'AB12 CDE' },
    { date: '2024-01-17', description: 'MOT Test - ABC Garage', category: 'Maintenance', amount: -54.85, van: 'XY34 ZAB' },
    { date: '2024-01-17', description: 'M6 Toll', category: 'Toll', amount: -6.70, van: 'CD56 EFG' },
    { date: '2024-01-16', description: 'BP Fuel Station', category: 'Fuel', amount: -198.20, van: 'GH78 IJK' },
    { date: '2024-01-16', description: 'Congestion Charge', category: 'Charge', amount: -15.00, van: 'AB12 CDE' },
  ];

  const totalSalaries = monthlySalaries.reduce((sum, emp) => sum + emp.total, 0);
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  const monthlyTrend = [
    { month: 'Авг', expenses: 32000, income: 45000 },
    { month: 'Сен', expenses: 35000, income: 48000 },
    { month: 'Окт', expenses: 33000, income: 46000 },
    { month: 'Ноя', expenses: 38000, income: 50000 },
    { month: 'Дек', expenses: 36000, income: 52000 },
    { month: 'Янв', expenses: totalExpenses + totalSalaries, income: 54000 },
  ];

  const expenseChartData = expenses.map(e => ({
    name: e.category,
    value: e.amount,
  }));

  const COLORS = ['#0ea5e9', '#10b981', '#f97316', '#8b5cf6', '#ec4899', '#f59e0b'];

  return (
    <div className="p-8 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">Финансы</h1>
          <p className="text-slate-600 mt-1">Управление зарплатами и расходами</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2" onClick={() => exportFinanceToExcel(monthlySalaries, expenses, recentTransactions)}>
            <Icon name="Download" size={20} />
            Экспорт
          </Button>
          <Button className="bg-sky-500 hover:bg-sky-600 shadow-lg gap-2">
            <Icon name="Plus" size={20} />
            Новая транзакция
          </Button>
        </div>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-white">
                <Icon name="TrendingUp" size={24} />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-slate-900">£{(totalExpenses + totalSalaries).toLocaleString()}</h3>
            <p className="text-sm text-slate-600 mt-1">Общие расходы (месяц)</p>
            <p className="text-xs text-emerald-600 mt-2">-3.2% от прошлого месяца</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500 flex items-center justify-center text-white">
                <Icon name="Users" size={24} />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-slate-900">£{totalSalaries.toLocaleString()}</h3>
            <p className="text-sm text-slate-600 mt-1">Зарплаты</p>
            <p className="text-xs text-slate-500 mt-2">{monthlySalaries.length} сотрудников</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-white">
                <Icon name="DollarSign" size={24} />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-slate-900">£{totalExpenses.toLocaleString()}</h3>
            <p className="text-sm text-slate-600 mt-1">Операционные расходы</p>
            <p className="text-xs text-orange-600 mt-2">+2.1% от прошлого месяца</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Salaries Table */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Users" size={20} className="text-sky-500" />
              Зарплаты за месяц
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Сотрудник</TableHead>
                  <TableHead className="text-right">Оклад</TableHead>
                  <TableHead className="text-right">Бонус</TableHead>
                  <TableHead className="text-right">Итого</TableHead>
                  <TableHead>Статус</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {monthlySalaries.map((salary, idx) => (
                  <TableRow key={idx}>
                    <TableCell>
                      <div>
                        <p className="font-semibold text-slate-900">{salary.name}</p>
                        <p className="text-xs text-slate-500">{salary.position}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">£{salary.salary}</TableCell>
                    <TableCell className="text-right text-emerald-600">+£{salary.bonus}</TableCell>
                    <TableCell className="text-right font-semibold">£{salary.total}</TableCell>
                    <TableCell>
                      <Badge variant={salary.status === 'paid' ? 'default' : 'secondary'}>
                        {salary.status === 'paid' ? 'Выплачено' : 'В ожидании'}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-4 pt-4 border-t flex items-center justify-between">
              <span className="font-semibold text-slate-900">Общая сумма:</span>
              <span className="text-2xl font-bold text-slate-900">£{totalSalaries.toLocaleString()}</span>
            </div>
          </CardContent>
        </Card>

        {/* Expenses Breakdown */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="PieChart" size={20} className="text-sky-500" />
              Структура расходов
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {expenses.map((expense, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                        <Icon name={expense.icon} size={18} className="text-slate-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{expense.category}</p>
                        <p className="text-xs text-slate-500">{expense.percentage}% от общих</p>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-slate-900">£{expense.amount.toLocaleString()}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-sky-500 rounded-full transition-all"
                      style={{ width: `${expense.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Trend */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="TrendingUp" size={20} className="text-sky-500" />
              Динамика расходов и доходов
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="expenses" 
                  stroke="#f97316" 
                  strokeWidth={2}
                  name="Расходы"
                  dot={{ fill: '#f97316', r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="income" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  name="Доходы"
                  dot={{ fill: '#10b981', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Expense Distribution Pie */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="PieChart" size={20} className="text-sky-500" />
              Распределение расходов
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={expenseChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {expenseChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }}
                  formatter={(value: number) => `£${value.toLocaleString()}`}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Category Expenses Bar Chart */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="BarChart3" size={20} className="text-sky-500" />
            Сравнение расходов по категориям
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={expenses}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="category" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
                formatter={(value: number) => `£${value.toLocaleString()}`}
              />
              <Bar dataKey="amount" fill="#0ea5e9" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Receipt" size={20} className="text-sky-500" />
            Последние транзакции
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Дата</TableHead>
                <TableHead>Описание</TableHead>
                <TableHead>Категория</TableHead>
                <TableHead>Фургон</TableHead>
                <TableHead className="text-right">Сумма</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentTransactions.map((transaction, idx) => (
                <TableRow key={idx} className="hover:bg-slate-50">
                  <TableCell className="text-slate-600">{transaction.date}</TableCell>
                  <TableCell className="font-medium">{transaction.description}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{transaction.category}</Badge>
                  </TableCell>
                  <TableCell className="font-mono text-sm">{transaction.van}</TableCell>
                  <TableCell className="text-right font-semibold text-red-600">
                    £{Math.abs(transaction.amount).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}