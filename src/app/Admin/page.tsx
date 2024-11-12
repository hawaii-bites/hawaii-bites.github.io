import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const AdminHomePage = () => {
  return (
    <div>
      <Navbar />
    <div className="admin-home-page" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>Admin Dashboard</h1>
      <p style={{ fontSize: '1.1rem', color: '#666' }}>
        Welcome to the Hawaii Bites Admin Dashboard. Here, you can efficiently manage users, vendors, and menu data.
      </p>

      <section style={{ marginTop: '30px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#333' }}>Manage Users</h2>
        <p style={{ fontSize: '1rem', color: '#666' }}>
          View and manage user profiles, and assign or revoke the vendor role as needed.
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
          View and Edit Users
        </button>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#333' }}>Manage Vendors</h2>
        <p style={{ fontSize: '1rem', color: '#666' }}>
          View vendor profiles, update information, add new vendors, or remove existing ones.
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
          View and Edit Vendors
        </button>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#333' }}>Consolidated Menu Directory</h2>
        <p style={{ fontSize: '1rem', color: '#666' }}>
          Access and manage the comprehensive menu directory for all campus food locations.
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
          View Full Menu Directory
        </button>
      </section>
    </div>
    <Footer />
    </div>
  );
};

export default AdminHomePage;
