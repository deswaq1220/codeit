'use client'

import Edit from '@/public/icons/edit.svg'
import plusG from '@/public/icons/plusG.svg'
import imageIcon from '@/public/images/img.svg'
import axios from 'axios'
import Image from "next/image"
import { useRef, useState } from 'react'
import { addImageBtn, imageContainer, images, modifyImageBtn } from './imageRegistration.css'
const tenantId = "sexydynamite";

interface ImageRegistrationProps {
  imageUrl: string;
}

const ImageRegistration = ({ imageUrl }: ImageRegistrationProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);



  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);

      // 파일 미리보기 URL 생성
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
    console.log(file)
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await axios.post(`https://assignment-todolist-api.vercel.app/api/${tenantId}/images/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('업로드 성공:', response.data);

    } catch (error) {
      console.error('업로드 실패:', error);
    }
  };


  return (
    <>
      {imageUrl ? (
        <div className={images}>
          <img src={imageUrl} alt="이미지" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }} />
          <button
            className={modifyImageBtn}
          >
            <Image src={Edit} alt='추가 아이콘' />
          </button>
        </div>

      ) : (

        <div className={imageContainer}>
          {!previewUrl && (
            <Image src={imageIcon} alt="사진아이콘" />
          )}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <button
            className={addImageBtn}
            onClick={() => fileInputRef.current?.click()}
          >
            <Image src={plusG} alt='플러스 아이콘' />
          </button>
          {previewUrl && (
            <div style={{ width: '100%', height: '100%' }}>
              <img src={previewUrl} alt="미리보기" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }} />
            </div>
          )}
          {selectedFile && (
            <button onClick={handleUpload} className={addImageBtn}>
              <Image src={plusG} alt='플러스 아이콘' />
            </button>
          )}
        </div>

      )}
    </>

  )
}

export default ImageRegistration
