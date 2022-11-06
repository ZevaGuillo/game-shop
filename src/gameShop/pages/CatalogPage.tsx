import { useParams } from "react-router-dom";

const CatalogPage = () => {
    const params = useParams();
    let catalog = params.gender? params.gender: 'All' 
    
    
  return (
    <div>CatalogPage {catalog}</div>
  )
}

export default CatalogPage