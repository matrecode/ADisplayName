import React, { useState, useEffect } from "react";
import axios from "axios";

const XDataTable = ({ currentItems }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const Pagination = ({ currentPage, itemsPerPage, totalItems, paginate }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };
  return (
    <nav>
      <div className="pagination">
        <div className="page-item">
          <button onClick={goToPrevPage} className="page-link">
            Previous
          </button>
        </div>
        <div className="page-item">
          <div className="page-link">{currentPage}</div>
        </div>
        <div className="page-item">
          <button onClick={goToNextPage} className="page-link">
            Next
          </button>
        </div>
      </div>
    </nav>
  );
};

const XPagination = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`
      );
      setData(res?.data);
      setCurrentItemsData(res?.data, 1);
      if (res.status !== 200) {
        throw new Error(`${res.status} ${res.statusText}`);
      }
    } catch (error) {
      alert("failed to fetch data");
    }
  };

  const setCurrentItemsData = (allData, pageNo) => {
    if (!allData) return;

    let arr = [];
    let start = (pageNo - 1) * 10;

    for (let i = start; i < start + 10; i++) {
      if (allData[i]) arr.push(allData[i]);
    }

    setCurrentItems(arr);
  };

  useEffect(() => {
    setCurrentItemsData(data, currentPage);
  }, [currentPage]);

  const paginate = (num) => {
    setCurrentPage(num);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Employees Data Table</h1>
      {data && <XDataTable currentItems={currentItems} />}
      <Pagination
        currentPage={currentPage}
        itemsPerPage={10}
        totalItems={data?.length}
        paginate={paginate}
      />
    </>
  );
};

export default XPagination;
