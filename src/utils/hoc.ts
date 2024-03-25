import { useDispatch } from "react-redux";
import { AppDispatch } from "../services/reducers/rootReducer";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
