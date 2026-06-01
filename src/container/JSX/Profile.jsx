import React from 'react';
import '../CSS/Profile.css';
import { Link } from 'react-router-dom';

const Profile = () => {
  // Dummy user data
  const user = {
    email: 'user@example.com',
    phone: '+1 (555) 123-4567',
    plan: 'Premium Ultra HD',
    memberSince: 'August 2021',
    nextBilling: 'June 15, 2026',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
  };

  const handleLogout = () => {
    alert('Logging out...');
    // Add actual logout logic here
  };

  return (
    <div className="account-page-container">
      {/* Header */}
      <header className="account-header">
        <h2 className="netflix-logo"><Link to="/home" style={{textDecoration:'none',color:'red'}}>NETFLIX</Link></h2>
        <div className="header-avatar-container">
          <img src={user.avatar} alt="User Avatar" className="header-avatar" />
        </div>
      </header>

      {/* Main Content */}
      <main className="account-main">
        <div className="account-title-container">
          <h1 className="account-title">Account</h1>
          <span className="member-since">
            <span className="member-icon">🍿</span> Member Since {user.memberSince}
          </span>
        </div>

        {/* Section 1: Membership & Billing */}
        <section className="account-section">
          <div className="section-left">
            <h3 className="section-title">Membership & Billing</h3>
            <button className="cancel-membership-btn">Cancel Membership</button>
          </div>
          
          <div className="section-right">
            <div className="info-block">
              <div className="info-row">
                <span className="info-text font-bold">{user.email}</span>
                <a href="#change-email" className="action-link">Change account email</a>
              </div>
              <div className="info-row">
                <span className="info-text text-muted">Password: ********</span>
                <a href="#change-password" className="action-link">Change password</a>
              </div>
              <div className="info-row">
                <span className="info-text text-muted">{user.phone}</span>
                <a href="#change-phone" className="action-link">Change phone number</a>
              </div>
            </div>

            <div className="info-block no-border">
              <div className="info-row">
                <span className="info-text font-bold">Next billing date: {user.nextBilling}</span>
                <a href="#billing-details" className="action-link">Manage payment info</a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Plan Details */}
        <section className="account-section">
          <div className="section-left">
            <h3 className="section-title">Plan Details</h3>
          </div>
          
          <div className="section-right">
            <div className="info-row no-border">
              <span className="info-text font-bold plan-badge">{user.plan}</span>
              <a href="#change-plan" className="action-link">Change plan</a>
            </div>
          </div>
        </section>

        {/* Section 3: Settings & Logout */}
        <section className="account-section">
          <div className="section-left">
            <h3 className="section-title">Settings</h3>
          </div>
          
          <div className="section-right">
            <div className="info-row no-border flex-start">
              <button onClick={handleLogout} className="action-link logout-btn">
                Sign out of all devices
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;