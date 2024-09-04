'use client';
import React, { useState } from 'react';
import clsx from 'clsx';
import SvgIcon from '@/components/utils/SvgIcons';

interface Email {
  id: number;
  sender: string;
  subject: string;
  body: string;
  folder: string;
  time: string;
}

interface EmailListProps {
  emails: Email[];
  currentPage: number;
  itemsPerPage: number;
}

const EmailList: React.FC<EmailListProps> = ({
  emails,
  currentPage,
  itemsPerPage,
}) => {
  const [selectedEmails, setSelectedEmails] = useState<number[]>([]);

  const toggleEmailSelection = (emailId: number) => {
    setSelectedEmails((prevSelected) =>
      prevSelected.includes(emailId)
        ? prevSelected.filter((id) => id !== emailId)
        : [...prevSelected, emailId]
    );
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedEmails = emails.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-full mt-3">
      {paginatedEmails.map((email) => (
        <div
          key={email.id}
          className={clsx(
            'flex items-center py-4 px-4 border-b border-l border-r rounded-lg relative',
            {
              'border-t': email.id === 0,
              'bg-blue-100': selectedEmails.includes(email.id),
            }
          )}
        >
          <span className="absolute left-10">{email.id}</span>
          <input
            type="checkbox"
            className="mr-4"
            checked={selectedEmails.includes(email.id)}
            onChange={() => toggleEmailSelection(email.id)}
          />
          <div className="flex-1 flex justify-evenly md:flex-row flex-col">
            <div className="font-semibold self-start">{email.sender}</div>
            <div>
              <span className="font-bold">{email.subject}</span>
              <span> - {email.body}</span>
            </div>
          </div>
          <div className="flex items-center space-x-12 font-bold">
            <div className="flex items-center space-x-2">
              <SvgIcon name="folder" width={16} height={16} />
              <span>{email.folder}</span>
            </div>
            <span>{email.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmailList;
