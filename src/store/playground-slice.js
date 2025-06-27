import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    correctWord: null,
    rowLetters: Array(6)
        .fill(null)
        .map(() => Array(5).fill("")),

    keyboardLetters: {
        green: [],
        yellow: [],
        black: [],
    },
    rows: Array(6)
        .fill(null)
        .map(() => Array(5).fill("")),
    currentRowIndex: 0,
    lineAmount: 0,
};

const playgroundSlice = createSlice({
    name: "playground",
    initialState,
    reducers: {
        addLetterHandler(state, action) {
            const letter = action.payload;
            const currentRow = state.rows[state.currentRowIndex];
            if (
                !Array.isArray(currentRow) ||
                state.keyboardLetters.green.length === 5
            )
                return;

            const emptyIndex = currentRow.findIndex((cell) => cell === "");

            if (emptyIndex !== -1) {
                currentRow[emptyIndex] = letter;
            }
        },

        confirmWordHandler(state, action) {
            const currentRow = state.rows[state.currentRowIndex];

            if (
                !currentRow ||
                state.lineAmount >= state.rows.length ||
                currentRow.includes("")
            ) {
                return;
            }

            const correctWord = state.correctWord.split("");
            const letterColors = Array(5).fill("black");
            const letterUsed = Array(5).fill(false);

            for (let i = 0; i < 5; i++) {
                if (currentRow[i] === correctWord[i]) {
                    letterColors[i] = "green";
                    letterUsed[i] = true;
                    if (!state.keyboardLetters.green.includes(currentRow[i])) {
                        state.keyboardLetters.green.push(currentRow[i]);
                    }
                }
            }
            for (let i = 0; i < 5; i++) {
                if (letterColors[i] === "black") {
                    const letter = currentRow[i];
                    const index = correctWord.findIndex(
                        (l, idx) => l === letter && !letterUsed[idx]
                    );

                    if (index !== -1) {
                        letterColors[i] = "yellow";
                        letterUsed[index] = true;
                        if (
                            !state.keyboardLetters.green.includes(letter) &&
                            !state.keyboardLetters.yellow.includes(letter)
                        ) {
                            state.keyboardLetters.yellow.push(letter);
                        }
                    } else {
                        if (
                            !state.keyboardLetters.green.includes(letter) &&
                            !state.keyboardLetters.yellow.includes(letter) &&
                            !state.keyboardLetters.black.includes(letter)
                        ) {
                            state.keyboardLetters.black.push(letter);
                        }
                    }
                }
            }
            state.rowLetters[state.currentRowIndex] = letterColors;
            state.lineAmount++;
            state.currentRowIndex++;
        },

        removeLetterHandler(state) {
            const currentRow = state.rows[state.currentRowIndex];
            if (!Array.isArray(currentRow)) return;
            const emptyLettersAmount = currentRow.filter(
                (el) => el === ""
            ).length;
            currentRow[currentRow.length - emptyLettersAmount - 1] = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCorrectWord.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCorrectWord.fulfilled, (state, action) => {
                state.correctWord = action.payload;
                state.loading = false;
            })
            .addCase(fetchCorrectWord.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Помилка отримання слова";
            });
    },
});

export const fetchCorrectWord = createAsyncThunk(
    "playground/fetchCorrectWord",
    async (_, thunkAPI) => {
        try {
            const response = await fetch(
                "https://wordle-api-kappa.vercel.app/answer"
            );
            const data = await response.json();
            return Object.values(data)[0];
        } catch (err) {
            return thunkAPI.rejectWithValue("Помилка отримання слова");
        }
    }
);

export const playgroundActions = playgroundSlice.actions;
export default playgroundSlice.reducer;
