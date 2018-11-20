import * as React from 'react';

export interface FooterProps {
}

export interface FooterState {
}

export default class Footer extends React.Component<FooterProps, FooterState> {
  constructor(props: FooterProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div>
        footer
      </div>
    );
  }
}
