export interface HeaderProps {
  setOpen: () => void;
  title?: string;
}

export interface PopUpProps {
  children: React.ReactNode;
  open: boolean;
}

export interface DeleteProps {
  openDelete: boolean;
  setOpenDelete: () => void;
  id: string;
}

export interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export interface BookValues {
  _id: string;
  title: string;
  author: string;
  imgUrl: string;
  synopsis: string;
  publisher: string;
  language: string;
  numberOfPages: string;
  publicationDate: string;
  isFavorite: boolean;
  slug?: string;
}

export interface AddBookValues {
  title: string;
  author: string;
  imgUrl: string;
  synopsis: string;
  publisher: string;
  language: string;
  numberOfPages: number;
  publicationDate: string;
  isFavorite: boolean;
}

export interface HomeProps {
  books: BookValues[];
}

export interface BookAsProps {
  book: BookValues;
}

export interface AddBookProps {
  open: boolean;
  setOpen: () => void;
  isNew: boolean;
  book?: BookValues;
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
