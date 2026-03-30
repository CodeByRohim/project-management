import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Table } from '@tanstack/react-table';

const DashboardLayout: React.FC = () => {
    const { data, error, isLoading } = useQuery('fetchDashboardData', async () => {
        const response = await fetch('/api/dashboard');
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const columns = [
        { accessorKey: 'name', header: 'Name' },
        { accessorKey: 'value', header: 'Value' },
    ];

    return (
        <div className="dashboard-layout">
            <h1>Dashboard</h1>
            <Table options={{ data, columns }} />
        </div>
    );
};

export default DashboardLayout;