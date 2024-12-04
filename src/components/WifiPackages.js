// src/components/WifiPackages.js
import React, { useState } from 'react';
import './WifiPackages.css';

const wifiPackages = [
  {
    id: 1,
    name: 'Paket Basic',
    speed: '10 Mbps',
    price: 'Rp 100.000/bulan',
    description: 'Paket dasar cocok untuk penggunaan pribadi atau keluarga kecil.'
  },
  {
    id: 2,
    name: 'Paket Standard',
    speed: '20 Mbps',
    price: 'Rp 150.000/bulan',
    description: 'Paket standar cocok untuk streaming, gaming, dan browsing dengan kecepatan tinggi.'
  },
  {
    id: 3,
    name: 'Paket Premium',
    speed: '50 Mbps',
    price: 'Rp 300.000/bulan',
    description: 'Paket premium untuk penggunaan intensif dengan kecepatan sangat tinggi.'
  },
  {
    id: 4,
    name: 'Paket Ultra',
    speed: '100 Mbps',
    price: 'Rp 500.000/bulan',
    description: 'Paket ultra untuk bisnis atau rumah dengan banyak perangkat yang membutuhkan koneksi cepat.'
  },
  // New Packages
  {
    id: 5,
    name: 'Paket Streaming & Gaming',
    speed: '30 Mbps',
    price: 'Rp 200.000/bulan',
    description: 'Ideal untuk streaming 4K dan gaming tanpa lag. Dapatkan pengalaman terbaik saat bermain game dan menonton film.'
  },
  {
    id: 6,
    name: 'Paket Work From Home',
    speed: '50 Mbps',
    price: 'Rp 350.000/bulan',
    description: 'Paket Wi-Fi dengan kecepatan tinggi yang cocok untuk pekerjaan jarak jauh, video conference, dan kerja online tanpa gangguan.'
  },
  {
    id: 7,
    name: 'Paket High-Speed Premium',
    speed: '150 Mbps',
    price: 'Rp 700.000/bulan',
    description: 'Paket super cepat untuk penggunaan yang sangat intensif, ideal untuk keluarga besar atau kantor dengan banyak perangkat.'
  },
  {
    id: 8,
    name: 'Paket Bisnis Profesional',
    speed: '200 Mbps',
    price: 'Rp 1.200.000/bulan',
    description: 'Paket untuk bisnis yang membutuhkan koneksi cepat dan stabil. Ideal untuk kantor, toko, atau perusahaan besar.'
  },
  {
    id: 9,
    name: 'Paket Ekstra Hemat',
    speed: '5 Mbps',
    price: 'Rp 70.000/bulan',
    description: 'Paket ekonomis untuk kebutuhan browsing dasar, seperti email dan media sosial.'
  },
  {
    id: 10,
    name: 'Paket Super 4K',
    speed: '80 Mbps',
    price: 'Rp 450.000/bulan',
    description: 'Paket ideal untuk keluarga yang sering menonton film 4K dan streaming video dengan kualitas tinggi.'
  },
  {
    id: 11,
    name: 'Paket Gila Streaming',
    speed: '150 Mbps',
    price: 'Rp 850.000/bulan',
    description: 'Paket untuk para penggemar streaming. Tonton semua film, serial, dan video tanpa buffering.'
  },
  {
    id: 12,
    name: 'Paket Mutiara Bisnis',
    speed: '300 Mbps',
    price: 'Rp 2.000.000/bulan',
    description: 'Paket premium untuk bisnis yang memerlukan koneksi sangat cepat dan tanpa gangguan. Cocok untuk kantor besar dan perusahaan teknologi.'
  }
];

function WifiPackages() {
  const [purchasedPackages, setPurchasedPackages] = useState([]);
  const [purchaseDetails, setPurchaseDetails] = useState(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');

  // Fungsi untuk membuka modal pembayaran
  const handleBuy = (pkg) => {
    setSelectedPackage(pkg);
    setIsPaymentModalOpen(true); // Menampilkan modal pembayaran
  };

  // Fungsi untuk menangani pembayaran
  const handlePayment = () => {
    if (selectedPackage) {
      setPurchasedPackages((prevState) => [...prevState, selectedPackage.id]);
      const purchaseTime = new Date().toLocaleString();
      setPurchaseDetails({ packageName: selectedPackage.name, purchaseTime });
      setPaymentStatus(`Pembayaran berhasil menggunakan metode: ${paymentMethod}`);
      setIsPaymentModalOpen(false); // Menutup modal pembayaran
    }
  };

  return (
    <div className="wifi-packages-container">
      <h2>Paket Layanan WiFi</h2>
      <div className="packages-list">
        {wifiPackages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <h3>{pkg.name}</h3>
            <p>Kecepatan: {pkg.speed}</p>
            <p>Harga: {pkg.price}</p>
            <p>{pkg.description}</p>

            {/* Jika sudah dibeli, tampilkan status pembelian */}
            {purchasedPackages.includes(pkg.id) ? (
              <div className="purchase-status">
                <p>Paket {pkg.name} telah dibeli.</p>
                <p>Waktu Pembelian: {purchaseDetails?.purchaseTime}</p>
                <button className="purchased-button" disabled>
                  Sudah Dibeli
                </button>
              </div>
            ) : (
              <button onClick={() => handleBuy(pkg)} className="buy-button">
                Beli
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Modal Pembayaran */}
      {isPaymentModalOpen && (
        <div className="payment-modal">
          <h3>Proses Pembayaran</h3>
          <p>Paket yang ingin dibeli: {selectedPackage?.name}</p>
          <p>Harga: {selectedPackage?.price}</p>
          <div className="payment-form">
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="payment-method-select"
            >
              <option value="">Pilih Metode Pembayaran</option>
              <option value="Kartu Kredit">Kartu Kredit</option>
              <option value="Transfer Bank">Transfer Bank</option>
              <option value="OVO/Dana">OVO/Dana</option>
            </select>

            {/* Tampilan form pembayaran berdasarkan metode yang dipilih */}
            {paymentMethod === "Kartu Kredit" && (
              <>
                <input type="text" placeholder="Nama Pemilik Kartu" />
                <input type="number" placeholder="Nomor Kartu Kredit" />
              </>
            )}

            {paymentMethod === "Transfer Bank" && (
              <>
                <input type="text" placeholder="Nama Pemilik Rekening" />
                <input type="number" placeholder="Nomor Rekening Bank" />
              </>
            )}

            {paymentMethod === "OVO/Dana" && (
              <>
                <input type="text" placeholder="Nomor Handphone (OVO/Dana)" />
              </>
            )}

            <button onClick={handlePayment}>Bayar</button>
          </div>
        </div>
      )}

      {/* Status Pembayaran */}
      {paymentStatus && (
        <div className="purchase-summary">
          <h3>{paymentStatus}</h3>
          <p>Paket yang dibeli: {purchaseDetails?.packageName}</p>
          <p>Waktu Pembelian: {purchaseDetails?.purchaseTime}</p>
        </div>
      )}
    </div>
  );
}

export default WifiPackages;
