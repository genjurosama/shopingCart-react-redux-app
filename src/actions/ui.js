export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

export const showModal = function() {
  return {
    type: SHOW_MODAL
  };
};

export const hideModal = function() {
  return {
    type: HIDE_MODAL
  };
};
