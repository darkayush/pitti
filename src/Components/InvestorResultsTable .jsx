import React, { useState } from 'react';
import { Download } from 'lucide-react';

const InvestorResultsTable = () => {
  const [activeTab, setActiveTab] = useState('quarterly');

  // Sample data structure for different tabs
  const data = {
    quarterly: {
      columns: ['Financial Year', 'April - June Q1', 'July - September Q2', 'October - December Q3', 'January - March Q4'],
      rows: [
        {
          year: '2024 - 2025',
          q1: { hasData: true, id: 'q1-2025' },
          q2: { hasData: true, id: 'q2-2025' },
          q3: { hasData: true, id: 'q3-2025' },
          q4: { hasData: true, id: 'q4-2025' }
        },
        {
          year: '2023 - 2024',
          q1: { hasData: true, id: 'q1-2024' },
          q2: { hasData: true, id: 'q2-2024' },
          q3: { hasData: true, id: 'q3-2024' },
          q4: { hasData: true, id: 'q4-2024' }
        },
        {
          year: '2022 - 2023',
          q1: { hasData: true, id: 'q1-2023' },
          q2: { hasData: true, id: 'q2-2023' },
          q3: { hasData: true, id: 'q3-2023' },
          q4: { hasData: true, id: 'q4-2023' }
        }
      ]
    },
    presentations: {
      columns: ['Financial Year', 'April - June Q1', 'July - September Q2', 'October - December Q3', 'January - March Q4', 'Others'],
      rows: [
        {
          year: '2024 - 2025',
          q1: { hasData: true, id: 'pres-q1-2025' },
          q2: { hasData: true, id: 'pres-q2-2025' },
          q3: { hasData: true, id: 'pres-q3-2025' },
          q4: { hasData: true, id: 'pres-q4-2025' },
          others: { hasData: true, id: 'pres-others-2025' }
        },
        {
          year: '2023 - 2024',
          q1: { hasData: true, id: 'pres-q1-2024' },
          q2: { hasData: true, id: 'pres-q2-2024' },
          q3: { hasData: true, id: 'pres-q3-2024' },
          q4: { hasData: true, id: 'pres-q4-2024' },
          others: { hasData: true, id: 'pres-others-2024' }
        },
        {
          year: '2022 - 2023',
          q1: { hasData: true, id: 'pres-q1-2023' },
          q2: { hasData: true, id: 'pres-q2-2023' },
          q3: { hasData: true, id: 'pres-q3-2023' },
          q4: { hasData: true, id: 'pres-q4-2023' },
          others: { hasData: true, id: 'pres-others-2023' }
        }
      ]
    },
    press: {
      columns: ['Financial Year', 'April - June Q1', 'July - September Q2', 'October - December Q3', 'January - March Q4'],
      rows: [
        {
          year: '2024 - 2025',
          q1: { hasData: true, id: 'press-q1-2025' },
          q2: { hasData: false, id: 'press-q2-2025' },
          q3: { hasData: true, id: 'press-q3-2025' },
          q4: { hasData: true, id: 'press-q4-2025' }
        },
        {
          year: '2023 - 2024',
          q1: { hasData: true, id: 'press-q1-2024' },
          q2: { hasData: true, id: 'press-q2-2024' },
          q3: { hasData: false, id: 'press-q3-2024' },
          q4: { hasData: true, id: 'press-q4-2024' }
        }
      ]
    },
    conference: {
      columns: ['Financial Year', 'April - June Q1', 'July - September Q2', 'October - December Q3', 'January - March Q4'],
      rows: [
        {
          year: '2024 - 2025',
          q1: { hasData: true, id: 'conf-q1-2025' },
          q2: { hasData: true, id: 'conf-q2-2025' },
          q3: { hasData: false, id: 'conf-q3-2025' },
          q4: { hasData: true, id: 'conf-q4-2025' }
        },
        {
          year: '2023 - 2024',
          q1: { hasData: false, id: 'conf-q1-2024' },
          q2: { hasData: true, id: 'conf-q2-2024' },
          q3: { hasData: true, id: 'conf-q3-2024' },
          q4: { hasData: true, id: 'conf-q4-2024' }
        }
      ]
    }
  };

  const tabs = [
    { id: 'quarterly', label: 'Quarterly Results' },
    { id: 'presentations', label: 'Investor Presentations' },
    { id: 'press', label: 'Press Release' },
    { id: 'conference', label: 'Investor Conference' }
  ];

  const handleDownload = (itemId) => {
    console.log(`Downloading item: ${itemId}`);
    // Here you would implement actual download logic
  };

  const renderDataCell = (cellData) => {
    if (!cellData || !cellData.hasData) {
      return <div className="h-8 sm:h-12 flex items-center justify-center">-</div>;
    }

    return (
      <div className="h-8 sm:h-12 flex items-center justify-center">
        <button
          onClick={() => handleDownload(cellData.id)}
          className="duration-200 rounded-md p-1 sm:p-2 flex items-center justify-center"
        >
          <img 
            src="Investors\download_icon.png" 
            alt="Download" 
            className="w-5 h-5 lg:w-8 lg:h-8 object-contain"
          />
        </button>
      </div>
    );
  };

  const currentData = data[activeTab];

  return (
    <div className="mx-auto p-6 bg-gray-100 min-h-screen">
      <div className="rounded-lg overflow-hidden">
        {/* Tab Navigation */}
        <div className="">
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-t-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-teal-500 text-white border-b-2 border-red-500 transform translate-y-0'
                    : 'bg-slate-600 text-gray-300 hover:bg-slate-500 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Table Container */}
        <div className="overflow-hidden">
          <div className="transition-all duration-500 ease-in-out">
            <table className="w-full">
              {/* Header */}
              <thead>
                <tr className="bg-teal-500">
                  {currentData.columns.map((column, index) => (
                    <th
                      key={index}
                      className="px-6 py-4 text-left text-white font-semibold border-r border-teal-400 last:border-r-0"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Body */}
              <tbody className="bg-white">
                {currentData.rows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 font-medium bg-slate-600 text-white border-r border-slate-500">
                      {row.year}
                    </td>
                    <td className="px-6 py-1 border-r border-gray-200">
                      {renderDataCell(row.q1)}
                    </td>
                    <td className="px-6 py-1 border-r border-gray-200">
                      {renderDataCell(row.q2)}
                    </td>
                    <td className="px-6 py-1 border-r border-gray-200">
                      {renderDataCell(row.q3)}
                    </td>
                    <td className="px-6 py-1 border-r border-gray-200">
                      {renderDataCell(row.q4)}
                    </td>
                    {activeTab === 'presentations' && (
                      <td className="px-6 py-1">
                        {renderDataCell(row.others)}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Load More Button */}
        <div className="bg-slate-700 p-4 sm:p-6 text-center">
          <button className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm sm:text-base">
            Load more...
          </button>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-4 sm:mt-6 text-center text-gray-600">
        <p className="text-xs sm:text-sm">
          Click on the download icons to access reports and presentations
        </p>
      </div>
    </div>
  );
};

export default InvestorResultsTable;