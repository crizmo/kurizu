import { Metadata } from 'next';
import DrawingsContent from '../../components/DrawingsContent';

export const metadata: Metadata = {
  title: 'My Drawings | Kurizu',
  description: 'A collection of my artwork and sketches.',
  openGraph: {
    title: 'My Drawings | Kurizu',
    description: 'A collection of my artwork and sketches.',
    images: [
      {
        url: '/api/og/drawings',
        width: 1200,
        height: 630,
        alt: 'Grid of my drawings',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Drawings | Kurizu',
    description: 'A collection of my artwork and sketches.',
    images: ['/api/og/drawings'],
  },
};

export default function DrawingsPage() {
  return <DrawingsContent />;
}