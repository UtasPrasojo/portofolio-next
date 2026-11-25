# Aset portofolio V2

Halaman terpisah: `/v2`. Halaman lama tetap di `/`.

Masukkan aset dengan nama berikut. Format yang didukung (urutan prioritas): `.webp`, `.png`, `.jpg`, `.jpeg`, `.svg`.

| Folder / nama              | Kegunaan                                      | Rekomendasi                                    |
| -------------------------- | --------------------------------------------- | ---------------------------------------------- |
| `hero/statue.png`          | Patung Yunani utama, misalnya Athena / Themis | PNG/WebP transparan, sekitar 1000 × 1200 px    |
| `banner/olympus.webp`      | Ilustrasi panorama / ukiran mitologi          | Landscape 1800 × 650 px; teks berada di tengah |
| `emblem/apollo.png`        | Patung kecil pada section biru                | Transparan, 400 × 400 px                       |
| `projects/jenjang.webp`    | Preview Jenjang                               | Landscape 1200 × 800 px                        |
| `projects/sukarela.webp`   | Preview Sukarela                              | Landscape 1200 × 800 px                        |
| `projects/bee-genius.webp` | Preview Bee-Genius                            | Landscape 1200 × 800 px                        |

Aset dekorasi belum disertakan sesuai permintaan. Jika belum ada, halaman menampilkan ornamen astronomi dan kuil berbasis SVG. Preview proyek sementara memakai gambar yang sudah tersedia di portofolio lama.

Refresh `/v2` setelah menambahkan gambar ketika development. Untuk production, jalankan build dan deploy ulang karena deteksi file berlangsung saat render/build. Gunakan aset yang Anda miliki atau berlisensi sesuai penggunaan.

Konten dan tautan: `src/app/v2/page.tsx`.
Warna dan layout: `src/app/v2/v2.module.css`.
Palet: navy `#0d0d24`, biru elektrik `#0000f2`, off-white `#f3f1e9`.

## Halaman tambahan

- `/v2/about`: profil, pengalaman kerja, pendidikan, organisasi, penghargaan, sertifikasi, teknologi, dan tools dari V1.
- `/v2/projects`: seluruh proyek dari `src/utils/datas.ts`, dengan pencarian dan filter teknologi.
- `about/portrait.webp`: foto About opsional; jika belum ada, memakai `/images/utas.jpg`.
- Gambar proyek opsional memakai nama proyek dalam lowercase dengan spasi diganti `-`, misalnya `projects/make-petan-tuma.webp` atau `projects/jenjang-for-university.webp`. Gambar V1 menjadi fallback.
- Pengalaman, organisasi, penghargaan: `src/features/About/section/config.tsx`.
- Sertifikasi: `src/features/About/section/certifications.ts` (dipakai V1 dan V2).
- Pendidikan: `src/features/About/section/education.ts`.

## Gambar Home yang aktif

Home sekarang memakai gambar yang diimpor langsung dari `hero/Frame 28.png` (hero), `hero/Frame 30.png` (banner dengan teks bawaan), dan `hero/Frame 31.png` (Apollo di section biru). Next.js mengoptimalkan gambar saat disajikan. Frame 31 dipotong secara visual melalui `object-fit: cover`, tanpa mengubah file asli. Untuk mengganti nama/lokasi aset Home, ubah import di `src/app/v2/page.tsx`.
