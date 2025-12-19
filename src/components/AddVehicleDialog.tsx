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
import { Textarea } from '@/components/ui/textarea';

interface AddVehicleDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdd: (vehicle: any) => void;
}

export default function AddVehicleDialog({ open, onOpenChange, onAdd }: AddVehicleDialogProps) {
  const [formData, setFormData] = useState({
    reg: '',
    model: '',
    type: '',
    status: 'active',
    mileage: '',
    motExpiry: '',
    insurance: '',
    roadTax: 'Paid',
    rental: 'Own',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      ...formData,
      mileage: parseInt(formData.mileage),
      lastService: new Date().toISOString().split('T')[0],
    });
    setFormData({
      reg: '',
      model: '',
      type: '',
      status: 'active',
      mileage: '',
      motExpiry: '',
      insurance: '',
      roadTax: 'Paid',
      rental: 'Own',
      notes: '',
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Добавить фургон</DialogTitle>
          <DialogDescription>
            Заполните информацию о новом транспортном средстве
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="reg">Регистрационный номер *</Label>
              <Input
                id="reg"
                placeholder="AB12 CDE"
                value={formData.reg}
                onChange={(e) => setFormData({ ...formData, reg: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="model">Модель *</Label>
              <Input
                id="model"
                placeholder="Mercedes Sprinter"
                value={formData.model}
                onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type">Тип</Label>
              <Input
                id="type"
                placeholder="Long Wheelbase"
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
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
                  <SelectItem value="maintenance">Обслуживание</SelectItem>
                  <SelectItem value="inactive">Неактивен</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="mileage">Пробег (мили)</Label>
              <Input
                id="mileage"
                type="number"
                placeholder="45000"
                value={formData.mileage}
                onChange={(e) => setFormData({ ...formData, mileage: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="motExpiry">Срок MOT</Label>
              <Input
                id="motExpiry"
                type="date"
                value={formData.motExpiry}
                onChange={(e) => setFormData({ ...formData, motExpiry: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="insurance">Страховка до</Label>
              <Input
                id="insurance"
                type="date"
                value={formData.insurance}
                onChange={(e) => setFormData({ ...formData, insurance: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="roadTax">Дорожный налог</Label>
              <Select value={formData.roadTax} onValueChange={(value) => setFormData({ ...formData, roadTax: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Paid">Оплачен</SelectItem>
                  <SelectItem value="Due Soon">Скоро</SelectItem>
                  <SelectItem value="Overdue">Просрочен</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="rental">Компания аренды</Label>
              <Select value={formData.rental} onValueChange={(value) => setFormData({ ...formData, rental: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Own">Собственный</SelectItem>
                  <SelectItem value="Enterprise">Enterprise</SelectItem>
                  <SelectItem value="Northgate">Northgate</SelectItem>
                  <SelectItem value="Europcar">Europcar</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 col-span-2">
              <Label htmlFor="notes">Заметки</Label>
              <Textarea
                id="notes"
                placeholder="Дополнительная информация..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Отмена
            </Button>
            <Button type="submit" className="bg-sky-500 hover:bg-sky-600">
              Добавить фургон
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
