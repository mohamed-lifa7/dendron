type SearchStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  toggle: () => void;
};
type CoverImageStore = {
  url?: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onReplace: (url: string) => void;
};
type SettingsStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};
export type { SearchStore, CoverImageStore, SettingsStore };
