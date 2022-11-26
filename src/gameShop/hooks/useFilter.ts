import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useState } from "react";


const useFilter = () => {
    const [price, setPrice] = useState<number[]>([20, 37]);
    const location = useLocation();
    const navigate = useNavigate();

    let { g: genderFilter = "" } = queryString.parse(location.search);

    const filterOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (genderFilter?.includes(event.target.name)) {
            console.log(genderFilter, "sidebar");

            genderFilter = (genderFilter as string)
                .replace(" " + event.target.name, "")
                .replace(event.target.name, "");
            genderFilter = (genderFilter as string).trim();
            navigate(`/catalog/${genderFilter ? `?g=${genderFilter}` : ""}`);
            return;
        }

        navigate(
            `/catalog/?g=${!!genderFilter ? `${genderFilter}%20` : ""}${event.target.name}`
        );
    };

    // slider --------------------------------------------------------------------------------
    const onClickFilter = () => {
        navigate(
            `/catalog/?${!!genderFilter ? `g=${genderFilter}&` : ""}min=${price[0]}&max${price[1]}`
        );
    }

    return {
        price,
        setPrice,
        genderFilter,
        filterOnChange,
        onClickFilter
    }
}

export default useFilter