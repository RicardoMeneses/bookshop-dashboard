export interface HeaderProps {
  setOpen: () => void;
}

export interface PopUpProps {
  children: React.ReactNode;
  open: boolean;
}

export interface DeleteProps {
  openDelete: boolean;
  setOpenDelete: () => void;
}

export interface DashboardLayoutProps {
  children: React.ReactNode;
}

export interface BookValues {
  title: string;
  author: string;
  imgUrl: string;
  synopsis: string;
  publisher: string;
  language: string;
  numberOfPages: string;
  publicationDate: string;
  isFavourite: boolean;
}

export interface AddBookProps {
  open: boolean;
  setOpen: () => void;
}

export interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

export interface SelectProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  placeholder: string;
}
