import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function Fleet() {
  const [searchTerm, setSearchTerm] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [vehicles, setVehicles] = useState([
    {
      reg: 'AB12 CDE',
      model: 'Mercedes Sprinter',
      type: 'Long Wheelbase',
      status: 'active',
      mileage: 45230,
      motExpiry: '2024-08-15',
      insurance: '2024-12-20',
      roadTax: 'Paid',
      lastService: '2024-01-10',
      rental: 'Own',
      notes: 'Regular maintenance',
    },
    {
      reg: 'XY34 ZAB',
      model: 'Ford Transit',
      type: 'Medium Roof',
      status: 'maintenance',
      mileage: 62150,
      motExpiry: '2024-06-22',
      insurance: '2024-10-15',
      roadTax: 'Paid',
      lastService: '2023-12-05',
      rental: 'Enterprise',
      notes: 'Service due',
    },
    {
      reg: 'CD56 EFG',
      model: 'Volkswagen Crafter',
      type: 'High Roof',
      status: 'active',
      mileage: 38920,
      motExpiry: '2025-03-10',
      insurance: '2025-01-30',
      roadTax: 'Paid',
      lastService: '2024-01-05',
      rental: 'Own',
      notes: 'New vehicle',
    },
    {
      reg: 'GH78 IJK',
      model: 'Renault Master',
      type: 'Standard',
      status: 'active',
      mileage: 51400,
      motExpiry: '2024-09-18',
      insurance: '2024-11-12',
      roadTax: 'Due Soon',
      lastService: '2023-11-20',
      rental: 'Northgate',
      notes: 'Good condition',
    },
    {
      reg: 'LM90 NOP',
      model: 'Citroen Relay',
      type: 'Extra Long',
      status: 'inactive',
      mileage: 89320,
      motExpiry: '2024-02-28',
      insurance: '2024-07-05',
      roadTax: 'Overdue',
      lastService: '2023-10-15',
      rental: 'Own',
      notes: 'Awaiting repair',
    },
  ]);
  const { toast } = useToast();

  const handleAddVehicle = (newVehicle: any) => {
    setVehicles([...vehicles, newVehicle]);
    toast({
      title: 'Фургон добавлен',
      description: `${newVehicle.model} (${newVehicle.reg}) успешно добавлен в автопарк.`,
    });
  };

  const filteredVehicles = vehicles.filter(
    (vehicle) =>
      vehicle.reg.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'maintenance':
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
      case 'maintenance':
        return 'Обслуживание';
      case 'inactive':
        return 'Неактивен';
      default:
        return status;
    }
  };

  return (
    <div className="p-8 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">Автопарк</h1>
          <p className="text-slate-600 mt-1">Управление фургонами и техобслуживанием</p>
        </div>
        <Button className="bg-sky-500 hover:bg-sky-600 shadow-lg" onClick={() => setDialogOpen(true)}>
          <Icon name="Plus" size={20} className="mr-2" />
          Добавить фургон
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <Input
                  placeholder="Поиск по номеру или модели..."
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
            <Button variant="outline" className="gap-2" onClick={() => exportFleetToExcel(vehicles)}>
              <Icon name="Download" size={20} />
              Экспорт
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Fleet Table */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Truck" size={20} className="text-sky-500" />
            Список фургонов ({filteredVehicles.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Номер</TableHead>
                  <TableHead>Модель</TableHead>
                  <TableHead>Тип</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead>Пробег</TableHead>
                  <TableHead>MOT</TableHead>
                  <TableHead>Страховка</TableHead>
                  <TableHead>Налог</TableHead>
                  <TableHead>Аренда</TableHead>
                  <TableHead>Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredVehicles.map((vehicle, idx) => (
                  <TableRow key={idx} className="hover:bg-slate-50">
                    <TableCell className="font-mono font-semibold">{vehicle.reg}</TableCell>
                    <TableCell className="font-medium">{vehicle.model}</TableCell>
                    <TableCell className="text-slate-600">{vehicle.type}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(vehicle.status)}>
                        {getStatusText(vehicle.status)}
                      </Badge>
                    </TableCell>
                    <TableCell>{vehicle.mileage.toLocaleString()} mi</TableCell>
                    <TableCell className="text-sm">{vehicle.motExpiry}</TableCell>
                    <TableCell className="text-sm">{vehicle.insurance}</TableCell>
                    <TableCell>
                      <Badge variant={vehicle.roadTax === 'Paid' ? 'default' : 'destructive'}>
                        {vehicle.roadTax}
                      </Badge>
                    </TableCell>
                    <TableCell>{vehicle.rental}</TableCell>
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