import { useState } from "react";

export const ContentCertification = () => {
  const [hover, setHover] = useState([]);

  const vendorList = [
    {
      type: "Course",
      name: "Cisco",
      link: "https://www.cisco.com/",
      certificate: [
        {
          name: "CCNAv7: Introduction to Networks",
          link: "https://drive.google.com/file/d/1SSewmzoNq0LosUQ-iuMkUApyHMpIEqQ6/view?usp=sharing",
        },
        {
          name: "Introduce Internet of Things",
          link: "https://drive.google.com/file/d/1ZgthtEc-U1DqFfaBpxvH0jZ8RZRjtFFp/view?usp=sharing",
        },
       
      ],
    },
    {
      type: "Course",
      name: "Oracle",
      link: "https://www.oracle.com/",
      certificate: [
        {
          name: "Java Fundamentals",
          link: "https://drive.google.com/file/d/1iE7qqO5-NuZScrPdrctq3g8ixnrMf_NS/view?usp=drive_link",
        },
    
      ],
    },
    {
      type: "Course",
      name: "RedHat",
      link: "https://www.redhat.com/en",
      certificate: [
        {
          name: "Red Hat System Administration II (RH134)",
          link: "https://drive.google.com/file/d/1ppQFSTYPZv5PCALHlEqCHxp3H5dlRZUL/view?usp=sharing",
        },
        {
          name: "Red Hat OpenStack Administration I: Core Operations for Domain Operators (CL110)",
          link: "https://drive.google.com/file/d/183FN7Vll4_qS58GJN7g0aG-w0EHTmAze/view?usp=sharing",
        },
        {
          name: "Red Hat System Administration I (RH124)",
          link: "https://drive.google.com/file/d/19IM9CIKrqi3e8pC9D1PIJJ2mq0g1QXBa/view?usp=sharing",
        },
      ],
    },
    {
      type: "Course",
      name: "Sistem Bootcamp",
      link: "https://app.joinsistem.com/",
      certificate: [
        {
          name: "Project Manager ",
          link: "https://drive.google.com/file/d/1tth7GhRSK892eByKC1QYhfqaVDX4k0mJ/view?usp=sharing",
        },
        {
          name: "DevOps level 1 ",
          link: "https://drive.google.com/file/d/181NhkokgM0YMdBnvI-qZDg2TZK1ikMRU/view?usp=sharing",
        },
         {
          name: "Fullstack Developer" ,
          link: "https://drive.google.com/file/d/1U5nni0B6SMEz71VSDMPxoDjGpKAhSEUI/view?usp=sharing",
        },
      ],
    },
    {
      type: "Course",
      name: "Solutionlabs.Id",
      link: "https://app.joinsistem.com/",
      certificate: [
        {
          name: "Talent Evaluation level Beginner", 
          link: "https://drive.google.com/file/d/1hVMBAc0N1kuk9_sdy4wfWDKRJrVrmK_-/view?usp=drive_link",
        },
        {
          name: "Talent Evaluation level Intermediate ",
          link: "https://drive.google.com/file/d/19AesUBe-mGMxOOYz0OWqUQ0UmLb8hxwz/view?usp=drive_link",
        },
         {
          name: "Talent Evaluation level Advanced ", 
          link: "https://drive.google.com/file/d/1elWwVDJcGM49a-QSSHzlkz3WHeqKIZBR/view?usp=drive_link",
        },
      ],
    },
  ];

  return (
    <div className="cursor-default text-primary">
      {vendorList.map((vendor, index) => {
        return (
          <div key={index}>
            <h3 className="pb-3 text-lg font-medium leading-loose text-secondary md:text-xl">
              {vendor.type}
              <span className="text-base text-accent">
                {" "}
                @
                <a
                  href={vendor.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-underline"
                >
                  {vendor.name}
                </a>
              </span>
            </h3>
            <ul className="flex list-inside list-disc flex-col gap-4 pb-5 text-sm leading-relaxed lg:text-base">
              {vendor.certificate.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="static  items-center justify-start transition-all duration-300 hover:text-accent md:inline-flex"
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
