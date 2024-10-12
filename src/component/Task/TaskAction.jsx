/* eslint-disable react/prop-types */
import Button from "../Buttons/Button";
export default function TaskAction({ onAddClick, onDeleteAllClick }) {
  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        <Button
          onSmash={onAddClick}
          text="Add Task"
          style="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
        />
        <Button
          onSmash={onDeleteAllClick}
          text="Delete All"
          style="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
        />
      </div>
    </div>
  );
}
