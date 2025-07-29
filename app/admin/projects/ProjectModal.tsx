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
import { Project, ProjectFormData } from './types'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (e: React.FormEvent) => void
  editingProject: Project | null
  formData: ProjectFormData
  onInputChange: (field: keyof ProjectFormData, value: string) => void
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  editingProject,
  formData,
  onInputChange,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>
              {editingProject
                ? 'Редактировать проект'
                : 'Добавить новый проект'}
            </DialogTitle>
            <DialogDescription>
              Заполните информацию о проекте
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Название</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={e => onInputChange('title', e.target.value)}
                placeholder="Название проекта"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="img">Изображение (URL)</Label>
              <Input
                id="img"
                value={formData.img}
                onChange={e => onInputChange('img', e.target.value)}
                placeholder="/images/project.png"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Описание</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={e => onInputChange('description', e.target.value)}
                placeholder="Описание проекта..."
                rows={3}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="link">Ссылка на сайт</Label>
              <Input
                id="link"
                type="url"
                value={formData.link}
                onChange={e => onInputChange('link', e.target.value)}
                placeholder="https://example.com"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="github">GitHub (необязательно)</Label>
              <Input
                id="github"
                type="url"
                value={formData.github}
                onChange={e => onInputChange('github', e.target.value)}
                placeholder="https://github.com/user/repo"
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Отмена
            </Button>
            <Button type="submit">
              {editingProject ? 'Сохранить' : 'Добавить'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
