export function TopG({ name, price, change, img }: { name: string, price: number, change: number, img: string }) {
  return (
    <div className="flex flex-row gap-5">
      <span className="text-md font-normal text-gray-400">1</span>
      <div className="bg-white rounded-full w-7 h-7 flex justify-center items-center">
        <img src={img}
          className="w-6 h-6 block object-contain object-center">
        </img>
      </div>
    </div>
  );
}
