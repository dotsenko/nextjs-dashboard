export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <div>
      <h1>View Page</h1>
      <p>{id}</p>
    </div>
  );
}
