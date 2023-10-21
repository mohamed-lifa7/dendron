import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/layout/hero";

const MarketingPage = () => {
  return (
    <div className="flex min-h-full flex-col ">
      <div className="flex flex-1 flex-col items-center justify-center gap-y-8 px-6 pb-10 text-center md:justify-start">
        <Hero />
      </div>
      <Footer />
    </div>
  );
};

export default MarketingPage;
