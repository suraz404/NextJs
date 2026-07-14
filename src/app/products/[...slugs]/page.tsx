import React from "react";

const Product = async ({
  params,
}: {
  params: Promise<{ slugs: string[] }>;
}) => {
  const { slugs } = await params;

  return (
    <div>
      Product
      {slugs.map((e) => (
        <div key={e}>{e}</div>
      ))}
    </div>
  );
};

export default Product;
