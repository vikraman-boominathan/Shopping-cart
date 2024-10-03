export default function DessertComp(props) {
  return (
    <div className="pb-5">
      <div className="flex flex-col relative ">
        <img
          alt="food thumbnail"
          
          src={props.image.mobile}
          className="rounded-lg md:hidden"
        />
        <img
          alt="food thumbnail"
          
          src={props.image.tablet}
          className="rounded-lg hidden md:block lg:hidden"
        />
        <img
          alt="food thumbnail"
          width="327"
          height="200"
          src={props.image.desktop}
          className="rounded-lg hidden lg:block"
        />
        
        
        <div className="absolute inset-x-0 -bottom-4  flex items-center justify-center">
          {props.active && props.count === 0 ? (
            <div
              className="bg-white rounded-full border border-red-400 px-4 py-1 text-sm flex items-center"
              onClick={props.addCount}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                fill="none"
                viewBox="0 0 21 20"
              >
                <g fill="#C73B0F" clipPath="url(#a)">
                  <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
                  <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M.333 0h20v20h-20z" />
                  </clipPath>
                </defs>
              </svg>
              <button>
                <span>Add to cart</span>
              </button>
            </div>
          ) : (
            <div className="flex justify-between bg-amber-700 rounded-full px-4 py-1 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="18"
                height="18"
                viewBox="0 0 50 50"
                fill="white"
                onClick={props.lessCount}
                style={{ cursor: "pointer" }}
              >
                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 13 24 L 13 26 L 37 26 L 37 24 L 13 24 z"></path>
              </svg>

              <span className="text-white px-4">{props.count}</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="18"
                height="18"
                viewBox="0 0 50 50"
                fill="white"
                onClick={props.addCount}
                style={{ cursor: "pointer" }}
              >
                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
              </svg>
            </div>
          )}
        </div>
      </div>

      <div className="mt-5 text-xs text-gray-400">{props.category}</div>
      <div className="font-semibold">{props.name}</div>
      <div className="text-red-600">${props.price}</div>
    </div>
  );
}
