import React from 'react';

interface Props {
  data: Array<any>;
  renderItem: (item: any) => React.ReactNode;
}

const Index = (props: Props) => (
  <ul className="list">{props.data.map(props.renderItem)}</ul>
);

export default Index;