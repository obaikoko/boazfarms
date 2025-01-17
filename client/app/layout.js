import './globals.css';

export const metadata = {
  title: 'Boaz Farms | Organic Agriculture and Agribusiness Leaders',
  description:
    'Boaz Farms is a leading provider of organic food, sustainable employment opportunities, and agribusiness solutions for the African population. Transforming agriculture, empowering communities, and delivering quality farm products across Calabar and beyond.',
  keywords: [
    'organic farming',
    'sustainable agriculture',
    'agribusiness',
    'Boaz Farms',
    'Calabar farms',
    'African agriculture',
    'organic food providers',
    'employment in agriculture',
    'agripreneurs',
    'poultry farming',
    'farming in Calabar',
    'Boaz Farms agribusiness',
  ],
  image: '/images/logo.jpg',
};


export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
