import { Navbar } from "@/shared/components/layout/Navbar";
import { MerchSection } from "@/modules/merch/components/MerchSection";
import { BookingSection } from "@/modules/merch/components/BookingSection";
import { Footer } from "@/shared/components/layout/Footer";

export default function MerchPage() {
    return (
        <div className="relative min-h-screen w-full flex flex-col pt-20">
            <Navbar />

            <main className="flex flex-col items-center w-full grow">
                <MerchSection />
                <BookingSection />
            </main>

            <Footer />
        </div>
    );
}
