'use client';

import React, { useState } from 'react';
import Collapsible from '@/components/utils/Collapsible';
import Dropdown from '@/components/utils/Dropwdown';
import EmailList from '@/app/inbox/components/EmailList';
import NewMessageModal from '@/app/inbox/components/newMessage';
import Pagination from '@/app/inbox/components/Pagination';
import SvgIcon, { IconName } from '../../components/utils/SvgIcons';

const emails = Array(100)
  .fill(0)
  .map((_, index) => {
    return {
      id: index,
      sender: 'Lorem Ipsum',
      subject: 'Lorem ipsum dolor sit amet!',
      body: 'Lorem ipsum dolor sit amet, consectetuer adipis...',
      folder: 'Folders',
      time: `00:00`,
    };
  });

const emailItems: {
  icon: IconName;
  label: string;
  count: number;
  isNew?: boolean;
}[] = [
  { icon: 'inbox', label: 'Inbox', count: 33, isNew: true },
  { icon: 'send-message', label: 'Sent', count: 11 },
  { icon: 'draft-list', label: 'Drafts', count: 2 },
  { icon: 'trash', label: 'Trash', count: 1 },
  { icon: 'spam', label: 'Spam', count: 0 },
];

const folderItems: { icon: IconName; label: string; count: number }[] = [
  { icon: 'folder', label: 'Campaigns', count: 15 },
];

const sections = [
  {
    title: '33 New Mails',
    icon: 'globe-text' as IconName,
    items: emailItems,
  },
  {
    title: 'Folders',
    icon: 'folder' as IconName,
    items: folderItems,
  },
];

export default function Inbox() {
  const [showNewMessage, setShowNewMessage] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const totalPages = Math.ceil(emails.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className="pl-[80px] grid md:grid-rows-[auto_1fr] h-screen lg:grid-cols-[18%,_82%] md:grid-cols-[20%,_75%] transition-all grid-cols-1">
      <header className="col-start-1 col-end-2 border-r">
        <h1 className="font-bold py-4 px-5 text-[33px] tracking-wide">Inbox</h1>
      </header>

      <aside className="border">
        <div className="px-2 py-4 grid grid-cols-2 justify-around gap-2 border-b">
          <button className="bg-primaryBlue flex items-center gap-2 rounded-lg text-white font-bold text-lg py-2 tracking-wider justify-center text-balance hover:bg-hoverBlue transition-all">
            <SvgIcon name="inbox" width={20} height={20} />
            <span>Inbox</span>
          </button>
          <div className="flex justify-evenly bg-lightGray rounded-md items-center">
            <button className="group">
              <SvgIcon name="send-message" width={20} height={20} />
            </button>
            <button className="group">
              <SvgIcon name="draft-list" width={20} height={20} />
            </button>
            <button className="group">
              <SvgIcon name="trash" width={20} height={20} />
            </button>
          </div>
        </div>
        <Collapsible sections={sections} />
      </aside>

      <section className="md:row-start-1 md:row-end-3 md:col-start-2 pt-5 px-6 py-16 h-screen">
        <div className="w-full flex justify-between items-center flex-col gap-3 mt-2 md:flex-row">
          <div className="flex gap-5 flex-col md:flex-row">
            <div className="flex gap-2 w-auto">
              <button
                className="bg-primaryBlue text-white py-1 text-md px-2 rounded-md font-bold tracking-wider grid grid-cols-[auto,1fr,auto] items-center gap-2 hover:bg-hoverBlue transition-all"
                onClick={() => setShowNewMessage(true)}
              >
                <SvgIcon name="write" />
                <span>Write</span>
              </button>
              <Dropdown
                icon="box"
                label=""
                items={[
                  { label: 'Support', href: '#' },
                  { label: 'License', href: '#' },
                  { label: 'Account settings', href: '#' },
                ]}
              />

              <button className="hover:bg-gray-100 transition-all p-2 rounded-md">
                <SvgIcon name="refresh" width={20} />
              </button>
              <button className="hover:bg-gray-100 transition-all p-2 rounded-md">
                <SvgIcon name="trash" width={20} />
              </button>
              <button className="hover:bg-gray-100 transition-all p-2 rounded-md">
                <SvgIcon name="funnel" width={20} />
              </button>
              <button className="hover:bg-gray-100 transition-all p-2 rounded-md">
                <SvgIcon name="more" width={20} />
              </button>
            </div>
            <div className="flex bg-[#f3f4f5] px-4 rounded-md items-center gap-5 py-2 lg:w-[450px]">
              <SvgIcon name="search" width={20} />
              <input
                type="text"
                className="bg-transparent outline-none w-full"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="flex">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
            <button className="p-1 px-2 text-gray-400 hover:bg-gray-100 border rounded-md">
              <SvgIcon name="settings" width={20} />
            </button>
          </div>
        </div>
        <EmailList
          emails={emails}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
      </section>

      {showNewMessage && (
        <NewMessageModal onClose={() => setShowNewMessage(false)} />
      )}
    </main>
  );
}
