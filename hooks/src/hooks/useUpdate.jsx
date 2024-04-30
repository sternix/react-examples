import { useReducer } from "react";

// https://github.com/Chalarangelo/30-seconds-of-code/blob/master/content/snippets/react/s/use-update.md

// istediğimiz zaman render edilmesini, güncellenmesini sağlıyor

export default function useUpdate() {
    const [, update] = useReducer(() => ({}))
    return update
}