function validateForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Validasi email atau nomor telepon
  if (email === "") {
    alert("Please enter your email or phone number.");
    return false;
  }

  // Validasi kata sandi
  if (password === "") {
    alert("Please enter your password.");
    return false;
  }

  // Autentikasi (dapat diganti dengan logika autentikasi sesuai kebutuhan)
  // Di sini kita hanya menampilkan pesan
  alert("Logged in successfully!");
}
