import React, { FC } from "react";

interface TitleFormProps {
  title: string;
  subtitle: string;
}

const TitleForm: FC<TitleFormProps> = ({ title, subtitle }) => {
  return (
    <>
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-slate-400">{subtitle}</div>
    </>
  );
};
export default TitleForm;
