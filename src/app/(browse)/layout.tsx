import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function BrowseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full h-screen">
      <Navbar />
      <Banner />

      <div>{children}</div>
      <Footer />
    </div>
  );
}
