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
  prices: { [key: string]: string };
}

export const packageStructure: { [key: string]: PackageDefinition[] } = {
  '3N4D': [
    { title: 'Classic Honeymoon', subtitle: "1N Portblair 2N Havelock", images: './static/tour-packages/3N4D/3N4D-classic-honeymoon.png', prices: { premium: '46,800', deluxe: '42,500', standard: '38,900', economy: '36,600', budget: '31,700' } },
    { title: 'Adventure Andaman', subtitle: "3N Havelock", images: './static/tour-packages/3N4D/3N4D-adventure-andaman.png', prices: { premium: '42,900', deluxe: '37,600', standard: '33,400', economy: '29,600', budget: '26,000' } },
    { title: 'Classic Short Trip', subtitle: "1N Portblair 1N Niel 1N Havelock", images: './static/tour-packages/3N4D/3N4D-classic-short-trip.png', prices: { premium: '40,800', deluxe: '36,600', standard: '33,000', economy: '30,600', budget: '25,700' } },
    { title: 'Mini Andaman', subtitle: "2N Portblair 1N Havelock", images: './static/tour-packages/3N4D/3N4D-mini-andaman.png', prices: { premium: '39,600', deluxe: '34,800', standard: '31,200', economy: '28,100', budget: '24,000' } },
    { title: 'Budgety Andaman', subtitle: "1N Portblair 1N Havelock 1N Ross", images: './static/tour-packages/3N4D/3N4D-budgety-andaman.png', prices: { premium: '38,050', deluxe: '32,750', standard: '29,150', economy: '25,550', budget: '21,950' } },
  ],
  '4N5D': [
    { title: 'Elegant Honeymoon', subtitle: "1N Portblair, 2N Havelock, 1N Neil", images: './static/tour-packages/4N5D/4N5D-elegant-honeymoon.png', prices: { premium: '67,150', deluxe: '61,850', standard: '56,550', economy: '54,150', budget: '47,450' } },
    { title: 'Scuba Touch', subtitle: "2N Portblair, 2N Havelock", images: './static/tour-packages/4N5D/4N5D-scuba-touch.png', prices: { premium: '60,300', deluxe: '54,100', standard: '49,300', economy: '45,700', budget: '39,700' } },
    { title: 'Family Special', subtitle: "3N Portblair, 1N Havelock", images: './static/tour-packages/4N5D/4N5D-family-special.png', prices: { premium: '54,700', deluxe: '48,200', standard: '43,400', economy: '39,100', budget: '33,800' } },
    { title: 'Scuba Basic', subtitle: "2N Portblair, 2N Neil", images: './static/tour-packages/4N5D/4N5D-scuba-basic.png', prices: { premium: '53,100', deluxe: '51,100', standard: '46,300', economy: '43,100', budget: '37,100' } },
    { title: 'Baratang Trip', subtitle: "4N Portblair", images: './static/tour-packages/4N5D/4N5D-batarang-trip.png', prices: { premium: '51,000', deluxe: '44,000', standard: '39,000', economy: '34,200', budget: '29,500 ' } },
  ],
  '5N6D': [
    { title: 'Honeymoon Special', subtitle: "2N Portblair, 2N Havelock, 1N Neil", images: './static/tour-packages/5N6D/5N6D-honeymoon-special.png', prices: { premium: '96,000', deluxe: '88,800', standard: '82,800', economy: '78,500', budget: '70,800' } },
    { title: 'Islands Exotic', subtitle: "4N Portblair, 1N Neil", images: './static/tour-packages/5N6D/5N6D-islands-exotic.png', prices: { premium: '67,200', deluxe: '58,400', standard: '52,800', economy: '47,300', budget: '40,800' } },
    { title: 'Ultimate Andaman', subtitle: "4N Portblair, 1N Havelock", images: './static/tour-packages/5N6D/5N6D-ultimate-andaman.png', prices: { premium: '66,400', deluxe: '58,000', standard: '52,000', economy: '46,500', budget: '40,000' } },
    { title: 'Honeymoon Adventure', subtitle: "3N Portblair, 2N Havelock", images: './static/tour-packages/5N6D/5N6D-honeymoon-adventure.png', prices: { premium: '61,300', deluxe: '53,400', standard: '47,400', economy: '42,600', budget: '35,400' } },
    { title: 'Honeymoon Trip', subtitle: "3N Portblair, 1N Havelock, 1N Neil", images: './static/tour-packages/5N6D/5N6D-honeymoon-trip.png', prices: { premium: '60,600', deluxe: '52,300', standard: '46,300', economy: '41,500', budget: '34,300' } },
  ],
  '6N7D': [
    { title: 'Explore Andaman', subtitle: "3N Portblair, 2N Havelock, 1N Neil", images: './static/tour-packages/6N7D/6N7D-explore-andaman.png', prices: { premium: '87,200', deluxe: '79,700', standard: '71,500', economy: '67,100', budget: '57,100' } },
    { title: 'South Andaman', subtitle: "4N Portblair, 2N Havelock", images: './static/tour-packages/6N7D/6N7D-south-andaman.png', prices: { premium: '84,900', deluxe: '75,300', standard: '69,300', economy: '62,100', budget: '53,600' } },
    { title: 'Couple Special', subtitle: "2N Portblair, 2N Havelock, 2N Neil", images: './static/tour-packages/6N7D/6N7D-couple-special.png', prices: { premium: '81,600', deluxe: '73,200', standard: '66,000', economy: '61,200', budget: '51,600' } },
    { title: 'Geographic Discovery', subtitle: "4N Portblair, 1N Neil, 1N Havelock", images: './static/tour-packages/6N7D/6N7D-geographic-discovery.png', prices: { premium: '77,000', deluxe: '67,400', standard: '61,400', economy: '54,200', budget: '45,800' } },
    { title: 'Discover Andaman', subtitle: "4N Portblair, 1N Havelock, 1N Neil", images: './static/tour-packages/6N7D/6N7D-discover-andaman.png', prices: { premium: '76,500', deluxe: '67,000', standard: '59,700', economy: '53,700', budget: '45,300' } },
    { title: 'Honeymoon Mesmerize', subtitle: "2N Portblair, 1N Havelock, 3N Neil", images: './static/tour-packages/6N7D/6N7D-honeymoon-mesmerize.png', prices: { premium: '75,950', deluxe: '67,550', standard: '62,950', economy: '55,550', budget: '45,950' } },
  ]
};



export const durationDetails: { [key: string]: { alias: string } } = {
  '3N4D': { alias: '3 Nights / 4 Days' },
  '4N5D': { alias: '4 Nights / 5 Days' },
  '5N6D': { alias: '5 Nights / 6 Days' },
  '6N7D': { alias: '6 Nights / 7 Days' },
};
