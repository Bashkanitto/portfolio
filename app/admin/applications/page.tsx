'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Eye, Edit, Trash2 } from 'lucide-react'
import { useApplications } from '@/hooks/useApplications'
import { Application, ApplicationFormData } from './types'
import { ApplicationModal } from './ApplicationModal'

const ApplicationsAdmin = () => {
  const { applications, updateApplication, deleteApplication } =
    useApplications()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null)
  const [isViewMode, setIsViewMode] = useState(true)
  const [formData, setFormData] = useState<ApplicationFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    status: 'new',
  })

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

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      status: 'new',
    })
    setSelectedApplication(null)
  }

  const handleViewApplication = (application: Application) => {
    setSelectedApplication(application)
    setFormData({
      name: application.name,
      email: application.email,
      phone: application.phone,
      subject: application.subject,
      message: application.message,
      status: application.status,
    })
    setIsViewMode(true)
    setIsModalOpen(true)
  }

  const handleEditApplication = (application: Application) => {
    setSelectedApplication(application)
    setFormData({
      name: application.name,
      email: application.email,
      phone: application.phone,
      subject: application.subject,
      message: application.message,
      status: application.status,
    })
    setIsViewMode(false)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    resetForm()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (selectedApplication && !isViewMode) {
      updateApplication(selectedApplication.id, formData)
    }

    handleCloseModal()
  }

  const handleInputChange = (
    field: keyof ApplicationFormData,
    value: string
  ) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const getStatusStats = () => {
    const stats = applications.reduce((acc, app) => {
      acc[app.status] = (acc[app.status] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    return stats
  }

  const stats = getStatusStats()

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Управление заявками</h1>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <span>Всего заявок: {applications.length}</span>
          <span>Новых: {stats.new || 0}</span>
          <span>В работе: {stats.in_progress || 0}</span>
          <span>Завершено: {stats.completed || 0}</span>
        </div>
      </div>

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        application={selectedApplication}
        formData={formData}
        onInputChange={handleInputChange}
        isViewMode={isViewMode}
      />

      {applications.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">Заявок пока нет</p>
        </div>
      ) : (
        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Имя</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Телефон</TableHead>
                <TableHead>Тема</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Дата</TableHead>
                <TableHead className="text-right">Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map(application => (
                <TableRow key={application.id}>
                  <TableCell className="font-medium">
                    {application.name}
                  </TableCell>
                  <TableCell>{application.email}</TableCell>
                  <TableCell>{application.phone}</TableCell>
                  <TableCell className="max-w-xs truncate">
                    {application.subject}
                  </TableCell>
                  <TableCell>
                    <Badge className={statusColors[application.status]}>
                      {statusLabels[application.status]}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(application.createdAt).toLocaleDateString(
                      'ru-RU'
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleViewApplication(application)}
                        className="gap-1"
                      >
                        <Eye className="h-4 w-4" />
                        Просмотр
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditApplication(application)}
                        className="gap-1"
                      >
                        <Edit className="h-4 w-4" />
                        Изменить
                      </Button>

                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="destructive"
                            size="sm"
                            className="gap-1"
                          >
                            <Trash2 className="h-4 w-4" />
                            Удалить
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Удалить заявку?</AlertDialogTitle>
                            <AlertDialogDescription>
                              {`Вы уверены, что хотите удалить заявку от "
                              ${application.name}`}
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Отмена</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => deleteApplication(application.id)}
                              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            >
                              Удалить
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  )
}

export default ApplicationsAdmin
