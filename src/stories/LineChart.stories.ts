import type { Meta, StoryObj } from '@storybook/react';

import LineChart from '../recharts/LineChart';

const meta = {
  title: 'Chart/LineChart',
  component: LineChart,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LineChart1: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};
