import React from "react";

export function Page() {
  const [kolliRange, setKolliRange] = React.useState<[number, number]>([0, 0]);
  const [productsAvailable, setProductsAvailable] = React.useState<
    [string, number][]
  >([]);

  return (
    <div className="flex flex-col rounded-lg bg-blue-100 p-6 shadow-md">
      <label className="mb-4">
        Kolli von bis:
        <div className="flex space-x-2">
          <input
            type="number"
            value={kolliRange[0]}
            onChange={(e) =>
              setKolliRange([parseInt(e.target.value), kolliRange[1]])
            }
            className="rounded-md border border-gray-300 p-2"
          />
          <input
            type="number"
            value={kolliRange[1]}
            onChange={(e) =>
              setKolliRange([kolliRange[0], parseInt(e.target.value)])
            }
            className="rounded-md border border-gray-300 p-2"
          />
        </div>
      </label>

      <label className="mb-4">
        Anzahl Produkte:
        <input
          type="number"
          value={productsAvailable.length}
          onChange={(e) =>
            setProductsAvailable(
              Array.from({ length: parseInt(e.target.value) }, () => ["", 0]),
            )
          }
          className="rounded-md border border-gray-300 p-2"
        />
      </label>
      <div className="gap-2 rounded-md bg-gray-400 p-4">
        {productsAvailable.map(([str, num], index) => (
          <ProductInput
            key={index}
            index={index}
            str={str}
            productsAvailable={productsAvailable}
            setProductsAvailable={setProductsAvailable}
            num={num}
          />
        ))}
      </div>
      <button
        onClick={() => console.log("submit")}
        className="mt-4 rounded-md bg-blue-500 p-2 text-white"
      >
        Submit
      </button>
      <div className="mt-4 rounded-md bg-white p-4 shadow-md">
        {JSON.stringify(productsAvailable)}
      </div>
    </div>
  );
}

function ProductInput({
  index,
  str,
  num,
  productsAvailable,
  setProductsAvailable,
}: {
  index: number;
  str: string;
  productsAvailable: [string, number][];
  setProductsAvailable: React.Dispatch<
    React.SetStateAction<[string, number][]>
  >;
  num: number;
}) {
  return (
    <div className="flex flex-row items-center gap-2 rounded-md bg-white p-2 shadow-sm">
      <input
        type="text"
        value={str}
        onChange={(e) => {
          const updatedProducts = [...productsAvailable];
          updatedProducts[index][0] = e.target.value;
          setProductsAvailable(updatedProducts);
        }}
        className="flex-grow rounded-md border border-gray-300 p-2"
      />
      <input
        type="number"
        value={num}
        onChange={(e) => {
          const updatedProducts = [...productsAvailable];
          updatedProducts[index][1] = parseInt(e.target.value);
          setProductsAvailable(updatedProducts);
        }}
        className="w-20 rounded-md border border-gray-300 p-2"
      />
    </div>
  );
}
