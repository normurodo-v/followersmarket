function order() {
  let username = document.getElementById("username").value;
  let pack = document.getElementById("package").value;

  if(username === "") {
    document.getElementById("msg").innerHTML = "❌ Username kiriting!";
    return;
  }

  let parts = pack.split("-");
  let count = parts[0];
  let price = parts[1];

  document.getElementById("msg").innerHTML =
    "✅ Buyurtma qabul qilindi!<br>" +
    "👤 Username: " + username + "<br>" +
    "📦 Paket: " + count + " obunachi<br>" +
    "💰 Narx: " + price + " so‘m<br><br>" +
    "💳 Kartaga to‘lov qiling va screenshot yuboring.";
}