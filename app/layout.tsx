import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Nivit Singh - Software Developer',
	description:
		'Welcome to my portfolio! I am a passionate Software Developer specializing in building scalable server architectures, robust APIs, and high-performance distributed systems. With expertise in cloud infrastructure and database optimization, I create efficient and reliable software solutions.',
	keywords: [
		'Software Developer',
		'Software Engineer',
		'System Architecture',
		'API Development',
		'Database Design',
		'Cloud Computing',
		'Microservices',
		'DevOps',
		'Nivit Singh',
		'Node.js',
		'Python',
		'Java',
		'Distributed Systems',
		'System Design',
		'software Architecture',
	],
	authors: [{ name: 'Nivit Singh' }],
	creator: 'Nivit Singh',
	openGraph: {
		title: 'Nivit Singh - Software Developer Portfolio',
		description: 'Passionate Software Developer crafting scalable and efficient server architectures. Explore my projects and technical expertise.',
		url: 'https://your-domain.com',
		siteName: 'Nivit Singh - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Nivit Singh - Software Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Nivit Singh - Software Developer',
		description: 'Passionate Software Developer crafting scalable and efficient server architectures. Explore my projects and technical expertise.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
