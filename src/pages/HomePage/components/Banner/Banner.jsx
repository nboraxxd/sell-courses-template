import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

import { PATH } from '@/contants/path'
import banner1 from '@/assets/images/banner1.jpg'
import banner2 from '@/assets/images/banner2.jpg'
import banner3 from '@/assets/images/banner3.jpg'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Banner() {
  const sliderRef = useRef()
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <section
      className="cursor-grab"
      ref={sliderRef}
      onMouseDown={() => (sliderRef.current.style.cursor = 'grabbing')}
      onMouseUp={() => sliderRef.current.removeAttribute('style')}
    >
      <Slider {...settings} className="flex">
        <div className="relative h-64 w-full shrink-0 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-black/70 before:content-[''] sm:h-72 md:h-[42.5rem]">
          <div className="container flex h-full items-center justify-center capitalize">
            <div className="relative z-20 text-center">
              <h2 className="max-w-5xl text-center text-3xl font-bold !leading-normal text-white md:text-5xl">
                <span className="block text-primary">Học Tập</span>
                <span className="block">Không Giới Hạn</span>
              </h2>
              <Link
                className="mt-5 inline-block rounded-full bg-primary px-6 py-2 font-semibold text-white md:mt-10 md:px-8 md:py-3"
                to={PATH.home}
              >
                KHOÁ HỌC
              </Link>
            </div>
          </div>
          <img src={banner1} alt="" className="absolute left-0 top-0 h-full w-full object-cover" />
        </div>

        <div className="relative h-64 w-full shrink-0 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-black/70 before:content-[''] sm:h-72 md:h-[42.5rem]">
          <div className="container flex h-full items-center justify-center capitalize">
            <div className="relative z-20 text-center">
              <h2 className="max-w-5xl text-center text-3xl font-bold !leading-normal text-white md:text-5xl">
                <span className="block text-primary">Kiến Thức</span>
                <span className="block">Giúp Bạn Đi Xa</span>
              </h2>
              <Link
                className="mt-5 inline-block rounded-full bg-primary px-6 py-2 font-semibold text-white md:mt-10 md:px-8 md:py-3"
                to={PATH.home}
              >
                KHOÁ HỌC
              </Link>
            </div>
          </div>
          <img src={banner2} alt="" className="absolute left-0 top-0 h-full w-full object-cover" />
        </div>

        <div className="relative h-64 w-full shrink-0 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-black/70 before:content-[''] sm:h-72 md:h-[42.5rem]">
          <div className="container flex h-full items-center justify-center capitalize">
            <div className="relative z-20 text-center">
              <h2 className="max-w-5xl text-center text-3xl font-bold !leading-normal text-white md:text-5xl">
                <span className="block text-primary">Chuyên Nghiệp</span>
                <span className="block">Làm Bạn Khác Biệt</span>
              </h2>
              <Link
                className="mt-5 inline-block rounded-full bg-primary px-6 py-2 font-semibold text-white md:mt-10 md:px-8 md:py-3"
                to={PATH.home}
              >
                KHOÁ HỌC
              </Link>
            </div>
          </div>
          <img src={banner3} alt="" className="absolute left-0 top-0 h-full w-full object-cover" />
        </div>
      </Slider>
    </section>
  )
}
