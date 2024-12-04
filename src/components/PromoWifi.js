import React, { useState } from 'react';
import './PromoWifi.css';

function PromoWifi() {
  const [activePromo, setActivePromo] = useState('');
  const [showPaymentPage, setShowPaymentPage] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [selectedPromo, setSelectedPromo] = useState(null);
  const [purchasedPromos, setPurchasedPromos] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bank, setBank] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  const promoData = [
    {
      id: 1,
      title: 'Promo Flash Sale - Paket WiFi 30% Off!',
      description: 'Dapatkan kecepatan internet super cepat dengan diskon 30%. Paket Wi-Fi terbaik untuk streaming dan gaming.',
      price: 100000,
      image: 'https://via.placeholder.com/400x250/6a11cb/ffffff?text=Flash+Sale+30%25+Off',
      buttonText: 'Aktifkan Promo',
    },
    {
      id: 3,
      title: 'Paket Premium Gaming - Diskon 20%',
      description: 'Paket Premium Gaming dengan kecepatan 50 Mbps. Dapatkan diskon 20% untuk pengalaman bermain game terbaik.',
      price: 150000,
      image: 'https://via.placeholder.com/400x250/3498db/ffffff?text=Gaming+Promo+20%25',
      buttonText: 'Beli Sekarang',
    },
    {
      id: 4,
      title: 'Diskon Pelajar - 40% untuk Paket Edukasi',
      description: 'Dukung proses belajar daring dengan koneksi Wi-Fi terbaik. Diskon spesial 40% untuk pelajar.',
      price: 90000,
      image: 'https://via.placeholder.com/400x250/f1c40f/ffffff?text=Diskon+Pelajar+40%25',
      buttonText: 'Aktifkan Promo',
    },
    {
      id: 5,
      title: 'Langganan Tahunan Hemat 50%',
      description: 'Hemat lebih banyak dengan paket langganan tahunan kami. Dapatkan diskon 50% untuk pembayaran di muka!',
      price: 600000,
      image: 'https://via.placeholder.com/400x250/1abc9c/ffffff?text=Langganan+Tahunan+50%25+Off',
      buttonText: 'Beli Sekarang',
    },
    {
      id: 6,
      title: 'Promo Midnight - Diskon 35% (00:00-06:00)',
      description: 'Khusus pengguna malam, nikmati akses internet cepat dengan diskon 35% selama jam 00:00 - 06:00.',
      price: 110000,
      image: 'https://via.placeholder.com/400x250/8e44ad/ffffff?text=Midnight+Promo+35%25',
      buttonText: 'Aktifkan Promo',
    },
    {
      id: 7,
      title: 'Promo Bundling - Internet + TV 45% Off',
      description: 'Dapatkan akses internet plus langganan TV dengan diskon 45%! Cocok untuk hiburan di rumah.',
      price: 160000,
      image: 'https://via.placeholder.com/400x250/34495e/ffffff?text=Bundling+45%25+Off',
      buttonText: 'Beli Sekarang',
    },
  ];

  const bankOptions = ['BCA', 'Mandiri', 'BNI', 'BRI', 'Permata'];

  const handleButtonClick = (promoType, promo) => {
    if (promoType === 'Aktifkan Promo') {
      setActivePromo(`Promo "${promo.title}" berhasil diaktifkan!`);
    } else if (promoType === 'Beli Sekarang') {
      setSelectedPromo(promo);
      setShowPaymentPage(true);
    }
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
    setBank('');
    setAccountNumber('');
  };

  const handlePurchase = () => {
    if (selectedPromo) {
      setPurchasedPromos([...purchasedPromos, selectedPromo.id]);
      setShowPaymentPage(false);
      setActivePromo(`Promo "${selectedPromo.title}" telah dibeli!`);
      setSelectedPromo(null);
      setName('');
      setEmail('');
      setBank('');
      setAccountNumber('');
      setPaymentMethod('');
    }
  };

  const isFormComplete = name && email && (paymentMethod !== 'Transfer Bank' || (bank && accountNumber)) && accountNumber;

  return (
    <section className="promo-section">
      <h2 className="promo-title">Promo Terbaru Wi-Fi Kami</h2>
      <div className="promo-container">
        {promoData.map((promo) => (
          <div key={promo.id} className="promo-card">
            <img src={promo.image} alt={promo.title} className="promo-image" />
            <div className="promo-content">
              <h3 className="promo-title-card">{promo.title}</h3>
              <p className="promo-description">{promo.description}</p>
              <p className="promo-price">Harga: Rp {promo.price.toLocaleString()}</p>
              <button
                className="cta-button"
                onClick={() => handleButtonClick(promo.buttonText, promo)}
                disabled={purchasedPromos.includes(promo.id)}
              >
                {promo.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {activePromo && (
        <div className="promo-feedback">
          <h3>Terima Kasih!</h3>
          <p>{activePromo}</p>
        </div>
      )}

      {showPaymentPage && selectedPromo && (
        <div className="payment-page">
          <h3>Halaman Pembayaran</h3>
          <div className="payment-details">
            <p><strong>Promo yang Dipilih:</strong> {selectedPromo.title}</p>
            <p><strong>Deskripsi:</strong> {selectedPromo.description}</p>
            <p><strong>Harga:</strong> Rp {selectedPromo.price.toLocaleString()}</p>
            <p><strong>Total Pembayaran:</strong> Rp {selectedPromo.price.toLocaleString()}</p>
          </div>

          <form className="payment-form">
            <label>
              Nama:
              <input
                type="text"
                name="name"
                placeholder="Masukkan Nama"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                placeholder="Masukkan Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <label>
              Metode Pembayaran:
              <select
                value={paymentMethod}
                onChange={handlePaymentMethodChange}
                required
              >
                <option value="">Pilih Metode Pembayaran</option>
                <option value="Kartu Kredit">Kartu Kredit</option>
                <option value="Transfer Bank">Transfer Bank</option>
                <option value="Dana">Dana</option>
                <option value="OVO">OVO</option>
                <option value="Gopay">Gopay</option>
                <option value="ShopeePay">ShopeePay</option>
              </select>
            </label>

            {paymentMethod === 'Kartu Kredit' && (
              <label>
                Nomor Kartu Kredit:
                <input
                  type="text"
                  name="creditCard"
                  placeholder="Masukkan Nomor Kartu"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  required
                />
              </label>
            )}

            {paymentMethod === 'Transfer Bank' && (
              <>
                <label>
                  Pilih Bank:
                  <select
                    value={bank}
                    onChange={(e) => setBank(e.target.value)}
                    required
                  >
                    <option value="">Pilih Bank</option>
                    {bankOptions.map((bank) => (
                      <option key={bank} value={bank}>
                        {bank}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Nomor Rekening:
                  <input
                    type="text"
                    name="bankAccount"
                    placeholder="Masukkan Nomor Rekening"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    required
                  />
                </label>
              </>
            )}

            {(paymentMethod === 'Dana' || paymentMethod === 'OVO' || paymentMethod === 'Gopay' || paymentMethod === 'ShopeePay') && (
              <label>
                Nomor Rekening:
                <input
                  type="tel"
                  name="accountNumber"
                  placeholder="Masukkan Nomor Rekening"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  required
                />
              </label>
            )}

            {isFormComplete && (
              <button
                type="button"
                className="payment-submit-button"
                onClick={handlePurchase}
              >
                Konfirmasi & Bayar
              </button>
            )}
          </form>

          {!isFormComplete && (
            <p className="form-warning">Mohon lengkapi semua informasi yang diperlukan untuk melanjutkan.</p>
          )}
        </div>
      )}
    </section>
  );
}

export default PromoWifi;
