import { createContext } from "react";

type CategoryContextType = {
	category: string;
	setCategory: React.Dispatch<React.SetStateAction<string>>;
};

export const CategoryContext = createContext<CategoryContextType>({
	category: "All Categories",
	setCategory: () => {},
});
