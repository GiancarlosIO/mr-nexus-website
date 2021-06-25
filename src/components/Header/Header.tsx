import Link from '@/components/Link';

const links = [
  {
    url: '/blog',
    label: 'Blog',
  },
  {
    url: '/about',
    label: 'Sobre mí',
  },
  {
    url: '/contact',
    label: 'Contáctame',
  },
];

const Header = props => {
  return (
    <header className="pt-6 flex justify-between items-center">
      <Link href="/" className="text-3xl rounded-lg inline">
        <span className="font-reggae text-purple-500">-N</span>
      </Link>
      <div>
        {links.map(link => (
          <Link
            key={link.url}
            href={link.url}
            className="mr-2 text-purple-500 font-bold duration-300 ease-in-out transition-colors hover:text-purple-800"
          >
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
