export default function Repo(state, action) {
    switch(action.type) {
        case "SEARCH_REPOS":
        const results = action.payload;
        return { results }
        default:
            return state
    }
}

