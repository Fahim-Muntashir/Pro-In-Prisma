import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async() => {
//     const result = await prisma.post.create({
//         data: {
//             title:"tit2ke",
//             content: "content",
//             authorName: "asdf",
//         }
// })

//     console.log(result);
    
    const getAllFromDB = await prisma.post.findMany();
    console.log(getAllFromDB);
    
}
main();