import { useWindowDimension } from "hooks/useWindowDimension";

export function useTratamentData() {
  const [width, height] = useWindowDimension();

  function tratament(data) {
    if (typeof data === "string") {
      data = data?.charAt(0).toUpperCase() + data?.slice(1);
    }
    if (width >= 1200) {
      if (data?.length >= 16) {
        const value = `${data?.slice(0, 13).trim()}...`;
        return value;
      } else {
        return data;
      }
    }
    if (width > 945 || width === "") {
      if (data?.length >= 11) {
        const value = `${data?.slice(0, 9).trim()}...`;
        return value;
      } else {
        return data;
      }
    }
    if (width <= 945) {
      if (data?.length > 6) {
        const value = `${data?.slice(0, 6).trim()}...`;
        return value;
      } else {
        return data;
      }
    }
  }
  return { tratament };
}
