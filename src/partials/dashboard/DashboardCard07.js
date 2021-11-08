import React from 'react';

function DashboardCard07() {
  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Students</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400 bg-gray-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Names</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Identification</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Course</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Registerd</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Data</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-gray-100">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="text-center">John Doe</div>
                </td>
                <td className="p-2">
                  <div className="text-center">DIT94</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">Gus</div>
                </td>
                <td className="p-2">
                  <div className="text-center">267</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-light-blue-500">4</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="text-center">John Doe</div>
                </td>
                <td className="p-2">
                  <div className="text-center">DIT94</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">Gus</div>
                </td>
                <td className="p-2">
                  <div className="text-center">267</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-light-blue-500">4</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="text-center">John Doe</div>
                </td>
                <td className="p-2">
                  <div className="text-center">DIT94</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">Gus</div>
                </td>
                <td className="p-2">
                  <div className="text-center">267</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-light-blue-500">4</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="text-center">John Doe</div>
                </td>
                <td className="p-2">
                  <div className="text-center">DIT94</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">Gus</div>
                </td>
                <td className="p-2">
                  <div className="text-center">267</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-light-blue-500">4</div>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
