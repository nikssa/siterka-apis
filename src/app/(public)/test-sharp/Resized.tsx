'use client';

import Image from 'next/image';
import { resizeImageAction } from './resizeImageAction';
import { ChangeEvent, useState } from 'react';
import { on } from 'events';

const Resized = () => {
  //   const resizedImage = await sharp(sourceImage).resize(300, 200).toBuffer();
  //   console.log('resizedImage: ', resizedImage);

  const [url, setUrl] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [buffer, setBuffer] = useState<ArrayBuffer | null>(null);
  const [name, setName] = useState('');

  const [image200x200, setImage200x200] = useState<File | null>(null);

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    console.log('onChange');
    const image = e.target.files?.[0];
    console.log('image', image);
    const url = image ? URL.createObjectURL(image) : '';
    setUrl(url);
    setFile(image!);
    const buffer = Buffer.from(await image!.arrayBuffer());
    console.log('buffer', buffer);
    setBuffer(buffer);
    setName(image!.name);
  };

  const onClick = async () => {
    console.log('onClick');
    const { error, result } = await resizeImageAction(name);
    console.log(error, result);
  };

  console.log('buffer', buffer);

  return (
    <>
      <input type='file' accept='image/*' onChange={onChange} />
      {url && <Image src={url} alt='image' width={200} height={200} />}

      <button onClick={onClick}>Optimize image</button>
    </>
  );
};

export default Resized;
