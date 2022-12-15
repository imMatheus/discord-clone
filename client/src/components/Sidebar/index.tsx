import React from 'react';
import type { Server } from '@/types';
import SidebarListItem from './SidebarListItem';
import { useQuery } from '@/hooks';

const Sidebar: React.FC = ({}) => {
  const { data } = useQuery<Server[]>('servers', '/servers');
  console.log(data);

  return (
    <div className="h-screen overflow-y-scroll bg-clr-bg-dark">
      <ul className="flex w-[4.5rem] flex-col gap-2 overflow-x-visible overflow-y-scroll py-2">
        {/* <SidebarListItem /> */}
        <p className="text-xs">{JSON.stringify(data)}</p>
      </ul>
    </div>
  );
};

export default Sidebar;
