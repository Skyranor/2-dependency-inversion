import { ReactNode } from "react";


type Props = {
  title: string;
  actions: ReactNode
}
export const TaskItem = ({
  title,
  actions
}: Props) => {
  return (
    <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
      {actions}
      <div>{title}</div>
    </div>
  );
};



