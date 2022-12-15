import { useQuery } from '@/hooks';
import { Channel } from '@/types';
import React from 'react';
import { useRouter } from 'next/router';
import ChannelSidebarListItem from './ChannelSidebarListItem';

const ChannelsSidebar: React.FC = ({}) => {
  const router = useRouter();
  const { serverId } = router.query;

  const { data: channels, isLoading } = useQuery<Channel[]>(
    `channels-${serverId}`,
    `/servers/${serverId}/channels`,
  );

  return (
    <aside className="flex h-screen w-60 flex-col bg-clr-bg-secondary">
      <div className="flex flex-1 flex-col overflow-y-scroll">
        <div className="sticky top-0 border-b border-b-clr-black bg-clr-bg-secondary py-3 px-4 font-medium">
          {'Techover'}
        </div>
        <div className="flex-1 py-3 px-2">
          <ul className="space-y-1">
            {channels?.map((channel) => (
              <ChannelSidebarListItem channel={channel} key={channel.id} />
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default ChannelsSidebar;
