import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useState } from "react";


const useFilter = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let { g: genderQuery = "" } = queryString.parse(location.search);
    const initialGenders = (genderQuery)?(genderQuery as string).split(','):[]
    

    const [price, setPrice] = useState<number[]>([20, 37]);
    const [genders, setGenders] = useState<string[]>(initialGenders);


    const filterOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (genders?.includes(event.target.name)) {

            setGenders( genders.filter(g => g !== event.target.name) )
            return;
        }
        setGenders(!!genders ? [...genders, event.target.name]: [event.target.name]);
    };

    // slider --------------------------------------------------------------------------------
    const onClickFilter = () => {

        navigate(
            `/catalog/?${genders.length > 0? `g=${genders}&` : ""}min=${price[0]}&max${price[1]}`
        );
    }

    return {
        price,
        setPrice,
        filterGenders: genders,
        filterOnChange,
        onClickFilter
    }
}

export default useFilter