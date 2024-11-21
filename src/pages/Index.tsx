import { TestimonialSection } from "@/components/TestimonialSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-4 py-20">
        <div className="mb-20 text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Beautiful design meets powerful functionality
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Experience the perfect balance of form and function. Built with
            attention to every detail.
          </p>
        </div>
      </div>
      <TestimonialSection />
    </div>
  );
};

export default Index;