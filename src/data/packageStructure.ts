import { packagesByDuration } from '../content';
import type { PackageContent } from '../content/types';

export const categories = [
  { code: 'premium', name: 'Premium' },
  { code: 'deluxe', name: 'Deluxe' },
  { code: 'standard', name: 'Standard' },
  { code: 'economy', name: 'Economy' },
  { code: 'budget', name: 'Budget' },
];

export interface PackageDefinition {
  title: string;
  subtitle: string;
  images: string;
  prices: { [key: string]: string | undefined };
}

const toPackageDefinition = (pkg: PackageContent): PackageDefinition => ({
  title: pkg.title,
  subtitle: pkg.subtitle,
  images: pkg.cardImage ?? '',
  prices: pkg.prices,
});

export const packageStructure: { [key: string]: PackageDefinition[] } = Object.entries(
  packagesByDuration,
).reduce<Record<string, PackageDefinition[]>>((acc, [duration, packages]) => {
  acc[duration] = packages.map(toPackageDefinition);
  return acc;
}, {});

export const durationDetails: { [key: string]: { alias: string } } = {
  '3N4D': { alias: '3 Nights / 4 Days' },
  '4N5D': { alias: '4 Nights / 5 Days' },
  '5N6D': { alias: '5 Nights / 6 Days' },
  '6N7D': { alias: '6 Nights / 7 Days' },
};

