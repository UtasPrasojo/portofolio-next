import Image from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";
import styles from "../v2.module.css";
// Files are discovered at build time. Add your artwork, then rebuild for production.
export function artwork(folder: string, name: string) {
  for (const extension of ["webp", "png", "jpg", "jpeg", "svg"]) {
    const file = `/images/v2/${folder}/${name}.${extension}`;
    if (existsSync(path.join(process.cwd(), "public", file))) return file;
  }
  return null;
}

export function Celestial({ small = false }: { small?: boolean }) {
  return (
    <svg
      className={small ? styles.sun : styles.celestial}
      viewBox="0 0 600 600"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor">
        {Array.from({ length: 72 }, (_, i) => (
          <path
            key={i}
            d={`M 300 ${i % 3 === 0 ? 32 : 55} V 118`}
            transform={`rotate(${i * 5} 300 300)`}
            opacity={i % 3 === 0 ? 0.8 : 0.35}
          />
        ))}
        <circle cx="300" cy="300" r="182" />
        <circle cx="300" cy="300" r="169" opacity=".4" />
        <ellipse
          cx="300"
          cy="300"
          rx="110"
          ry="182"
          transform="rotate(-35 300 300)"
          opacity=".55"
        />
        <ellipse
          cx="300"
          cy="300"
          rx="110"
          ry="182"
          transform="rotate(35 300 300)"
          opacity=".55"
        />
        <path
          d="M118 300h364M300 118v364M171 171l258 258M171 429l258-258"
          opacity=".3"
        />
        <path
          d="M300 207l20 73 73 20-73 20-20 73-20-73-73-20 73-20Z"
          fill="currentColor"
          fillOpacity=".08"
        />
        <circle cx="300" cy="300" r="37" />
        <circle cx="300" cy="300" r="5" fill="currentColor" />
      </g>
    </svg>
  );
}
