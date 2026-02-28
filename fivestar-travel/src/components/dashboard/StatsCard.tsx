interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "up" | "down" | "neutral";
  emoji: string;
  color: string;
}

export default function StatsCard({ title, value, change, changeType, emoji, color }: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500 font-medium">{title}</p>
          <p className="text-2xl font-bold text-navy-800 mt-1">{value}</p>
          <p className={`text-xs mt-1 font-medium ${
            changeType === "up" ? "text-green-600" : changeType === "down" ? "text-red-500" : "text-slate-400"
          }`}>
            {changeType === "up" ? "↑" : changeType === "down" ? "↓" : "→"} {change}
          </p>
        </div>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${color}`}>
          {emoji}
        </div>
      </div>
    </div>
  );
}
