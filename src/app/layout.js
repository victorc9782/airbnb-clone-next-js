import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb Clone",
  description: "My Airbnb clone on Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
            <nav class="navbar">
                <div class="logo">
                    <img src="/airbnb.png" alt="Airbnb Logo"/>
                </div>
                <div class="nav-buttons">
                    <button class="login-button">Login</button>
                    <button class="signup-button">Sign Up</button>
                </div>
            </nav>
            {children}
            <footer class="footer">
                <div class="footer-content">
                    <p class="copyright">&copy; 2023 Airbnb Clone</p>
                    <div class="footer-links">
                        <a href="#" class="footer-link">Modern Slavery Act</a>
                        <a href="#" class="footer-link">Company Details</a>
                    </div>
                </div>
            </footer>
        </body>
    </html>
  );
}
