import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import Link from "next/link";

const items: MenuProps["items"] = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];
const SidebarPengi = () => {
  return (
    <div className="h-full w-[260px]">
      <div className="flex h-full min-h-0 flex-col">
        <div className="flex h-full min-h-0 flex-col">
          <div className="scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20">
            <nav className="flex h-full w-full flex-col px-3 pb-3.5">
              <div className="-mr-2 flex-1 flex-col overflow-y-auto pr-2 transition-opacity duration-500">
                <div className="sticky left-0 right-0 top-0 z-20 pt-3.5">
                  <div className="pb-0.5 last:pb-0">
                    <Link
                      href="/all-in-one"
                      className="group flex h-10 items-center gap-2 rounded-lg bg-[#171717] px-2 font-medium hover:bg-[#212121]"
                    >
                      <div className="h-7 w-7 flex-shrink-0">
                        <div className="text-gray-950 relative flex h-full items-center justify-center rounded-full bg-white">
                          <svg
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-2/3 w-2/3"
                            role="img"
                          >
                            <text x="-9999" y="-9999">
                              ChatGPT
                            </text>
                            <path
                              d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="grow overflow-hidden text-ellipsis whitespace-nowrap  font-sans text-sm text-[#ececec]">
                        New chat
                      </div>
                      <div className="flex gap-3">
                        <span className="flex items-center" data-state="closed">
                          <button className="text-[#ececec]">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon-md"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16.7929 2.79289C18.0118 1.57394 19.9882 1.57394 21.2071 2.79289C22.4261 4.01184 22.4261 5.98815 21.2071 7.20711L12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16H9C8.44772 16 8 15.5523 8 15V12C8 11.7348 8.10536 11.4804 8.29289 11.2929L16.7929 2.79289ZM19.7929 4.20711C19.355 3.7692 18.645 3.7692 18.2071 4.2071L10 12.4142V14H11.5858L19.7929 5.79289C20.2308 5.35499 20.2308 4.64501 19.7929 4.20711ZM6 5C5.44772 5 5 5.44771 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34314 4.34315 3 6 3H10C10.5523 3 11 3.44771 11 4C11 4.55228 10.5523 5 10 5H6Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </button>
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-2 pb-2 text-sm text-[#ececec]">
                  <div>
                    <span>
                      <div
                        className="relative mt-5"
                        style={{
                          height: "auto",
                          opacity: 1,
                          transform: "none",
                          transformOrigin: "50% 50% 0px",
                        }}
                      >
                        <div
                          style={{
                            transform: "none",
                            transformOrigin: "50% 50% 0px",
                          }}
                        >
                          <h3 className="h-9 overflow-hidden text-ellipsis break-all px-2 pb-2 pt-3 text-xs font-medium text-[#9b9b9b]">
                            Yesterday
                          </h3>
                        </div>
                        <ol>
                          <li className="relative">
                            <div className="group relative rounded-lg hover:bg-[#212121] active:opacity-90">
                              <Link
                                href="/all-in-one/chat/1"
                                className="flex items-center gap-2 p-2"
                              >
                                <div className="relative grow overflow-hidden whitespace-nowrap">
                                  New conversation
                                </div>
                              </Link>
                              <div className="absolute bottom-0 right-0 top-0 hidden items-center gap-1.5 pr-2 group-hover:flex">
                                <button
                                  className="flex items-center justify-center transition hover:text-[#b4b4b4]"
                                  type="button"
                                  id="radix-:r10:"
                                  aria-haspopup="menu"
                                  aria-expanded="false"
                                  data-state="closed"
                                >
                                  <span className="" data-state="closed">
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="icon-md"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </span>
                                </button>
                                <span className="" data-state="closed">
                                  <button className="flex items-center justify-center transition hover:text-[#b4b4b4]">
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="icon-md"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </button>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="relative">
                            <div className="group relative rounded-lg hover:bg-[#212121] active:opacity-90">
                              <Link
                                href="/all-in-one/chat/2"
                                className="flex items-center gap-2 p-2"
                              >
                                <div className="relative grow overflow-hidden whitespace-nowrap">
                                  New conversation
                                </div>
                              </Link>
                              <div className="absolute bottom-0 right-0 top-0 hidden items-center gap-1.5 pr-2 group-hover:flex">
                                <button
                                  className="flex items-center justify-center transition hover:text-[#b4b4b4]"
                                  type="button"
                                  id="radix-:r10:"
                                  aria-haspopup="menu"
                                  aria-expanded="false"
                                  data-state="closed"
                                >
                                  <span className="" data-state="closed">
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="icon-md"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </span>
                                </button>
                                <span className="" data-state="closed">
                                  <button className="flex items-center justify-center transition hover:text-[#b4b4b4]">
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="icon-md"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </button>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="relative">
                            <div className="group relative rounded-lg hover:bg-[#212121] active:opacity-90">
                              <Link
                                href="/all-in-one/chat/3"
                                className="flex items-center gap-2 p-2"
                              >
                                <div className="relative grow overflow-hidden whitespace-nowrap">
                                  New conversation
                                </div>
                              </Link>
                              <div className="absolute bottom-0 right-0 top-0 hidden items-center gap-1.5 pr-2 group-hover:flex">
                                <button
                                  className="flex items-center justify-center transition hover:text-[#b4b4b4]"
                                  type="button"
                                  id="radix-:r10:"
                                  aria-haspopup="menu"
                                  aria-expanded="false"
                                  data-state="closed"
                                >
                                  <span className="" data-state="closed">
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="icon-md"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </span>
                                </button>
                                <span className="" data-state="closed">
                                  <button className="flex items-center justify-center transition hover:text-[#b4b4b4]">
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="icon-md"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </button>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="relative">
                            <div className="group relative rounded-lg hover:bg-[#212121] active:opacity-90">
                              <Link
                                href="/all-in-one/chat/4"
                                className="flex items-center gap-2 p-2"
                              >
                                <div className="relative grow overflow-hidden whitespace-nowrap">
                                  New conversation
                                </div>
                              </Link>
                              <div className="absolute bottom-0 right-0 top-0 hidden items-center gap-1.5 pr-2 group-hover:flex">
                                <button
                                  className="flex items-center justify-center transition hover:text-[#b4b4b4]"
                                  type="button"
                                  id="radix-:r10:"
                                  aria-haspopup="menu"
                                  aria-expanded="false"
                                  data-state="closed"
                                >
                                  <span className="" data-state="closed">
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="icon-md"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </span>
                                </button>
                                <span className="" data-state="closed">
                                  <button className="flex items-center justify-center transition hover:text-[#b4b4b4]">
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="icon-md"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </button>
                                </span>
                              </div>
                            </div>
                          </li>
                        </ol>
                      </div>
                    </span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col pt-2 empty:hidden dark:border-white/20">
                <a className="group group m-0 flex cursor-pointer items-center gap-2 rounded-lg p-2.5 px-2 text-sm text-[#ececec] hover:bg-[#212121] focus:ring-0">
                  <span className="flex w-full flex-row flex-wrap-reverse justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[hsla(0,0%,100%,.1)]">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon-sm shrink-0"
                        >
                          <path
                            d="M8.78158 8.60266L9.8188 5.49098C10.037 4.83634 10.963 4.83634 11.1812 5.49098L12.2184 8.60266C12.7187 10.1035 13.8965 11.2813 15.3973 11.7816L18.509 12.8188C19.1637 13.037 19.1637 13.963 18.509 14.1812L15.3973 15.2184C13.8965 15.7187 12.7187 16.8965 12.2184 18.3973L11.1812 21.509C10.963 22.1637 10.037 22.1637 9.8188 21.509L8.78158 18.3973C8.28128 16.8965 7.10354 15.7187 5.60266 15.2184L2.49098 14.1812C1.83634 13.963 1.83634 13.037 2.49098 12.8188L5.60266 11.7816C7.10354 11.2813 8.28128 10.1035 8.78158 8.60266Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M17.1913 3.69537L17.6794 2.23105C17.7821 1.92298 18.2179 1.92298 18.3206 2.23105L18.8087 3.69537C19.0441 4.40167 19.5983 4.9559 20.3046 5.19133L21.769 5.67944C22.077 5.78213 22.077 6.21787 21.769 6.32056L20.3046 6.80867C19.5983 7.0441 19.0441 7.59833 18.8087 8.30463L18.3206 9.76895C18.2179 10.077 17.7821 10.077 17.6794 9.76895L17.1913 8.30463C16.9559 7.59833 16.4017 7.0441 15.6954 6.80867L14.231 6.32056C13.923 6.21787 13.923 5.78213 14.231 5.67944L15.6954 5.19133C16.4017 4.9559 16.9559 4.40167 17.1913 3.69537Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <div className="flex flex-col">Renew Plus</div>
                    </div>
                  </span>
                </a>
                <div className="flex w-full items-center">
                  <div className="max-w-[100%] grow">
                    <div className="group relative" data-headlessui-state="">
                      <Dropdown
                        menu={{ items, theme: "dark" }}
                        trigger={["click"]}
                      >
                        <button
                          className="flex w-full max-w-[100%] items-center gap-2 rounded-lg p-2 text-sm  text-[#ececec] hover:bg-[#212121]"
                          id="headlessui-menu-button-:rc:"
                          type="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                          data-headlessui-state=""
                        >
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center overflow-hidden rounded-full">
                              <div className="relative flex">
                                <img
                                  alt="User"
                                  loading="lazy"
                                  width="32"
                                  height="32"
                                  decoding="async"
                                  data-nimg="1"
                                  className="rounded-sm"
                                  src="https://s.gravatar.com/avatar/07bc247691ab0c3c51b472a461c4eb9b?s=480&amp;r=pg&amp;d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fwe.png"
                                  // style='color: transparent;'
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative -top-px grow -space-y-px truncate text-left text-[#ececec]">
                            <div>ANH VŨ</div>
                          </div>
                        </button>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarPengi;
