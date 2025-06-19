import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="bg-background text-foreground w-full min-h-screen flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center w-full max-w-md">
        <div className="mb-8 relative group">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Qwikish
          </h1>
          <span className="absolute -bottom-1.5  -right-8 bg-secondary text-secondary-foreground text-xs px-2 py-0.5 rounded-full font-medium shadow-sm">
            v1
          </span>
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;