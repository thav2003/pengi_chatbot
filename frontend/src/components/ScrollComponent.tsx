'use client';

import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import ScrollToBottom, {
  FunctionContext,
  StateContext,
} from 'react-scroll-to-bottom';
const error = console.error;
console.error = (...args: any) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};
const Content: React.FC<{
  children: React.ReactNode;
  scrollToBottom: () => void;
  sticky: boolean;
}> = ({ scrollToBottom, sticky, children }) => {
  const pathname = usePathname();
  useEffect(() => {
    scrollToBottom();
  }, [pathname]);
  return (
    <React.Fragment>
      {children}
      {!sticky && (
        <button
          onClick={() => scrollToBottom()}
          className='absolute bottom-5 right-1/2 z-10 cursor-pointer rounded-full border border-[hsla(0,0%,100%,.1)] bg-[#212121] bg-clip-padding text-[#b4b4b4]'
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            className='m-1 text-[#ececec]'
          >
            <path
              d='M17 13L12 18L7 13M12 6L12 17'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </svg>
        </button>
      )}
    </React.Fragment>
  );
};

const ScrollComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ScrollToBottom className='h-full' followButtonClassName='hidden'>
      <FunctionContext.Consumer>
        {({ scrollToBottom }) => (
          <StateContext.Consumer>
            {({ sticky }) => (
              <div className='p-0'>
                <div className='flex flex-col pb-9 text-sm'>
                  <Content
                    scrollToBottom={() =>
                      scrollToBottom({ behavior: 'smooth' })
                    }
                    sticky={sticky}
                  >
                    {children}
                  </Content>
                </div>
              </div>
            )}
          </StateContext.Consumer>
        )}
      </FunctionContext.Consumer>
    </ScrollToBottom>
  );
};
export default ScrollComponent;
