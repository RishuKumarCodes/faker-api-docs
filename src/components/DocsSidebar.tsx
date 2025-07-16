import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { navigationItems } from "@/data/navigation";
import { Separator } from "@/components/ui/separator";

export function DocsSidebar() {
  const location = useLocation();

  const isActivePath = (href: string) => {
    return location.pathname === href;
  };

  // Group navigation items by section
  const sections = navigationItems.reduce((acc, item) => {
    const section = item.section || "Other";
    if (!acc[section]) {
      acc[section] = [];
    }
    acc[section].push(item);
    return acc;
  }, {} as Record<string, typeof navigationItems>);

  return (
    <Sidebar className="w-64 border-r border-border ">
      <SidebarContent className="px-4 py-6 pt-14">
        {Object.entries(sections).map(([sectionName, items], sectionIndex) => (
          <div key={sectionName}>
            {sectionIndex > 0 && <Separator className="my-4" />}
            <SidebarGroup>
              <SidebarGroupLabel className="text-sm font-semibold text-muted-foreground mb-2">
                {sectionName}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActivePath(item.href)}
                      >
                        <NavLink
                          to={item.href}
                          className={({ isActive }) =>
                            cn(
                              "w-full justify-start text-sm font-normal py-2 px-3 rounded-md transition-colors",
                              "hover:bg-accent hover:text-accent-foreground",
                              isActive &&
                                "bg-accent text-accent-foreground font-medium"
                            )
                          }
                        >
                          {item.title}
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </div>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
