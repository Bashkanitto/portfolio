import type { Metadata } from 'next'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/Sidebar/Sidebar'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Admin',
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex-1 flex flex-col p-4">
        <Breadcrumbs />
        <main className="flex-1 p-2">{children}</main>
      </div>
    </SidebarProvider>
  )
}
