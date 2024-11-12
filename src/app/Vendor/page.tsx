import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const VendorHomePage = () => {
  return (
    <div>
      <Navbar />
    <div className="vendor-home-page" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>Vendor Dashboard</h1>
      <p style={{ fontSize: '1.1rem', color: '#666' }}>
        Welcome to the Hawaii Bites Vendor Dashboard. Here, you can manage your daily and weekly menu items, as well as update your vendor profile.
      </p>

      <section style={{ marginTop: '30px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#333' }}>Today&apos;s Menu</h2>
        <p style={{ fontSize: '1rem', color: '#666' }}>
          Keep your customers informed by updating your menu for today. Be sure to highlight any specials or limited-time offerings.
        </p>
        <button style={{
          padding: '10px 20px',
          fontSize: '1rem',
          color: '#fff',
          backgroundColor: '#007bff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Update Today’s Menu
        </button>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#333' }}>Weekly Menu</h2>
        <p style={{ fontSize: '1rem', color: '#666' }}>
          Plan ahead by setting your weekly menu. This helps users know what items are available throughout the week.
        </p>
        <button style={{
          padding: '10px 20px',
          fontSize: '1rem',
          color: '#fff',
          backgroundColor: '#28a745',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Update Weekly Menu
        </button>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#333' }}>Vendor Profile</h2>
        <p style={{ fontSize: '1rem', color: '#666' }}>
          Keep your information up-to-date, including contact details and location, to ensure accurate customer interaction.
        </p>
        <button style={{
          padding: '10px 20px',
          fontSize: '1rem',
          color: '#fff',
          backgroundColor: '#ffc107',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Edit Profile
        </button>
      </section>
    </div>
    <Footer />
    </div>
  );
};

export default VendorHomePage;
