import rawWhyAmram from './whyAmram.json';
import type { PackageContent, WhyAmramContent } from './types';

const rawPackageModules = import.meta.glob<PackageContent>('./packages/*.json', {
  eager: true,
  import: 'default',
});

const sortPackages = (packages: PackageContent[]): PackageContent[] =>
  [...packages].sort((a, b) => {
    const orderA = a.order ?? Number.MAX_SAFE_INTEGER;
    const orderB = b.order ?? Number.MAX_SAFE_INTEGER;
    if (orderA !== orderB) {
      return orderA - orderB;
    }
    return a.title.localeCompare(b.title);
  });

export const whyAmramContent = rawWhyAmram as WhyAmramContent;

const packageContentList = sortPackages(
  Object.values(rawPackageModules).map((pkg) => pkg as PackageContent),
);

export const packagesContent = packageContentList;

export const packagesByDuration = packageContentList.reduce<Record<string, PackageContent[]>>(
  (acc, pkg) => {
    const key = pkg.durationCode;
    acc[key] = acc[key] ? [...acc[key], pkg] : [pkg];
    acc[key] = sortPackages(acc[key]!);
    return acc;
  },
  {},
);

export const packagesBySlug = packageContentList.reduce<Record<string, PackageContent>>(
  (acc, pkg) => {
    acc[pkg.slug] = pkg;
    return acc;
  },
  {},
);

