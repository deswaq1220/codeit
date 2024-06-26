import plusG from '@/public/icons/plusG.svg'
import imageIcon from '@/public/images/img.svg'
import Image from "next/image"
import { addImageBtn, imageContainer } from './imageRegistration.css'
const ImageRegistration = () => {
  return (
    <div className={imageContainer}>
      <Image src={imageIcon} alt="사진아이콘" />
      <button className={addImageBtn}>
        <Image src={plusG} alt='플러스 아이콘' />
      </button>
    </div>
  )
}

export default ImageRegistration