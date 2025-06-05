import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications - My Developer Portfolio",
  description: "Browse the certifications and qualifications achieved.",
  openGraph: {
    title: "Certifications - My Developer Portfolio",
    description: "Browse the certifications and qualifications achieved.",
  },
};

export default function CertificationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
