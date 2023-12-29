import {memo} from 'react';
import {ListItem} from '@mui/material';
import {ChartProps} from 'src/components/Chart/types';
import * as Styled from 'src/components/Chart/styles';
import ChartItem from 'src/components/ChartItem';

function Chart({musics}: ChartProps): JSX.Element {
  return (
    <Styled.Card>
      <Styled.CardMedia image={musics[0].thumbnail} title="Music" />

      <Styled.CardContent>
        <Styled.List>
          {musics.map((item, index) => (
            <ListItem key={item.id}>
              <ChartItem item={item} index={index} />
            </ListItem>
          ))}
        </Styled.List>
      </Styled.CardContent>
    </Styled.Card>
  );
}

export default memo(Chart);
