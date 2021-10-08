// Imports
const QRCode = require("qrcode-svg");
const prompt = require("prompt-sync")();
const colors = require("colors");

// Welcome
console.info("Welcome to the SVG QR Code Generator!\n".cyan);

// Info Collection
const link = prompt("Enter the URL that the QR Code should point to: ".yellow);
const fileName = prompt("Enter the name to use for the SVG QR Code: ".yellow);

// Build QR Code
const qrcode = new QRCode({
  content: `${link}`,
  padding: 4,
  width: 2000,
  height: 2000,
  color: "#000000",
  background: "#ffffff",
  ecl: "H",
});

// Save QR Code to Current Dir
qrcode.save(`${fileName}.svg`, function (error) {
  if (error) throw error;
  console.info("\nDone!".green);
});
