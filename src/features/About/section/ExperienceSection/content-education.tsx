export const ContentEducation = () => {
  return (
    <div className="text-primary">
      <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
        Informatics Engineering
        <span className="text-base text-accent">
          {" "}
          @
          <a
            href="https://d3ti.vokasi.uns.ac.id/"
            target="_blank"
            rel="noreferrer"
            className="text-underline"
          >
            Sebelas Maret University
          </a>
        </span>
      </h3>
      <p className="pb-5 font-mono text-sm lg:text-base">Aug 2022 - Present</p>
      <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
        <li>
          Activities and Associations: Himpunan Mahasiswa D3 Teknik Informatika and
          Badan Eksekutif Mahasiswa.
        </li>
        <li>
          Served as the Design Coordinator for Smart IT Festival 2024: Empowering Digital Business for Gen Z, a technology event supported by NVIDIA as the main sponsor. The event featured Anjas Maradita as the keynote speaker, discussing the role of AI in everyday life.
        </li>
       
      </ul>
    </div>
  );
};
