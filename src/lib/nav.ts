export const headerLinks = [
  { to: "/projects", label: "Work" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export const profileLinks = [
  { to: "/about", label: "About", hint: "Profile and education" },
  { to: "/experience", label: "Experience", hint: "Roles and companies" },
  { to: "/projects", label: "Projects", hint: "Selected work" },
  { to: "/skills", label: "Skills", hint: "Stack and tools" },
] as const;
