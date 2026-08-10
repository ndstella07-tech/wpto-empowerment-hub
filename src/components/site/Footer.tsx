import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import logo from "@/assets/wpto-logo.jpg.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border bg-sand">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={logo.url}
              alt="Women Palm Tree Organisation logo"
              width={40}
              height={40}
              loading="lazy"
              className="h-10 w-10 shrink-0 rounded-md object-cover"
            />
            <span className="font-display text-base">Women Palm Tree Organisation</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A registered Malawian organisation formed in 2020. We work with women, single mothers,
            widows, youth, children, refugees, and host communities in Dowa.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">Aligned with SDG 2 and SDG 17.</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              { to: "/about", label: "About WPTO" },
              { to: "/our-work", label: "Our Work" },
              { to: "/impact", label: "Impact" },
              { to: "/stories", label: "Stories" },
              { to: "/partners", label: "Partners" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Reach us</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>Dzaleka Refugee Camp, Dowa District, Malawi</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href="mailto:info@wpto.org" className="hover:text-foreground">
                info@wpto.org
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>Available on request</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="container-page py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Women Palm Tree Organisation (WPTO). Dowa, Malawi.
        </div>
      </div>
    </footer>
  );
}
