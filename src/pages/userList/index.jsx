import React, { useState } from "react";
import { Space, Table, Button } from "antd";
import { data } from "./data";
import EditModal from "./EditModal";

export default function UserList() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record, index) => (
        <Space size="middle">
          <Button onClick={() => onEdit(_, record)} size="small" type="primary">
            编辑
          </Button>
          <Button onClick={() => onDelete(_, index)} size="small">
            删除
          </Button>
        </Space>
      ),
    },
  ];

  const onPageChange = ({ current }) => {
    setPagination({
      ...pagination,
      current,
    });
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [tableData, setTableData] = useState(data);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: data.length,
    showTotal: (total) => {
      return `共 ${total} 条`;
    },
  });

  function onEdit(row) {
    setUserInfo(row);
    setIsModalOpen(true);
  }
  function onDelete(row, index) {
    const delIndex = tableData.findIndex((item) => item.key === row.key);
    data.splice(delIndex, 1);
    setPagination({
      ...pagination,
      total: data.length,
    });
    setTableData([...data]);
  }
  function closeMode() {
    setIsModalOpen(false);
  }
  function changeUserInfo(val) {
    const updateIndex = tableData.findIndex((item) => item.key === val.key);
    data[updateIndex] = val;
    setTableData([...data]);
    closeMode()
  }
  return (
    <div>
      <Table
        columns={columns}
        dataSource={tableData}
        onChange={onPageChange}
        pagination={pagination}
      />
      {isModalOpen ? (
        <EditModal
          isModalOpen={isModalOpen}
          closeMode={closeMode}
          userInfo={userInfo}
          changeUserInfo={changeUserInfo}
        />
      ) : (
        ""
      )}
    </div>
  );
}
