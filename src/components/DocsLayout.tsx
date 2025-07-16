import { Outlet } from 'react-router-dom';
import { SidebarProvider } from '@/components/ui/sidebar';
import { DocsSidebar } from './DocsSidebar';
import { Header } from './Header';

export function DocsLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col w-full">
        <Header />
        <div className="flex flex-1">
          <DocsSidebar />
          <main className="flex-1">
            <div className="container mx-auto max-w-4xl px-4 py-8 md:px-8">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}