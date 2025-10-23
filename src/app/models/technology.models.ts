export interface TechnologyDropdown {
  title: string;
  content: string;
}

export interface Technology {
  title: string;
  description: string;
  link: string;
  image?: string;
  hasDropdowns?: boolean;
  dropdowns?: TechnologyDropdown[];
}