import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <header className="bg-[#004A32] text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Hawaii Bites</h1>
        <nav className="space-x-4">
          <Link href="/home" className="hover:underline">Home</Link>
          <Link href="/profile" className="hover:underline">Profile</Link>
          <Link href="/todays-top-picks" className="hover:underline">Today&apos;s Top Picks</Link>
          <Link href="/food-available-now" className="hover:underline">Food&apos;s Available Right Now</Link>
          <Link href="/Admin" className="hover:underline">Admin</Link>
          <Link href="/Vendor" className="hover:underline">Vendor</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
