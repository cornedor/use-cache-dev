"use cache";
import { cacheLife } from "next/dist/server/use-cache/cache-life";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";

export async function DebugProduct({ uid }: { uid: string }) {
  cacheLife("weeks");
  cacheTag("cat_p_" + uid);

  const product = {
    name: "Test Product",
    stockStatus: "IN_STOCK",
  };

  if (!product) {
    return null;
  }

  return (
    <div className="border border-gray-200 p-4">
      <strong>{product.name}</strong>
      <br />
      {product.stockStatus !== "IN_STOCK" && <span>Out of stock.</span>}
      Change me!!!
    </div>
  );
}
