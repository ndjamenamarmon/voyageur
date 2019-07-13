import axios from "axios";

export const addBudgetCategory = budgetCategory => ({
  type: "ADD_BUDGET_CATEGORY",
  budgetCategory
});

export const startAddBudgetCategory = budgetCategory => {
  return async dispatch => {
    const res = await axios.post("/api/budgetCategories", budgetCategory);
    dispatch(addBudgetCategory(res.data));
  };
};

export const removeBudgetCategory = ({ id } = {}) => ({
  type: "REMOVE_BUDGET_CATEGORY",
  id
});

export const startRemoveBudgetCategory = ({ id } = {}) => {
  return async dispatch => {
    await axios.delete(`/api/budgetCategories/${id}`);
    dispatch(removeBudgetCategory(id));
  };
};

export const editBudgetCategory = (id, updates) => ({
  type: "EDIT_BUDGET_CATEGORY",
  id,
  updates
});

export const startEditBudgetCategory = (id, updates) => {
  return async dispatch => {
    await axios.put(`/api/budgetCategories/${id}`, updates);
    dispatch(editBudgetCategory(id, updates));
  };
};

export const setBudgetCategories = budgetCategories => ({
  type: "SET_BUDGET_CATEGORIES",
  budgetCategories
});

export const startSetBudgetCategories = () => {
  return async dispatch => {
    const res = await axios.get("/api/budgetCategories");
    dispatch(setBudgetCategories(res.data));
  };
};
