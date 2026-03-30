// TypeScript interfaces for dashboard data
export interface DashboardData {
    id: string;
    title: string;
    completed: boolean;
    dueDate: Date;
}

export interface Insight {
    id: string;
    title: string;
    content: string;
    sentiment: 'positive' | 'negative' | 'neutral';
}

export interface Project {
    id: string;
    name: string;
    description: string;
    status: 'active' | 'inactive';
}