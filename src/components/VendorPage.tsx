import React from 'react';

const VendorHomePage = () => {
  return (
    <div className="vendor-home-page">
      <h1>Vendor Dashboard</h1>
      <p>Welcome to the Hawaii Bites Vendor Dashboard. Here, you can update your menu and profile information.</p>

      <section>
        <h2>Today&apos;s Menu</h2>
        <p>Update your menu items for today. Make sure to list specials or limited-time offers.</p>
        <button>Update Today’s Menu</button>
      </section>

      <section>
        <h2>Weekly Menu</h2>
        <p>Manage your weekly menu to let users know what’s available on specific days.</p>
        <button>Update Weekly Menu</button>
      </section>

      <section>
        <h2>Vendor Profile</h2>
        <p>Update your vendor information, including contact details and location.</p>
        <button>Edit Profile</button>
      </section>
    </div>
  );
};

export default VendorHomePage;
