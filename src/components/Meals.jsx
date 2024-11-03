import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "../components/Error";

const requestConfig = {};

export const getServerUrl = () => {
    return 'http://localhost:3000';
};

export default function Meals() {

    const url = getServerUrl();
    
    const { data: loadedMeals, isLoading, error, } = useHttp(`https://foodorderapp-g805.onrender.com/meals`, requestConfig, []);

    if (isLoading) {
        return <p className="center">Fetching meals...</p>;
    }

    if (error) {
        return <Error title="Failed to fetch meals" message={error} />;
    }

    return (
        <ul id="meals">
            {loadedMeals.map((meal) => (
                <MealItem key={meal.id} meal={meal} />
            ))}
        </ul> 
    )
}