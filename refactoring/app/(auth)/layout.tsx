const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full dark:bg-[#1f1f1f]">
      <main className="h-full w-full flex justify-center items-center">
        {children}
      </main>
    </div>
  );
};

export default MarketingLayout;
