'use client';

import Button from '@/components/formElements/Button/Button';
import Image from 'next/image';
import React, { ChangeEvent, useEffect } from 'react';
// import { uploadFormAction } from '@/actions/actions';
import { deletePhoto } from '@/data-access/photo';
import usePhotoClient from '@/hooks/usePhotoClient';
import './UploadForm.scss';

import Upload from '@/app/assets/upload.svg';
import IconButton from '@/components/common/IconButton/IconButton';
import Icon from '@/app/assets/icons/Icon';
import { Icons } from '@/app/assets/icons';
import { toast } from 'react-toastify';
import safeAwait from '@/utils/safeAwait';

const UploadForm = ({ userId }: { userId: number }) => {
  const profilePhoto = usePhotoClient(userId);

  console.log('profilePhoto', profilePhoto);

  const [image, setImage] = React.useState<File | null>(null);
  const [imageUrl, setImageUrl] = React.useState(profilePhoto?.url || '');

  const [isUploaded, setIsUploaded] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  useEffect(() => {
    if (profilePhoto) {
      setImageUrl(`/${profilePhoto.url}`);
    }
  }, [profilePhoto]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files?.[0];
    console.log('image', image);

    if (e.target.files && image) {
      console.log('image.size', image.size);
      if (image.size > 1 * 5000 * 1024) {
        console.log('File with maximum size of 1MB is allowed');
        return false;
      }

      // do other operation
    }

    setImage(image as File);
    if (image) {
      const url = URL.createObjectURL(image);
      setImageUrl(url);
      // setProfileData({ ...profileData, photo: image });
    }
  };

  const uploadForm = async (formData: FormData) => {
    const userId = Number(formData.get('userId'));
    // const result = await uploadFormAction(formData);

    // const result = await fetch('http://localhost:4000/api/upload', {
    //   method: 'POST',
    //   body: formData
    // });

    // const [error, response] ?= await fetch("https://arthur.place"); // new ?= operator ES proposal
    const [error, result] = await safeAwait(
      fetch('http://localhost:4000/api/upload', {
        method: 'POST',
        body: formData
      }),
      (error) => console.error('Request failed:', error)
    );

    toast.success(`You uploaded a photo successfully. ${result.statusText}`);
    console.log('result from uploadForm', result);

    if (result.status === 200) {
      setIsUploaded(true);
    } else {
      toast.error(`${result.statusText}`);
      setIsError(true);
    }
  };

  console.log('imageUrl', imageUrl);

  return (
    <section>
      <div className='inner'>
        <div className='profile-photo'>
          <form
            action={uploadForm}
            // onSubmit={async (e: FormEvent<HTMLFormElement>) => {
            //   e.preventDefault();
            //   console.log('e', (e.target as HTMLFormElement).elements[0]);
            //   await fetch('/api/upload', {
            //     method: 'POST',
            //     body: image
            //   });
            // }}
          >
            <input
              className='hidden'
              type='text'
              id='userId'
              name='userId'
              defaultValue={userId}
            />

            <div className='profile-image'>
              {imageUrl ? (
                <>
                  <Icons.Delete
                    className='delete'
                    color='var(--field-border-color)'
                    size='24px'
                    opacity={0.8}
                    onClick={(e) => {
                      e.preventDefault();
                      setImageUrl('');
                      deletePhoto(userId);
                    }}
                  />
                  {/* <IconButton
                    type='button'
                    className='delete'
                    icon={<Icons.Delete />}
                    onClick={(e) => {
                      e.preventDefault();
                      setImageUrl('');
                      deletePhoto(userId);
                      //TODO: Delete image from db and from public/uploads folder
                    }}
                  /> */}

                  {/* <div
                    className='image__blur sitter-photo__blur'
                    style={{
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundImage: `url(${imageUrl})`,
                      width: '200px',
                      height: '200px'
                    }}></div> */}
                  <Image
                    src={imageUrl}
                    alt='Image preview of the user'
                    // width={200}
                    // height={200}
                    objectFit='cover'
                    objectPosition='center center'
                    fill={true}
                  />
                </>
              ) : (
                <Image src={Upload} alt='No image' width={200} height={200} />
              )}
            </div>

            <div className='profile-image-input'>
              <input
                id='image'
                name='image'
                type='file'
                accept='image/jpg, image/jpeg, image/png, image/gif, image/webp, image/avif'
                onChange={handleImageChange}
              />

              {!image || isUploaded || isError ? (
                <label htmlFor='image'>Select image</label>
              ) : (
                <Button
                  className='sm'
                  type='submit'
                  label='Upload image'
                  primary
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UploadForm;