import { Outlet } from 'react-router-dom';
import AppBar from '../../components/Appbar/Appbar';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { ModalMessage } from '../../components/ModalMessage/ModalMessage';

export function Dashboard(): JSX.Element {
  return (
    <>
      <AppBar />
      <Sidebar>
        <Outlet />
      </Sidebar>
      <ModalMessage />
    </>
  );
}
