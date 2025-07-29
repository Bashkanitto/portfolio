import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Code, Palette, Zap, Users } from 'lucide-react'

export const AboutSection = () => {
  const skills = [
    'TypeScript',
    'React.js',
    'Next.js',
    'Tailwind CSS',
    'Node.js',
    'PostgreSQL',
    'Git',
    'Figma',
  ]

  const features = [
    {
      icon: Code,
      title: 'Чистый код',
      description: 'Пишу качественный, масштабируемый и поддерживаемый код',
    },
    {
      icon: Palette,
      title: 'UI/UX дизайн',
      description:
        'Создаю интуитивные и привлекательные пользовательские интерфейсы',
    },
    {
      icon: Zap,
      title: 'Производительность',
      description: 'Оптимизирую приложения для максимальной скорости загрузки',
    },
    {
      icon: Users,
      title: 'Командная работа',
      description: 'Эффективно работаю в команде и взаимодействую с клиентами',
    },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Обо мне
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Превращаю идеи в <span className="text-primary">реальность</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Frontend-разработчик из Астаны с страстью к созданию современных
            веб-приложений. Специализируюсь на React экосистеме и всегда изучаю
            новые технологии.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Мой подход к разработке</h3>
            <p className="text-muted-foreground">
              Я верю в создание не просто красивых интерфейсов, а в разработку
              комплексных решений, которые решают реальные бизнес-задачи. Каждый
              проект для меня - это возможность применить лучшие практики и
              новейшие технологии.
            </p>
            <p className="text-muted-foreground">
              Работаю по принципам Agile, уделяю большое внимание тестированию и
              производительности. Всегда открыт к обратной связи и готов
              адаптироваться под требования проекта.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {skills.map(skill => (
              <Card key={skill} className="text-center p-4">
                <CardContent className="p-0">
                  <div className="text-sm font-medium">{skill}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(feature => (
            <Card
              key={feature.title}
              className="text-center p-6 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-0 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
