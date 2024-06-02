let count = 0;
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export async function mockRequest() {
  await sleep(2000);
  count++;
  return count;
}
