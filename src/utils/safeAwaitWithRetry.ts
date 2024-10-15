import safeAwait from './safeAwait';

export default async function safeAwaitWithRetry(
  promise: Promise<any>,
  errorHandler: (error: unknown) => void,
  retries = 1
) {
  let attempt = 0;
  while (attempt <= retries) {
    const [error, data] = await safeAwait(promise, errorHandler);
    if (!error) return [null, data];
    attempt++;
  }
  return [new Error('Max retries reached'), null];
}
