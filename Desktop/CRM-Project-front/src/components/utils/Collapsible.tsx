'use client';
import { FC, useState } from 'react';
import clsx from 'clsx'; 
import SvgIcon, { IconName } from './SvgIcons';

interface CollapsibleSectionProps {
  title: string;
  icon: IconName;
  items: { icon: IconName, label: string, count: number, isNew?: boolean }[];
  isOpen: boolean;
  setIsOpen: () => void;
}

const CollapsibleSection: FC<CollapsibleSectionProps> = ({ title, icon, items, isOpen, setIsOpen }) => (
  <>
    <button
      onClick={setIsOpen}
      className="w-full flex justify-between items-center p-4 focus:outline-none border-b font-bold px-6 gap-1 text-md"
      aria-expanded={isOpen}
    >
      <div className='flex items-center gap-3'>
        <SvgIcon
          name={icon}
          width={25}
        />
        <span>{title}</span>
      </div>
      <span className={clsx("transition-transform", { "rotate-180": !isOpen })}>
        <SvgIcon
          name='arrow'
          width={15}
        />
      </span>
    </button>
    {isOpen && (
      <div className="flex flex-col">
        {items.map((item, index) => (
          <button 
            key={index} 
            className={clsx(
              "bg-lightGray w-full px-10 flex justify-between items-center group font-bold stroke-gray-200 transition-colors",
              { 
                "text-black": item.isNew,
                "text-[#D9D9D9]": !item.isNew 
              }
            )}
          >
            <div className='flex gap-2 justify-start items-center py-3 text-sm'>
              <SvgIcon
                name={item.icon}
                width={25}
              />
              <span>{item.label}</span>
            </div>
            <span>{item.count}</span>
          </button>
        ))}
      </div>
    )}
  </>
);

interface CollapsibleProps {
  sections: {
    title: string;
    icon: IconName;
    items: { icon: IconName, label: string, count: number, isNew?: boolean }[];
  }[];
}

const Collapsible: FC<CollapsibleProps> = ({ sections }) => {
  const [openSections, setOpenSections] = useState<Record<number, boolean>>(
    sections.reduce((acc, _, index) => ({ ...acc, [index]: false }), {})
  );

  const toggleSection = (index: number) => {
    setOpenSections(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div className="border-gray-200 dark:border-gray-700">
      {sections.map((section, index) => (
        <CollapsibleSection
          key={index}
          title={section.title}
          icon={section.icon}
          items={section.items}
          isOpen={openSections[index]}
          setIsOpen={() => toggleSection(index)}
        />
      ))}
    </div>
  );
}

export default Collapsible;
