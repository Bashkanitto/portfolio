import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowDown, Github, Linkedin, Mail, Notebook } from 'lucide-react'
import Image from 'next/image'

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit">
                Доступен для новых проектов
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Frontend
                <br />
                <span className="text-primary">Разработчик</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Создаю современные веб-приложения на React и Next.js с фокусом
                на пользовательский опыт и производительность.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a download="/resume.pdf" href="">
                <Button variant="default" size="lg" className="gap-2">
                  <Notebook className="h-4 w-4" />
                  CV
                </Button>
              </a>
              <a href="https://github.com/bashkanitto">
                <Button variant="outline" size="lg" className="gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </a>
              <a href="https://linkedin.com/in/aidynn">
                <Button variant="outline" size="lg" className="gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold">3+</div>
                <div className="text-sm text-muted-foreground">Года опыта</div>
              </div>
              <div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-muted-foreground">Проектов</div>
              </div>
              <div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-muted-foreground">
                  Довольных клиентов
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl" />
              <div className="relative bg-card border rounded-full p-8 shadow-2xl flex items-center justify-center">
                <Image
                  src="/avatar.png"
                  alt="Профиль"
                  width={400}
                  height={400}
                  className="rounded-full object-cover avatar w-[400px] h-[450px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <a href="#about">
            <Button variant="ghost" size="sm" className="gap-2 animate-bounce">
              <ArrowDown className="h-4 w-4" />
              Скролл вниз
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
