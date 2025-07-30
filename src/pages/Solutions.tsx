import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Simple Test Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Solutions Page Test
            </h1>
            <p className="text-xl text-muted-foreground">
              This is a test to see if the routing is working properly.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Solutions;