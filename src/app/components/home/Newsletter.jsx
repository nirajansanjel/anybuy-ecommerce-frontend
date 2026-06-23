const Newsletter = () => {
  return (
    <section className="px-6 lg:px-16 max-w-[1200px] mx-auto pb-24">
      <div className="relative bg-primary-container/20 rounded-[40px] p-12 md:p-24 overflow-hidden text-center">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl" />

        <h2 className="font-display text-3xl md:text-5xl font-bold text-on-surface mb-6 relative z-10">
          Stay in the loop.
        </h2>
        <p className="text-on-surface-variant max-w-xl mx-auto mb-10 relative z-10">
          Subscribe to get the latest updates on new arrivals and special offers.
        </p>

        {/* No submit handler yet — wire this up to your real subscribe
            endpoint when ready, this only restyles the existing markup. */}
        <form className="max-w-md mx-auto flex flex-col md:flex-row gap-4 relative z-10">
          <input
            type="email"
            placeholder="Email Address"
            required
            className="flex-1 bg-white border-none rounded-full px-8 py-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary soft-shadow"
          />
          <button
            type="submit"
            className="bg-primary text-on-primary px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
