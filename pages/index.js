import Image from "next/image";

function Home() {
  const isGitHubActions = process.env.GITHUB_ACTIONS || false;
  const repository = isGitHubActions ? process.env.GITHUB_ACTIONS.replace(/.*?\//, "") : 'local';

  return (
    <>
      <h2>Environment info</h2>
      <p>Is GitHub: {`${isGitHubActions}`}</p>
      <p>Repository: {repository}</p>
      <div>
        <Image
          fill
          src="/images/file-based-routing.png"
          style={{ objectFit: "contain" }}
        />
      </div>
    </>
  );
}

export default Home;
