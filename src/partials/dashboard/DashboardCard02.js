import React from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import Icon from '../../images/icon-02.svg';
import EditMenu from '../EditMenu';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard02() {


  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-gray-200">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img src={Icon} width="32" height="32" alt="Icon 01" />
          {/* Menu button */}
          <EditMenu className="relative inline-flex">
            <li>
              <Link className="font-medium text-sm text-gray-600 hover:text-gray-800 flex py-1 px-3" to="#0">View</Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-gray-600 hover:text-gray-800 flex py-1 px-3" to="#0">Add</Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-red-500 hover:text-red-600 flex py-1 px-3" to="#0">Remove</Link>
            </li>
          </EditMenu>
        </header>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Unbollowed Books</h2>
        {/* <div className="text-xs font-semibold text-gray-400 uppercase mb-1">Sales</div> */}
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 mr-2 mb-3">280</div>
          {/* <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">+49%</div> */}
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
        <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white mr-10 ml-10">
            <span className="hidden xs:block ml-2">View More</span>
        </button>
    </div>
  );
}

export default DashboardCard02;
