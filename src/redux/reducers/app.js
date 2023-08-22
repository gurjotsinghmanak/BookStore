import { HANDLE_BOOK_DELETE, HANDLE_ADD_BOOK, HANDLE_EDIT_BOOK } from "redux/constants/app";

export const initialState = {
  books: [
    {
      id: 1,
      name: "To Kill A Mockingbird",
      price: 40,
      category: "Southern Gothic fiction",
      description:
        "Harper Lee's classic tale set in 1930s Alabama is perhaps the seminal text on racial tensions in the Deep South. The story follows the white lawyer Atticus Finch as he attempts to save the life of Tom Robinson, a Black man falsely accused of raping a white woman."
    },
    {
      id: 2,
      name: "The Great Gatsby",
      price: 20,
      category: "Tragedy",
      description:
        "Short but oh-so-sweet, F. Scott Fitzgerald's masterpiece has become synonymous with the Roaring Twenties and the death of the so-called American Dream."
    },
    {
      id: 3,
      name: "Wuthering Heights",
      price: 50,
      category: "Gothic novel",
      description:
        "No reading list would be complete without Emily Brontë's gothic romance, Wuthering Heights. Written in 1847 as a reaction to the popular romantic fiction of Jane Austen, it is an altogether darker and more complicated tale, set within a frame narrative and spanning two generations."
    },
    {
      id: 4,
      name: "The Handmaid's Tale",
      price: 45,
      category: "Dystopian novel Speculative fiction Tragedy",
      description:
        "Set in a dystopian future, The Handmaid's Tale – now a major TV series – imagines a world in which an environmental catastrophe has led to the majority of the female population becoming infertile."
    },
    {
      id: 5,
      name: "Things Fall Apart",
      price: 35,
      category: "Tragedy",
      description:
        "Okonkwo is the greatest wrestler and warrior alive, and is famous throughout West Africa – but when he accidentally kills a clansman, his life begins to unravel."
    },
    {
      id: 6,
      name: "1984",
      price: 60,
      category: "Dystopian literature genre",
      description:
        "Perhaps the most brilliant ever dystopian depiction of a totalitarian society, 1984 is as much a historical and cultural polemic as it is an absorbing thriller."
    },
    {
      id: 7,
      name: "Beloved",
      price: 55,
      category: "American Novel",
      description:
        "Part ghost story, part profound reflection on the evils of slavery, this Pulitzer-winning novel is American writer Morrison's crowning achievement."
    }
  ]
};

const appReducer = (state = initialState, action = {}) => {
  const { type, index, book } = action;
  switch (type) {
    case HANDLE_BOOK_DELETE: {
      return {
        ...state,
        books: [...state.books.slice(0, index), ...state.books.slice(index + 1)]
      };
    }
    case HANDLE_ADD_BOOK: {
      return {
        ...state,
        books: [...state.books, book]
      };
    }
    case HANDLE_EDIT_BOOK: {
      return {
        ...state,
        books: [...state.books.slice(0, index), book, ...state.books.slice(index + 1)]
      };
    }
    default:
      return state;
  }
};

export default appReducer;
