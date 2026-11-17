import { BuildingIcon, GlobeIcon, RocketIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const audiences = [
  {
    icon: BuildingIcon,
    title: "SMEs",
    description: "Businesses looking for automation and digital transformation.",
  },
  {
    icon: RocketIcon,
    title: "Startups",
    description: "Companies needing MVP and product development.",
  },
  {
    icon: GlobeIcon,
    title: "Organisations entering African markets",
    description:
      "Companies needing digital commerce, payments and local technology infrastructure.",
  },
];

export function WhoWeServe() {
  return (
    <section className="bg-white py-20 sm:py-28" id="who-we-serve">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Who we serve" title="Built for businesses ready to grow">
          <p>
            We work with businesses connected to African markets and diaspora markets, and with
            anyone ready to modernise how they operate.
          </p>
        </SectionHeading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-6 md:grid-cols-3">
          {audiences.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 100} className="h-full">
              <article className="group flex h-full flex-col rounded-3xl bg-linear-to-b from-brand-soft to-white p-6 ring-1 ring-brand/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10 sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-brand shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-geist text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-2 font-geist text-base leading-relaxed text-gray-600">
                  {description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
