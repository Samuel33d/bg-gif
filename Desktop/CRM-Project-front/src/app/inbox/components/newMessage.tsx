import React from 'react';
import SvgIcon, { IconName } from '@/components/utils/SvgIcons';

const NewMessageModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="bg-white rounded-lg w-full max-w-2xl pb-6 fixed shadow-md bottom-2 right-2 overflow-hidden transition-all border">
      <div className="flex justify-between items-center p-4 bg-lightGray border-b px-6">
        <h2 className="text-xl font-bold">New Message</h2>
        <div className="flex items-center gap-2 mr-2">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <SvgIcon name="minimize" width={15} height={15} />
          </button>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <SvgIcon name="close" width={15} height={15} />
          </button>
        </div>
      </div>
      <input
        type="text"
        placeholder="Recipients"
        className="w-full border-b border-gray-300 py-3 mb-4 outline-none px-6"
      />
      <input
        type="text"
        placeholder="Subject"
        className="w-full border-b border-gray-300 pb-2 mb-4 outline-none px-6"
      />
      <textarea
        placeholder="Write your message here..."
        className="w-full h-64 border-b border-gray-300 py-2 mb-4 outline-none resize-none px-6"
      ></textarea>
      <div className="flex justify-between items-center px-6">
        <button className="bg-primaryBlue text-white py-2 px-4 rounded-md font-bold">
          Send
        </button>
        <div className="flex space-x-2">
          {[
            'underlined',
            'papercliper',
            'link',
            'image',
            'smiley',
            'calendar',
            'more-black',
            'trash-black',
          ].map((icon) => {
            return (
              <button
                key={icon}
                className="hover:bg-lightGray transition-all p-1"
              >
                <SvgIcon name={icon as IconName} width={20} height={20} />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewMessageModal;
