import React from 'react';

const AdminHomePage = () => {
  return (
    <div className="admin-home-page">
      <h1>Admin Dashboard</h1>
      <p>Welcome to the Hawaii Bites Admin Dashboard. Here, you can manage users, vendors, and menu data.</p>

      <section>
        <h2>Manage Users</h2>
        <p>View and manage user profiles. Assign or remove the vendor role as needed.</p>
        {/* This button could open a modal or link to a detailed user management page */}
        <button>View and Edit Users</button>
      </section>

      <section>
        <h2>Manage Vendors</h2>
        <p>View and manage vendor profiles. You can update vendor information, remove vendors, and add new ones.</p>
        <button>View and Edit Vendors</button>
      </section>

      <section>
        <h2>Consolidated Menu Directory</h2>
        <p>Access the full menu directory of items across all campus food locations.</p>
        <button>View Full Menu Directory</button>
      </section>
    </div>
  );
};

export default AdminHomePage;
