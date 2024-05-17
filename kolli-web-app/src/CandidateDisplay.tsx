import React from "react";

export function CandidateDisplay({
  nrOfCollis,
  products,
}: {
  nrOfCollis: number;
  products: { name: string; inColli: number; sold: number; unsold: number }[];
}) {
  const colliSize = products.reduce((acc, { inColli }) => acc + inColli, 0);
  const totalSold = products.reduce((acc, { sold }) => acc + sold, 0);
  const totalUnsold = products.reduce((acc, { unsold }) => acc + unsold, 0);
  const total = {
    name: "total",
    inColli: colliSize,
    sold: totalSold,
    unsold: totalUnsold,
  };

  return (
    <div className="min-w-40 rounded-md border border-gray-300 ">
      colli {colliSize}, {nrOfCollis} collis total ({totalSold} products total,{" "}
      {totalUnsold} remaining)
      <div className="grid grid-cols-4 gap-2 p-2">
        <div className="font-bold">Name</div>
        <div className="font-bold">In Colli</div>
        <div className="font-bold">Sold</div>
        <div className="font-bold">Unsold</div>
        {products.map((product) => (
          <React.Fragment key={product.name}>
            <div>{product.name}</div>
            <div>{product.inColli}</div>
            <div>{product.sold}</div>
            <div>{product.unsold}</div>
          </React.Fragment>
        ))}
        <div className="font-bold">Total</div>
        <div>{total.inColli}</div>
        <div>{total.sold}</div>
        <div>{total.unsold}</div>
      </div>
      <CopyToClipboardButton
        textToCopy={`colli ${colliSize}, ${nrOfCollis} collis, ${totalSold} total. ${products.reduce((acc, { name, inColli }) => acc + `${inColli}x ${name}, `, "")}`}
      />
    </div>
  );
}

function CopyToClipboardButton({ textToCopy }: { textToCopy: string }) {
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      console.log("Text copied to clipboard");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      onClick={handleCopyClick}
      className="rounded-md bg-blue-500 p-2 text-white"
    >
      Copy to clipboard
    </button>
  );
}
