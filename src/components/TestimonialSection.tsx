import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
  {
    author: "Sarah Chen",
    handle: "@sarahc_dev",
    content: "This product completely transformed how I work. The attention to detail and user experience is unmatched.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&h=256",
  },
  {
    author: "Alex Rivera",
    handle: "@arivera_tech",
    content: "Absolutely love the minimalist design and powerful features. It's exactly what I've been looking for.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&h=256",
  },
  {
    author: "Emily Johnson",
    handle: "@emj_designs",
    content: "The attention to detail in this product is incredible. Every interaction feels purposeful and refined.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=256&h=256",
  },
  {
    author: "David Kim",
    handle: "@davidk_product",
    content: "This has become an essential part of my daily workflow. The simplicity and power are perfectly balanced.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&h=256",
  },
];

export function TestimonialSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-950 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Loved by thousands
          </h2>
          <p className="text-lg text-gray-400">
            Here's what our amazing users have to say
          </p>
        </div>
      </div>
      
      <div className="relative flex w-full gap-6 self-start overflow-hidden px-4">
        <div className="animate-scroll flex w-full gap-6 py-4">
          {testimonials.concat(testimonials).map((testimonial, i) => (
            <TestimonialCard
              key={i}
              className="w-[350px] flex-shrink-0"
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}