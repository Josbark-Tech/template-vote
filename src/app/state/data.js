import { create } from "zustand";

const appStore = create((set) => ({
  loadingCandidat: false,
  candidat: [],

  showModalFormElection: false,
  loadingElecteur: false,
  electeur: [],
  //   eslint-disable-next-line no-label-var, no-labels
  setShowModalFormElection: (payload) => set(() => ({ showModalFormElection: payload.show })),
  setLoadingCandidat: (payload) => set(() => ({ loadingCandidat: payload.isLoading })),
  setCandidat: (payload) => set(() => ({ candidat: payload.data })),

  setElecteur: (payload) => set(() => ({ electeur: payload.data })),
  setLoadingElecteur: (payload) => set(() => ({ candidat: payload.isLoading })),
}));

export default appStore;
