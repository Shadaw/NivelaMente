import { UseFormRegister } from 'react-hook-form';
import { Container } from './styles';

import { FormProps } from 'screens/Course';
import { useCallback, useState } from 'react';

type ImageUploadProps = {
  register: UseFormRegister<FormProps>;
  value?: string;
};

export const ImageUpload = ({ register, value = '' }: ImageUploadProps) => {
  const [previewImage, setPreviewImage] = useState(value);

  const handleChangeImagePreview = useCallback((image: File[]) => {
    const selectedImage = Array.from(image);

    if (selectedImage) {
      setPreviewImage(URL.createObjectURL(selectedImage[0]));
    }

    return true;
  }, []);

  return (
    <Container>
      {!previewImage ? (
        'Selecione sua imagem'
      ) : (
        <div>
          <img src={previewImage}></img>
          <p>Clique para selecionar outra imagem</p>
        </div>
      )}
      <input
        aria-hidden="true"
        type="file"
        accept="image/*"
        {...register('image', {
          required: true,
          validate: handleChangeImagePreview,
        })}
      />
    </Container>
  );
};
