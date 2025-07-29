import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description:
        'Современная платформа электронной коммерции с интеграцией платежных систем',
      image: '/projects/ecommerce.jpg',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/user/ecommerce',
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'Приложение для управления задачами с drag-and-drop функционалом',
      image: '/projects/tasks.jpg',
      technologies: ['React', 'Redux', 'DnD Kit', 'Node.js'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/user/tasks',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description:
        'Адаптивный портфолио сайт с современным дизайном и анимациями',
      image: '/projects/portfolio.jpg',
      technologies: ['Next.js', 'Tailwind', 'Framer Motion'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/user/portfolio',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-muted/50">
      <div className="">
        <div className="mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Портфолио
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Избранные <span className="text-primary">проекты</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Некоторые из моих последних работ, демонстрирующие различные
            технологии и подходы к решению задач.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-12">
          {projects.map(project => (
            <Card key={project.id} className="overflow-hidden w-[400px]">
              <div className="aspect-video relative bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <CardHeader>
                <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardFooter className="gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 gap-1"
                  asChild
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Демо
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 gap-1"
                  asChild
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    Код
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            Смотреть все проекты
          </Button>
        </div>
      </div>
    </section>
  )
}
