import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <header className="bg-[#004A32] text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Manoa Munchies</h1>
        <nav className="space-x-4">
          <Link href="/home" className="hover:underline">Home</Link>
          <Link href="/menu" className="hover:underline">Menu</Link>
          <Link href="/profile" className="hover:underline">Profile</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
