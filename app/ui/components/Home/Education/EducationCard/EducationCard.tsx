// Models and utilities
import { EducationCardProps } from './EducationCard.model';

/**
 * Component representing a clickable card for education-related content.
 * @param {EducationCardProps} props - Props object containing children elements and additional props.
 * @param {ReactNode} props.children - Child elements to be rendered within the card.
 * @param {object} props - Additional props to be spread onto the anchor element.
 * @returns {JSX.Element} - JSX element representing the education card.
 */
export function EducationCard({ children, ...props }: EducationCardProps) {
  return (
    <a className="group flex justify-center items-center w-full" {...props}>
      <div className="flex justify-center items-center w-full group-hover:animate-cta">
        {children}
      </div>
    </a>
  );
}
