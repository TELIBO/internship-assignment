import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist in Santa Monica, CA",
  description:
    "Dr. Maya Reynolds is a licensed clinical psychologist in Santa Monica, CA specializing in anxiety, trauma, EMDR, and burnout therapy for high-achieving adults. In-person and telehealth sessions available.",
  keywords:
    "therapist Santa Monica, psychologist Santa Monica CA, anxiety therapy, trauma therapist, EMDR therapy, burnout therapy, clinical psychologist California, telehealth therapy California",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
