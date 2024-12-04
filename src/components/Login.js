// src/components/Login.js
import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Menambahkan state untuk error
  const [isLoading, setIsLoading] = useState(false); // Menambahkan state untuk loading

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi input (misalnya pastikan email dan password tidak kosong)
    if (!email || !password) {
      setError('Email dan Password harus diisi!');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Mengirim data login ke backend
      const response = await fetch('https://your-backend-api-endpoint.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Jika login berhasil, misalnya simpan token atau alihkan pengguna
        console.log('Login berhasil:', data);
        alert('Login berhasil!');

        // Anda bisa menyimpan token atau melakukan redirect ke halaman lain
        // localStorage.setItem('token', data.token); // Menyimpan token di localStorage (opsional)
        // window.location.href = '/dashboard'; // Redirect ke halaman dashboard (contoh)
      } else {
        // Jika login gagal
        setError(data.message || 'Login gagal. Cek kembali email dan password Anda.');
      }
    } catch (error) {
      // Menangani kesalahan jika terjadi masalah jaringan atau server
      console.error('Error:', error);
      setError('Terjadi kesalahan. Silakan coba lagi nanti.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>} {/* Menampilkan pesan error */}
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Login'} {/* Menampilkan status loading */}
        </button>
      </form>
    </div>
  );
}

export default Login;
