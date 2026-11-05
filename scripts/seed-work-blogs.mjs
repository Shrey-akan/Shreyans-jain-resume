import { MongoClient } from "mongodb";
import { readFileSync } from "fs";

const env = Object.fromEntries(
  readFileSync(".env", "utf8")
    .split("\n")
    .filter((line) => line && !line.startsWith("#"))
    .map((line) => {
      const i = line.indexOf("=");
      return [line.slice(0, i), line.slice(i + 1)];
    }),
);

const posts = [
  {
    slug: "shipping-banknote-ai-one-react-native-codebase",
    title: "Shipping Banknote AI on one React Native codebase",
    excerpt:
      "How we took an AI banknote identifier to Android and iOS without splitting the product into two apps — and what actually broke in production.",
    isBlogOfTheDay: true,
    publishedAt: new Date("2026-08-18T10:00:00.000Z"),
    views: 42,
    body: `The brief was simple on paper: one consumer app that photographs a banknote, identifies it, and shows country, denomination, rarity, and history. The constraint was not. We needed Android and iOS, store billing, push, a live catalogue, and a team that could keep shipping after the first release.

## The problem

A native split would have doubled every feature. Camera crop, model output, collections, marketplace, subscriptions, and expert evaluation all had to stay in lockstep. We also could not wait for two store reviews every time the identification flow changed.

## What I chose

We built Banknote AI as a single React Native / TypeScript app.

- Camera capture and document crop on one identification pipeline.
- Platform billing behind a thin adapter: Google Play Billing on Android, StoreKit on iOS.
- Push through FCM and APNs, same in-app events.
- Node.js APIs, Firebase Auth, Firestore, Cloud Storage, and AWS for the parts that had to live off-device.

The hard part was not “can React Native do this”. It was keeping store-specific behaviour out of the identification core so a model or catalogue change did not become two tickets.

## What broke, and how we resolved it

Billing was the first real fire. A successful purchase on one store did not mean the app and the account agreed. We kept purchase checks on the backend so both stores followed the same rules.

The second was identification quality in the wild. Indoor light, cropped corners, worn notes. We tightened the crop step before inference and used production logs to see failure modes instead of guessing from store reviews.

## Result

Banknote AI is live on Google Play and the App Store. The same codebase is what let us keep iterating after launch instead of maintaining two products.`,
  },
  {
    slug: "white-label-experts-platform-without-forking-every-app",
    title: "A white-label Experts platform — without forking every app",
    excerpt:
      "Coinzy and Banknote AI both needed expert evaluation. Forking the stack would have frozen us. Here is how a shared Node.js platform with branded dashboards solved it.",
    isBlogOfTheDay: false,
    publishedAt: new Date("2026-07-02T10:00:00.000Z"),
    views: 31,
    body: `Once Banknote AI had traction, Coinzy needed the same expert loop: a collector submits media, an expert reviews it, and a structured report comes back. The naive path was copy the service, change the logo, ship. That path does not survive a third product.

## The problem

Each app wanted its own admin console, expert workspace, and notifications. The lifecycle was the same: submit a request, assign an expert, return a report, and export a PDF. If we forked, every workflow bug would be fixed twice, then three times.

## What I designed

A white-label Experts platform in Node.js and Express.

- MongoDB for requests, experts, and reports.
- Redis for short-lived queue state.
- Socket.IO for live queue updates.
- AWS S3 for media and generated PDFs.
- Branding and copy through configuration, not code forks.
- One admin console and one expert workspace, deployed per product.

Mobile teams integrate the same APIs. They do not own the evaluation engine.

## What we had to resolve

Allocation was the painful bit. Timeouts and “who has this request” raced under concurrent experts. We made assignment an atomic step and pushed status over the socket so the expert UI did not poll itself into conflicts.

The other issue was rollout. A shared platform is useless if every new app still needs a core engineer. We documented the integration path — media upload, status, and report — so Android and React Native teams could attach a new product without forking services.

## Result

Coinzy and Banknote AI run on the same engine, with their own dashboards. Expert evaluation and reports stay one system. The next identification product does not start from zero.`,
  },
  {
    slug: "firebase-to-bigquery-product-analytics-we-could-trust",
    title: "Firebase events were not a product dashboard. Here’s what we built.",
    excerpt:
      "We had plenty of events and no shared picture of how the products were used. The fix was a Firebase to BigQuery pipeline and an internal React dashboard.",
    isBlogOfTheDay: false,
    publishedAt: new Date("2026-05-21T10:00:00.000Z"),
    views: 27,
    body: `Ask three people how Banknote was doing and you got three answers: store console, a Firebase chart, a spreadsheet. None of them matched. We needed one internal place where product and engineering looked at the same picture.

## The problem

Firebase is fine for instrumentation. It is not a product room. Usage questions died in event dumps. Coinzy and Banknote also needed comparison, not two separate exports.

## What I built

An internal analytics app:

- Daily aggregation from Firebase into BigQuery.
- Node.js API in front of BigQuery, with Redis for frequently read summaries.
- A React UI for comparing the applications.
- Role-based access so a person sees the apps they own.
- Docker in production.

## How we resolved the messy data

The first dashboard was wrong because event names drifted between releases. We treated the event names as a contract and mapped older names forward in the pipeline. That made the views comparable week to week.

## Result

Product and engineering now use the same internal dashboard for Banknote and Coinzy, instead of reconciling separate exports.`,
  },
  {
    slug: "java-8-to-17-without-stopping-the-reports",
    title: "Java 8 to 17 in a client reporting system — without stopping the reports",
    excerpt:
      "A client reporting system had to keep running while we moved Java 8 and Hibernate 4 to Java 17 and Hibernate 6. The upgrade was the easy part. The queries were not.",
    isBlogOfTheDay: false,
    publishedAt: new Date("2025-09-14T10:00:00.000Z"),
    views: 19,
    body: `At JCentrix I owned a client reporting system. The runtime was Java 8 and Hibernate 4. Security, library support, and operational risk all said move. The client still needed the existing reports until the new stack was proven.

## The problem

A big-bang cutover would have frozen reporting. Hibernate 6 does not behave like 4. APIs that “just returned a list” started lazy-loading, missing constructors, or timing out on large result sets.

## How I approached it

We upgraded in place, behind the same reports.

- Java 8 to 17, Hibernate 4 to 6, MySQL kept as the source of truth.
- Compatibility layer for APIs the UI already called.
- Query work on the reports that scanned too much data: explicit fetch plans and tighter filters.
- Role-based access so staff and admins did not share one login.
- Jenkins and GitHub Actions for CI, Docker on AWS for the new runtime.
- QA on the release train, not a single migration weekend.

## What we actually resolved

The failures were not compiler errors. They were heavy queries that looked fine in staging with a small sample. We pulled slow queries from larger datasets, reduced N+1 access in Hibernate, and stopped loading full collections when a report only needed aggregates.

API defects after the bump were treated as product bugs, not framework noise: same endpoints, corrected behaviour, and regression tests before the next release.

## Result

The reporting system kept shipping on Java 17 and Hibernate 6. The upgrade did not take reporting offline, and the large datasets got faster instead of becoming the reason to stay on Java 8.`,
  },
];

const client = new MongoClient(env.MONGODB_URI, { serverSelectionTimeoutMS: 15000 });
await client.connect();
const db = client.db(env.MONGODB_DB || "shreyans_jain");
const blogs = db.collection("blogs");

const dummySlugs = [
  "hello-from-the-studio",
  "java-8-to-17-hospital-reporting-without-stopping-month-end",
];

await blogs.deleteMany({ slug: { $in: dummySlugs } });
await blogs.updateMany({ slug: { $nin: posts.map((post) => post.slug) } }, { $set: { isBlogOfTheDay: false } });

const now = new Date();
for (const [index, post] of posts.entries()) {
  await blogs.updateOne(
    { slug: post.slug },
    {
      $set: {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        body: post.body,
        coverImage: null,
        coverThumb: null,
        published: true,
        status: "approved",
        isBlogOfTheDay: post.isBlogOfTheDay,
        authorId: null,
        authorName: "Shreyans Jain",
        authorEmail: "shreyansjain2603@gmail.com",
        updatedAt: now,
        publishedAt: post.publishedAt,
      },
      $setOnInsert: {
        views: post.views,
        likesCount: 0,
        commentsCount: 0,
        createdAt: post.publishedAt,
      },
    },
    { upsert: true },
  );
  console.log(`${index + 1}. ${post.slug}`);
}

const remaining = await blogs.find({}).project({ slug: 1, title: 1, isBlogOfTheDay: 1 }).toArray();
console.log("LIVE", remaining.length);
for (const doc of remaining) {
  console.log("-", doc.slug, doc.isBlogOfTheDay ? "(today)" : "");
}

await client.close();
