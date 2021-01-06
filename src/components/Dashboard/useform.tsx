import { useSelector } from "react-redux";


const useForm = () => {

    const { user: currentUser } = useSelector((state) => state.auth);

    return {
        currentUser,
    }
};

export default useForm;









