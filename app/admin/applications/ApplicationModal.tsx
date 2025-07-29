import React from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Application, ApplicationFormData } from './types'

interface ApplicationModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (e: React.FormEvent) => void
  application: Application | null
  formData: ApplicationFormData
  onInputChange: (field: keyof ApplicationFormData, value: string) => void
  isViewMode?: boolean
}

const statusLabels = {
  new: 'Новая',
  in_progress: 'В работе',
  completed: 'Завершена',
  rejected: 'Отклонена',
}

const statusColors = {
  new: 'bg-blue-100 text-blue-800',
  in_progress: 'bg-yellow-100 text-yellow-800',
  completed: 'bg-green-100 text-green-800',
  rejected: 'bg-red-100 text-red-800',
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  application,
  formData,
  onInputChange,
  isViewMode = true,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <form onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>
              {isViewMode ? 'Детали заявки' : 'Редактировать заявку'}
            </DialogTitle>
            <DialogDescription>
              {application && (
                <span className="flex items-center gap-2 mt-2">
                  <span>Статус:</span>
                  <Badge className={statusColors[application.status]}>
                    {statusLabels[application.status]}
                  </Badge>
                </span>
              )}
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Имя</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={e => onInputChange('name', e.target.value)}
                  placeholder="Имя клиента"
                  disabled={isViewMode}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={e => onInputChange('phone', e.target.value)}
                  placeholder="+7 (XXX) XXX-XX-XX"
                  disabled={isViewMode}
                  required
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={e => onInputChange('email', e.target.value)}
                placeholder="email@example.com"
                disabled={isViewMode}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="subject">Тема обращения</Label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={e => onInputChange('subject', e.target.value)}
                placeholder="Тема заявки"
                disabled={isViewMode}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="message">Сообщение</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={e => onInputChange('message', e.target.value)}
                placeholder="Текст обращения..."
                rows={4}
                disabled={isViewMode}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="status">Статус</Label>
              <Select
                value={formData.status}
                onValueChange={value => onInputChange('status', value)}
                disabled={isViewMode}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Выберите статус" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">Новая</SelectItem>
                  <SelectItem value="in_progress">В работе</SelectItem>
                  <SelectItem value="completed">Завершена</SelectItem>
                  <SelectItem value="rejected">Отклонена</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {application && (
              <div className="grid grid-cols-2 gap-4 pt-2 border-t">
                <div className="text-sm">
                  <span className="font-medium">Создана:</span>
                  <br />
                  {new Date(application.createdAt).toLocaleString('ru-RU')}
                </div>
                <div className="text-sm">
                  <span className="font-medium">Обновлена:</span>
                  <br />
                  {new Date(application.updatedAt).toLocaleString('ru-RU')}
                </div>
              </div>
            )}
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Закрыть
            </Button>
            {!isViewMode && <Button type="submit">Сохранить изменения</Button>}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
