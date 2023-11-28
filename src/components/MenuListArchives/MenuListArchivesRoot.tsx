import { MenuListArchives } from '.';
import { SmallMenu } from '../SmallMenu';

interface MenuListArchivesProps {
  children: any;
  paste: string;
  file?: any;
  add?: any;
  download?: any;
  delete?: any;
}

export function MenuListArchivesRoot({
  children,
  paste,
  file,
}: MenuListArchivesProps) {
  return (
    <SmallMenu.Root>
      {children.length === 0
        ? children
        : children.map((item: any) => {
            switch (item.method) {
              case 'add':
                return (
                  <MenuListArchives.Add
                    key={item.id}
                    item={{ ...item, paste }}
                  />
                );
              case 'download':
                return (
                  <MenuListArchives.Download
                    key={item.id}
                    item={{ ...item, paste, file }}
                  />
                );
              case 'delete':
                return (
                  <MenuListArchives.Delete
                    key={item.id}
                    item={{ ...item, paste, file }}
                  />
                );

              default:
                break;
            }
          })}
    </SmallMenu.Root>
  );
}
