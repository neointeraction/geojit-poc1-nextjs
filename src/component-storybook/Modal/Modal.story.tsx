import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import Modal from './Modal';
import Button from '../Button/Button';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls the visibility of the modal (open or closed).',
    },
    onClose: {
      action: 'closed',
      description: 'Function called when the modal is closed.',
    },
  },
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={openModal} ButtonText="Open Modal" type="secondary" />
      <Modal {...args} isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Content</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non dui
          justo. Donec efficitur tellus erat, ut imperdiet mauris accumsan sed.
          Donec vulputate libero eu tempor blandit.{' '}
        </p>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  onClose: () => {},
};
