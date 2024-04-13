import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    

    // Create Data into db single
//     const result = await prisma.post.create({
//         data: {
//             title:"tit2ke",
//             content: "content",
//             authorName: "asdf",
//         }
// })

//     console.log(result);
    
    // create many
    const createMany = await prisma.post.createMany({
        data: [
            {
                title:"The title nmpw",
                content: "aaaaa",
                authorName: "asdasdfasdff",
            },
            {
                title:"The title nmpw3",
                content: "aaaaad3",
                authorName: "asdasdfasdff4",
            },
            {
                title:"The title nmpw4",
                content: "aaaaad",
                authorName: "asdasdfasdff5d",
            },
            {
                title:"The title nmpw6",
                content: "aaaaa5",
                authorName: "asdasdfasdff",
            },
        ]
    })
    console.log(createMany);
    
}
main();