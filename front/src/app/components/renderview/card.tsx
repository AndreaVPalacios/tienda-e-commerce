interface DashboardCardProps {
  title: string;
  value: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
}

const DashboardCard = ({ title, value, icon }: DashboardCardProps) => {
  return (
    <div className="relative overflow-hidden transition-all duration-300 ml-7 hover:shadow-lg border-2 rounded-lg border-gray-50">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          <div className="text-muted-foreground/60">{icon}</div>
        </div>
        <p className="text-2xl font-semibold tracking-tight">{value}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
