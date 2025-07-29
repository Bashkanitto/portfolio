import { AboutSection } from '@/components/AboutSection'
import { ContactSection } from '@/components/ContactSection'
import { HeroSection } from '@/components/HeroSection'
import { NavigationSection } from '@/components/NavigationSection'
import { ProjectsSection } from '@/components/ProjectsSection'

export default function Home() {
  return (
    <>
      <NavigationSection />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="py-8 px-4 bg-muted/50 text-center text-sm text-muted-foreground">
        <div className="container mx-auto">
          © 2025 Bashkanitto. Все права защищены.
        </div>
      </footer>
    </>
  )
}
