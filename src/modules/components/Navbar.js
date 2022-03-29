import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ expanded, setExpanded }) => {
  const location = useLocation();

  const findSelected = () => {
    switch (location.pathname) {
      case "/":
        return 0;
      case "/strategists":
        return 1;
      case "/add-vault":
        return 2;
      default:
        return 1000;
    }
  };

  const selected = findSelected();

  const navigate = useNavigate();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div className="h-full bg-violet-800 inline-block w-16 center flex flex-col justify-between z-40">
      <div>
        <div className="flex group justify-center mb-2 cursor-pointer">
          <a onClick={() => navigate("/")} className="p-3  ">
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
        <div className="flex group justify-center mb-2 cursor-pointer">
          <a onClick={() => navigate("/strategists")} className="p-3  ">
            <span className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={
                  selected != 1
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
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </span>
          </a>
        </div>
        <div className="flex group justify-center mb-2 cursor-pointer">
          <a onClick={() => navigate("/add-vault")} className="p-3  ">
            <span className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className={
                  selected != 2
                    ? `h-6 w-6 duration-200  stroke-gray-100 hover:stroke-yellow-200`
                    : "h-6 w-6 duration-200  stroke-yellow-300"
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </span>
          </a>
        </div>
        <div className="flex group justify-center mb-2 cursor-pointer">
          <a href="#" className="p-3  ">
            <span className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className={
                  selected != 3
                    ? `h-6 w-6 duration-200  stroke-gray-100 hover:stroke-yellow-200`
                    : "h-6 w-6 duration-200  stroke-yellow-300"
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

      <div>
        <div
          onClick={() => setExpanded(!expanded)}
          className="flex group justify-center mb-2"
        >
          <a href="#" className="p-3  ">
            <span className="flex flex-col items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className={
                  !expanded
                    ? `h-6 w-6 duration-200  stroke-gray-100 hover:stroke-yellow-200`
                    : "h-6 w-6 duration-200  stroke-yellow-300"
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h7"
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
