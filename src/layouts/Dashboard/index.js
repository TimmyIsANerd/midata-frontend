import { Sidebar, Header } from "@/components/Dashboard";

export function DashboardLayout({children}){
    return (
      <section className="w-full flex bg-[#f5f5f5]">
        <Sidebar />
        <div className="flex w-full flex-col">
          <Header />
          <div className="w-full h-fit p-3">{children}</div>
        </div>
      </section>
    );
}