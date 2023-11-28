import {
  CircularProgress,
  CssBaseline,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';
import { v4 } from 'uuid';
import { config } from '.';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { FileManager } from '../../components/FileManager';
import { MenuListArchives } from '../../components/MenuListArchives';
import { useAgricultorGetListFiles } from '../../queries/Agricultor/useAgricultorGetListFiles';

export default function AgricultorArchivesView() {
  const theme: ThemeOptions = useTheme();
  const { data, isLoading, isFetching } = useAgricultorGetListFiles();

  return (
    <>
      <Grid
        container
        flexDirection={'column'}
        alignItems={'center'}
        m={'40px 0'}
        p={'0 5vw'}
        sx={{ minWidth: '0' }}
      >
        <CssBaseline />
        <Grid
          container
          justifyContent={'space-between'}
          flexDirection={'row'}
          width={'100%'}
          m={'0 0 50px 0'}
          sx={{
            '@media (max-width: 700px)': {
              flexDirection: 'column !important',
              margin: '0 0 10px 0',
            },
          }}
        >
          <Grid>
            <Typography
              p={'10px 0'}
              variant={'h5'}
              color={theme.palette.text.h1}
            >
              Arquivos - Agricultor
            </Typography>
            <Breadcrumbs />
          </Grid>
        </Grid>
        <Grid container flexDirection={'row'} justifyContent={'center'}>
          {(isLoading || isFetching) && <CircularProgress />}
          {!isLoading && !isFetching && (
            <FileManager.Root>
              <FileManager.Table>
                <FileManager.TableHead>{config.headCell}</FileManager.TableHead>
                <FileManager.TableBody>
                  {Object.keys(data).map((cell) => {
                    const id = v4();
                    return (
                      <FileManager.TableRow
                        key={id}
                        id={id}
                        nome={cell}
                        endCell={
                          <MenuListArchives.Root paste={cell}>
                            {config.menuPaste}
                          </MenuListArchives.Root>
                        }
                        colapse
                      >
                        <FileManager.Colapse nome={id}>
                          <FileManager.List>
                            {/* @ts-ignore */}
                            {data[cell]?.map((file: any) => {
                              return (
                                <FileManager.ListItem
                                  key={file.id}
                                  primaryText={file.name}
                                  endIcon={
                                    <MenuListArchives.Root
                                      paste={cell}
                                      file={file}
                                    >
                                      {config.menuArchive}
                                    </MenuListArchives.Root>
                                  }
                                />
                              );
                            })}
                          </FileManager.List>
                        </FileManager.Colapse>
                      </FileManager.TableRow>
                    );
                  })}
                </FileManager.TableBody>
              </FileManager.Table>
            </FileManager.Root>
          )}
        </Grid>
      </Grid>
    </>
  );
}
