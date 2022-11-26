import { getGender } from "@/lib/queries/gender";
import { getFeatured } from "@/lib/queries/featured";
import { setGenders, setPlatforms } from "@/store/slices/gameShop/gameShopSlice";
import { useEffect, useState } from 'react';
import { useAppDispatch } from './redux';
import { GenderType } from '@/types/genderType';
import { FeaturedType } from '@/types/featuredType';
import { PlatformType } from "@/types/platformType";
import { getPlatform } from '../lib/queries/platform';

const useGender = () => {
    const dispatch = useAppDispatch();
    const [gender, setGender] = useState<GenderType[]>()
    const [Platform, setPlatform] = useState<PlatformType[]>()
    const [featured, setFeatured] = useState<FeaturedType[]>()
  
    
    useEffect(()=>{
      
      (async () => {
        const data = await Promise.all([getGender(), getPlatform(), getFeatured()]);
  
        const genders = data[0].map((gender) => gender.slug);
        dispatch(setGenders(genders as string[]));
        dispatch(setPlatforms(data[1]))
        
        setGender(data[0])
        setPlatform(data[1])
        setFeatured(data[2])  
      })();
  
      
    },[])
  return {
    gender,
    featured
  }
}

export default useGender;