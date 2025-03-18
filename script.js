document.addEventListener("DOMContentLoaded", () => {
    // Data Tracking (tetap dipertahankan)
    const trackingData = { 
        resi: "FF1122QWERTY321",
        origin: "Kota Surabaya",
        destination: "Kab Banyumas",
        service: "FastTrack",
        weight: "16 kg",
        pickupTime: "27/02/2024",
        deliveryTime: "01/03/2024",
        steps: [
            { status: "📍 Paket diambil", location: "Kota Surabaya", time: "2024-02-27 12:56:00" },
            { status: "🚚 Sedang dalam perjalanan", location: "GW-Surabaya", time: "2024-02-27 18:01:22" },
            { status: "✅ Paket telah sampai", location: "Kab Banyumas", time: "2024-03-01 10:00:00" }
        ]
    };

    const trackingInfo = document.getElementById("trackingInfo");
    let resultHTML = `
        <p><strong>Dari:</strong> ${trackingData.origin} ➝ <strong>Ke:</strong> ${trackingData.destination}</p>
        <p><strong>Metode:</strong> ${trackingData.service} | <strong>Berat:</strong> ${trackingData.weight}</p>
        <p><strong>Waktu Pick Up:</strong> ${trackingData.pickupTime} | <strong>Estimasi Sampai:</strong> ${trackingData.deliveryTime}</p>
        <h4 class="mt-3">🔍 Detail Perjalanan:</h4>
    `;

    trackingData.steps.forEach((step, index) => {
        setTimeout(() => {
            resultHTML += `
                <div class="tracking-step">
                    <div class="icon">${step.status.split(" ")[0]}</div>
                    <div>
                        <div class="status">${step.status.substring(2)}</div>
                        <small>${step.location} - ${step.time}</small>
                    </div>
                </div>
            `;
            trackingInfo.innerHTML = resultHTML;
        }, index * 600);
    });

    // ✅ Fungsi Toggle Navbar untuk Hamburger Menu
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navbarToggler.addEventListener("click", () => {
        navbarCollapse.classList.toggle("show"); // Toggle class untuk menampilkan/menyembunyikan menu
    });

    // ✅ Tutup Navbar setelah menu diklik (untuk UX yang lebih baik di mobile)
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            if (navbarCollapse.classList.contains("show")) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: true
                });
            }
        });
    });
});