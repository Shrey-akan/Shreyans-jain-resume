import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { PDFDocument, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, "..", "public", "Shreyans-Jain-Cover-Letter.pdf");
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
const paper = rgb(1, 1, 1);

const PAGE = { w: 595.28, h: 841.89 };
const RAIL = 8;
const M = { l: 54, r: 48 };

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
  doc.setTitle("Shreyans Jain - Cover Letter");
  doc.setAuthor("Shreyans Jain");
  doc.setSubject("Cover letter - Senior Full Stack Engineer");
  doc.setCreator("Shreyans Jain");
  doc.setLanguage("en-US");

  const body = await doc.embedFont(readFileSync(fontPath("Arial.ttf")));
  const displayBold = await doc.embedFont(readFileSync(fontPath("Georgia Bold.ttf")));

  const page = doc.addPage([PAGE.w, PAGE.h]);
  const maxW = PAGE.w - M.l - M.r;

  page.drawRectangle({ x: 0, y: 0, width: RAIL, height: PAGE.h, color: navy });
  page.drawRectangle({ x: 0, y: PAGE.h - 108, width: PAGE.w, height: 108, color: navyDeep });
  page.drawRectangle({ x: 0, y: PAGE.h - 111, width: PAGE.w, height: 3.2, color: gold });

  page.drawText("SHREYANS JAIN", {
    x: M.l,
    y: PAGE.h - 38,
    size: 20,
    font: displayBold,
    color: paper,
  });
  page.drawText("Cover Letter", {
    x: M.l,
    y: PAGE.h - 56,
    size: 11.5,
    font: body,
    color: gold,
  });
  page.drawText("Senior Full Stack Engineer  |  Founding Member, Trackzio", {
    x: M.l,
    y: PAGE.h - 72,
    size: 9.5,
    font: body,
    color: rgb(0.82, 0.84, 0.88),
  });

  const addLink = (label, url, x, yy) => {
    const w = body.widthOfTextAtSize(label, 8);
    page.drawText(label, { x, y: yy, size: 8, font: body, color: paper });
    page.node.addAnnot(
      doc.context.register(
        doc.context.obj({
          Type: "Annot",
          Subtype: "Link",
          Rect: [x, yy - 1, x + w, yy + 9],
          Border: [0, 0, 0],
          A: { Type: "Action", S: "URI", URI: url },
        }),
      ),
    );
    return w;
  };

  let cx = M.l;
  const cy = PAGE.h - 90;
  const bits = [
    ["Bengaluru, India", null],
    ["+91 74548 49868", "tel:+917454849868"],
    ["shreyansjain2603@gmail.com", "mailto:shreyansjain2603@gmail.com"],
    ["linkedin.com/in/shreyans-jain-8396b6245", "https://www.linkedin.com/in/shreyans-jain-8396b6245"],
  ];
  for (let i = 0; i < bits.length; i++) {
    const [label, url] = bits[i];
    if (i > 0) {
      page.drawText("  |  ", { x: cx, y: cy, size: 8, font: body, color: gold });
      cx += body.widthOfTextAtSize("  |  ", 8);
    }
    if (url) cx += addLink(label, url, cx, cy);
    else {
      page.drawText(label, { x: cx, y: cy, size: 8, font: body, color: paper });
      cx += body.widthOfTextAtSize(label, 8);
    }
  }

  let y = PAGE.h - 142;

  const para = (text, extra = 10) => {
    for (const ln of wrap(body, text, 11, maxW)) {
      page.drawText(ln, { x: M.l, y, size: 11, font: body, color: ink });
      y -= 16;
    }
    y -= extra;
  };

  page.drawText("11 September 2026", { x: M.l, y, size: 10, font: body, color: slate });
  y -= 28;

  page.drawText("Hiring Manager", { x: M.l, y, size: 11, font: body, color: ink });
  y -= 14;
  page.drawText("Re: Senior Full Stack Engineer", { x: M.l, y, size: 11, font: body, color: ink });
  y -= 24;

  para("Dear Hiring Manager,");
  para(
    "I am writing to apply for a Senior Full Stack Engineer role. I bring 5+ years of experience delivering production web applications, mobile applications, REST APIs, and cloud infrastructure, with a primary focus on React Native, Node.js, AWS, and Java.",
  );
  para(
    "As a Founding Member and Senior Full Stack Engineer at Trackzio, I lead engineering across public identification products, including Banknote AI and Coinzy. I shipped Banknote AI on Android and iOS from a single React Native and TypeScript codebase.",
  );
  para(
    "I designed the company's white-label Experts platform in Node.js and Express, with MongoDB, Redis, and AWS S3, so admin and expert dashboards can be branded and deployed for each product. I also built an internal analytics dashboard on Firebase, BigQuery, and React, and I coordinate mobile, backend, and dashboard teams through release.",
  );
  para(
    "Earlier in my career I delivered Java and Spring systems, including a client reporting upgrade to Java 17 and Hibernate 6, Spring Boot services, and client work in Figma, Shopify, Magento, and WordPress. I hold a BCA in Computer Science from MDS University, Ajmer, and I am pursuing an MCA at Chandigarh University, expected in 2027.",
  );
  para(
    "I would welcome the opportunity to discuss how I can contribute to your engineering team. My resume is enclosed. I am based in Bengaluru and can be reached at shreyansjain2603@gmail.com or +91 74548 49868.",
  );
  para("Sincerely,");
  y -= 8;
  page.drawText("Shreyans Jain", { x: M.l, y, size: 12, font: displayBold, color: navy });
  y -= 16;
  page.drawText("Senior Full Stack Engineer", { x: M.l, y, size: 10, font: body, color: slate });
  y -= 13;
  page.drawText("Founding Member, Trackzio", { x: M.l, y, size: 10, font: body, color: slate });

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, await doc.save());
  console.log(`Wrote ${outPath}`);
}

build();
