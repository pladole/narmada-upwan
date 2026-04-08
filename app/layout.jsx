
export const metadata = {
  title: "Narmada Upwan and Sanshodhan Kendra",
  description:
    "A medicinal biodiversity, research, and educational park at Bhilkheda, Chikhaldara, developed in memory of Narmadabai Kisanrao Ladole.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
