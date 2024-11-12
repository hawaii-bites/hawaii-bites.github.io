const MainContent: React.FC = () => {
    return (
      <main className="flex-grow container mx-auto py-10">
        <h2 className="text-3xl font-bold mb-4">Welcome to Manoa Munchies!</h2>
        <p className="text-lg mb-6">
          Discover your favorite campus meals and check out what’s available today.
        </p>
  
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search for meals, cuisines, or vendors..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>
  
        {/* Popular Choices Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-[var(--primary-green)] mb-4">Popular Choices</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Teriyaki Chicken Bowl</h4>
              <p className="text-gray-600">A popular choice from Campus Center.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Vegetarian Sushi</h4>
              <p className="text-gray-600">Fresh, healthy, and delicious.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">BBQ Pork Sandwich</h4>
              <p className="text-gray-600">A student favorite from Manoa Gardens.</p>
            </div>
          </div>
        </section>
  
        {/* Food Categories Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-[var(--primary-green)] mb-4">Explore by Category</h3>
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-green-200 text-green-800 font-semibold rounded-lg hover:bg-green-300">
              Vegetarian
            </button>
            <button className="px-4 py-2 bg-green-200 text-green-800 font-semibold rounded-lg hover:bg-green-300">
              Chinese
            </button>
            <button className="px-4 py-2 bg-green-200 text-green-800 font-semibold rounded-lg hover:bg-green-300">
              Vegan
            </button>
            <button className="px-4 py-2 bg-green-200 text-green-800 font-semibold rounded-lg hover:bg-green-300">
              On-the-Go
            </button>
            <button className="px-4 py-2 bg-green-200 text-green-800 font-semibold rounded-lg hover:bg-green-300">
              Desserts
            </button>
          </div>
        </section>
  
        {/* Daily Highlights or Deals */}
        <section>
          <h3 className="text-2xl font-semibold text-[var(--primary-green)] mb-4">Today&apos;s Specials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-yellow-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Spicy Tuna Bowl</h4>
              <p className="text-gray-700">Available today at Paradise Palms.</p>
              <p className="text-green-600 font-semibold mt-2">10% off today!</p>
            </div>
            <div className="p-4 bg-yellow-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Hawaiian BBQ Plate</h4>
              <p className="text-gray-700">Featured at the Food Truck Hub.</p>
              <p className="text-green-600 font-semibold mt-2">Limited time special!</p>
            </div>
          </div>
        </section>
      </main>
    );
  };
  
  export default MainContent;
  