"use client";
import "@/app/styles/pengi/index.css";
import ChatInputComponent from "@/components/ChatInputComponent";
import SidebarPengi from "@/components/SidebarPengi";
import React from "react";
import { PropsWithChildren } from "react";

// export const metadata: Metadata = {
//   title: "Chat - Pengi",
//   description: "Chat - Pengi",
// };

const PengiLayout = (props: PropsWithChildren) => {
  const [toggle, setToggle] = React.useState<boolean>(true);

  return (
    <div id="chat_layout">
      <div className="relative z-0 flex h-full w-full overflow-hidden">
        <div
          className="sidebar flex-shrink-0 overflow-x-hidden bg-[#171717]"
          style={{
            width: toggle ? "260px" : "0px",
            visibility: toggle ? "visible" : "hidden",
          }}
        >
          <SidebarPengi />
        </div>
        <div className="relative flex h-full max-w-full flex-1 flex-col overflow-hidden">
          <main className="transition-width relative h-full w-full flex-1 overflow-auto">
            <div
              className="fixed left-0 top-1/2 z-40"
              style={{
                transform: toggle
                  ? "translateX(260px) translateY(-50%) rotate(0deg) translateZ(0px)"
                  : "translateX(0px) translateY(-50%) rotate(180deg) translateZ(0px)",
              }}
            >
              <button onClick={() => setToggle(!toggle)}>
                <span>
                  <div className="flex h-[72px] w-8 items-center justify-center">
                    <div className="close-button flex h-6 w-6 flex-col  items-center">
                      <div
                        className="btn1 h-3 w-1 rounded-full"
                        style={
                          !toggle
                            ? {
                                transform:
                                  "translateY(0.15rem) rotate(15deg) translateZ(0px)",
                              }
                            : {}
                        }
                      ></div>
                      <div
                        className="btn2 h-3 w-1 rounded-full"
                        style={
                          !toggle
                            ? {
                                transform:
                                  "translateY(-0.15rem) rotate(-15deg) translateZ(0px)",
                              }
                            : {}
                        }
                      ></div>
                    </div>
                  </div>
                  <span
                    style={{
                      position: "absolute",
                      border: "0px",
                      width: "1px",
                      height: "1px",
                      padding: "0px",
                      margin: "-1px",
                      overflow: "hidden",
                      clip: "rect(0px, 0px, 0px, 0px)",
                      whiteSpace: "nowrap",
                      overflowWrap: "normal",
                    }}
                  >
                    Close sidebar
                  </span>
                </span>
              </button>
            </div>
            <div className="flex h-full flex-col bg-[#212121]">
              <div className="flex-1 overflow-hidden">{props.children}</div>
              <ChatInputComponent />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PengiLayout;
