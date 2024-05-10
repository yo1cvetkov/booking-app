import { cn } from "@/lib/utils";

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <div className={cn(className, "flex items-center gap-x-2")}>
      <img {...props} className="w-12" src="/bookme-logo.svg" />
      <span className="font-semibold">Bookme</span>
    </div>
  );
};
