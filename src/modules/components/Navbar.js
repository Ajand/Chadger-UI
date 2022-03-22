const Navbar = () => {
  const selected = 0;

  return (
    <div className="h-full bg-violet-800 inline-block w-16 center ">
      <div>
        <div className="flex group justify-center mb-2">
          <a href="#" className="p-3  ">
            <span className="flex flex-col items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={
                  selected != 0
                    ? `h-6 w-6 duration-200  stroke-gray-100 hover:stroke-yellow-200`
                    : "h-6 w-6 duration-200  stroke-yellow-300"
                }
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </span>
          </a>
        </div>
        <div className="flex group justify-center mb-2">
          <a href="#" className="p-3  ">
            <span className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={
                  selected != 1
                    ? `h-6 w-6 duration-200  stroke-gray-100 hover:stroke-yellow-200`
                    : "h-6 w-6 duration-200  stroke-yellow-900"
                }
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </span>
          </a>
        </div>
        <div className="flex group justify-center mb-2">
          <a href="#" className="p-3  ">
            <span className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className={
                  selected != 1
                    ? `h-6 w-6 duration-200  stroke-gray-100 hover:stroke-yellow-200`
                    : "h-6 w-6 duration-200  stroke-yellow-900"
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;