import { AppSidebar } from "@/components/navigations/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "../navigations/site-header";
import { ScrollArea } from "../ui/scroll-area";

type Props = {
  children: React.ReactNode;
};

export function ProtectedLayout({ children }: Props) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "18rem",
          "--sidebar-width-mobile": "18rem",
          "--sidebar-width-icon": "4rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset className="md:peer-data-[variant=inset]:ml-8">
        <SiteHeader />
        <ScrollArea className="h-[calc(100dvh-65px)] px-6">
          <section className="py-6">{children}</section>
        </ScrollArea>
      </SidebarInset>
    </SidebarProvider>
  );
}
