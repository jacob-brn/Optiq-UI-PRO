import { create } from "zustand";

interface DialogState {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  templateId: string;
  setTemplateId: (templateId: string) => void;
}

export const useDialogStore = create<DialogState>((set) => ({
  isOpen: false,
  setOpen: (isOpen) => set({ isOpen }),
  templateId: "",
  setTemplateId: (templateId) => set({ templateId }),
}));
