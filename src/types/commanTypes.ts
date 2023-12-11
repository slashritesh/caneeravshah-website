export type category = {
    title : string,
}

export type service = {
    _id : string,
    title : string,
    slug: {
        current : string
    },
    category : category,
    content : any,
    description : string
}