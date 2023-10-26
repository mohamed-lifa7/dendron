import type { Id } from "@/convex/_generated/dataModel";
import type { LucideIcon } from "lucide-react";

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

interface ItemProps {
  id?: Id<"documents">;
  documentIcon?: string;
  active?: boolean;
  expanded?: boolean;
  isSearch?: boolean;
  level?: number;
  onExpand?: () => void;
  label: string;
  onClick?: () => void;
  icon: LucideIcon;
}
export type { SearchStore, CoverImageStore, SettingsStore, ItemProps };
