import React from 'react';
import { Channel } from '@/types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { Hash } from 'react-feather';

interface ChannelSidebarListItemProps {
  channel: Channel;
}

const ChannelSidebarListItem: React.FC<ChannelSidebarListItemProps> = ({
  channel,
}) => {
  const router = useRouter();
  const { serverId, channelId } = router.query;
  const match = channelId === channel.id;

  return (
    <Link
      href={`/servers/${serverId}/channels/${channel.id}`}
      className={classNames(
        'flex items-center gap-2 rounded-md py-1.5 px-2 font-medium text-clr-text-grayed',
        { 'bg-clr-bg-content text-clr-text': match },
        channel && 'transition-colors hover:bg-clr-bg-separator',
      )}
    >
      <Hash strokeWidth={2.5} className="h-4 w-4 text-clr-text-grayed" />
      <p className="">{channel.name}</p>
    </Link>
  );
};

export default ChannelSidebarListItem;
