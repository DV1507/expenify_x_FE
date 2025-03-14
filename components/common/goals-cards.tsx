import { Plane } from "lucide-react";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Progress } from "../ui/progress";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Input } from "../ui/input";

export default function ExpenseCard() {
  return (
    <div className="  bg-white dark:bg-background shadow-sm rounded-lg p-4 border-3 border-gray-200 dark:border-gray-900">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-xl">
            <Plane />
          </span>
          <h2 className="text-lg font-semibold">Vacation</h2>
        </div>
        <Popover>
          <PopoverTrigger className="cursor-pointer">⋮</PopoverTrigger>
          <PopoverContent>
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-muted-foreground">
                  Set the dimensions for the layer.
                </p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxHeight">Max. height</Label>
                  <Input
                    id="maxHeight"
                    defaultValue="none"
                    className="col-span-2 h-8"
                  />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="mt-3">
        <p className="text-xl font-bold dark:text-white text-gray-900">
          USD 2,000
        </p>
        <div className="flex flex-col space-y-2 mt-1">
          <Progress value={60} className="w-full h-2" />
          <div className="flex justify-between text-sm text-gray-400 dark:text-gray-200 ">
            <span className="font-semibold">USD 1,400 saved so far</span>
            <span>52%</span>
          </div>
        </div>
      </div>

      <div className="mt-4 text-gray-700 dark:text-gray-100 text-sm">
        <div className="flex justify-between">
          <span>Target</span>
          <span className="font-medium">Dec, 2035</span>
        </div>
        <div className="flex justify-between mt-1">
          <span>Remaining</span>
          <span className="font-medium">USD 600</span>
        </div>
      </div>

      <div className="mt-4 border-t pt-3 flex justify-between items-center ">
        <Label htmlFor="airplane-mode">Auto-save</Label>
        <Switch id="airplane-mode" className="cursor-pointer" />
      </div>
    </div>
  );
}
