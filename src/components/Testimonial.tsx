import Logo from "./Logo";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export default function Testimonial({
  quote,
  author,
  role,
  company,
}: TestimonialProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Company logo */}
        <div className="flex justify-center mb-8">
          <Logo className="h-8" variant="dark" />
        </div>

        {/* Quote */}
        <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed tracking-tight text-gray-900">
          &ldquo;{quote}&rdquo;
        </blockquote>

        {/* Author */}
        <div className="mt-8">
          <div className="font-medium">{author}</div>
          <div className="text-sm text-gray-500">
            {role}, {company}
          </div>
        </div>
      </div>
    </section>
  );
}
