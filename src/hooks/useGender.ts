import { getGender } from "@/lib/queries/gender";
import { getFeatured } from "@/lib/queries/featured";
import { setGenders } from "@/store/slices/gameShop/gameShopSlice";
import { useEffect, useState } from 'react';
import { useAppDispatch } from './redux';
import { GenderType } from '@/types/genderType';
import { FeaturedType } from '@/types/featuredType';

const useGender = () => {
    const dispatch = useAppDispatch();
    const [gender, setGender] = useState<GenderType[]>()
    const [featured, setFeatured] = useState<FeaturedType[]>()
  
    
    useEffect(()=>{
      
      (async () => {
        const data = await Promise.all([getGender(), getFeatured()]);
  
        const genders = data[0].map((gender) => gender.slug);
        dispatch(setGenders(genders as string[]));
        
        setGender(data[0])
        setFeatured(data[1])  
      })();
  
      
    },[])
  return {
    gender,
    featured
  }
}

export default useGender;