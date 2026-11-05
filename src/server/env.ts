function readEnv(key: "MONGODB_URI" | "MONGODB_DB" | "ADMIN_EMAIL" | "ADMIN_PASSWORD"): string {
  const fromProcess = process.env[key];
  if (fromProcess) return fromProcess;
  try {
    const value = (import.meta.env as Record<string, string | undefined>)[key];
    return value ?? "";
  } catch {
    return "";
  }
}

export function mongoUri() {
  const uri = readEnv("MONGODB_URI").trim();
  if (!uri) {
    throw new Error("MONGODB_URI is not set");
  }
  return uri;
}

export function mongoDbName() {
  return readEnv("MONGODB_DB").trim() || "shreyans_jain";
}

export function adminPassword() {
  const password = readEnv("ADMIN_PASSWORD").trim();
  if (!password) {
    throw new Error("ADMIN_PASSWORD is not set");
  }
  return password;
}

export function adminEmail() {
  const email = readEnv("ADMIN_EMAIL").trim().toLowerCase();
  return email || "admin@shreyansjain.com";
}

export function optionalAdminPassword() {
  return readEnv("ADMIN_PASSWORD").trim();
}
