import { setDefaultResultOrder } from "node:dns";
import { MongoClient, ObjectId, type Collection, type Db } from "mongodb";
import { mongoDbName, mongoUri } from "./env";

setDefaultResultOrder("ipv4first");

export type BlogStatus = "pending" | "approved" | "rejected";

export type BlogDoc = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  coverImage: string | null;
  coverThumb: string | null;
  published: boolean;
  status: BlogStatus;
  isBlogOfTheDay: boolean;
  views: number;
  authorId: string | null;
  authorName: string;
  authorEmail: string;
  likesCount: number;
  commentsCount: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date | null;
};

export type LikeDoc = {
  blogId: string;
  userId: string;
  createdAt: Date;
};

export type CommentDoc = {
  blogId: string;
  userId: string;
  authorName: string;
  body: string;
  createdAt: Date;
};

export type MessageDoc = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: Date;
};

export type UserRole = "admin" | "user";

export type UserDoc = {
  name: string;
  email: string;
  passwordHash: string;
  role?: UserRole;
  createdAt: Date;
  lastLoginAt?: Date;
};

export type SessionDoc = {
  token?: string;
  tokenHash: string;
  userId: ObjectId;
  createdAt: Date;
  expiresAt: Date;
};

declare global {
  var __shreyansMongo:
    | {
        client: MongoClient;
        connecting: Promise<MongoClient>;
        indexed: boolean;
      }
    | undefined;
}

export function objectId(id: string) {
  return new ObjectId(id);
}

async function getClient() {
  if (globalThis.__shreyansMongo?.client) {
    return globalThis.__shreyansMongo.client;
  }

  if (globalThis.__shreyansMongo?.connecting) {
    return globalThis.__shreyansMongo.connecting;
  }

  const client = new MongoClient(mongoUri(), {
    maxPoolSize: 5,
    minPoolSize: 0,
    maxIdleTimeMS: 30_000,
    serverSelectionTimeoutMS: 8_000,
    family: 4,
    autoSelectFamily: false,
  });

  const connecting = client.connect();
  globalThis.__shreyansMongo = {
    client,
    connecting,
    indexed: false,
  };

  return connecting;
}

export async function getDb(): Promise<Db> {
  const client = await getClient();
  const db = client.db(mongoDbName());
  if (!globalThis.__shreyansMongo?.indexed) {
    try {
      await Promise.all([
        db.collection<BlogDoc>("blogs").createIndexes([
          { key: { slug: 1 }, unique: true },
          { key: { status: 1, isBlogOfTheDay: 1 } },
          { key: { status: 1, views: -1, publishedAt: -1 } },
          { key: { authorId: 1, updatedAt: -1 } },
        ]),
        db.collection<MessageDoc>("messages").createIndex({ createdAt: -1 }),
        db.collection<UserDoc>("users").createIndex({ email: 1 }, { unique: true }),
        db.collection<SessionDoc>("sessions").createIndexes([
          { key: { tokenHash: 1 }, unique: true, sparse: true },
          { key: { expiresAt: 1 }, expireAfterSeconds: 0 },
        ]),
        db.collection<LikeDoc>("likes").createIndex({ blogId: 1, userId: 1 }, { unique: true }),
        db.collection<CommentDoc>("comments").createIndex({ blogId: 1, createdAt: 1 }),
      ]);
    } catch (error) {
      console.error("mongo indexes", error);
    }
    if (globalThis.__shreyansMongo) {
      globalThis.__shreyansMongo.indexed = true;
    }
  }
  return db;
}

export async function blogsCollection(): Promise<Collection<BlogDoc>> {
  return (await getDb()).collection<BlogDoc>("blogs");
}

export async function messagesCollection(): Promise<Collection<MessageDoc>> {
  return (await getDb()).collection<MessageDoc>("messages");
}

export async function usersCollection(): Promise<Collection<UserDoc>> {
  return (await getDb()).collection<UserDoc>("users");
}

export async function sessionsCollection(): Promise<Collection<SessionDoc>> {
  return (await getDb()).collection<SessionDoc>("sessions");
}

export async function likesCollection(): Promise<Collection<LikeDoc>> {
  return (await getDb()).collection<LikeDoc>("likes");
}

export async function commentsCollection(): Promise<Collection<CommentDoc>> {
  return (await getDb()).collection<CommentDoc>("comments");
}

export const approvedBlogFilter = {
  $or: [{ status: "approved" as const }, { published: true, status: { $exists: false } }],
};
