import { ReactNode } from "react";

type Props = {
  children: React.ReactNode;
  options: { label: string | ReactNode, onClick?: ()=>void }[];
};

const Dropdown = ({ children, options }: Props) => {
  return (
    <div className="relative hover:underline">
      <input type="checkbox" id="dropdown-toggle" className="peer hidden" />
      <label
        htmlFor="dropdown-toggle"
        className="bg-white-300 cursor-pointer text-gray-900 flex items-center justify-center"
      >
        {children}
      </label>
      <div className="invisible absolute top-8 z-50 w-24 bg-white opacity-0 shadow-lg transition-opacity duration-300 peer-checked:visible peer-checked:opacity-100">
        <ul className="text-gray-900">
          {options.map((option,index) => (
            <li
              key={index}
              onClick={option?.onClick}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
