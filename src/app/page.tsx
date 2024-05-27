export default function Home() {
  return (
    <div>
      {new Array(1500).fill("").map((_, i) => (
        <>
          <p>ok {i}</p>
          <br />{" "}
        </>
      ))}
    </div>
  );
}
