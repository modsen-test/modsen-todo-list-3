import {api} from "@/store/api/api.ts";

const githubRtk = api.injectEndpoints({
    endpoints: (build) => ({
        getUser: build.query({
            query: (name: string) => ({
                url: `https://api.github.com/users/${name}`,
                method: 'OPTIONS',
            }),
        }),
    }),
})

export const {useLazyGetUserQuery} = githubRtk;