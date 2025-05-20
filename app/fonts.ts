import { Playfair_Display, Cormorant_Garamond } from 'next/font/google';

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

export const cormorantGaramond = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
}); 