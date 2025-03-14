import { LucideIcon } from "lucide-react";
interface IconButtonProps {
  Icon: LucideIcon;
}
const CommonSquareIcon = ({ Icon }: IconButtonProps) => {
  return (
    <button className="p-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition hover:cursor-pointer">
      <Icon className="w-5 h-5 text-gray-700" />
    </button>
  );
};

export default CommonSquareIcon;
