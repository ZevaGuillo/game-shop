import styled from 'styled-components';
import Slidershow from '../components/Slidershow';


const GameShopPage = () => {
  return (
    <StyledGameShop className='container'>
      <section>
        <Slidershow/>
      </section>
    </StyledGameShop>
  )
}

const StyledGameShop = styled.main.attrs((props) => ({
  className: props.className,
}))`

`

export default GameShopPage