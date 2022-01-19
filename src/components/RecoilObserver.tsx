import { useEffect } from "react";
import { useRecoilValue } from "recoil";

export const RecoilObserver = ({ node, onClick }: any) => {
  const value = useRecoilValue(node);

  useEffect(() => {
    //console.debug(value);
    onClick(value);
  }, [onClick, value]);

  return null;
};
