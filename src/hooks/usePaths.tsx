import { useLocation } from 'react-router-dom';

export const usePaths = () => {
  const location = useLocation();

  const arrayPath = location.pathname
    .split('/')
    .filter((value) => value !== '');

  const arrayName = arrayPath.map(
    (path) => path.charAt(0).toUpperCase().replace(':', '') + path.slice(1)
  );

  const all = arrayPath.map((path, i) => {
    const previousPaths = arrayPath.slice(0, i); // Obter as paths anteriores
    const fullPath = previousPaths.concat(path).join('/'); // Juntar as paths anteriores com a path atual

    return {
      path: `/${fullPath}`,
      name: arrayName[i],
    };
  });

  all.shift();

  const previous = all.slice(0, all.length - 1);

  const currentPath = all[all.length - 1];

  return {
    previous: previous,
    current: currentPath,
    all: all,
  };
};
