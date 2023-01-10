import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useState } from "react";


const useFilter = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let { g: genderQuery = "", p: platformQuery } = queryString.parse(location.search);
    const initialGenders = (genderQuery) ? (genderQuery as string).split(',') : []
    const initialPlatforms = (platformQuery) ? (platformQuery as string).split(',') : []


    const [price, setPrice] = useState<number[]>([20, 37]);
    const [genders, setGenders] = useState<string[]>(initialGenders);
    const [platforms, setPlatforms] = useState<string[]>(initialPlatforms);


    const filterOnChangeGenders = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (genders?.includes(event.target.name)) {

            setGenders(genders.filter(g => g !== event.target.name))
            return;
        }
        setGenders(!!genders ? [...genders, event.target.name] : [event.target.name]);
    };

    const filterOnChangePlatforms = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (platforms?.includes(event.target.name)) {

            setPlatforms(platforms.filter(g => g !== event.target.name))
            return;
        }
        setPlatforms(!!platforms ? [...platforms, event.target.name] : [event.target.name]);
    };

    // slider --------------------------------------------------------------------------------
    const onClickFilter = () => {

        navigate(
            `/catalog/?${genders.length > 0 ? `g=${genders}&` : ""}${platforms.length > 0 ? `p=${platforms}&` : ""}min=${price[0]}&max${price[1]}`
        );
    }

    return {
        price,
        setPrice,
        filterGenders: genders,
        filterPlatforms: platforms,
        gendersChange: filterOnChangeGenders,
        platformsChange: filterOnChangePlatforms,
        onClickFilter
    }
}

export default useFilter