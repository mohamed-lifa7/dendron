import { Navbar } from "@/components/layout/nav-bar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full ">
      <Navbar />
      <main className="h-full ">{children}</main>
    </div>
  );
};

export default MarketingLayout;
