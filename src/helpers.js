import { toast } from "react-toastify";

export const errorsMessage = (error) => {
    if (error) {
        toast.info(error.message);
    }
}