import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface AddEmployeeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdd: (employee: any) => void;
}

export default function AddEmployeeDialog({ open, onOpenChange, onAdd }: AddEmployeeDialogProps) {
  const [formData, setFormData] = useState({
    name: '',
    status: 'active',
    company: '',
    phone: '',
    email: '',
    address: '',
    driverLicence: 'Valid',
    dbsCheck: 'Pending',
    bankName: '',
    accountNumber: '',
    sortCode: '',
    rating: '5.0',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      ...formData,
      rating: parseFloat(formData.rating),
    });
    setFormData({
      name: '',
      status: 'active',
      company: '',
      phone: '',
      email: '',
      address: '',
      driverLicence: 'Valid',
      dbsCheck: 'Pending',
      bankName: '',
      accountNumber: '',
      sortCode: '',
      rating: '5.0',
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Добавить сотрудника</DialogTitle>
          <DialogDescription>
            Заполните информацию о новом сотруднике
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="space-y-2 col-span-2">
              <Label htmlFor="name">ФИО *</Label>
              <Input
                id="name"
                placeholder="John Smith"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Статус</Label>
              <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Активен</SelectItem>
                  <SelectItem value="on-leave">Отпуск</SelectItem>
                  <SelectItem value="inactive">Неактивен</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Компания</Label>
              <Input
                id="company"
                placeholder="Main Office"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Телефон</Label>
              <Input
                id="phone"
                placeholder="+44 7700 900000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div className="space-y-2 col-span-2">
              <Label htmlFor="address">Адрес</Label>
              <Input
                id="address"
                placeholder="123 High Street, London"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="driverLicence">Водительское удостоверение</Label>
              <Select value={formData.driverLicence} onValueChange={(value) => setFormData({ ...formData, driverLicence: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Valid">Действительно</SelectItem>
                  <SelectItem value="Expiring Soon">Истекает</SelectItem>
                  <SelectItem value="Expired">Просрочено</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="dbsCheck">DBS проверка</Label>
              <Select value={formData.dbsCheck} onValueChange={(value) => setFormData({ ...formData, dbsCheck: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Passed">Пройдена</SelectItem>
                  <SelectItem value="Pending">Ожидание</SelectItem>
                  <SelectItem value="Failed">Не пройдена</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bankName">Банк</Label>
              <Input
                id="bankName"
                placeholder="Barclays"
                value={formData.bankName}
                onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sortCode">Sort Code</Label>
              <Input
                id="sortCode"
                placeholder="20-00-00"
                value={formData.sortCode}
                onChange={(e) => setFormData({ ...formData, sortCode: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="accountNumber">Номер счета</Label>
              <Input
                id="accountNumber"
                placeholder="12345678"
                value={formData.accountNumber}
                onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rating">Рейтинг</Label>
              <Input
                id="rating"
                type="number"
                step="0.1"
                min="0"
                max="5"
                placeholder="5.0"
                value={formData.rating}
                onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Отмена
            </Button>
            <Button type="submit" className="bg-sky-500 hover:bg-sky-600">
              Добавить сотрудника
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
