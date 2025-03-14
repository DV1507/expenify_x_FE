"use client";
import CommonButton from "@/components/common/common-button";
import ExpenseCard from "@/components/common/goals-cards";
import CommonSquareIcon from "@/components/common/icon";

import { Separator } from "@/components/ui/separator";
import { AreaChartIcon, PlusIcon } from "lucide-react";

const StaticTheme = () => {
  return (
    <div className="p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5 items-start justify-start">
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
      </div>
      <Separator className="my-4 " />
      <CommonSquareIcon Icon={AreaChartIcon} />
      <Separator className="my-4 " />
      <CommonButton label="Add Goal" Icon={PlusIcon} />
    </div>
  );
};

export default StaticTheme;
