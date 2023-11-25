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
      <div>{children}</div>
      <Footer />
    </div>
  );
}
