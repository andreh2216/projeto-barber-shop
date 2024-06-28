
import "./globals.css";



export const metadata = {
  title: "Barber Shop",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}