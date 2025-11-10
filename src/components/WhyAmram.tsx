import "@fontsource/caudex";
import "@fontsource/poppins";
import { whyAmramContent } from "../content";

export function WhyAmram() {
  const { title, description, highlights } = whyAmramContent;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6 font-caudex">
            {title}
          </h2>
          {description && (
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              {description}
            </p>
          )}
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="text-center flex flex-col items-center"
              >
                {highlight.icon && (
                  <img src={highlight.icon} alt={highlight.title} className="mb-4" />
                )}
                <h3 className="font-bold mb-2">{highlight.title}</h3>
                <p className="text-gray-600 w-2/3">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}