export interface HighlightContent {
  title: string;
  description: string;
  icon?: string;
}

export interface WhyAmramContent {
  title: string;
  description?: string;
  highlights: HighlightContent[];
}

export interface PackageDayImage {
  url?: string;
  name?: string;
}

export interface PackageDay {
  day: number;
  title: string;
  activities: string[];
  images: PackageDayImage[];
}

export interface PackageItinerary {
  overviewTitle: string;
  overviewSubtitle: string;
  days: PackageDay[];
}

export interface PackageContent {
  slug: string;
  title: string;
  durationCode: string;
  subtitle: string;
  order?: number;
  cardImage?: string;
  prices: Record<string, string | undefined>;
  itinerary: PackageItinerary;
}

