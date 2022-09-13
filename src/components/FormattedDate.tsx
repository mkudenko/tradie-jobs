import React from "react";
import dayjs from "dayjs";

export const FormattedDate: React.FC<{
  date: Date;
  useShortFormat?: boolean;
  className?: string;
}> = ({ date, useShortFormat, className }) => {
  const dateFormat = useShortFormat ? "YYYY-MM-DD" : "YYYY-MM-DD HH:mm:ss";
  return <span className={`${className}`}>{dayjs(date).format(dateFormat)}</span>;
};
