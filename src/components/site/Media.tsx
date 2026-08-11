import { useState } from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site/Reveal";

type PhotoProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  className?: string;
  imgClassName?: string;
  /** Skip lazy loading for above-the-fold images. */
  eager?: boolean;
  /** Set false when the frame sits inside an already-rounded card. */
  rounded?: boolean;
};

/**
 * Image with its own shimmer placeholder while decoding, soft border,
 * and a slow zoom on hover. Captions sit in a low-contrast gradient.
 */
export function Photo({
  src,
  alt,
  width,
  height,
  caption,
  className,
  imgClassName,
  eager = false,
  rounded = true,
}: PhotoProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Images already cached or decoded before hydration never fire onLoad.
  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <figure
      className={cn(
        "group relative overflow-hidden bg-muted",
        rounded ? "rounded-2xl border border-border shadow-soft" : "",
        className,
      )}
    >
      {!loaded && <span className="absolute inset-0 shimmer" aria-hidden="true" />}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-[transform,opacity] duration-[900ms] ease-out will-change-transform group-hover:scale-[1.04]",
          loaded ? "opacity-100" : "opacity-0",
          imgClassName,
        )}
      />

      {caption && (
        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/70 to-transparent p-4 text-xs font-medium text-primary-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:text-sm">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export type MosaicItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

/**
 * Asymmetric four-image mosaic: one tall anchor image, three supporting
 * frames. Each frame reveals on scroll with a short stagger so the block
 * assembles rather than appearing all at once.
 */
export function PhotoMosaic({ items }: { items: MosaicItem[] }) {
  const [a, b, c, d] = items;
  if (!a || !b || !c || !d) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
      <Reveal from="scale" className="lg:col-span-2 lg:row-span-2">
        <Photo {...a} className="h-64 sm:h-80 lg:h-full" />
      </Reveal>
      <Reveal from="up" delay={90}>
        <Photo {...b} className="h-64 lg:h-full" />
      </Reveal>
      <Reveal from="up" delay={180}>
        <Photo {...c} className="h-64 lg:h-full" />
      </Reveal>
      <Reveal from="up" delay={270} className="sm:col-span-2 lg:col-span-2">
        <Photo {...d} className="h-64 lg:h-full" />
      </Reveal>
    </div>
  );
}

/** Full-width photographic band with a soft primary wash and overlaid text. */
export function PhotoBand({
  src,
  alt,
  eyebrow,
  title,
  text,
}: {
  src: string;
  alt: string;
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={src}
        alt={alt}
        width={1600}
        height={1000}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/70" />
      <div className="container-page relative py-20 md:py-28">
        <Reveal className="max-w-2xl text-primary-foreground">
          {eyebrow && <p className="eyebrow text-primary-foreground/75">{eyebrow}</p>}
          <h2 className="mt-3 text-2xl leading-tight md:text-4xl">{title}</h2>
          {text && (
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/85">{text}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

/** Row of square frames that slide in from the side one after another. */
export function PhotoStrip({ items }: { items: MosaicItem[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, i) => (
        <Reveal key={item.src} from={i % 2 === 0 ? "left" : "right"} delay={i * 90}>
          <Photo {...item} className="aspect-[4/5]" />
        </Reveal>
      ))}
    </div>
  );
}
