/**
 * Generates a dynamic ID based on the current timestamp and a random number.
 * @returns {string} A unique dynamic ID.
 */
export default function generateDynamicId() {
  const timestamp = new Date().getTime();
  const randomNum = Math.floor(Math.random() * 1000); // generates a random number between 0 and 999
  return `dynamicId_${timestamp}_${randomNum}`;
}
