import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function Employees() {
  const [searchTerm, setSearchTerm] = useState('');

  const employees = [
    {
      name: 'John Smith',
      status: 'active',
      company: 'Main Office',
      phone: '+44 7700 900123',
      email: 'john.smith@company.com',
      address: '123 High Street, London, SW1A 1AA',
      driverLicence: 'Valid',
      dbsCheck: 'Passed',
      bankName: 'Barclays',
      accountNumber: '12345678',
      sortCode: '20-00-00',
      rating: 4.8,
    },
    {
      name: 'Emma Johnson',
      status: 'active',
      company: 'North Region',
      phone: '+44 7700 900456',
      email: 'emma.johnson@company.com',
      address: '45 Park Lane, Manchester, M1 2AB',
      driverLicence: 'Valid',
      dbsCheck: 'Passed',
      bankName: 'HSBC',
      accountNumber: '87654321',
      sortCode: '40-00-00',
      rating: 4.9,
    },
    {
      name: 'Michael Brown',
      status: 'on-leave',
      company: 'South Region',
      phone: '+44 7700 900789',
      email: 'michael.brown@company.com',
      address: '78 Queen Road, Birmingham, B1 3CD',
      driverLicence: 'Expiring Soon',
      dbsCheck: 'Passed',
      bankName: 'Lloyds',
      accountNumber: '11223344',
      sortCode: '30-00-00',
      rating: 4.5,
    },
    {
      name: 'Sarah Davis',
      status: 'active',
      company: 'Main Office',
      phone: '+44 7700 900012',
      email: 'sarah.davis@company.com',
      address: '90 Market Street, Leeds, LS1 4EF',
      driverLicence: 'Valid',
      dbsCheck: 'Pending',
      bankName: 'NatWest',
      accountNumber: '55667788',
      sortCode: '60-00-00',
      rating: 4.7,
    },
  ];

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'on-leave':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'inactive':
        return 'bg-slate-100 text-slate-700 border-slate-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Активен';
      case 'on-leave':
        return 'Отпуск';
      case 'inactive':
        return 'Неактивен';
      default:
        return status;
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="p-8 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">Сотрудники</h1>
          <p className="text-slate-600 mt-1">Управление персоналом и документами</p>
        </div>
        <Button className="bg-sky-500 hover:bg-sky-600 shadow-lg">
          <Icon name="UserPlus" size={20} className="mr-2" />
          Добавить сотрудника
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-white">
                <Icon name="Users" size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{employees.filter(e => e.status === 'active').length}</p>
                <p className="text-sm text-slate-600">Активные</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-white">
                <Icon name="Clock" size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{employees.filter(e => e.status === 'on-leave').length}</p>
                <p className="text-sm text-slate-600">В отпуске</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500 flex items-center justify-center text-white">
                <Icon name="FileCheck" size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{employees.filter(e => e.dbsCheck === 'Passed').length}</p>
                <p className="text-sm text-slate-600">DBS проверено</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center text-white">
                <Icon name="Star" size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">4.7</p>
                <p className="text-sm text-slate-600">Средний рейтинг</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <Input
                  placeholder="Поиск по имени или email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Button variant="outline" className="gap-2">
              <Icon name="Filter" size={20} />
              Фильтры
            </Button>
            <Button variant="outline" className="gap-2">
              <Icon name="Download" size={20} />
              Экспорт
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Employees Table */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Users" size={20} className="text-sky-500" />
            Список сотрудников ({filteredEmployees.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Сотрудник</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead>Компания</TableHead>
                  <TableHead>Контакты</TableHead>
                  <TableHead>Водительское</TableHead>
                  <TableHead>DBS</TableHead>
                  <TableHead>Банк</TableHead>
                  <TableHead>Рейтинг</TableHead>
                  <TableHead>Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEmployees.map((employee, idx) => (
                  <TableRow key={idx} className="hover:bg-slate-50">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-sky-100 text-sky-700 font-semibold">
                            {getInitials(employee.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-slate-900">{employee.name}</p>
                          <p className="text-sm text-slate-500">{employee.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(employee.status)}>
                        {getStatusText(employee.status)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-slate-600">{employee.company}</TableCell>
                    <TableCell>
                      <p className="text-sm">{employee.phone}</p>
                    </TableCell>
                    <TableCell>
                      <Badge variant={employee.driverLicence === 'Valid' ? 'default' : 'destructive'}>
                        {employee.driverLicence}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={employee.dbsCheck === 'Passed' ? 'default' : 'secondary'}>
                        {employee.dbsCheck}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <p className="text-sm font-medium">{employee.bankName}</p>
                      <p className="text-xs text-slate-500">{employee.sortCode}</p>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Icon name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                        <span className="font-semibold">{employee.rating}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Icon name="Edit" size={16} />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Icon name="MoreVertical" size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
