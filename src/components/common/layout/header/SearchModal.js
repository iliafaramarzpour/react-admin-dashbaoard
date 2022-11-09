import { useState } from "react";
import { Modal } from "flowbite-react";
import { Link } from "react-router-dom";
import SearchImages from "../../../../assets/images/icons/search.svg";

function SearchModal() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button
        className="bg-gray-100 rounded-full h-8 w-8 p-2 flex items-center justify-center hover:bg-gray-300 duration-500 mx-1"
        onClick={() => setVisible(true)}
        type="button"
      >
        <img src={SearchImages} />
      </button>

      <Modal show={visible} onClose={() => setVisible(false)}>
        <Modal.Header>
          <form className="w-96">
            <div className="relative">
              <label className="sr-only">Search</label>
              <input
                className="w-full border-0 focus:ring-transparent placeholder-slate-400 appearance-none  pl-10 pr-4"
                type="search"
                placeholder="Search Anything…"
              />
              <button
                className="absolute inset-0 right-auto group"
                type="submit"
                aria-label="Search"
              >
                <svg
                  className="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-4 mr-2"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                  <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                </svg>
              </button>
            </div>
          </form>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3 last:mb-0">
            <div className="text-xs font-semibold text-slate-400 uppercase px-2 mb-2">
              Recent searches
            </div>
            <ul className="text-sm">
              <li>
                <Link
                  className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                  to="#0"
                >
                  <svg
                    className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                  </svg>
                  <span>Form Builder - 23 hours on-demand video</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                  to="#0"
                >
                  <svg
                    className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                  </svg>
                  <span>Access Mosaic on mobile and TV</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                  to="#0"
                >
                  <svg
                    className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                  </svg>
                  <span>Product Update - Q4 2021</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                  to="#0"
                >
                  <svg
                    className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                  </svg>
                  <span>Master Digital Marketing Strategy course</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                  to="#0"
                >
                  <svg
                    className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                  </svg>
                  <span>Dedicated forms for products</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                  to="#0"
                >
                  <svg
                    className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                  </svg>
                  <span>Product Update - Q4 2021</span>
                </Link>
              </li>
            </ul>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SearchModal;
