import { PRODUCTS_ROUTE } from "@/constants/route";
import Image from "next/image";
import Link from "next/link";

const tiles = {
  audio: {
    title: "High-Fidelity Audio",
    subtitle: "Sound that moves with you.",
    href: PRODUCTS_ROUTE,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtqPvLCDrl5-QNqWR3s8GxlXQkCuqwO8F2-DNW7ww9dLdglOOiks_C7IVRj1g-RRKqsyAXGdHZPg0DAVYnWTjFhxxzhXCKJWlH70cLI6SHAcVQfnWCcXaYA0rTlb1ShJsGucYkUFF1oYli62D9cGb46p2At2thmlPceyVY6GqAPbA0gPj0whBQPMZTeR1sQl46gzna7Tb96dmzjhIas1UpWd7J73nIK-_ZwGZyOP2THWDUKiatQRhXigIzhe4hG9DnF9jfCSnemQc",
  },
  smartHome: {
    title: "Smart Home",
    subtitle: "Intuitive living.",
    href: PRODUCTS_ROUTE,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfDICHUlX9o0II1hqWRneDjzb85Q0YsaqKHKmZa8644a9jkk_eWlO9pJlBy9nbSrAfHyvW8s3WnWZ2sCYVE2ShBQ2Mf8jSfcbc9I5nNtPJpkd5b-t_XmCRO3Ix4S2vDpa86G4ggICpBZTWNWC8e_7UTaqYs_LS_8EpBRUz3pQnLQYNfoqSffbFezZspfLXHlmdKhrC-YsWcgF8qQPP2WW3Ma39wvedu4E5DnckuGUgthmH8vtjvhAXDn7UzcgW87BwKdRPYAw2-qs",
  },
  accessories: {
    title: "Accessories",
    href: PRODUCTS_ROUTE,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCn-08GWsR2B89qJ4pCLVXtbt4P1Ut4STyZukFUihNsjM9tHtFp7tteYyeVMC5fcK4F4EhExMoWHSMOuryGP-SSd4SfBEVX8yoUiatS5Q3LRrNOEHxNgQWkQJD3s2tXmJAQzzoGYaKJVncw4E5-1hQQEWlvZI8SeUkMzraF86N-CGmLaJslIW7QvRi9suOLWcX1gosTdiFgTy2T2F3G29TFMI4oGkO-xYs5eDPxstjdVOQVYwFXt7IulBpvHvqzIkLJ0aizGipJyBI",
  },
};

const Category = () => {
  return (
    <section
      className="px-6 lg:px-16 max-w-[1200px] mx-auto py-24"
      id="categories"
    >
      <div className="mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-on-surface">
          Curated Categories
        </h2>
        <p className="text-on-surface-variant mt-2">
          Find the perfect balance of form and function.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full md:h-[600px]">
        {/* Large tile */}
        <Link
          href={tiles.audio.href}
          className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-surface-container soft-shadow glass-card glow-hover"
        >
          <Image
            src={tiles.audio.image}
            alt={tiles.audio.title}
            fill
            sizes="(min-width: 768px) 66vw, 100vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="font-display text-2xl md:text-3xl mb-2">
              {tiles.audio.title}
            </h3>
            <p className="opacity-90">{tiles.audio.subtitle}</p>
          </div>
        </Link>

        {/* Smart Home */}
        <Link
          href={tiles.smartHome.href}
          className="md:col-span-4 group relative overflow-hidden rounded-3xl bg-surface-container soft-shadow glass-card glow-hover"
        >
          <Image
            src={tiles.smartHome.image}
            alt={tiles.smartHome.title}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="font-display text-xl mb-1">
              {tiles.smartHome.title}
            </h3>
            <p className="opacity-90">{tiles.smartHome.subtitle}</p>
          </div>
        </Link>

        {/* Accessories — offset tile, matches Stitch's asymmetric placement */}
        <Link
          href={tiles.accessories.href}
          className="md:col-span-4 md:col-start-9 group relative overflow-hidden rounded-3xl bg-surface-container soft-shadow mt-0 md:-mt-[280px] h-[280px]"
        >
          <Image
            src={tiles.accessories.image}
            alt={tiles.accessories.title}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40" />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="font-display text-xl mb-1">
              {tiles.accessories.title}
            </h3>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Category;
