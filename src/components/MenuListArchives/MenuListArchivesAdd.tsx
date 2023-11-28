import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { MenuListType } from '../../pages/Archives/configs';
import { useAgricultorPostFile } from '../../queries/Agricultor/useAgricultorPostFile';
import { convertFileToBase64 } from '../../utils/convertFileToBase64';
import { SmallMenu } from '../SmallMenu';

interface Item extends MenuListType {
  paste: string;
}

interface MenuListArchives {
  item: Item;
}

export function MenuListArchivesAdd({ item }: MenuListArchives) {
  const { mutate, isLoading } = useAgricultorPostFile();
  const { id } = useParams();
  const replaceId = id?.replace(':', '') as string;
  const refInput: any = useRef(null);
  const paste = item.paste.replace('anexos', '').toUpperCase();

  return (
    <SmallMenu.MenuItem
      key={item.id}
      onClick={() => {
        refInput.current.click();
      }}
    >
      <>
        {item.icon}
        {item.message}
        <input
          type="file"
          name={item.id}
          id={item.id}
          ref={refInput}
          onChange={async (e: any) => {
            const selectedFile = e.target.files[0];
            if (selectedFile && replaceId) {
              mutate({
                idAgricultor: replaceId,
                tipoArquivo: paste,
                name: selectedFile.name,
                file: await convertFileToBase64(selectedFile),
              });
            }
          }}
          accept="application/pdf, image/jpeg, image/jpg, image/png"
          hidden
        />
      </>
    </SmallMenu.MenuItem>
  );
}
