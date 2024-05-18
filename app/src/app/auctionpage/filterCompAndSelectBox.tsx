import { Button, Input } from "ui";
import { SelectBoxList } from "./SelectBox";

export default function FilterCompAndSelectBox() {
  return (
    <div className="flex flex-row">
      <div className="flex items-center">
        <label for="query-filterBy" class="mr-2">
          FILTER BY
        </label>
        <div>
          <Input
            id="query-filterBy"
            type="search"
            className="border border-gray-300 px-3 py-2 rounded-md"
            placeholder="Search for an auction"
          />
          <Button className="right-0 flex items-center px-3 bg-transparent border-l border-gray-300">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <title>FILTER BY</title>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-5M12 8V3M21 20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8l4 4h2a2 2 0 0 1 2 2v12z"
              />
            </svg>
          </Button>
        </div>
      </div>
      <SelectBoxList />
    </div>
  );
}
