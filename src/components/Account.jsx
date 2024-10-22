import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const [user, setUser] = useState({ name: '', email: '' });
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      setName(storedUser.name);
      setEmail(storedUser.email);
    } else {
      navigate('/');
    }
  }, [navigate]);

  const handleSave = () => {
    const updatedUser = { ...user, name, email };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setEditMode(false);
  };

  return (
    <div className="mt-5">
      <h2>Account Information</h2>
      {editMode ? (
        <>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-primary mt-3" onClick={handleSave}>
            Save
          </button>
        </>
      ) : (
        <>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button className="btn btn-primary" onClick={() => setEditMode(true)}>
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default Account;
