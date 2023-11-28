import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  Typography,
  useTheme,
} from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';
import { useOpenAccordion } from '../../store/useOpenAccordion';

type AccordionListProps = {
  id: string;
  title?: string;
  dataTexts?: string[];
};

export function AccordionList({
  id = '',
  title = '',
  dataTexts = [],
}: AccordionListProps) {
  const theme: ThemeOptions = useTheme();
  const { menu, open } = useOpenAccordion();

  return (
    <Accordion
      expanded={menu === id}
      onChange={() => open(id)}
      sx={{ backgroundColor: theme.palette.color.paper, width: '100%' }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon style={{ color: theme.palette.text.h1 }} />}
        aria-controls={id}
        id={id}
      >
        <Typography align="center" paddingRight={'10px'}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List
          sx={{ width: '100%' }}
          component="p"
          aria-labelledby="nested-list-subheader"
        >
          {dataTexts.map((text) => (
            <ListItem key={text}>• {text}</ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
}
