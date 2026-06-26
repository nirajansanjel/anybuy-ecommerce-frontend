import { FaArrowRotateRight, FaCheck, FaCreditCard, FaTruck } from "react-icons/fa6";

const features = [
  { icon: FaCheck, title: "Quality Products", subtitle: "Only the best, every time" },
  { icon: FaTruck, title: "Fast Delivery", subtitle: "Your order, right on time" },
  { icon: FaArrowRotateRight, title: "Easy Returns", subtitle: "30-day hassle-free policy" },
  { icon: FaCreditCard, title: "Secure Payment", subtitle: "Encrypted checkout, always" },
];

const Features = () => {
  return (
    <section className="bg-primary/5 py-16 ">
      <div className="px-6 lg:px-16 max-w-[1200px] mx-auto flex flex-wrap justify-center lg:justify-between gap-12">
        {features.map(({ icon: Icon, title, subtitle }) => (
          <div key={title} className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary soft-shadow text-xl">
              <Icon />
            </div>
            <div>
              <span className="block font-display text-base font-semibold text-on-surface text-xl">
                {title}
              </span>
              <span className="text-xs text-on-surface-variant text-lg">{subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
