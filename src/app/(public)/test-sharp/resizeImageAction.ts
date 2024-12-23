'use server';

import x from '@/app/assets/1728953084901_me.jpeg';
import fs from 'fs/promises';

const sharp = require('sharp');

export async function resizeImageAction(name: string) {
  console.log('resizeImageAction name', name);

  let error;
  let result;

  //   const file = await import('/public/uploads/1728953084901_me.jpeg');
  //   const buffer = Buffer.from(await file.default.arrayBuffer());

  const buffer = await fetch(
    'http://localhost:4000/uploads/1728953084901_me.jpeg'
  )
    .then((res) => res.arrayBuffer())
    .then((buffer) => {
      console.log('buffer', buffer);
      return buffer;
    });

  console.log('buffer', buffer);

  await sharp(buffer)
    .resize(200, 200)
    .toFile(`./public/uploads/1728953084901_me_output.jpeg`)
    .then((res: File) => {
      console.log('image resized', res);
      result = res;
    })
    .catch((err: Error) => {
      console.error(err);
      error = err;
    });

  return {
    error: `Optimization failed: ${error}`,
    result
  };
}
