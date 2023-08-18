import Image from "next/image";

function Home() {
  return (
    <>
      <h2>Teste</h2>
      <div>
        <Image
          fill
          src="/images/file-based-routing.png"
          style={{objectFit: 'contain'}}
        />
      </div>
    </>
  );
}

export default Home;
