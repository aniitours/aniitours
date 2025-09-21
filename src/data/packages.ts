import { packageStructure, categories, durationDetails } from './packageStructure';

const generatedPackages = Object.entries(packageStructure).flatMap(([duration, packages]) => {
  return categories.flatMap(category => {
    return packages.map(pkg => {
      const id = `${pkg.title.toLowerCase().replace(/\s+/g, '-')}-${duration}-${category.code}`;
      return {
        id,
        category: category.code,
        duration,
        durationAlias: durationDetails[duration].alias,
        title: pkg.title,
        subtitle: pkg.subtitle,
        images: pkg.images,
        price: pkg.prices[category.code] || 'N/A',
        prices: pkg.prices, // Include the entire prices object
        locations: ['Portblair', 'Havelock', 'Neil'], // Placeholder locations
        activities: ['nature', 'beach', 'water', 'romantic'] // Placeholder activities
      };
    });
  });
});

export const packages = generatedPackages;

