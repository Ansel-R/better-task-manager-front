
import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/layout/header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { BoardProvider } from "@/context/user-context";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const token = (await cookies()).get("auth_token")?.value;

  if (!token) redirect("/login");

  return <div>

    
  <BoardProvider>

  <SidebarProvider>
     <AppSidebar />

    <div className="w-full overflow-hidden bg-dark1">
        <Header/>
        <div className="h-full">{children}</div>
    </div>

  </SidebarProvider>

  </BoardProvider>
  
  
  </div>
}