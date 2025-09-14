export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
  enabled?: boolean;
  children?: NavigationItem[];
}

export interface DynamicNavigationItem extends NavigationItem {
  dynamicChildren?: {
    collection: 'blog' | 'pages';
    filter?: (_entry: any) => boolean;
    sort?: (_a: any, _b: any) => number;
    transform?: (_entry: any) => NavigationItem;
  };
}

export type NavigationConfig = (NavigationItem | DynamicNavigationItem)[];

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
  ariaLabel: string;
  enabled?: boolean;
}

export type SocialLinksConfig = SocialLink[];

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
  enabled?: boolean;
}

export interface FooterConfig {
  links: FooterLink[];
  social: {
    enabled: boolean;
    links: SocialLinksConfig;
    size?: 'small' | 'medium' | 'large';
  };
  copyright: {
    enabled: boolean;
    text: string;
    year?: number;
    companyName?: string;
  };
}