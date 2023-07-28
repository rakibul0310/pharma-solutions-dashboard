import React from "react";

const tableDatas = [
  {
    title: "Total Sales",
    amount: 1889.6,
  },
  {
    title: "Total Purchase",
    amount: 650,
  },
  {
    title: "Cash Received",
    amount: 1668.75,
  },
  {
    title: "Bank Receive",
    amount: 0,
  },
  {
    title: "E-Banking",
    amount: 500,
  },
  {
    title: "Mobile-Banking",
    amount: 0,
  },
  {
    title: "Others",
    amount: 500,
  },
  {
    title: "Total Service",
    amount: 0,
  },
];

const tableHeades = [
  { id: "title", label: "Today's Report" },
  { id: "amount", label: "Amount" },
];

const SummaryTable = () => {
  return (
    <div className="custom__table__outer__wrapper">
      <div className="custom__table__wrapper">
        <table className="custom__table">
          {/* Table Data */}
          <tbody>
            <tr>
              <td>{tableHeades[0]?.label}</td>
              <td>{tableHeades[1]?.label}</td>
            </tr>
            {tableDatas?.map((data, idx) => (
              <tr key={idx}>
                {tableHeades.map((head, idy) => {
                  const value = data[head.id];
                  return <td key={idy}>{value}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SummaryTable;
