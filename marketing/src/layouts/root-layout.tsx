const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="bg-background text-foreground w-full min-h-screen flex flex-col items-center">
            {children}
        </div>
    );
};

export default RootLayout;
