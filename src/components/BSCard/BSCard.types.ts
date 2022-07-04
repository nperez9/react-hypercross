export type ImagePosition = 'top' | 'bottom';

export interface CardProps {
  title: string;
  paragraph: string;
  subtitle?: string;
  links?: Array<{
    url: string;
    title: string;
    target: '_blank' | '_self' | '_parent' | '_top' | string;
  }>;
  imageSrc?: string;
  imagePosition?: ImagePosition;
}

export type CardKeys = keyof CardProps;