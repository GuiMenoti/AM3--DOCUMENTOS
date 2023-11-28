import { usePaths } from '../hooks/usePaths';

export function currentPathVerify(data: any, name?: string) {
  const adapterData = data.replace('.', '');
  const adapterName = name?.replace('.', '');
  const { all } = usePaths();
  let state = false;

  console.log(all);
  console.log(adapterData + adapterName);

  for (let i = 0; i < all.length; i++) {
    if (name) {
      if (all[i].path === adapterName) {
        if (all[i].path === adapterData) {
          return (state = true);
        }
      }
    } else {
      if (all[i].path === adapterData) {
        return (state = true);
      }
    }
  }
  return state;
}
