import React from 'react';

export type ListItemType = {
  children?: React.ReactNode;
};

const ListItem = (props: ListItemType) => (
  <li className="list-item">{props.children}</li>
);

export default ListItem;