import Navbar from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen dark:bg-[#1f1f1f]">
      <Navbar />
      <main className="h-full mt-20">{children}</main>
    </div>
  );
};

export default MarketingLayout;
