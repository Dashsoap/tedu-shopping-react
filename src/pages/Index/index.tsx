import * as React from 'react';

export interface IndexProps {
}

export interface IndexState {
}

export default class Index extends React.Component<IndexProps, IndexState> {
  constructor(props: IndexProps) {
    
    super(props);

    this.state = {
    }
    
  }

  public render() {
    return (
      <div>
        index
      </div>
    );
  }
}
