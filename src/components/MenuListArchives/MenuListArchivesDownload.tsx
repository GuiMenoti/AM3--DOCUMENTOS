import { MenuListType } from '../../pages/Archives/configs';
import { useAgricultorDownloadFile } from '../../queries/Agricultor/useAgricultorDownloadFile';
import { SmallMenu } from '../SmallMenu';

interface Item extends MenuListType {
  paste: string;
  file: any;
}

interface MenuListArchives {
  item: Item;
}
export function MenuListArchivesDownload({ item }: MenuListArchives) {
  const { mutate } = useAgricultorDownloadFile();

  return (
    <>
      <SmallMenu.MenuItem
        key={item.id}
        onClick={() => {
          mutate(item.file.id);
        }}
      >
        <>
          {item.icon}
          {item.message}
        </>
      </SmallMenu.MenuItem>
    </>
  );
}
