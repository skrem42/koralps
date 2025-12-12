import { AgencyNavbar, AgencyFooter } from '@/components/agency';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AgencyNavbar />
      <div className="pt-16">
        {children}
      </div>
      <AgencyFooter />
    </>
  );
}
