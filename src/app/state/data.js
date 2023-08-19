import { create } from "zustand";

const appStore = create((set) => ({
  electeurPotentielNom: "",
  electeurPotentielPhone: "",
  electeurNombreVote: 0,
  CandidatElu: {},
  loadingCandidat: false,
  candidat: [],

  showModalFormElection: false,
  loadingElecteur: false,
  electeur: [],
  //   eslint-disable-next-line no-label-var, no-labels
  setElecteurNombreDeVote: (payload) => set(() => ({ electeurNombreVote: payload.nbr })),
  setElecteurPotentielNom: (payload) => set(() => ({ electeurPotentielNom: payload.nom })),
  setElecteurPotentielPhone: (payload) => set(() => ({ electeurPotentielPhone: payload.phone })),
  setIdCandidateElu: (payload) => set(() => ({ CandidatElu: payload.item })),
  setShowModalFormElection: (payload) => set(() => ({ showModalFormElection: payload.show })),
  setLoadingCandidat: (payload) => set(() => ({ loadingCandidat: payload.isLoading })),
  setCandidat: (payload) => set(() => ({ candidat: payload.data })),

  setElecteur: (payload) => set(() => ({ electeur: payload.data })),
  setLoadingElecteur: (payload) => set(() => ({ candidat: payload.isLoading })),
}));

export default appStore;
