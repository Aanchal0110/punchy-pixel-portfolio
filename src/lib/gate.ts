// Tracks whether the visitor has already cleared the boxing intro during this
// visit, so client-side navigation back to "/" doesn't replay it.
export const gate = { passed: false };
