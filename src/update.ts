import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
    // const singleUpdate = await prisma.post.update({
    //     where: {
    //         id:6
    //     }, data: {
    //         title: "Title #####",
    //         content: "this is a mara content",
    //         authorName:"Fahim"
    //     }
    // })
    // console.log(singleUpdate);


    // Upsert Data
    const upsertData = await prisma.post.upsert({
        where: {
        id:1
        },update:{
        title:"y"
        },
        create: {
            title: "21323",
            content:"3434"
    }
})

console.log(upsertData);
}
updates()