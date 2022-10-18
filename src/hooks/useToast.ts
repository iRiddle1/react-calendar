import { toast } from "react-toastify";

export interface IToastSettings {
  text: string;
  type: "info" | "success" | "warning" | "error" | "default";
}

export const useToast = () => {
  const notify = ({ text, type }: IToastSettings) => {
    switch (type) {
      case "info":
        return toast.info(text);
      case "success":
        return toast.success(text);
      case "warning":
        return toast.warning(text);
      case "error":
        return toast.error(text);
      case "default":
        return toast(text);
      default:
        return toast(text);
    }
  };

  return {
    notify,
  };
};
