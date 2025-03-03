import { DarkModeToggle } from "@/components/dark-mode-toogle";
import { HandCoins } from "lucide-react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10 dark:bg-black/50">
      <DarkModeToggle />
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <HandCoins className="size-4" />
          </div>
          ExpensifyX
        </a>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
