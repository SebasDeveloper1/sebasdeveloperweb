import { CertificationCollection } from '@/app/lib/api/generated/graphql';

export interface CertificateListProps {
  certificationCollection: CertificationCollection;
}

export interface NavbarItems {
  name: string;
  title: string;
  subtitle: string;

  icon: JSX.Element;
}
