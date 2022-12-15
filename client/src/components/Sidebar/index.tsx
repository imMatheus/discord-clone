import React from 'react';
import type { ServerWithOneChannel } from '@/types';
import SidebarListItem from './SidebarListItem';
import { useQuery } from '@/hooks';

const Sidebar: React.FC = ({}) => {
  const { data: servers, isLoading } = useQuery<ServerWithOneChannel[]>(
    'servers',
    '/servers',
  );
  console.log(servers);

  return (
    <div className="h-screen overflow-scroll bg-clr-bg-dark">
      <ul className="flex w-[4.5rem] flex-col gap-2 py-2">
        {isLoading
          ? [1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div
                key={i}
                className="mx-auto h-12 w-12 flex-shrink-0 animate-pulse rounded-3xl bg-clr-bg-primary"
              />
            ))
          : servers?.map((server) => (
              <SidebarListItem server={server} key={server.id} />
            ))}
      </ul>
    </div>
  );
};

export default Sidebar;
