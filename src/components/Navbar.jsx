import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full bg-white border-b border-gray-100 z-50">
      <div className="flex justify-between items-center px-4 h-16">
        <Link to="/" className="font-serif text-xl font-bold tracking-tight text-gray-900">
          WallCraft
        </Link>
        <button className="text-gray-900 focus:outline-none p-2">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
