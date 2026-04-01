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
        {/* Company badge */}
        <div className="inline-flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="text-xs font-bold text-gray-400">
              {company.charAt(0)}
            </span>
          </div>
          <span className="text-sm font-medium text-gray-400">
            {company}
          </span>
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
