const isGitHubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "/";
let basePath = "";

if (isGitHubActions) {
  // trim off `<owner>/`
  const repository = process.env.GITHUB_ACTIONS.replace(/.*?\//, "");

  assetPrefix = `/${repository}/`;
  basePath = `/${repository}`;
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
};
