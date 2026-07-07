const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Research', href: '#research' },
  { name: 'Publications', href: '#publications' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-fafafa/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#hero" className="font-semibold text-gray-900 text-sm">Xinyu Zheng</a>
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs text-gray-500 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
