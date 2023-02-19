import { Chip, Container, Grid, Typography } from '@mui/material';
import * as C from './constants';

export const CompanySection = ({ company }: C.CompanySectionProps) => (
  <Container>
    <Typography variant="h6">{company.name}</Typography>
    <Typography color="text.secondary">{company.catchPhrase}</Typography>
    <Grid container direction="row" marginTop={0.5} spacing={0.5}>
      {company.bs.split(' ').map((item) => (
        <Grid key={item} item>
          <Chip size="small" label={item} />
        </Grid>
      ))}
    </Grid>
  </Container>
);
