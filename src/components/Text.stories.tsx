import { Text, TextProps } from "./Text";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      controls: {
        type: 'inline-radio'
      }
    }
  }

} as Meta<TextProps>

export const Default: StoryObj= {}
export const Small: StoryObj= {
  args: {
    size: 'sm'
  }
}
export const Large: StoryObj= {
  args: {
    size: 'lg'
  }
}
export const CustomComponent: StoryObj= {
  args: {
    asChild: true,
    children: <p>Testing</p>
  },

  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
}
