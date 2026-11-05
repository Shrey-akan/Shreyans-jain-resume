import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { PDFDocument, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, "..", "public", "Shreyans-Jain-Resume.pdf");
const localFonts = join(__dirname, "fonts");
const sys = "/System/Library/Fonts/Supplemental";

function fontPath(name) {
  const local = join(localFonts, name);
  if (existsSync(local)) return local;
  return join(sys, name);
}

const navy = rgb(0.102, 0.165, 0.29);
const navyDeep = rgb(0.07, 0.11, 0.2);
const gold = rgb(0.72, 0.55, 0.22);
const ink = rgb(0.12, 0.13, 0.15);
const slate = rgb(0.28, 0.3, 0.33);
const rule = rgb(0.78, 0.76, 0.72);
const paper = rgb(1, 1, 1);
const chip = rgb(0.95, 0.94, 0.91);

const PAGE = { w: 595.28, h: 841.89 };
const RAIL = 8;
const M = { l: 46, r: 40, b: 32 };

function wrap(font, text, size, maxWidth) {
  const words = text.split(/\s+/);
  const lines = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (font.widthOfTextAtSize(next, size) <= maxWidth) current = next;
    else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

async function build() {
  const doc = await PDFDocument.create();
  doc.registerFontkit(fontkit);
  doc.setTitle("Shreyans Jain - Senior Full Stack Engineer Resume");
  doc.setAuthor("Shreyans Jain");
  doc.setSubject("Professional resume - React Native, Node.js, AWS, Java");
  doc.setKeywords([
    "Senior Full Stack Engineer",
    "React Native",
    "Node.js",
    "AWS",
    "Java",
    "Spring Boot",
    "TypeScript",
    "MongoDB",
    "Firebase",
    "Docker",
  ]);
  doc.setCreator("Shreyans Jain");
  doc.setLanguage("en-US");

  const body = await doc.embedFont(readFileSync(fontPath("Arial.ttf")));
  const bodyBold = await doc.embedFont(readFileSync(fontPath("Arial Bold.ttf")));
  const display = await doc.embedFont(readFileSync(fontPath("Georgia.ttf")));
  const displayBold = await doc.embedFont(readFileSync(fontPath("Georgia Bold.ttf")));

  let page = doc.addPage([PAGE.w, PAGE.h]);
  let y = 0;
  let maxW = PAGE.w - M.l - M.r;
  let pageIndex = 1;

  const chrome = (first) => {
    page.drawRectangle({ x: 0, y: 0, width: RAIL, height: PAGE.h, color: navy });
    if (first) {
      page.drawRectangle({ x: 0, y: PAGE.h - 118, width: PAGE.w, height: 118, color: navyDeep });
      page.drawRectangle({ x: 0, y: PAGE.h - 121, width: PAGE.w, height: 3.2, color: gold });
    } else {
      page.drawRectangle({ x: 0, y: PAGE.h - 36, width: PAGE.w, height: 36, color: navyDeep });
      page.drawRectangle({ x: 0, y: PAGE.h - 38.5, width: PAGE.w, height: 2.2, color: gold });
      page.drawText("SHREYANS JAIN", {
        x: M.l,
        y: PAGE.h - 24,
        size: 10,
        font: displayBold,
        color: paper,
      });
      page.drawText("Senior Full Stack Engineer", {
        x: PAGE.w - M.r - body.widthOfTextAtSize("Senior Full Stack Engineer", 9),
        y: PAGE.h - 23,
        size: 9,
        font: body,
        color: gold,
      });
    }
  };

  const addLink = (label, url, x, yy, size, font, color) => {
    const w = font.widthOfTextAtSize(label, size);
    page.drawText(label, { x, y: yy, size, font, color });
    page.node.addAnnot(
      doc.context.register(
        doc.context.obj({
          Type: "Annot",
          Subtype: "Link",
          Rect: [x, yy - 1, x + w, yy + size + 1],
          Border: [0, 0, 0],
          A: { Type: "Action", S: "URI", URI: url },
        }),
      ),
    );
    return w;
  };

  const startPage = (first) => {
    page = first ? page : doc.addPage([PAGE.w, PAGE.h]);
    pageIndex += first ? 0 : 1;
    chrome(first);
    y = first ? PAGE.h - 136 : PAGE.h - 56;
    maxW = PAGE.w - M.l - M.r;
  };

  const ensure = (need) => {
    if (y - need < M.b) {
      startPage(false);
    }
  };

  const text = (value, opts = {}) => {
    const { size = 9.6, face = body, x = M.l, color = ink } = opts;
    page.drawText(value, { x, y, size, font: face, color });
  };

  const block = (value, { size = 9.6, face = body, leading = 12.6, color = ink } = {}) => {
    const lines = wrap(face, value, size, maxW);
    for (const ln of lines) {
      ensure(leading + 2);
      text(ln, { size, face, color });
      y -= leading;
    }
  };

  const section = (title) => {
    ensure(34);
    y -= 8;
    text(title, { size: 10.5, face: displayBold, color: navy });
    y -= 5;
    page.drawLine({ start: { x: M.l, y }, end: { x: M.l + 36, y }, thickness: 2, color: gold });
    page.drawLine({
      start: { x: M.l + 40, y },
      end: { x: PAGE.w - M.r, y },
      thickness: 0.5,
      color: rule,
    });
    y -= 13;
  };

  const bullet = (value) => {
    const size = 9.5;
    const leading = 12.4;
    const lines = wrap(body, value, size, maxW - 14);
    ensure(lines.length * leading + 3);
    page.drawCircle({ x: M.l + 3, y: y + 3, size: 1.35, color: gold });
    text(`- ${lines[0]}`, { size, x: M.l });
    y -= leading;
    for (const ln of lines.slice(1)) {
      ensure(leading + 2);
      text(ln, { size, x: M.l + 12 });
      y -= leading;
    }
    y -= 1.5;
  };

  startPage(true);

  page.drawText("SHREYANS JAIN", {
    x: M.l,
    y: PAGE.h - 38,
    size: 22,
    font: displayBold,
    color: paper,
  });
  page.drawText("Senior Full Stack Engineer", {
    x: M.l,
    y: PAGE.h - 56,
    size: 11.5,
    font: body,
    color: gold,
  });
  page.drawText("Founding Member, Trackzio", {
    x: M.l,
    y: PAGE.h - 71,
    size: 9.5,
    font: body,
    color: rgb(0.82, 0.84, 0.88),
  });

  const contactLeft = [
    ["Bengaluru, India", null],
    ["+91 74548 49868", "tel:+917454849868"],
    ["shreyansjain2603@gmail.com", "mailto:shreyansjain2603@gmail.com"],
  ];
  const contactRight = [
    ["linkedin.com/in/shreyans-jain-8396b6245", "https://www.linkedin.com/in/shreyans-jain-8396b6245"],
    ["github.com/Shrey-akan", "https://github.com/Shrey-akan"],
    ["trackzio.com/about", "https://trackzio.com/about/"],
  ];

  let cx = M.l;
  let cy = PAGE.h - 92;
  for (let i = 0; i < contactLeft.length; i++) {
    const [label, url] = contactLeft[i];
    if (i > 0) {
      page.drawText("  |  ", { x: cx, y: cy, size: 8, font: body, color: gold });
      cx += body.widthOfTextAtSize("  |  ", 8);
    }
    if (url) cx += addLink(label, url, cx, cy, 8, body, paper);
    else {
      page.drawText(label, { x: cx, y: cy, size: 8, font: body, color: paper });
      cx += body.widthOfTextAtSize(label, 8);
    }
  }

  cx = M.l;
  cy = PAGE.h - 105;
  for (let i = 0; i < contactRight.length; i++) {
    const [label, url] = contactRight[i];
    if (i > 0) {
      page.drawText("  |  ", { x: cx, y: cy, size: 8, font: body, color: gold });
      cx += body.widthOfTextAtSize("  |  ", 8);
    }
    cx += addLink(label, url, cx, cy, 8, body, paper);
  }

  page.drawText("Email: shreyansjain2603@gmail.com  |  Phone: +91 74548 49868  |  LinkedIn: https://www.linkedin.com/in/shreyans-jain-8396b6245", {
    x: M.l,
    y: PAGE.h - 132,
    size: 7.4,
    font: body,
    color: slate,
  });

  section("PROFESSIONAL SUMMARY");
  block(
    "Senior Full Stack Engineer with 5+ years of experience building production web applications, mobile applications, REST APIs, and cloud infrastructure. Hands-on with React Native, Node.js, Express.js, TypeScript, Java, Spring Boot, AWS, Docker, MongoDB, MySQL, Redis, and Firebase. Founding Member at Trackzio leading multi-product engineering, white-label platforms, CI/CD, and product analytics.",
    { color: ink },
  );

  section("CORE COMPETENCIES");
  const chips = [
    "React Native",
    "Node.js",
    "TypeScript",
    "Java",
    "Spring Boot",
    "AWS",
    "Docker",
    "MongoDB",
    "Firebase",
    "BigQuery",
    "REST APIs",
    "CI/CD",
    "Android",
    "iOS",
    "Team Leadership",
  ];
  let chipX = M.l;
  const chipYStart = y;
  const chipH = 14;
  const chipGap = 5;
  for (const label of chips) {
    const w = body.widthOfTextAtSize(label, 7.6) + 12;
    if (chipX + w > PAGE.w - M.r) {
      chipX = M.l;
      y -= chipH + 4;
    }
    ensure(chipH + 6);
    page.drawRectangle({
      x: chipX,
      y: y - 3,
      width: w,
      height: chipH,
      color: chip,
      borderColor: rule,
      borderWidth: 0.4,
    });
    page.drawText(label, { x: chipX + 6, y: y + 1, size: 7.6, font: bodyBold, color: navy });
    chipX += w + chipGap;
  }
  y -= 18;
  block(
    "Keywords: React Native, Android, iOS, Node.js, Express.js, TypeScript, JavaScript, Java, Spring Boot, Spring MVC, Spring Security, Hibernate, JPA, REST APIs, Microservices, AWS, Docker, CI/CD, GitHub Actions, Jenkins, MongoDB, MySQL, Redis, Firebase, BigQuery, React, Angular, JWT, Agile, Git, Nginx, Shopify, Magento, WordPress, Figma, Team Leadership",
    { size: 8.2, leading: 11, color: slate },
  );

  section("WORK EXPERIENCE");

  const role = (title, company, location, dates) => {
    ensure(46);
    text(title, { size: 10.6, face: bodyBold, color: navy });
    const dw = body.widthOfTextAtSize(dates, 8.8);
    page.drawText(dates, {
      x: PAGE.w - M.r - dw,
      y,
      size: 8.8,
      font: bodyBold,
      color: gold,
    });
    y -= 13;
    text(`${company}  |  ${location}  |  ${dates}`, { size: 9.2, color: slate });
    y -= 13;
  };

  role(
    "Senior Full Stack Engineer, Founding Member",
    "Trackzio",
    "Bengaluru, India",
    "December 2025 - Present",
  );
  bullet(
    "Lead full stack engineering for public identification products including Banknote AI and Coinzy, coordinating React Native, Android, backend, and dashboard teams.",
  );
  bullet(
    "Architected a white-label Experts platform using Node.js, Express.js, MongoDB, Redis, REST APIs, Socket.IO, and AWS S3, with branded admin and expert dashboards deployed per product.",
  );
  bullet(
    "Developed and released Banknote AI for Android and iOS using React Native and TypeScript, including camera-based identification, store billing, and push notifications.",
  );
  bullet(
    "Built an internal product analytics dashboard using Firebase, Google BigQuery, Node.js, and React for the identification products.",
  );
  bullet(
    "Implemented CI/CD with GitHub Actions and Docker, and operated AWS production infrastructure for APIs, media storage, and scheduled jobs.",
  );
  y -= 4;

  role("Software Engineer", "JCentrix Private Limited", "Noida, India", "November 2024 - December 2025");
  bullet(
    "Developed poornasatya.com, a food product comparison web application, using Node.js, Express.js, Angular, MySQL, TypeORM, Redis, JWT authentication, and AWS.",
  );
  bullet(
    "Engineered client reporting modules in Java 17, Spring, Hibernate 6, and MySQL.",
  );
  bullet(
    "Led a production migration from Java 8 to Java 17 and Hibernate 4 to Hibernate 6, resolved REST API defects, and optimized SQL queries for large datasets.",
  );
  bullet(
    "Established CI/CD pipelines with Jenkins, GitHub Actions, and Docker, and supported ERP documentation and client enhancements.",
  );
  y -= 4;

  role(
    "Junior Software Engineer",
    "Orage Technologies Pvt. Ltd.",
    "Noida, India",
    "August 2023 - November 2024",
  );
  bullet(
    "Built and deployed job4jobless.com using Java, Spring Boot, Angular, and MongoDB on CentOS Linux.",
  );
  bullet(
    "Implemented Node.js microservices for OTP, chat, and Firebase authentication, and developed a remote desktop Java service for production use.",
  );
  y -= 4;

  role("Full Stack Developer", "JAS Tech IT Solutions", "Jaipur, India", "September 2021 - August 2023");
  bullet(
    "Designed user interfaces in Figma and implemented responsive websites using Angular, HTML, CSS, and WordPress.",
  );
  bullet(
    "Delivered Shopify and Magento e-commerce implementations and developed Java Spring REST APIs for client applications.",
  );

  section("PROJECTS");
  bullet(
    "Banknote AI: Cross-platform React Native mobile application for Android and iOS with Node.js backend, Firebase, and AWS. https://trackzio.com/apps/banknotes",
  );
  bullet(
    "Experts White-label Platform: Reusable Node.js and Express.js evaluation system with MongoDB, Redis, AWS S3, admin dashboard, and expert dashboard used across multiple Trackzio applications.",
  );
  bullet(
    "Product Analytics Dashboard: Firebase to BigQuery analytics application with Node.js APIs and a React UI for the identification products.",
  );
  bullet(
    "Client reporting system: Java 17, Spring, Hibernate, and MySQL reporting application with CI/CD on Jenkins and Docker.",
  );
  bullet(
    "poornasatya.com: Node.js, Angular, MySQL, Redis, and AWS food product comparison platform with JWT and role-based access control.",
  );

  section("TECHNICAL SKILLS");
  const skills = [
    ["Languages", "TypeScript, JavaScript, Java, Kotlin, SQL, HTML, CSS"],
    ["Mobile", "React Native, Android, iOS, Jetpack Compose, in-app purchases, push notifications"],
    ["Frontend", "React, Angular, Tailwind CSS, Figma"],
    ["Backend", "Node.js, Express.js, REST APIs, Microservices, Socket.IO, JWT"],
    ["Java", "Java 8, Java 17, Spring Boot, Spring MVC, Spring Security, Hibernate, JPA"],
    ["Cloud and Data", "AWS, S3, Firebase, BigQuery, MongoDB, MySQL, Redis, TypeORM"],
    ["DevOps", "Docker, Nginx, Git, GitHub Actions, Jenkins, Ubuntu, CentOS, CI/CD"],
    ["Commerce and CMS", "Shopify, Magento, WordPress"],
  ];
  for (const [label, value] of skills) {
    ensure(16);
    const prefix = `${label}:  `;
    page.drawText(prefix, { x: M.l, y, size: 9.2, font: bodyBold, color: navy });
    const rest = wrap(body, value, 9.2, maxW - bodyBold.widthOfTextAtSize(prefix, 9.2));
    page.drawText(rest[0], {
      x: M.l + bodyBold.widthOfTextAtSize(prefix, 9.2),
      y,
      size: 9.2,
      font: body,
      color: ink,
    });
    y -= 12.2;
    for (const ln of rest.slice(1)) {
      ensure(14);
      page.drawText(ln, { x: M.l, y, size: 9.2, font: body, color: ink });
      y -= 12.2;
    }
  }
  y -= 2;

  section("EDUCATION");
  text("Master of Computer Applications (MCA)", {
    size: 10.2,
    face: bodyBold,
    color: navy,
  });
  const mcaDates = "Expected 2027";
  page.drawText(mcaDates, {
    x: PAGE.w - M.r - body.widthOfTextAtSize(mcaDates, 8.8),
    y,
    size: 8.8,
    font: bodyBold,
    color: gold,
  });
  y -= 13;
  text("Chandigarh University, India  |  Pursuing  |  Expected completion 2027", {
    size: 9.2,
    color: slate,
  });
  y -= 16;
  text("Bachelor of Computer Applications (BCA), Computer Science", {
    size: 10.2,
    face: bodyBold,
    color: navy,
  });
  const eduDates = "August 2020 - July 2023";
  page.drawText(eduDates, {
    x: PAGE.w - M.r - body.widthOfTextAtSize(eduDates, 8.8),
    y,
    size: 8.8,
    font: bodyBold,
    color: gold,
  });
  y -= 13;
  text("MDS University, Ajmer, India  |  August 2020 - July 2023", { size: 9.2, color: slate });

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, await doc.save());
  console.log(`Wrote ${outPath} (${pageIndex} page layout)`);
}

build();
