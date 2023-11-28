import { usePaths } from '../../hooks/usePaths';
import { useId } from 'react';
import {
  StyledBreadcrumbs,
  StyledCurrentRoute,
  StyledPreviousRoute,
} from './Breadcrumbs.style';

export default function Breadcrumbs() {
  const { previous, current } = usePaths();
  const key = useId();

  return (
    <StyledBreadcrumbs aria-label="breadcrumb" separator={'•'}>
      <StyledPreviousRoute key={key} to={'/dashboard'}>
        Dashboard
      </StyledPreviousRoute>
      {previous &&
        previous?.map((value) => {
          return (
            <StyledPreviousRoute key={key} to={`${value.path}`}>
              {value.name}
            </StyledPreviousRoute>
          );
        })}
      {current && <StyledCurrentRoute>{current.name}</StyledCurrentRoute>}
    </StyledBreadcrumbs>
  );
}
