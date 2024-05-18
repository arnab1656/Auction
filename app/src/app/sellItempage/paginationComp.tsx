import { Button, Img } from "ui";

const PaginationComp = () => {
  return (
    <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
      <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
        <Button className="border border-gray-700 border-solid cursor-pointer font-semibold h-12 py-[13px] rounded-[10px] text-base text-center text-gray-900 w-12">
          1
        </Button>
        <Button className="border border-bluegray-102 border-solid cursor-pointer font-semibold h-12 py-[13px] rounded-[10px] text-base text-center text-gray-900 w-12">
          2
        </Button>
        <Button className="border border-bluegray-102 border-solid cursor-pointer font-semibold h-12 py-[13px] rounded-[10px] text-base text-center text-gray-900 w-12">
          3
        </Button>
        <Button className="border border-bluegray-102 border-solid cursor-pointer font-semibold h-12 py-[13px] rounded-[10px] text-base text-center text-gray-900 w-12">
          4
        </Button>
        <Button className="border border-bluegray-102 border-solid cursor-pointer font-semibold h-12 py-[13px] rounded-[10px] text-base text-center text-gray-900 w-12">
          5
        </Button>
      </div>
      <Button
        className="border border-bluegray-102 border-solid cursor-pointer flex items-center justify-center min-w-[134px] px-[17px] py-[13px] rounded-[10px]"
        rightIcon={
          <Img
            className="h-4 mt-px mb-[5px] ml-1"
            src="images/img_arrowright_gray_900.svg"
            alt="arrow_right"
          />
        }
      >
        <div className="font-semibold text-base text-gray-900 text-left">
          Next Page
        </div>
      </Button>
    </div>
  );
};

export default PaginationComp;
