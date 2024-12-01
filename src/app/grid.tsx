import Image from "next/image";

export default function Grid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-1 ">
    <div className="bg-red-600 h-20 text-center rounded-md text-white m-2">H1</div>
    <div className="bg-pink-600 h-20 text-center rounded-md text-white m-2">H2</div>
    <div className="bg-blue-600 h-20 text-center rounded-md text-white m-2">H3</div>
    <div className="bg-purple-600 h-20 text-center rounded-md text-white m-2">H4</div>
    <div className="bg-orange-600 h-20 text-center rounded-md text-white m-2">H5</div>
    <div className="bg-yellow-600 h-20 text-center rounded-md text-white m-2">H6</div>
    <div className="bg-green-600 h-20 text-center rounded-md text-white m-2">H7</div>
    <div className="bg-black h-20 text-center rounded-md text-white m-2">H8</div>
    <div className="bg-blue-900 h-20 text-center rounded-md text-white m-2">H9</div>
    <div className="bg-red-950 h-20 text-center rounded-md text-white m-2">H10</div>
    <div className="bg-orange-800 h-20 text-center rounded-md text-white m-2">H11</div>
    <div className="bg-yellow-950 h-20 text-center rounded-md text-white m-2">H12</div>
    </div>
    
  );
}
