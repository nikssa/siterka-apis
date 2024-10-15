import safeAwait from './safeAwait';

type safeAwaitWithRetryProps = {
  promise: Promise<any>;
  errorHandler: (error: unknown) => void;
  retries?: number;
};

export default async function safeAwaitWithRetry({
  promise,
  errorHandler,
  retries = 1
}: safeAwaitWithRetryProps) {
  let attempt = 0;
  while (attempt <= retries) {
    const [error, data] = await safeAwait({ promise, errorHandler });
    if (!error) return [null, data];
    attempt++;
  }
  return [new Error('Max retries reached'), null];
}
