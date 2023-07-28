import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "../features/slices/userSlice";
import { toast } from "react-toastify";
import Button from "./Button";

const CustomTable = ({
  tableHeades,
  tableDatas,
  perPageShow,
  showPagination,
  setData,
}) => {
  const dispatch = useDispatch();
  const [pageShow, setPageShow] = useSearchParams();
  const pageTerm = pageShow.get("newPage") || "";

  const [page, setPage] = useState(parseInt(pageTerm) ? parseInt(pageTerm) : 0);

  const handleChangePage = (newPage) => {
    setPage(newPage);
    setPageShow({ newPage });
  };

  const maxPaginateCount = Math.ceil(tableDatas.length / perPageShow);

  return (
    <div className="custom__table__outer__wrapper">
      <div className="custom__table__wrapper">
        <table className="custom__table">
          <thead>
            <tr>
              {/* Table Header */}
              {tableHeades &&
                tableHeades.map((heade, idx) => (
                  <th key={idx}>{heade.label}</th>
                ))}
            </tr>
          </thead>
          {/* Table Data */}
          <tbody>
            {tableDatas
              ?.slice(page * perPageShow, page * perPageShow + perPageShow)
              ?.map((data, idx) => (
                <tr key={idx}>
                  {tableHeades.map((head, idy) => {
                    const value = data[head.id];
                    return head.id === "action" ? (
                      <td key={idy}>
                        <Button
                          className="btn__error"
                          onClick={() => {
                            dispatch(deleteUser(data?.id));
                            const remain = tableDatas?.filter(
                              (r) => r?.id !== data?.id
                            );
                            setData(remain);
                            toast.success("User deleted!");
                          }}
                        >
                          Delete
                        </Button>
                      </td>
                    ) : (
                      <td key={idy}>{value}</td>
                    );
                  })}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {/* Table Pagination */}
      <div className="custom__table__pagination__wrapper">
        {showPagination &&
          tableDatas
            .slice(
              page + 1 - 5 > 0 ? page + 1 - 5 : 0,
              5 < maxPaginateCount ? 5 : maxPaginateCount
            )
            .map((data, idx) => (
              <button
                key={idx}
                onClick={() => handleChangePage(idx)}
                disabled={page === idx && true}
                className={`pagination__btn ${page === idx ? "disabled" : ""}`}
              >
                {idx + 1}
              </button>
            ))}
      </div>
    </div>
  );
};

export default CustomTable;
