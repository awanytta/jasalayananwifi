// src/components/Blog.js
import React from 'react';
import './Blog.css';

function Blog() {
  const blogPosts = [
    {
      title: "Cara Memilih Paket WiFi yang Tepat",
      description: "Temukan panduan kami untuk memilih paket WiFi yang sesuai dengan kebutuhan rumah atau bisnis Anda.",
      date: "12 November 2024",
      image: "https://via.placeholder.com/600x400/6a11cb/ffffff?text=Paket+WiFi",
      link: "/blog/cara-memilih-paket-wifi"
    },
    {
      title: "Keuntungan Menggunakan Layanan Internet Fiber Optic",
      description: "Fiber optic menawarkan kecepatan tinggi dan stabilitas untuk pengalaman internet yang luar biasa.",
      date: "5 November 2024",
      image: "https://via.placeholder.com/600x400/2575fc/ffffff?text=Fiber+Optic",
      link: "/blog/keuntungan-fiber-optic"
    },
    {
      title: "Tips Mengoptimalkan Penggunaan WiFi di Rumah",
      description: "Ikuti tips sederhana kami untuk memastikan sinyal WiFi Anda optimal di setiap sudut rumah.",
      date: "1 November 2024",
      image: "https://via.placeholder.com/600x400/6a11cb/ffffff?text=Optimalkan+WiFi",
      link: "/blog/tips-optimalkan-wifi"
    },
    {
      title: "Manfaat Menggunakan WiFi 6 untuk Koneksi Lebih Cepat",
      description: "WiFi 6 adalah teknologi terbaru yang menawarkan kecepatan lebih tinggi dan lebih banyak perangkat yang terhubung tanpa mengurangi kualitas.",
      date: "14 November 2024",
      image: "https://via.placeholder.com/600x400/2575fc/ffffff?text=WiFi+6",
      link: "/blog/manfaat-wifi-6"
    }
  ];

  return (
    <div className="blog-container">
      <h2 className="blog-title">Blog & Berita</h2>
      <p className="blog-description">Selamat datang di blog kami, di mana kami berbagi informasi terbaru tentang layanan internet kami dan tips seputar penggunaan WiFi.</p>
      
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-post-title">{post.title}</h3>
              <p className="blog-post-description">{post.description}</p>
              <span className="blog-post-date">{post.date}</span>
              <a href={post.link} className="read-more">Baca Selengkapnya</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
