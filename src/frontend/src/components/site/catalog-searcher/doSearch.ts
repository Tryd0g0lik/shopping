import { Position } from '@type';

const searching = (data: string, positionsList: Position[]) => {
  const dataSplitup = data.split(' ');
  let newPositionsList: Position[] = [];

  positionsList.forEach((item) => {
    for (let i = 0; i < dataSplitup.length; i++) {
      if ((dataSplitup[i].length > 3) && (((item.title as string).toLowerCase()).includes((dataSplitup[i]).toLowerCase()))) {
        newPositionsList.push(item);
      }
    }
  });

  return newPositionsList;
};
export default searching
