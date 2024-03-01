// base
import React from 'react'

// @mui
import { Typography, Button, styled, alpha, Box } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import ImgCpt from './image'

interface ICarouselItems {
  carouselItems: any[]
  hgt: number | string
}

const TitleBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translateX(-50%)',
  maxWidth: '80%',
  padding: '3rem',
  textAlign: 'justify',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  borderRadius: '5%',
  marginLeft: '2rem',
  background: alpha(theme.palette.primary.dark, 0.6),
  color: theme.palette.primary.light,
  zIndex: theme.zIndex.fab,
}))

const CarouselCpt = ({ carouselItems, hgt }: ICarouselItems) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      modules={[Autoplay, Pagination]}
      style={{
        clipPath: ' ellipse(99% 54% at 50% 44%)',
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="mySwiper"
    >
      {carouselItems.map(item => (
        <SwiperSlide style={{ position: 'relative' }} key={item.id}>
          {item.title && item.description && item.href ? (
            <>
              <ImgCpt src={item.src} alt={item.alt} hgt={hgt} />
              <TitleBox>
                <Typography variant="h4" color={theme => theme.palette.primary.main}>
                  {item.title}
                </Typography>
                <Typography variant="subtitle2">{item.description}</Typography>
                <Button variant="contained" href={item.href}>
                  Book Now
                </Button>
              </TitleBox>
            </>
          ) : item.src ? (
            <>
              <ImgCpt src={item.src} alt={item.alt} hgt={hgt} />
              <Typography
                sx={{
                  position: 'absolute',
                  top: ' 50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                variant="h4"
                color={theme => theme.palette.primary.main}
              >
                {item.title}
              </Typography>
            </>
          ) : (
            <Typography>{item.description}</Typography>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CarouselCpt
