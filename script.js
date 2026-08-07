document.addEventListener("DOMContentLoaded", () => {

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
	navLinks.classList.toggle('show');
});

document.querySelectorAll('.nav-links a').forEach(link => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		const targetId = link.getAttribute('href').substring(1);
		const targetSection = document.getElementById(targetId);
		if (targetSection) {
			targetSection.scrollIntoView({ behavior: 'smooth' });
		}
		navLinks.classList.remove('show');
	});
});
		 
	const filterButtons = document.querySelectorAll('.filter-buttons button');
	const items = document.querySelectorAll('.menu-grid .item');
	
	filterButtons.forEach(btn => {
		btn.addEventListener('click', () => {
			const filter = btn.dataset.filter;
			items.forEach(item => {
				if (filter === 'all') {
					item .style.display = '';
				} else if (item.classList.contains(filter)) {
					item.style.display = '';
				} else {
					item.style.display = 'none';
			}
		});
	});
});


const backToTop = document.getElementById('backToTop');
backToTop.addEventListener('click', () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
});

const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const closeModal = document.querySelector('.close');

openModal.addEventListener('click', () => {
	modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
	modal.style.display = 'none';
});

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	const nama = document.getElementById('nama').value.trim();
	const email = document.getElementById('email').value.trim();
	const pesan = document.getElementById('pesan').value.trim();
	
	if (!nama || !email || !pesan) {
		alert("Nama dan Email wajib diisi!");
	} else {
		alert("Terima kasih atas kritik dan sarannya!");
		modal.style.display = 'none';
		form.reset();
	}
});

const mapModal = document.getElementById('mapModal');
const openMap = document.getElementById('openMap');
const closeMap = mapModal.querySelector('.close');

openMap.addEventListener('click', () => {
	mapModal.style.display = 'flex';
});

closeMap.addEventListener('click', () => {
	mapModal.style.display = 'none';
});

const pembayaranOptions = document.querySelectorAll('input[name="pembayaran"]');
const qrisBox = document.getElementById('qrisCode');

pembayaranOptions.forEach(option => {
	option.addEventListener('change', () => {
		if (option.value == "QRIS") {
			if(!qrisBox.querySelector("img")) {
				showNotification(false, "Pembayaran Melalui QR Code Sedang Dalam Gangguan");
				qrisBox.style.display = "none";
			} else {
				qrisBox.style.display = "block";
			}
		} else {
			qrisBox.style.display = "none";
		}
	});
});

const notifModal = document.getElementById('notifModal');
const notifTitle = document.getElementById('notifTitle');
const notifMessage = document.getElementById('notifMessage');
const notifClose = document.querySelector("#notifModal .close");

notifClose.addEventListener("click", () => {
	notifModal.style.display = "none";
});

function showNotification(success, message) {
	notifTitle.textContent = success ? "Pembayaran Berhasil" : "Pembayaran Gagal";
	notifMessage.textContent = message;
	notifModal.style.display = "block";
	
	notifModal.querySelector('.modal-content').style.background = success ? "#37586F" : "#B71C1C";
}

const orderForm = document.getElementById('orderForm');
orderForm.addEventListener('submit', (e) => {
	e.preventDefault();
	
	const nama = document.getElementById('namaPemesan').value.trim();
	const menu = document.getElementById('menuPilihan').value;
	const serve = document.querySelector('input[name="serve"]:checked')?.value;
	const jumlah = document.getElementById('jumlah').value;
	const alamat = document.getElementById('alamat').value.trim();
	const telepon = document.getElementById('telepon').value.trim();
	const pembayaran = document.querySelector('input[name="pembayaran"]:checked')?.value;
	
	if (!nama || !menu || !serve || !jumlah || !alamat || !telepon || !pembayaran) {
		showNotification(false, "Lengkapi semua data pemesanan!");
	} else {
		if (pembayaran === "QRIS") {
			showNotification(true, `Terima kasih ${nama}, pesanan ${jumlah} ${menu} (${serve}) akan dikirim ke ${alamat}. Kami akan menghubungi Anda di nomor ${telepon}. Pembayaran QRIS berhasil.`);
		} else {
			showNotification(true, `Terima kasih ${nama}, pesanan ${jumlah} ${menu} (${serve}) akan dikirimke ${alamat}. Kami akan menghubungi Anda di nomor ${telepon}. Pembayaran dengan ${pembayaran} berhasil.`);
		}
		orderForm.reset();
		qrisBox.style.display = "none";
	}
});
});
	
	
				
	