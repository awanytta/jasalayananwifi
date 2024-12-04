// src/components/FAQ.js
import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Apa itu LUMIONS?",
      answer: "LUMIONS adalah penyedia layanan internet yang menawarkan koneksi cepat dan andal untuk rumah dan bisnis."
    },
    {
      question: "Apa saja paket yang tersedia?",
      answer: "Kami memiliki beberapa pilihan paket mulai dari Paket Basic hingga Paket Ultra, yang dapat disesuaikan dengan kebutuhan Anda."
    },
    {
      question: "Bagaimana cara membayar tagihan WiFi?",
      answer: "Anda dapat melakukan pembayaran menggunakan berbagai metode seperti kartu kredit, transfer bank, dan aplikasi dompet digital seperti OVO/Dana."
    },
    {
      question: "Apakah LUMIONS menyediakan layanan di seluruh Indonesia?",
      answer: "Ya, kami menyediakan layanan di berbagai kota di Indonesia, pastikan untuk memeriksa area layanan kami."
    },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-title">FAQ (Pertanyaan yang Sering Diajukan)</h2>
      <p className="faq-description">Berikut adalah beberapa pertanyaan yang sering diajukan oleh pelanggan kami.</p>

      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <span>{faq.question}</span>
              <i className={`icon ${activeIndex === index ? 'rotate' : ''}`}>▼</i>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
