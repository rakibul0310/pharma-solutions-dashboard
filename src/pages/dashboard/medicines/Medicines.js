import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../features/slices/userSlice";
import CustomTable from "../../../components/CustomTable";

const tableHeades = [
  { id: "id", label: "Sr.", minWidth: 20 },
  { id: "name", label: "Name", minWidth: 100 },
  {
    id: "username",
    label: "User Name",
    minWidth: 120,
  },
  {
    id: "email",
    label: "Email",
    minWidth: 110,
  },
  {
    id: "city",
    label: "City",
    minWidth: 100,
  },
  // {
  //   id: "phone",
  //   label: "Phone",
  //   minWidth: 100,
  // },
  {
    id: "website",
    label: "Website",
    minWidth: 100,
  },
  {
    id: "company",
    label: "Company",
    minWidth: 100,
  },
  {
    id: "action",
    label: "Action",
    minWidth: 100,
  },
];

const Medicines = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  });

  useEffect(() => {
    const createData = (
      id,
      name,
      username,
      email,
      city,
      // phone,
      website,
      company
    ) => {
      return {
        id,
        name,
        username,
        email,
        city,
        // phone,
        website,
        company,
      };
    };

    if (users?.data?.length > 0) {
      const processedData = users?.data?.map((d) =>
        createData(
          d?.id,
          d?.name,
          d?.username,
          d?.email,
          d?.address?.city,
          // d?.phone,
          d?.website,
          d?.company?.name
        )
      );

      setData(processedData);
    }
  }, [users?.data]);

  return (
    <div className="medicine__main__container">
      <div className="page__heding__container">
        <div className="heading__and__path">
          <div className="page__heading">
            <h5>Stock Medicines</h5>
          </div>
          <div className="route__path">
            <span className="path">
              Dashboard <span>&gt; Medicines</span>
            </span>
          </div>
        </div>
        <div className="button__container">
          <Button className="btn__base-300">+Add Medicine</Button>
        </div>
      </div>
      <div className="medicine__page__table__container">
        <CustomTable
          perPageShow={10}
          showPagination={false}
          tableDatas={data}
          tableHeades={tableHeades}
          setData={setData}
        />
      </div>
    </div>
  );
};

export default Medicines;
