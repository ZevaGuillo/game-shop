import { useAppSelector } from "@/hooks/redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect } from 'react';

const CatalogPage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const {genders} = useAppSelector( state => state.gameShop );
    let catalog = params.gender? params.gender: 'All' 
    
    useEffect(()=>{
      
    })

  return (
    <div>CatalogPage {catalog}</div>
  )
}

export default CatalogPage