import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { FeaturedJobs } from "@/components/home/FeaturedJobs";
import { WhyChoose } from "@/components/home/WhyChoose";
import { PopularCompanies } from "@/components/home/PopularCompanies";
import { RemoteJobsSection, GovernmentJobsSection } from "@/components/home/RemoteAndGovernment";
import { CareerResources } from "@/components/home/CareerResources";
import { Testimonials } from "@/components/home/Testimonials";
import { Statistics } from "@/components/home/Statistics";
import { MobileAppPromo } from "@/components/home/MobileAppPromo";
import { FAQ } from "@/components/home/FAQ";
import { Newsletter } from "@/components/home/Newsletter";

export const Route = createFileRoute("/")({
  head: () => ({
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "JobVerse",
          potentialAction: {
            "@type": "SearchAction",
            target: "/browse-jobs?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <FeaturedJobs />
      <WhyChoose />
      <PopularCompanies />
      <RemoteJobsSection />
      <GovernmentJobsSection />
      <CareerResources />
      <Testimonials />
      <Statistics />
      <MobileAppPromo />
      <FAQ />
      <Newsletter />
    </>
  );
}
