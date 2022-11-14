import { getFeatured } from '@/lib/queries/featured';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import Slidershow from '../components/Slidershow';
import { FeaturedType } from '@/types/featuredType';


const GameShopPage = () => {

  const { isLoading , error, data:featured } = useQuery({ queryKey: ['featured'], queryFn: getFeatured })

  if(isLoading) return<></>;

  if(error) return<h2>Error</h2>;

  return (
    <StyledGameShop className='container'>
      <section>
        <Slidershow featured={featured as FeaturedType[]}/>
      </section>
    </StyledGameShop>
  )
}

const StyledGameShop = styled.main.attrs((props) => ({
  className: props.className,
}))`

`

export default GameShopPage