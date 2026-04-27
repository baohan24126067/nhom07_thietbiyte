const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "medicare";

export const siteBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH ?? (isGitHubPages ? `/${repoName}` : "");

export function withBasePath(path: string) {
  if (!path.startsWith("/")) {
    return path;
  }

  return `${siteBasePath}${path}`;
}
