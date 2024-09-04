'use client';
import { FC, useState } from 'react';
import clsx from 'clsx'; 
import SvgIcon, { IconName } from './SvgIcons';

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownProps {
  items: DropdownItem[];
  icon: IconName;
  label: string;
  iconSize?: number;
}

const Dropdown: FC<DropdownProps> = ({ items, icon, label, iconSize = 15 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="flex items-center gap-2 justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 outline-none"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <SvgIcon
          name={icon}
          width={iconSize}
        />
        <span>{label}</span>
        <span className={clsx("transition-transform", { "rotate-180": isOpen })}>
          <SvgIcon
            name='arrow'
            width={iconSize}
          />
        </span>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
