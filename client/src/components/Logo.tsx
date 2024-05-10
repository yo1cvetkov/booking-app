import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";
import { Link } from "@tanstack/react-router";

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <Link to="/" className={cn(className, "flex items-center gap-x-2")}>
      <img {...props} className="w-12" src="/bookme-logo.svg" />
      <span className="font-semibold">Bookme</span>
    </Link>
  );
};

Logo.Skeleton = function LogoSkeleton() {
  return (
    <div className="flex items-center gap-x-4">
      <Skeleton className="w-10 h-10 rounded-full" />
      <Skeleton className="w-20 h-4" />
    </div>
  );
};
