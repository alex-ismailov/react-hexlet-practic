// BEGIN (write your solution here)
export const updateText = (text) => ({
  type: 'UPDATE',
  payload: {
    text,
  },
});

export const resetText = () => ({
  type: 'RESET',
  payload: {
    text: '',
  },
});
// END
