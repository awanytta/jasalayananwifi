// src/components/SignUp.js
import React, { useState } from 'react';
import './SignUp.css';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validasi jika password dan konfirmasi password cocok
    if (formData.password !== formData.confirmPassword) {
      alert('Password dan Konfirmasi Password tidak cocok!');
      return; // Hentikan pengiriman formulir
    }

    try {
      // Mengirim data ke backend
      const response = await fetch('https://your-backend-api-endpoint.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password
        }),
      });

      // Menunggu respons dari API
      const responseData = await response.json();

      // Mengecek apakah permintaan berhasil
      if (response.ok) {
        console.log('Pendaftaran berhasil!', responseData);
        alert('Pendaftaran berhasil! Silakan login.');
        // Anda bisa menambahkan pengalihan atau aksi lain setelah pendaftaran berhasil
      } else {
        // Jika ada kesalahan pada server (misalnya email sudah terdaftar)
        console.error('Terjadi kesalahan dalam pendaftaran', responseData);
        alert(`Pendaftaran gagal: ${responseData.message || 'Silakan coba lagi.'}`);
      }
    } catch (error) {
      // Menangani kesalahan jika terjadi masalah saat mengirim permintaan
      console.error('Error:', error);
      alert('Terjadi kesalahan. Silakan coba lagi nanti.');
    }
  };

  return (
    <div className="signup-container">
      <h2>Daftar Akun</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label>Konfirmasi Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit" className="signup-btn">Daftar</button>
      </form>
    </div>
  );
}

export default SignUp;
