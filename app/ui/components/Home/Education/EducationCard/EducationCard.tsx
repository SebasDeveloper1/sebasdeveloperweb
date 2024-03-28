import { AnchorHTMLAttributes } from 'react';

interface EducationCardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: JSX.Element;
}

export function EducationCard({ children, ...props }: EducationCardProps) {
  return (
    <a className="group flex justify-center items-center w-full" {...props}>
      <div className="flex justify-center items-center w-full group-hover:animate-cta">
        {children}
      </div>
    </a>
  );
}
