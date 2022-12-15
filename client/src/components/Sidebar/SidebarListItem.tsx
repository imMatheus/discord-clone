import React from 'react';
import classNames from 'classnames';
import type { Server } from '@/types';
import { useRouter } from 'next/router';

interface SidebarListItemProps {
  server: Server;
}

const SidebarListItem: React.FC<SidebarListItemProps> = ({ server }) => {
  const router = useRouter();

  return (
    <div className="relative flex w-[4.5rem] items-center justify-center overflow-x-hidden px-3">
      <div className="group peer cursor-pointer">
        <div
          className={classNames(
            'peer flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-3xl bg-clr-bg-primary text-lg transition-all duration-300 group-hover:rounded-2xl group-hover:bg-clr-blurple',
            { 'rounded-2xl bg-clr-blurple': false },
          )}
        >
          {server.name.substring(1, 0)}
        </div>
      </div>

      <div
        className={classNames(
          'absolute left-0 h-10 w-3 rounded-full bg-clr-text opacity-100 transition-all',
          false
            ? '-translate-x-1/2'
            : 'h-3 -translate-x-full peer-hover:h-6 peer-hover:-translate-x-2/3',
        )}
      ></div>
    </div>
  );
};

export default SidebarListItem;
