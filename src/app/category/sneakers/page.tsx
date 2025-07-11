import { DebugProduct } from "@/features/example/DebugProduct";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ urlKey: string }>;
}) {
  const { urlKey } = await params;
  return (
    <div>
      Category: {urlKey} <br/>

      <br/>
      <DebugProduct uid="MTg2NDAz" />
    </div>
  );
}
