/// <reference types="vite-plugin-svgr/client" />

import React from 'react';

import { ReactComponent as AddIcon } from '../../assets/icons/add.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import { ReactComponent as CopyIcon } from '../../assets/icons/copy.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg';
import { ReactComponent as MailIcon } from '../../assets/icons/mail.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as PlayIcon } from '../../assets/icons/play.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

interface IconProps {
  name: string;
  size?: number;
}

const iconMap: any = {
  add: AddIcon,
  close: CloseIcon,
  copy: CopyIcon,
  delete: DeleteIcon,
  edit: EditIcon,
  mail: MailIcon,
  menu: MenuIcon,
  play: PlayIcon,
  search: SearchIcon,
};

const Icon: React.FC<IconProps> = ({ name, size = 24 }) => {
  const IconComponent: any = iconMap[name];

  return <IconComponent width={size} height={size} />;
};

export default Icon;
