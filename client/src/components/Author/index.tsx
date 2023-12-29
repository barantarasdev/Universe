import {memo} from 'react';
import {Card, CardContent} from '@mui/material';
import {AuthorProps} from 'src/components/Author/types';
import * as Styled from 'src/components/Author/styles';

function Author({card: {image, name}}: AuthorProps): JSX.Element {
  return (
    <Card>
      <Styled.CardMedia image={image} title={name} />

      <CardContent>
        <Styled.Name>{name}</Styled.Name>
      </CardContent>
    </Card>
  );
}

export default memo(Author);
