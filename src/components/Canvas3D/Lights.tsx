export default function Lights() {
  return (
    <>
      <ambientLight intensity={5} />
      <directionalLight position={[600, 300, -1000]} intensity={4} />
    </>
  );
}
