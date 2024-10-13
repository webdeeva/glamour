import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { ConfigProvider, theme } from 'antd';
import { getAppointments } from '../db/database';

const columns = [
  {
    title: 'Name',
    dataIndex: 'client_name',
    key: 'client_name',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Service',
    dataIndex: 'service',
    key: 'service',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
];

const Dashboard: React.FC = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = () => {
      const data = getAppointments();
      setAppointments(data);
    };
    fetchAppointments();
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#FF69B4',
        },
      }}
    >
      <div>
        <h2 className="text-3xl font-bold mb-6 gradient-text">Appointment Dashboard</h2>
        <Table dataSource={appointments} columns={columns} rowKey="id" />
      </div>
    </ConfigProvider>
  );
};

export default Dashboard;