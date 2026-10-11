import { Smartphone } from "lucide-react";
import Reveal from "./Reveal";
import { TechList } from "./TechBadge";

const mobileStack = ["Android", "Kotlin", "Android SDK", "REST API Integration"];

// Intentionally compact: mobile is an additional capability, not the primary focus.
export default function MobileDevelopment() {
  return (
    <section aria-labelledby="mobile-heading" className="pt-16">
      <div className="container-page">
        <Reveal className="card flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-7">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-[#3ddc84]/25 bg-[#3ddc84]/10 text-[#3ddc84]">
            <Smartphone size={21} aria-hidden="true" />
          </span>
          <div className="flex-1">
            <p className="font-mono text-xs tracking-widest text-subtle uppercase">Also exploring</p>
            <h2 id="mobile-heading" className="mt-1 text-lg font-semibold tracking-tight text-fg">
              Mobile Development
            </h2>
            <p className="mt-1 text-sm text-muted">
              Exploring Android application development with Kotlin and backend REST API integration.
            </p>
          </div>
          <TechList items={mobileStack} size="sm" label="Mobile technologies" className="sm:max-w-xs sm:justify-end" />
        </Reveal>
      </div>
    </section>
  );
}
