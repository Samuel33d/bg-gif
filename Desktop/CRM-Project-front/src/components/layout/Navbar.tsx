import React from 'react';
import Link from 'next/link';
import SvgIcon, { IconName } from '../utils/SvgIcons'; 

const Navbar = () => {
  const menuItems = [
    { name: 'notifications', alt: 'Notifications', label: 'Notifications' },
    { name: 'dashboard', alt: 'Dashboard', label: 'Dashboard', link: '/inbox' },
    { name: 'add-existing-leads', alt: 'Add Existing Leads', label: 'Add Existing Leads' },
    { name: 'see-promoted-leads', alt: 'See Promoted Leads', label: 'See Promoted Leads' },
    { name: 'generate-leads', alt: 'Generate Leads', label: 'Generate Leads' },
    { name: 'email-automation', alt: 'Email Automation', label: 'Email Automation' },
    { name: 'lead-gen-automation', alt: 'Lead Gen Automation', label: 'Lead Gen Automation' },
    { name: 'email-management', alt: 'Email Management', label: 'Email Management' },
    { name: 'reporting-and-analytics', alt: 'Reporting and Analytics', label: 'Reporting and Analytics' },
  ];

  return (
    <nav className="group bg-primaryBlue w-[80px] h-screen flex flex-col justify-around px-4 hover:w-[310px] transition-all items-start fixed z-50">
      <div className="flex items-center gap-5">
        <SvgIcon name="logo" width={50} height={50} />
        <span className="text-white font-bold text-[22px] tracking-wider hidden group-hover:block absolute top-7 left-[4.5rem]">
          Logo
        </span>
      </div>
      <ul className="flex flex-col text-white ml-1">
        {menuItems.map((item, index) => (
          <Link href={item.link ? item.link : ""} key={index} className="flex gap-5 py-2 px-1 mt-2 hover:bg-hoverBlue transition-colors rounded-lg items-center cursor-pointer">
            <SvgIcon name={item.name as IconName} width={30} height={30} />
            <span className="min-w-56 hidden group-hover:block">
              {item.label}
            </span>
          </Link>
        ))}
      </ul>
      <div className="flex flex-col">
        <div className="flex gap-3 items-center">
          <span className="font-bold text-lg h-12 w-12 flex justify-center items-center bg-white rounded-full">
            SB
          </span>
          <span className="text-white font-bold text-[22px] tracking-wider hidden group-hover:block min-w-56">
            Samuel B.
          </span>
        </div>
        <SvgIcon name="beta" width={50} height={50} />
      </div>
    </nav>
  );
};

export default Navbar;
