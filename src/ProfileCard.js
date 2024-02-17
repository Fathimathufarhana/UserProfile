import React from 'react';
import './ProfileCard.css';

const ProfileCard = () => {

  return (
    <div className='parent'>
    <div className="profile-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s" alt="Profile" className="profile-picture"/>
      <div className="profile-info">
        <h2>Emma</h2>
        <p className="job-title">Photographer</p>
        <p> lorem88
            ipsum99 dolor77 sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed at volutpat ante. Aliquam orci
        </p>
        <p>Email: emma@gmail.com</p>
        <p>Phone: 9989789760</p>

        <button className="button">View Full Profile</button>
      </div>
    </div>

<div className="profile-card">
<img src="https://img.freepik.com/premium-photo/fun-3d-cartoon-illustration-indian-doctor_183364-114361.jpg?size=626&ext=jpg&ga=GA1.1.1135336376.1708149488&semt=ais" alt="Profile" className="profile-picture"/>
<div className="profile-info">
  <h2>Mathew</h2>
  <p className="job-title">Doctor</p>
  <p> lorem88
      ipsum99 dolor77 sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed at volutpat ante. Aliquam orci
  </p>
  <p>Email: mathew@gmail.com</p>
  <p>Phone: 7865298907</p>

  <button className="button">View Full Profile</button>
</div>
</div>



</div>
  );
};

export default ProfileCard;
