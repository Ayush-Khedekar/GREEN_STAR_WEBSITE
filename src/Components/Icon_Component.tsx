import React, { type ReactNode } from "react";


export interface NewCard {
  Icons: ReactNode;
  Title: string;
  Description: string;
}

const Icon_Component = ({ CardProp }: { CardProp: NewCard }) => {
  return (
    <div className="flex gap-4">
      <div className=" w-13 h-12 border-2 border-green-300 rounded-full flex items-center justify-center text-green-500 text-xl hover:bg-green-500 hover:text-white">
        {CardProp.Icons}
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900">{CardProp.Title  }</h3>
        <p className="text-gray-600">{CardProp.Description}</p>
      </div>

    </div>
  );
};

export default Icon_Component;
