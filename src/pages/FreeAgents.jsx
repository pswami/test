import React from 'react';
import BaseLayout from '../components/BaseLayout';
import ToolbarLayout from '../components/Toolbar';

const { Toolbar, Header } = ToolbarLayout;

const FreeAgents = () => {
  return (
    <div>
      <Toolbar>
        <Header>FREE AGENTS</Header>
      </Toolbar>
      <BaseLayout>
      </BaseLayout>
    </div>
  );
};

export default FreeAgents;