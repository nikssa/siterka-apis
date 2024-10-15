export default async function safeAwait(
  promise: Promise<any>,
  errorHandler?: (error: unknown) => void
) {
  try {
    const data = await promise;
    return [null, data]; // Success: No error, return the data
  } catch (error: unknown) {
    if (errorHandler) errorHandler(error); // Optional error handler
    return [error, null]; // Error occurred, return error with null data
  }
}