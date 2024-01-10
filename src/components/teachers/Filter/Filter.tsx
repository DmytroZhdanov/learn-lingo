import { FC, ReactElement, useState } from "react";
import Select, { StylesConfig } from "react-select";
import { ContainerDiv, SelectWrapperDiv, Label } from "./index";

type TFilterProps = {
  onInputLanguagesChange: (value: string) => void;
  onInputLevelChange: (value: string) => void;
  onInputPriceChange: (value: string) => void;
};

type TSelectOption = {
  value: string | null;
  label: string;
  selected?: boolean;
};

const languagesOptions: TSelectOption[] = [
  { value: null, label: "- - Any" },
  { value: "French", label: "French" },
  { value: "English", label: "English" },
  { value: "German", label: "German" },
  { value: "Ukrainian", label: "Ukrainian" },
  { value: "Polish", label: "Polish" },
  { value: "Spanish", label: "Spanish" },
];

const levelOptions: TSelectOption[] = [
  { value: null, label: "- - Any" },
  { value: "A1 Beginner", label: "A1 Beginner" },
  { value: "A2 Elementary", label: "A2 Elementary" },
  { value: "B1 Intermediate", label: "B1 Intermediate" },
  { value: "B2 Upper-Intermediate", label: "B2 Upper-Intermediate" },
  { value: "C1 Advanced", label: "C1 Advanced" },
  { value: "C2 Proficient", label: "C2 Proficient" },
];

const priceOptions: TSelectOption[] = [
  { value: null, label: "- - Any" },
  { value: "10", label: "10" },
  { value: "20", label: "20" },
  { value: "30", label: "30" },
  { value: "40", label: "40" },
  { value: "50", label: "50" },
  { value: "60", label: "60" },
];

const Filter: FC<TFilterProps> = ({
  onInputLanguagesChange,
  onInputLevelChange,
  onInputPriceChange,
}): ReactElement => {
  return (
    <ContainerDiv>
      <SelectWrapperDiv>
        <Label htmlFor="languages">Languages</Label>

        <Select
          inputId="languages"
          options={languagesOptions}
          styles={styles}
          defaultValue={languagesOptions[0]}
          onChange={(option: TSelectOption | unknown) => {
            const selectedOption = option as TSelectOption;
            onInputLanguagesChange(selectedOption.value as string);
          }}
        />
      </SelectWrapperDiv>

      <SelectWrapperDiv>
        <Label htmlFor="level">Level of knowledge</Label>

        <Select
          inputId="level"
          options={levelOptions}
          styles={styles}
          defaultValue={levelOptions[0]}
          isSearchable={false}
          onChange={(option: TSelectOption | unknown) => {
            const selectedOption = option as TSelectOption;
            onInputLevelChange(selectedOption.value as string);
          }}
        />
      </SelectWrapperDiv>

      <SelectWrapperDiv>
        <Label htmlFor="price">Price</Label>

        <Select
          inputId="price"
          options={priceOptions}
          styles={styles}
          defaultValue={priceOptions[0]}
          onChange={(option: TSelectOption | unknown) => {
            const selectedOption = option as TSelectOption;
            onInputPriceChange(selectedOption.value as string);
          }}
        />
      </SelectWrapperDiv>
    </ContainerDiv>
  );
};

const styles: StylesConfig = {
  indicatorSeparator: () => ({ display: "none" }),
  control: baseStyles => ({
    ...baseStyles,

    fontSize: "18px",
    fontWeight: 500,
    lineHeight: 20 / 18,

    padding: "6px 10px 6px 18px",

    border: "none",
    borderRadius: "14px",
    backgroundColor: "#ffffff",
  }),
  valueContainer: baseStyles => ({
    ...baseStyles,

    padding: 0,
  }),
  input: baseStyles => ({
    ...baseStyles,

    margin: 0,
    padding: 0,
  }),
  dropdownIndicator: baseStyles => ({
    ...baseStyles,
    color: "#121417",
  }),
  menu: baseStyles => ({
    ...baseStyles,

    marginTop: "4px",
    padding: "14px 18px",

    boxShadow: "none",
    borderRadius: "12px",
  }),
  menuList: (_, state) => ({
    height: state.selectProps.inputId === "languages" ? "160px" : "132px",

    marginTop: 0,
    overflowY: "auto",
  }),
  option: () => ({
    padding: "4px 0",

    color: "rgba(18, 20, 23, 0.20)",
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: 20 / 18,

    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",

    "&:hover": {
      color: "#121417",
    },
  }),
};

export default Filter;
