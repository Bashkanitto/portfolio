import { useState } from 'react'
import { Application, ApplicationFormData } from '@/components/Applications/types'

const initialApplications: Application[] = [
  {
    id: 1,
    name: 'Иван Петров',
    email: 'ivan@example.com',
    phone: '+7 (701) 123-45-67',
    subject: 'Разработка веб-сайта',
    message: 'Здравствуйте! Хотел бы заказать разработку корпоративного сайта для своей компании. Нужен современный дизайн и адаптивная верстка.',
    status: 'new',
    createdAt: '2025-07-20T10:30:00.000Z',
    updatedAt: '2025-07-20T10:30:00.000Z'
  },
  {
    id: 2,
    name: 'Анна Смирнова',
    email: 'anna@company.kz',
    phone: '+7 (702) 987-65-43',
    subject: 'Поддержка сайта',
    message: 'Нужна техническая поддержка для существующего сайта. Возникли проблемы с загрузкой страниц.',
    status: 'in_progress',
    createdAt: '2025-07-18T14:15:00.000Z',
    updatedAt: '2025-07-19T09:20:00.000Z'
  },
  {
    id: 3,
    name: 'Марат Абдуллин',
    email: 'marat.a@email.com',
    phone: '+7 (777) 555-12-34',
    subject: 'Мобильное приложение',
    message: 'Интересует разработка мобильного приложения для iOS и Android. Можете предоставить коммерческое предложение?',
    status: 'completed',
    createdAt: '2025-07-10T16:45:00.000Z',
    updatedAt: '2025-07-15T11:30:00.000Z'
  }
]

export const useApplications = () => {
  const [applications, setApplications] = useState<Application[]>(initialApplications)

  const updateApplication = (applicationId: number, applicationData: ApplicationFormData) => {
    setApplications(applications.map(app => 
      app.id === applicationId 
        ? { 
            ...app, 
            ...applicationData,
            updatedAt: new Date().toISOString()
          }
        : app
    ))
  }

  const deleteApplication = (applicationId: number) => {
    setApplications(applications.filter(app => app.id !== applicationId))
  }

  return {
    applications,
    updateApplication,
    deleteApplication
  }
}