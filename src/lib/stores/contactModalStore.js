import { writable } from 'svelte/store';

const createContactModalStore = () => {
  const { subscribe, set } = writable({
    isOpen: false
  });

  return {
    subscribe,
    openModal: () => set({ isOpen: true }),
    closeModal: () => set({ isOpen: false })
  };
};

export const contactModalStore = createContactModalStore();