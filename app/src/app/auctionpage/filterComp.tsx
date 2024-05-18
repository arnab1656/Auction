import { Button, Img, Input, SelectBox } from "ui";

const dropdownlargeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const priceOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const dropdownlargeOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const FilterComp = () => {
  return (
    <div className="flex flex-col gap-3 items-start justify-between w-full">
      {/* all filter components */}
      <div className="flex flex-row items-center w-full gap-2.5">
        <Input
          name="frame1000001565"
          placeholder="Enter your address"
          className="font-semibold p-0 placeholder:text-gray-700 text-gray-700 text-left text-lg w-[2/4]"
          wrapClassName="flex pt-1 w-auto sm:w-full"
          suffix={
            <Img
              className="mt-auto mb-[3px] h-6 ml-3"
              src="images/img_search_gray_700.svg"
              alt="search"
            />
          }
        ></Input>
        <SelectBox
          className="bg-white-A700 border border-bluegray-100 border-solid font-bold pb-3.5 pt-[18px] px-4 rounded-[10px] text-gray-700 text-left text-lg w-[1/4]"
          placeholderClassName="text-gray-700"
          indicator={
            <Img
              className="h-6 w-6"
              src="images/img_arrowdown_gray_700.svg"
              alt="arrow_down"
            />
          }
          isMulti={false}
          name="dropdownlarge"
          options={dropdownlargeOptionsList}
          isSearchable={false}
          placeholder="Category"
        />

        <SelectBox
          className="bg-white-A700 border border-bluegray-100 border-solid md:flex-1 font-bold px-4 py-[17px] rounded-[10px] text-gray-700 text-left text-lg w-[350px] md:w-full"
          placeholderClassName="text-gray-700"
          indicator={
            <Img
              className="h-6 w-6"
              src="images/img_arrowdown_gray_700.svg"
              alt="arrow_down"
            />
          }
          isMulti={false}
          name="price"
          options={priceOptionsList}
          isSearchable={false}
          placeholder="Month"
        />
        <SelectBox
          className="bg-white-A700 border border-bluegray-100 border-solid md:flex-1 font-bold px-4 py-[17px] rounded-[10px] text-gray-700 text-left text-lg w-[] md:w-full"
          placeholderClassName="text-gray-700"
          indicator={
            <Img
              className="h-6 w-6"
              src="images/img_arrowdown_gray_700.svg"
              alt="arrow_down"
            />
          }
          isMulti={false}
          name="dropdownlarge_One"
          options={dropdownlargeOneOptionsList}
          isSearchable={false}
          placeholder="Bed - 3"
        />
        <Button
          className="bg-white-A700 border border-bluegray-100 border-solid cursor-pointer flex items-center justify-center min-w-[113px] px-[15px] py-[17px] rounded-[10px]"
          rightIcon={
            <Img
              className="h-6 mb-px ml-3"
              src="images/img_plus_gray_700.svg"
              alt="plus"
            />
          }
        >
          <div className="font-bold text-gray-700 text-left text-lg">More</div>
        </Button>
      </div>

      <div className="flex flex-row flex-wrap gap-2.5 items-start justify-start max-w-[1200px] w-full">
        <Button
          className="border border-bluegray-101 border-solid cursor-pointer flex items-center justify-center px-[13px] py-2 rounded-[10px] w-[145px]"
          rightIcon={
            <Img
              className="h-4 mt-0.5 mb-px ml-2"
              src="images/img_close.svg"
              alt="close"
            />
          }
        >
          <div className="font-semibold text-gray-700 text-left text-sm">
            Bathrooms 2+
          </div>
        </Button>
        <Button
          className="border border-bluegray-101 border-solid cursor-pointer flex items-center justify-center min-w-[243px] px-[13px] py-2 rounded-[10px]"
          rightIcon={
            <Img
              className="h-4 mt-px mb-[3px] ml-2"
              src="images/img_close.svg"
              alt="close"
            />
          }
        >
          <div className="font-semibold text-gray-700 text-left text-sm">
            Square Feet 750 - 2000 sq. ft
          </div>
        </Button>
        <Button
          className="border border-bluegray-101 border-solid cursor-pointer flex items-center justify-center min-w-[151px] px-[13px] py-2 rounded-[10px]"
          rightIcon={
            <Img
              className="h-4 mt-0.5 mb-px ml-2"
              src="images/img_close.svg"
              alt="close"
            />
          }
        >
          <div className="font-semibold text-gray-700 text-left text-sm">
            Year Built 5 - 15
          </div>
        </Button>
        <Button
          className="border border-bluegray-101 border-solid cursor-pointer flex items-center justify-center min-w-[168px] px-[13px] py-2 rounded-[10px]"
          rightIcon={
            <Img
              className="h-4 mt-px mb-[3px] ml-2"
              src="images/img_close.svg"
              alt="close"
            />
          }
        >
          <div className="font-semibold text-gray-900 text-left text-sm">
            For Sale By Agent
          </div>
        </Button>
        <Button
          className="border border-bluegray-101 border-solid cursor-pointer flex items-center justify-center min-w-[174px] px-[13px] py-2 rounded-[10px]"
          rightIcon={
            <Img
              className="h-4 mt-0.5 mb-px ml-2"
              src="images/img_close.svg"
              alt="close"
            />
          }
        >
          <div className="font-semibold text-gray-900 text-left text-sm">
            New Construction
          </div>
        </Button>
      </div>
    </div>
  );
};

export default FilterComp;
