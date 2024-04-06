import { createSlice } from '@reduxjs/toolkit';

import {
  addTransaction,
  fetchAllTransactions,
  updateTransactionThunk,
  deleteTransactionThunk,
  getTransactionCategoriesThunk,
  getTransactionSummaryThunk,
} from './operations';

const initialState = {
  categories: [],
  items: [],

  isLoading: false,
  error: null,

  filter: {
    mounth: '',
    date: '',
  },
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: builder => {
    builder

      // * Add transaction
      .addCase(addTransaction.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })

      // * Get all transactions
      .addCase(fetchAllTransactions.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAllTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      });

    // todo: de continuat de aici in jos

    // PENDING:
    // .addCase(addTransactionThunk.pending, (state, action) => {
    //   state.loading = true;
    //   state.error = null;
    // })
    // .addCase(getAllTransactionsThunk.pending, (state, action) => {
    //   state.loading = true;
    //   state.error = null;
    // })
    // .addCase(updateTransactionThunk.pending, (state, action) => {
    //   state.loading = true;
    //   state.error = null;
    // })
    // .addCase(deleteTransactionThunk.pending, (state, action) => {
    //   state.loading = true;
    //   state.error = null;
    // })
    // .addCase(getTransactionCategoriesThunk.pending, (state, action) => {
    //   state.loading = true;
    //   state.error = null;
    // })
    // .addCase(getTransactionSummaryThunk.pending, (state, action) => {
    //   state.loading = true;
    //   state.error = null;
    // })

    // FULFILLED:
    // .addCase(addTransactionThunk.fulfilled, (state, action) => {
    //   state.transactions.push(action.payload);
    //   state.loading = false;
    // })
    // .addCase(getAllTransactionsThunk.fulfilled, (state, action) => {
    //   state.transactions = action.payload;
    //   state.loading = false;
    // })
    // .addCase(updateTransactionThunk.fulfilled, (state, action) => {
    //   const index = state.transactions.findIndex(
    //     t => t.id === action.payload.id
    //   );
    //   if (index !== -1) {
    //     state.transactions[index] = action.payload;
    //   }
    //   state.loading = false;
    // })
    // .addCase(deleteTransactionThunk.fulfilled, (state, action) => {
    //   state.transactions = state.transactions.filter(
    //     t => t.id !== action.payload
    //   );
    //   state.loading = false;
    // })
    // .addCase(getTransactionCategoriesThunk.fulfilled, (state, action) => {
    //   state.categories = action.payload;
    //   state.loading = false;
    // })
    // .addCase(getTransactionSummaryThunk.fulfilled, (state, action) => {
    //   // Handle fulfillment of transaction summary thunk
    //   // Modify state accordingly
    //   state.loading = false;
    // })

    // REJECTED:
    // .addCase(addTransactionThunk.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // })
    // .addCase(getAllTransactionsThunk.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // })
    // .addCase(updateTransactionThunk.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // })
    // .addCase(deleteTransactionThunk.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // })
    // .addCase(getTransactionCategoriesThunk.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // })
    // .addCase(getTransactionSummaryThunk.rejected, (state, action) => {
    //   // Handle rejection of transaction summary thunk
    //   // Modify state accordingly
    //   state.loading = false;
    //   state.error = action.payload;
    // });
  },
});

export const transactionsReducer = transactionsSlice.reducer;